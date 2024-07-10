import axios from 'axios';

import { config } from '../config/config.js';
import Company from '../models/Company.js';

// 사업자등록 상태 조회
export const getByCompanyNum = async (num) => {
    const base_url = 'http://api.odcloud.kr/api/nts-businessman/v1/';
    const SERVICE = "status";
    const TYPE = "?returnType=JSON";
    const APIKEY = "&serviceKey=" + config.openapi.key;

    try {
        const response = await axios.post(`${base_url}${SERVICE}${TYPE}${APIKEY}`, {
            b_no: [num]
        });
        const data = {
            message: response.data.data[0].tax_type,
            b_no: response.data.data[0].b_no
        }
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}

// 사업자등록번호 중복 검사(중복 가입 확인)
export const checkDuplicateCompanyNum = async (num) => {
    try {
        const existingCompany = await Company.findOne({ C_EID: num });
        if (existingCompany) return false;
        return true;
    } catch (error) {
        console.error("Error creating company:", error);
        return { success: false, error: error.message };;
    }
}

// 기업 등록
export const createCompany = async (CompanyData) => {
    try {
        // 기업 등록
        const newCompany = new Company(CompanyData);
        const result = await newCompany.save();
        return { success: true, data: result };
    } catch (error) {
        console.error("Error creating company:", error);
        return { success: false, error: error.message };
    }
}

// 관리자 추가
export const addManager = async (C_Code, managerData) => {
    try {
        const company = await Company.findOne({C_Code: C_Code});
        if (!company) {
            return { success: false, error: "Company not found" };
        }

        company.ManagerList.push(managerData);
        const result = await company.save();
        return { success: true, data: result };
    } catch (error) {
        console.error("Error adding manager:", error);
        return { success: false, error: error.message };
    }
}

// 유저 추가
export const addUser = async (C_Code, userData) => {
    try{
        const company = await Company.findOne({C_Code: C_Code})
        if(!company){
            return { success: false, error: "해당 기업 없음"}
        }

        company.UserList.push(userData)
        const result = await company.save();
        return { success: true, data: result}
    }catch(error){
        console.error("Error adding manager:", error);
        return { success: false, error: error.message };
    }
}

// 기업 검색
export const searchCompany = async (keyword) => {
    try{
        const company = await Company.findOne({ C_Name: { $regex: keyword, $options: 'i' } }).sort({ C_Name: 1 });
        if(!company) return {success:false, error: "해당 기업 없음"}
        return {success:true, data: company}
    }catch(err){
        console.error("Error search Company", err);
        return { success: false, error: err.message}
    }
}