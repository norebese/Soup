import styles from './regist.module.css';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

function ManagerRegist() {
    const [formData, setFormData] = useState({
      CEO: '',
      EID :'',
      addressLine1: '',
      addressLine2: '',
      userId: '',
      userpw: '',
      managerName: '',
      companyName: '',
      email: ''
    });

    function alertmsg(key) {
        const translations = {
          CEO: '대표자',
          EID :'사업자등록번호',
          addressLine1: '도로명 주소',
          addressLine2: '상세 주소',
          userId: '아이디',
          userpw: '비밀번호',
          managerName: '관리자 이름',
          companyName: '상호',
          email: '이메일'
        };
        return translations[key] || key;
      }

    return (
        <div className="body_container">
        <div className="nav">
          <button className="back_btn">←</button>
        </div>
        <div className="div_container">
          <form name="regist">
            <div className="section">
            <div className="btn_container">
                <input type="text" placeholder="기업코드" id="companyId"/>
                <button className="button_type_B check_btn">중복 확인</button>
              </div>
              <input type="text" placeholder="상호" id="companyName" />
              <input type="text" placeholder="대표자명" id="CEO" />
              <input type="text" placeholder="도로명주소" id="addressLine1" />
              <input type="text" placeholder="상세주소" id="addressLine2" />
            </div> 
            <div className="section">
              <div className="btn_container">
                <input type="text" placeholder="아이디" id="userid"/>
                <button className="button_type_B check_btn">중복 확인</button>
              </div>
              <input className="password" type="password" placeholder="비밀번호" id="userpw" />
              <input className="password" type="password" placeholder="비밀번호 확인" id="userpw" />
            </div>
            <div className="section">
              <input type="text" placeholder="관리자 이름" id="managerName" />
              <input type="text" placeholder="전화번호" id="phoneNumber" />
            </div>
            <button className={`${styles.button_type_B} ${styles.regist}`}>회원가입</button>
          </form>
        </div>
      </div>

    )


};

export default ManagerRegist