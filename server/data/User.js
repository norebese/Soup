import Manager from '../models/Manager.js';
import User from '../models/User.js';

// ================================= 
// ========  아이디 중복 체크  =========
// =================================

// 관리자 아이디 중복 체크
export const searchByManagerId = async (userId) => {
    try{
        const data = await Manager.findOne({ userId });
        if(data) return { success: false, message: "매니저 아이디 중복"}
        return { success: true, message: "매니저 아이디 사용 가능"}
    }catch(err){
        console.log("매니저 아이디 중복 체크 오류")
        return { success: false, message: "매니저 아이디 중복 체크 오류", error:err}
    }
}

// 유저 아이디 중복 체크
export const searchByUserId = async (userId) =>{
    try{
        const data = await User.findOne({ userId })
        if(data) return { success: false, message: "유저 아이디 중복"}
        return { success: true, message: "유저 아이디 사용 가능"}
    }catch(err){
        console.log("유저 아이디 중복 체크 오류")
        return { success: false, message: "유저 아이디 중복 체크 오류", error:err}
    }
}

// 관리자 등록
export const createManager = async (ManagerData) => {
    try{
        const newManager = new Manager(ManagerData);
        const result = await newManager.save();
        return { success: true, message:"관리자 등록 성공",data: result };
    }catch(err){
        console.log("관리자 등록 에러:", err);
        return { success: false, message: "관리자 등록 에러", error: err.message };
    }
}

// 유저 등록
export const createUser = async (UserData) => {
    try{
        const newUser = new User(UserData);
        const result = await newUser.save();
        return { success: true, message:"유저 등록 성공",data: result};
    }catch(err){
        console.log("유저 등록 에러", err);
        return { success: false, message:"유저 등록 에러",error: err.message}
    }
}

// 로그인

// 아이디 기반 찾기
export const getByuserId = async (userId) => {
    try{
        const Manager = await Manager.findOne({ userId })
        if(!Manager){
            const User = await User.findOne({ userId })

            if(!User) return {success:false, message:"해당 아이디 없음"};
            
            return { success:true, message:"해당 아이디 있음(유저)", data:User}
        }
        return { success:true, message:"해당 아이디 있음", data:Manager}
    }catch(err){
        console.log('유저 아이디 찾기 에러:', err);
        return { success:false, message:"유저 아이디 찾기 에러", error: err.message}
    }
}