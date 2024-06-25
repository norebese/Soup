// 주요 라이브러리
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '../context/AuthContext';

// 페이지
import Home from '../pages/login/loginMain'
import Login from '../pages/login/login';
import Rigist from '../pages/regist/regist'

const Router = () =>{
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/regist" element={<Rigist/>}/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default Router