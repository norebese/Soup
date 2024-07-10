import Manager from '../models/Manager.js';
import User from '../models/User.js';

// 아이디 중복 체크
export const searchById = async (userId) => {
    try{
        const manager = await Manager.findOne({ userId });
        if(manager) return false;
        const user = await User.findOne({ userId })
        if(user) return false;

        return true;
    }catch(err){
        console.log("아이디 중복 체크 오류")
        return false;
    }
}


// 관리자 등록
export const createManager = async (ManagerData) => {
    try{
        const newManager = new Manager(ManagerData);
        const result = await newManager.save();
        return { success: true, data: result };
    }
    catch(err){
        console.error("Error creating manager:", err);
        return { success: false, error: err.message };
    }
}

// 유저 등록
export const createUser = async (UserData) => {
    try{
        const newUser = new User(UserData);
        const result = await newUser.save();
        return { success: true, data: result};
    }catch(err){
        console.log("유저 등록 에러", err);
        return { success: false, error: err.message}
    }
}