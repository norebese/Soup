import React, { createContext, useState, useContext } from 'react';
import { loginService, registService } from '../services/authService';

// AuthContext 생성
const AuthContext = createContext();

// AuthProvider 컴포넌트
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (id, password) => {
    try {
      const response = await loginService(id, password);
      setUser(response.user);
    } catch (error) {
      console.log(`(AuthContext.js) id: ${id} password: ${password}`)
      console.error('Login failed:', error);
      throw error;
    }
  };

  const regist = async (formData) => {
    try {
      const response = await registService(formData);
      console.log(response)
      // setUser(response.user);
    } catch (error) {
      console.log(formData)
      console.error('Registration failed:', error);
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, regist }}>
      {children}
    </AuthContext.Provider>
  );
};

// useAuth 훅 생성
export const useAuth = () => {
    return useContext(AuthContext);
  };
