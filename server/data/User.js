import Manager from '../models/Manager.js';
import User from '../models/User.js';


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

