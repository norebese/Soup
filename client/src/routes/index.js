// 주요 라이브러리
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '../context/AuthContext';

// 페이지
import Login from '../pages/login/login';
import ManagerRegist from '../pages/regist/managerRegist';
import UserRegist from '../pages/regist/userRegist';
import UserMain from '../pages/mypage/myPageMain';
import ManagerMain from '../pages/mypage/managerPageMain'
import MyPageSetting from '../pages/mypage/myPageSetting';
import ManagerPageSetting from '../pages/mypage/managerPageSetting';
import ConfirmPage from '../pages/mypage/confirmPage';

import SurveyPage from '../pages/survey/surveyPage';
import ManagerSurveyMain from '../pages/survey/managerSurveyMain';
import UserSurveyMain from '../pages/survey/userSurveyMain';

import UserInfoEditPage from '../pages/edit/userInfoEditPage';
// import ManagerSurveyList from '../pages/survey/managerSurveyList';
import SurveyIntro from '../pages/survey/surveyIntro'
import SurveyResult from '../pages/survey/surveyResult'


const Router = () =>{
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/auth/signup" element={<UserRegist/>}/>
          <Route path="/auth/adminsighup" element={<ManagerRegist/>}/>
          <Route path="/user/main" element={<UserMain/>}/>
          <Route path="/test/survey" element={<SurveyPage/>}/>
          <Route path="/test/setting" element={<MyPageSetting/>}/>
          <Route path="/test/managersetting" element={<ManagerPageSetting/>}/>
          <Route path="/test/confirm" element={<ConfirmPage/>}/>
          <Route path="/test/surveylist/manager" element={<ManagerSurveyMain/>}/>
          <Route path="/user/surveylist" element={<UserSurveyMain/>}/>
          <Route path="/test/edit/user" element={<UserInfoEditPage/>}/>
          {/* <Route path="/test/surveylist/manager" element={<ManagerSurveyList/>}/> */}
          <Route path="/manager/main" element={<ManagerMain/>}/>
          <Route path="/user/surveyintro" element={<SurveyIntro/>}/>
          <Route path="/user/surveyResult" element={<SurveyResult/>}/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default Router