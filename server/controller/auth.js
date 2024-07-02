import * as CompanyData from '../data/Company.js';
import * as AdminData from '../data/Admin.js';
import * as UserData from '../data/User.js';

// =================================
// ========== 관리자 회원가입 ==========
// =================================

// 사업자 등록 여부 체크
export const CheckCompanyNum = async (req, res)=>{
  console.log('사업자 등록 여부 체크 시작')
  try{
    const companyNum = req.query.num;
    const data = await CompanyData.getByCompanyNum(companyNum);

    if(!data) res.status(404)
    res.status(200).json(data)
  }catch(err){
    console.log(`Error: ${err}`)
    res.status(500).json({ message: 'Internal server error' });
  }
}

// 아이디(이메일) 중복체크 
export const CheckAdminId = async (req, res)=>{
  const AdminId = req.query.userId
  
  const data = await AdminData.getById(AdminId)
}

// 관리자 회원가입
export const addAdmin = async (req, res)=>{
  const Admin = req.body
  
  const data = await AdminData.Create(Admin)
}

// =================================
// ========== 유저  회원가입 ==========
// =================================

// 기업 코드 확인
export const CheckCompanyId = async (req, res)=>{
  const CompnayId = req.query.CompnayId
}

// 아이디(이메일) 중복체크
export const CheckUserId = async (req, res)=>{
  const UserId = req.query.userId

  const data = await UserData.getById(UserId)

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
