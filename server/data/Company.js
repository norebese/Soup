import mongoose from 'mongoose';
import axios from 'axios';

import { config } from '../config/config.js';

import Company from '../models/Company.js';
import company from "../models/Company.js";

// 사업자등록 상태 조회 
export const getByCompanyNum = async (num)=>{
    const base_url = 'http://api.odcloud.kr/api/nts-businessman/v1/';
    const SERVICE = "status";
    const TYPE = "?returnType=JSON";
    const APIKEY = "&serviceKey=" + config.openapi.key;

    try {
        const response = await axios.post(`${base_url}${SERVICE}${TYPE}${APIKEY}`, {
            b_no: [num]
        });
        // console.log(response.data)
        const data = {
            message:response.data.data[0].tax_type,
            b_no:response.data.data[0].b_no
        }
        return data
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}

// 사업자등록번호 중복 검사(중복 가입 확인)
export const a = async (num)=>{
    // 사업자등록번호 기반으로 중복 체크
    try{
        const result = await Company.findOne({ C_EID: CompanyData.C_EID });
        if (existingCompany) {
            // 중복된 경우 에러 반환
            return { success: false, message: '사업자등록번호가 중복되었습니다.' };
        }
    }catch(err){

    }
}

// 기업 등록
export const Create = async (CompanyData)=>{

    // 기업 등록

}

// 기업 정보 수정

// 기업 삭제