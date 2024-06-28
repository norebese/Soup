import axios from "axios"

import { config } from "../config/config";

export const getByCompanyNum = async (num) =>{
  const baseUrl = 'https://api.odcloud.kr/api/nts-businessman/v1/status?serviceKey=';
  const apikey = config.openapi.key
  const targetUrl = baseUrl+apikey

  const result = await axios.post(targetUrl,{
    body:{
      "b_no":num
    }
  })
}