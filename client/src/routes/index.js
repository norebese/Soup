// 주요 라이브러리
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '../context/AuthContext';

// 페이지
import Login from '../pages/login/login';
import ManagerRegist from '../pages/regist/managerRegist';
import UserRegist from '../pages/regist/userRegist';
import MyPageMain from '../pages/mypage/myPageMain';
import SurveyPage from '../pages/survey/surveyPage';
import MyPageSetting from '../pages/mypage/myPageSetting';


const Router = () =>{
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/auth/signup" element={<UserRegist/>}/>
          <Route path="/auth/adminsighup" element={<ManagerRegist/>}/>
          <Route path="/test/mypage" element={<MyPageMain/>}/>
          <Route path="/test/survey" element={<SurveyPage/>}/>
          <Route path="/test/setting" element={<MyPageSetting/>}/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default Router