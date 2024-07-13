import * as bcrypt from 'bcrypt';
import { config } from "../config/config.js";
import jwt from 'jsonwebtoken';


import * as CompanyData from '../data/Company.js';
import * as UserData from '../data/User.js';

// =================================
// ========== 회원가입 전처리 ==========
// =================================

// 기가입 기업 확인
export const CheckCompany = async (req, res)=>{
  // 사업자등록번호 유효성 검사
  const C_EID = req.query.num;
  const Company = await CompanyData.CompanyAPI(C_EID);
  console.log(Company.message)
  // 등록되지 않았거나 삭제된 경우: "국세청에 등록되지 않은 사업자등록번호입니다"

  if(!Company.success) return res.status(404).json({message:"data 없음 api 오류"})
  
  // 사업자등록번호 중복 검사
  const isCompany = await CompanyData.checkCompanyNum(C_EID);
  console.log(isCompany.message)
  
  if(!isCompany.success) return res.status(500).json({message:"이미 가입한 기업"});
  
  res.status(200).json({message:"신규 등록 가능"})
}

// 기업이름으로 검색 
export const searchCompany = async (req, res)=>{
  const C_Name = req.query.name;
  const Company = await CompanyData.searchCompany(C_Name)
  console.log(Company.message)

  if(!Company.success) return res.stauts(404).json("해당 기업이 없습니다.");
  
  res.status(201).json({message:"기업 검색 성공", data:Company.data})
}

// 기업 부서 리스트 추가
export const addCompanyTeam = async (req, res)=>{
  const {code, team} = req.query;

  const newTeam = await CompanyData.addTeam({code, team})
  console.log(newTeam.message)

  if(!newTeam.success) return res.status(500).json({message:"부서 추가 오류"})
  res.status(201).json({message:"부서 추가 성공"})
}

// 아이디 중복 검사
export const CheckuserId = async (req, res)=>{
  const userId = req.query.userid;
  
  try{
    // 관리자 아이디 중복 검사
    const CheckManager = await UserData.searchByManagerId(userId)
    console.log(CheckManager.message)

    if(!CheckManager.success) return res.status(500).json({message:"이미 존재하는 아이디"});

    // 유저 아이디 중복 검사
    const CheckUser = await UserData.searchByUserId(userId)
    console.log(CheckUser.message)

    if(!CheckUser.success) return res.status(500).json({message:"이미 존재하는 아이디"})

    res.status(200).json({message:"사용가능한 아이디", data:userId})
  }catch(err){
    console.log("아이디 중복검사 컨트롤러 에러: ", err);
    res.status(502).json({message:"아이디 중복검사 실패"})
  }
}

// =================================
// ========== 관리자 회원가입 ==========
// =================================

// 관리자 회원가입
export const addAdmin = async (req, res) => {
  try {
    const { 
      C_Name,
      C_CEO,
      C_TEL,
      C_EID,
      ManagerName,
      ManagerEmail,
      userId,
      userPw
    } = req.body;

    // 필수 입력값 검증
    if (!C_Name || !C_CEO || !C_TEL || !C_EID || !ManagerName || !ManagerEmail || !userId || !userPw) {
      return res.status(400).json({message:"필수 입력값 누락"});
    }
    try {
      // 기업 등록
      const Company = {
        C_Name, 
        C_CEO, 
        C_TEL, 
        C_EID
      }

      const newCompany = await CompanyData.createCompany(Company)
      console.log(newCompany.message)

      if (!newCompany.success) return res.status(502).json({message:"기업 등록 실패"});

      // 관리자 등록
      const Manager = {
        C_Code:newCompany.data.C_Code,
        Name:ManagerName,
        Email:ManagerEmail,
        userId,
        userPw
      };

      const newManager = await UserData.createManager(Manager)
      console.log(newManager.message)

      if (!newManager.success) return res.status(500).json({ message: "관리자 등록 실패"});

      // 기업의 관리지 리스트에 생성한 관리자 추가
      const manager = {
        C_Code:newCompany.data.C_Code,
        M_Id:userId,
        M_Name:ManagerName
      }

      const addManager = await CompanyData.addManager(manager)
      console.log(addManager.message)

      if(!addManager) return res.status(500).json({ message:"관리자 등록 실패"});

      // HTML 폼을 포함한 페이지를 반환하여 자동으로 로그인 POST 요청을 보냅니다.
      res.status(201).json({message:"관리자 회원가입 성공"});
    } catch (err) {
      console.log(`관리자 회원가입 오류: `, err);
      res.status(500).json({ message:"관리자 회원가입 오류", error:err});
    }
  } catch (err) {
    console.log(`값 이상: `, err);
    res.status(400).json({ message:"값 이상", error:err });
  }
};

// =================================
// ========== 유저 회원가입 ==========
// =================================

// 유저 회원가입
export const addUser = async (req, res)=>{
  try{
    const {
      C_Code,
      Team,
      Position,
      Name,
      gender,
      Birth,
      userId,
      userPw
    } = req.body
    if (!C_Code || !Team || !Position || !Name || !gender || !Birth || !userId || !userPw) {
      return res.status(400).json({message:"필수 입력값 누락"});
    } 
    try{
      // 유저 등록
      const User = {
        C_Code,
        Team,
        Position,
        Name,
        gender,
        Birth,
        userId,
        userPw
      }
      const newUser = await UserData.createUser(User)
      console.log(newUser.message)

      if(!newUser.success) return res.status(500).json({ message: "유저 등록 실패"});

      // 기업의 유저 리스트에 생성한 유저 추가
      const user = {
        C_Code,
        U_Id:userId,
        U_Name:Name
      }

      const addUser = await CompanyData.addUser(user)
      console.log(addUser.message)

      if(!addUser) return res.status(500).json({ message:"관리자 등록 실패"});

      // HTML 폼을 포함한 페이지를 반환하여 자동으로 로그인 POST 요청을 보냅니다.
      res.status(201).json({message:"유저 회원가입 성공"})
    }catch(err){
      console.log(`유저 회원가입 오류: `, err);
      res.status(500).json({ message:"유저 회원가입 오류", error:err});
    }
  }catch (err) {
    console.log(`값 이상: `, err);
    res.status(400).json({ message:"값 이상", error:err });
  }
}

// ================================= 
// ============  로그인  =============
// =================================

const secretkey = config.jwt.secretkey;
const jwtExpiresInSec = config.jwt.expiresinSec;

function createJwtToken(user) {
  return jwt.sign({user}, secretkey, { expiresIn: jwtExpiresInSec }); // 초 단위로 만료 시간 설정
}

// 로그인
export const SiginIn = async (req, res)=>{
  try{
    const data = req.body

    if(!data.userId || !data.userPw){
      return res.status(400).json({message:"필수 입력값 누락"});
    }
    let result;
    try{
      const Manager = await UserData.getByManagerId(data.userId)
      console.log(Manager.message)
      if(!Manager.success){
        const User = await UserData.getByuserId(data.userId)
        console.log(User.message)
        
        if(!User.success) return res.status(401).json({message:"이메일, 패스워드를 확인하세요"});
        result = User
      }else{
        result = Manager
      }
      
      const isValid = await bcrypt.compare(data.userPw, result.data.userPw);

      if(!isValid){
        console.log("비밀번호 불일치", isValid)
        return res.status(401).json({message:"이메일, 패스워드를 확인하세요"})
      }

      const jwtToken = createJwtToken( result.data.userId );
      res.status(200).json({ message:"로그인 성공", token: jwtToken, name:result.data.Name, type:result.type});
    }catch(err){
      console.log("로그인 오류: ", err)
      res.status(500).json({ message:"로그인 오류", error:err})
    }
  }catch(err){
    console.log("값 이상: ", err)
    res.status(400).json({ message:"값 이상", error:err})
  }
}


