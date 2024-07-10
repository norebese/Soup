import * as CompanyData from '../data/Company.js';

import * as UserData from '../data/User.js';
import {checkDuplicateCompanyNum} from "../data/Company.js";

// =================================
// ========== 관리자 회원가입 ==========
// =================================

// 사업자 등록 여부 체크
export const CheckCompanyNum = async (req, res)=>{
  console.log('사업자 등록 여부 체크 시작')
  try{
    // 사업자등록번호 진위여부 확인
    const companyNum = req.query.num;
    const checkCompanyNum = await CompanyData.getByCompanyNum(companyNum);

    if(!checkCompanyNum) res.status(404).json({message:"data 없음 api 오류"})
    res.status(200).json({message:"사업자 등록 여부 결과",data:checkCompanyNum})

    // 사업자등록번호 중복 확인
    const checkDuplicate = await checkDuplicateCompanyNum(companyNum);

    if(!checkDuplicate) res.status(500).json({message:"이미 가입한 기업"})
    res.status(200).json({message:"신규 등록 가능"})
  }catch(err){
    console.log(`Error: ${err}`)
    res.status(500).json({ message: 'Internal server error' });
  }
}

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
      };
      const ComResult = await CompanyData.createCompany(Company)
      if (!ComResult.success) {
        return res.status(502).json({error: "Failed to register the company"});
      }
      // console.log(ComResult.data.C_Code)
      // 관리자 등록
      const Manager = {
        C_Code:ComResult.data.C_Code,
        Name:ManagerName,
        Email:ManagerEmail,
        userId,
        userPw
      };

      const ManagerResult = await UserData.createManager(Manager)

      if (!ManagerResult) {
        return res.status(500).json({ error: "Failed to register the admin" });
      }

      const manager = {
        M_Id:userId,
        M_Name:ManagerName
      }

      // 기업의 관리지 리스트에 생성한 관리자 추가
      const addManager = await CompanyData.addManager(ComResult.data.C_Code, manager)

      if(!addManager) res.status(500).json({ error:"관리자 등록 실패"})
      // 성공 시 201 상태 코드 반환
      res.status(201).json({ message: "Admin registered successfully" });
    } catch (err) {
      console.log(`회원가입 오류 ${err}`);
      res.status(500).json({ error: "An error occurred during the registration process" });
    }
  } catch (err) {
    console.log(`값 누락 ${err}`);
    res.status(400).json({ error: "Invalid input" });
  }
};


// =================================
// ========== 유저 회원가입 ==========
// =================================

// 기업 검색
export const searchCompany = async (req, res)=>{
  const keyword = req.body;
  const data = await CompanyData.searchCompany(keyword)

  if(!data) res.stauts(404).json("해당 기업이 없습니다.")
  res.status(201).json({message:"기업 검색 성공", data})
}

// 유저 회원가입
export const addUser = async (req, res)=>{
  try{
    const User = req.body
    // 필수 입력값 검증
    if (!User.C_Code || !User.Team || !User.Position || !User.Name || !User.gender || !User.birth || !User.userId || !User.userPw) {
      return res.status(400).json({message:"필수 입력값 누락"});
    }
    try{
        // 유저 등록
        const newUser = await UserData.createUser(User)
        if(!newUser) res.status(500).json({message:"유저 회원가입 실패"})
        // 기업에 해당 유저 등록
        const addUser = await CompanyData.addUser(User.C_Code, manager)
        if(!addManager) res.status(500).json({ error:"관리자 등록 실패"})
        // 성공 시 201 상태 코드 반환
        res.status(201).json({ message: "Admin registered successfully" });
    }catch(err){
      console.log("유저 등록 에러:", err)
      res.status(500).json({ error: "An error occurred during the registration process" });
    }
  }catch(err){
    console.log(`값 누락 ${err}`);
    res.status(400).json({ error: "Invalid input" });
  }
}


// ================================= 
// ============  로그인  =============
// =================================

// 로그인
export const SiginIn = async (req, res)=>{
  const User = req.body
  
}

// ================================= 
// ========  아이디 중복 체크 =========
// =================================
export const CheckId = async (req, res)=>{
  const userId = req.query.userId;
  try{
    const result = await UserData.searchById(userId)
  
    if(!result) return res.status(409).json({message:"이미 존재하는 아이디"});
    res.status(200).json({message:"사용 가능한 아이디",data:userId})
  }catch(err){
    console.log(`아이디 중복 체크 에러 ${err}`)
    res.status(500).json({message:"아이디 중복 체크 에러", error:err})
  }

}