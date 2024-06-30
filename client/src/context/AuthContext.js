import React, { createContext, useState, useContext } from 'react';
import { loginService, userRegistService, managerRegistService } from '../services/authService';

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

  const userRegist = async (formData) => {
    try {
      const response = await userRegistService(formData);
      console.log(response)
      // setUser(response.user);
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
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, userRegist , managerRegist }}>
      {children}
    </AuthContext.Provider>
  );
};

// useAuth 훅 생성
export const useAuth = () => {
    return useContext(AuthContext);
  };
