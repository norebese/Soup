import axios from 'axios';

// 백엔드 기본 URL 설정
const API_URL = 'http://localhost:8000';

export const loginService = async (id, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/sginin`, { userId: id, userPw: password });
    console.log(response)
    if(response.status === 200){
      return response.data;
    }else{
      return 'loginFailed'
    }
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

export const userRegistService = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}/auth/usersignup`, {
      C_Code: formData.companyId,
      Team: formData.companyTeam,
      Position: formData.companyPosition,
      Name: formData.userName,
      gender: formData.Gender,
      Birth: formData.Birth,
      userId: formData.validId,
      userPw: formData.userpwConfirm
    });
    if (response.status === 201){
      const loginResponse = await loginService(formData.validId, formData.userpwConfirm);
      console.log('authService loginResponse', loginResponse)
      if (loginResponse.message === '로그인 성공'){
        return loginResponse
      }
    }else{
      console.log(response)
    }
  } catch (error) {
    console.log(formData)
    console.error('Registration error:', error);
    throw error;
  }
};

export const managerRegistService = async (formData) => {
  console.log('formData:', formData)
  try {
    const response = await axios.post(`${API_URL}/auth/adminsignup`, {
      C_Name: formData.CompanyName,
      C_CEO: formData.CEO,
      C_TEL: formData.CompanyTel,
      C_EID: formData.validEID,
      ManagerName: formData.ManagerName,
      ManagerEmail: formData.ManagerEmail,
      userId: formData.validId,
      userPw: formData.userpwConfirm
    });
    if (response.status === 201){
      const loginResponse = await loginService(formData.validId, formData.userpwConfirm);
      console.log('loginResponse', loginResponse)
      // return loginResponse;
    }else{
      console.log(response)
    }
  } catch (error) {
    console.log(formData)
    console.error('Registration error:', error);
    throw error;
  }
};

export const checkEID = async (companyNum) => {
  try{
    const response = await axios.get(`${API_URL}/auth/checkcompany`, {
      params: { num: companyNum }
    });
    console.log(response.data.message)
    if(response.status === 200){
      if(response.data.message === '국세청에 등록되지 않은 사업자등록번호입니다.'){
        return {state: 'invalid'}
      }else{
        return {state: 'valid', eid: response.data.b_no}
      }
    } else{
      return {state: 'error'}
    }
  }catch (error){
    console.error('error:', error);
    throw error;
  }
}

export const checkID = async (userid) => {
  try {
    const response = await axios.get(`${API_URL}/auth/checkid`, {
      params: { userid }
    });
    console.log(response.data.message)
    if(response.status === 200){
      return {state: 'valid'}
    }else{
      return {state: 'invalid'}
    }
  } catch (error) {
    return {state: 'invalid'}
  }
}

export const searchCompany = async (name) =>{
  try {
    const response = await axios.get(`${API_URL}/auth/searchcompany`, {
      params: { name }
    });
    console.log(response)
    if(response.status === 201){
      return {state: 'valid', companyData: response.data}
    }else{
      return {state: 'invalid'}
    }
  } catch (error) {
    console.error('검색 오류:', error);
    throw error;
  }
}