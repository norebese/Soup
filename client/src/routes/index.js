// 주요 라이브러리
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// 페이지
import Home from '../pages/Home'

const Router = () =>{
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router