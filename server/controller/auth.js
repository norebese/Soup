import * as CompanyData from '../data/Company.js';
import * as UserData from '../data/User.js';

// =================================
// ========== 관리자 회원가입 ==========
// =================================

// 사업자 등록 여부 체크
export const CheckCompanyNum = async (req, res)=>{
  console.log('사업자 등록 여부 체크 시작')
  try{
    // 사업자등록번호 진위여부 확인
    const companyNum = req.query.num;
    const data = await CompanyData.getByCompanyNum(companyNum);

    if(!data) res.status(404).json({message:"data 없음 api 오류"})
    res.status(200).json({message:"사업자 등록 여부 결과",data:data})

    // 사업자등록번호 중복 확인
    const isRe
  }catch(err){
    console.log(`Error: ${err}`)
    res.status(500).json({ message: 'Internal server error' });
  }
}

// 관리자 회원가입
export const addAdmin = async (req, res) => {
  try {
    const { 
      CompanyName, 
      CEO, 
      TEL,
      EID, 
      ManagerName,
      ManagerEmail,
      userId,
      userPw
    } = req.body;

    // 필수 입력값 검증
    if (!CompanyName || !CEO || !TEL || !EID || !ManagerName || !ManagerEmail || !userId || !userPw) {
      return res.status(400).json({message:"필수 입력값 누락"});
    }

    const Code = EID.slice(-5);

    const Company = {
      Code,
      CompanyName,
      CEO,
      TEL,
      EID, 
      ManagerEmail
    };

    const Admin = {
      Code,
      ManagerName,
      ManagerEmail,
      userId,
      userPw
    };

    try {
      // 기업 등록
      const ComResult = await CompanyData.addCompany(Company);
      if (!ComResult) {
        return res.status(502).json({ error: "Failed to register the company" });
      }

      // 관리자 등록
      // const adminResult = await AdminData.Create(Admin);
      if (!adminResult) {
        return res.status(500).json({ error: "Failed to register the admin" });
      }

      // 성공 시 201 상태 코드 반환
      res.status(201).json({ message: "Admin registered successfully" });
    } catch (err) {
      console.log(`회원 가입 오류 ${err}`);
      res.status(500).json({ error: "An error occurred during the registration process" });
    }
  } catch (err) {
    console.log(`값 누락 ${err}`);
    res.status(400).json({ error: "Invalid input" });
  }
};


// =================================
// ========== 유저  회원가입 ==========
// =================================

// 기업 코드 확인
export const CheckCompanyId = async (req, res)=>{
  const CompnayId = req.query.CompnayId
}

// 유저 회원가입
export const addUser = async (req, res)=>{
  const User = req.body

  const data = await UserData.Create(User)
}


// ================================= 
// ============  로그인  =============
// =================================

// 로그인
export const SiginIn = async (req, res)=>{
  const User = req.body
  
}


// ================================= 
// ========  아이디 중복 체크  =========
// =================================
export const CheckId = async (req, res)=>{
  const userId = req.query.userId;
  try{
    const result = await UserData.getById(userId)
  
    if(result.exists) return res.status(409).json({message:"이미 존재하는 아이디"});
    res.status(200).json({message:"사용 가능한 아이디",data:userId})
  }catch(err){
    console.log(`아이디 중복 체크 에러 ${err}`)
    res.status(500).json({message:"아이디 중복 체크 에러", error:err})
  }

}