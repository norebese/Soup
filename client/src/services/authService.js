import axios from 'axios';

// 백엔드 기본 URL 설정
const API_URL = 'http://localhost:3000';

export const loginService = async (id, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { id, password });

    if (response.status >= 200 && response.status < 300) {
      // 성공 응답 (상태 코드 200대)
      return response.data;
    } else if (response.status >= 300 && response.status < 400) {
      // 리다이렉션 응답 (상태 코드 300대)
      console.warn('Redirection response:', response);
    } else if (response.status >= 400 && response.status < 500) {
      // 클라이언트 오류 응답 (상태 코드 400대)
      console.error('Client error:', response);
    } else if (response.status >= 500) {
      // 서버 오류 응답 (상태 코드 500대)
      console.error('Server error:', response);
    }
  } catch (error) {
    console.log(`(authService.js) id: ${id} password: ${password}`)
    console.error('Login error:', error);
    throw error;
  }
};

export const registService = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}/regist`, { formData });
    return response.data;
  } catch (error) {
    console.log(formData)
    console.error('Registration error:', error);
    throw error;
  }
};
