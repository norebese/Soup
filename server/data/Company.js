import axios from 'axios';

import { config } from '../config/config.js';
import Company from '../models/Company.js';

// 사업자등록 상태 조회
export const CompanyAPI = async (C_EID) => {
    const base_url = 'http://api.odcloud.kr/api/nts-businessman/v1/';
    const SERVICE = "status";
    const TYPE = "?returnType=JSON";
    const APIKEY = "&serviceKey=" + config.openapi.key;

    try {
        const response = await axios.post(`${base_url}${SERVICE}${TYPE}${APIKEY}`, {
            b_no: [C_EID]
        });
        const data = {
            message: response.data.data[0].tax_type,
            b_no: response.data.data[0].b_no
        }
        return { success: true, message: "사업자등록번호 진위여부 검사 성공", data:data}
    } catch (err) {
        console.log("사업자등록번호 진위여부 검사 에러:", err);
        return { success: false, message: "사업자등록번호 진위여부 검사 에러", error:err}
    }
}

// 사업자등록번호 중복 검사(중복 가입 확인)
export const checkCompanyNum = async (C_EID) => {
    try {
        const existingCompany = await Company.findOne({ C_EID: C_EID });
        if (existingCompany) return { success: false, message: "이미 등록된 사업자등록번호"}
        return { success: true, message: "가입 가능한 사업자등록번호", data:C_EID}
    } catch (err) {
        console.log("사업자 등록번호 중복 검사 에러:", err);
        return { success: false, message: "사업자 등록번호 중복 검사 에러", error: err };;
    }
}

// 기업이름으로 검색
export const searchCompany = async (C_Name) => {
    try{
        const company = await Company.findOne({ C_Name: { $regex: C_Name, $options: 'i' } })
                                    .sort({ C_Name: 1 })
                                    .select('C_Code C_Name C_CEO C_EID');
        if(!company) return {success:false, message: "해당 기업 없음"}
        return {success:true, message: "기업 검색 성공", data: company}
    }catch(err){
        console.log("기업 검색 에러:", err);
        return { success: false, message: "기업 검색 에러", error: err}
    }
}

// 기업 등록
export const createCompany = async (CompanyData) => {
    try {
        // 기업 등록
        const newCompany = new Company(CompanyData);
        const result = await newCompany.save();
        return { success: true, message:"기업 등록 성공",data: result };
    } catch (err) {
        console.log("기업 등록 에러:", err);
        return { success: false, message:"기업 등록 에러", error: err.message };
    }
}

// 관리자 추가
export const addManager = async (Data) => {
    try {
        const company = await Company.findOne({C_Code: Data.C_Code});
        if (!company) {
            return { success: false, error: "해당 기업 없음" };
        }

        const { C_Code, ...managerData } = Data;

        company.ManagerList.push(managerData);
        const result = await company.save();
        return { success: true, data: result };
    } catch (err) {
        console.log("관리자 추가 에러", err);
        return { success: false, message: "관리자 추가 에러", error: err };
    }
}

// 유저 추가
export const addUser = async (Data) => {
    try{
        const company = await Company.findOne({C_Code: Data.C_Code})
        if(!company){
            return { success: false, error: "해당 기업 없음"}
        }

        const { C_Code, ...UserData } = Data;

        company.UserList.push(UserData)
        const result = await company.save();
        return { success: true, data: result}
    }catch(err){
        console.log("유저 추가 에러: ", err);
        return { success: false, message:"유저 추가 에러", error: err };
    }
}

