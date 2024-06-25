import axios from 'axios';

// 백엔드 기본 URL 설정
const API_URL = 'http://localhost:3000';

const login = async (id, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { id, password });
    return response.data;
  } catch (error) {
    console.log(`(authService.js) id: ${id} password: ${password}`)
    console.error('Login error:', error);
    throw error;
  }
};

export default login;

