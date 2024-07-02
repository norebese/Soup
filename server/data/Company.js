import { config } from '../config/config.js';
import axios from 'axios';

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
        const company = {
            message:response.data.data[0].tax_type,
            b_no:response.data.data[0].b_no
        }
        return company
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}
