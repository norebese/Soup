import mongoose from "mongoose";

const AdminSchema = mongoose.Schema({
  ManagerName:String,
  managerEmail:String,
  CompanyId:String,
  userId:String,
  userPw:String
})

const UserSchema = mongoose.Schema({
  Code:String,
  Team:String,
  Position:String,
  Name:String,
  Birth:Date,
  userId:String,
  userPw:String
})

const Admin = mongoose.model('Admin', AdminSchema)
const User = mongoose.model('User', UserSchema)


export const getById = async (userId) => {
  try {
    // admin 컬렉션에서 userId 중복 여부 확인
    const adminResult = await Admin.findOne({ userId });
    if (adminResult) {
      console.log("아이디 중복: Admin")
      return { exists: true, collection: 'Admin' };
    }

    // user 컬렉션에서 userId 중복 여부 확인
    const userResult = await User.findOne({ userId });
    if (userResult) {
      console.log("아이디 중복: User")
      return { exists: true, collection: 'User' };
    }

    // 중복되지 않음
    return { exists: false };
  } catch (error) {
    console.error(`Error checking userId: ${error.message}`);
    throw new Error('Error checking userId');
  }
};