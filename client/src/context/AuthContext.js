import React, { createContext, useState, useContext, useEffect } from 'react';
import { loginService, userRegistService, managerRegistService } from '../services/authService';

// AuthContext 생성
const AuthContext = createContext();

// AuthProvider 컴포넌트
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [userType, setUserType] = useState(false);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    // 페이지 로드 시 로컬 스토리지에서 토큰과 닉네임 가져오기
    const token = sessionStorage.getItem('TOKEN');
    const storedName = sessionStorage.getItem('NAME');
    const storedAdmin = sessionStorage.getItem('TYPE');

    if (token && storedName) {
        // 로컬 스토리지에서 토큰과 닉네임이 있는 경우
        setIsLoggedIn(true);
        setUserName(storedName);
        setUserType(storedAdmin)
    } else {
        // 로컬 스토리지에 토큰이 없는 경우
        setIsLoggedIn(false);
        setUserName('');
    }
  }, []);

  const login = async (id, password) => {
    try {
      const response = await loginService(id, password);
      console.log(response)
      if(response.message === '로그인 성공'){
        sessionStorage.setItem('TOKEN', response.token);
        sessionStorage.setItem('NAME', response.name);
        sessionStorage.setItem('TYPE', response.type);
        return response.type
      }else if(response === 'loginFailed'){
        return 'loginFailed'
      }
    } catch (error) {
      console.log(`(AuthContext.js) id: ${id} password: ${password}`)
      console.error('Login failed:', error);
      throw error;
    }
  };

  const userRegist = async (formData) => {
    try {
      const response = await userRegistService(formData);
      console.log(response)
      if(response.message === '로그인 성공'){
        sessionStorage.setItem('TOKEN', response.token);
        sessionStorage.setItem('NAME', response.name);
        sessionStorage.setItem('TYPE', response.type);
        return response.type
      }else if(response === 'loginFailed'){
        return 'loginFailed'
      }
    } catch (error) {
      console.log(formData)
      console.error('Registration failed:', error);
      throw error;
    }
  };

  const managerRegist = async (formData) => {
    try {
      const response = await managerRegistService(formData);
      console.log(response)
      // setUser(response.user);
    } catch (error) {
      console.log(formData)
      console.error('Registration failed:', error);
      throw error;
    }
  };

  const logout = () => {
    // setUser(null);
  };

  return (
    <AuthContext.Provider value={{ login, logout, userRegist , managerRegist }}>
      {children}
    </AuthContext.Provider>
  );
};

// useAuth 훅 생성
export const useAuth = () => {
    return useContext(AuthContext);
  };
