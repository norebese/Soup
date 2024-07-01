import * as CompanyData from '../data/Company.js'
// import * as UserData from '../data/User'


// search CompanyName
// export const SearchCompanyName = async (req, res)=>{
//   try{
//     const companyName = req.body.companyName;
//     const data = await CompanyData.getByCompanyName(companyName);

//     if(!data) return res.status(404)

//     res.status(200).json(data)
//   }catch(err){
//     console.log(`Error: ${err}`)
//     res.status(500).json({ message: 'Internal server error' });
//   }
// };

// search CompanyId
// export const SearchCompanyId = async (req, res)=>{
//   try{
//     const companyId = req.body.companyId;
//     const data = await CompanyData.gethByCompanyId(companyId);

//     if(!data) res.status(404)

//     res.status(200).json(data)
//   }catch(err){
//     console.log(`Error: ${err}`)
//     res.status(500).json({ message: 'Internal server error' });
//   }
// }

// check CompanyNum
export const CheckCompanyNum = async (req, res)=>{
  try{
    const companyNum = req.body.companyNum;
    const data = await CompanyData.getByCompanyNum(companyNum);

    if(!data) res.status(404)
    console.log('compnayNum')
    res.status(200).json(data)
  }catch(err){
    console.log(`Error: ${err}`)
    res.status(500).json({ message: 'Internal server error' });
  }
}

// check UserId
// export const CheckUserId = async (req, res)=>{
//   try{
//     const userId = req.body.userId;
//     const data = await UserData.getByUserId(userId)

//     if(!data) res.status(404)

//     res.status(200).json(data)
//   }catch(err){
//     console.log(`Error: ${err}`)
//     res.status(500).json({ message: 'Internal server error' });
//   }
// }

// SignUp
// const SignUp = (req, res)=>{
//   try{

//   }catch(err){

//   }
// }

// SignIn
// const SignIn = (req, res)=>{
//   try{

//   }catch(err){
    
//   }
// }

// SignOut
// const SignOut = (req, res)=>{
//   try{

//   }catch(err){
    
//   }
// }

// MyPage
// const MyPage = (req, res)=>{
//   try{

//   }catch(err){
    
//   }
// }

