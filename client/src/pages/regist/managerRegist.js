import styles from './regist.module.css';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import {checkEID} from '../../services/authService'

function ManagerRegist() {
    const [formData, setFormData] = useState({
      EID : '',
      companyName: '',
      CEO: '',
      userId: '',
      userpw: '',
      managerName: '',
      email: ''
    });
    const [eidState, setEid] = useState({ isValid: null, message: '' });

    const handleCheckEID = async (e) => {
      try {
        const companyNum = document.getElementById('companyId').value;
        const result = await checkEID(companyNum)
        if (result.state == 'valid'){
          setEid({ isValid: true, message: '일치' });
        }else {
          setEid({ isValid: false, message: '일치하지 않음' });
        }
      } catch(error) {
          // console.log(companyNum);
        console.error('Error submitting report:', error);
      }
    };

    const navigate = useNavigate();

    const handleNavigate = (path) => {
      navigate(path);
    };

    return (
        <div className={styles.body_container}>
        <div className={styles.nav}>
          <button onClick={() => handleNavigate('/')} className={styles.back_btn}>←</button>
        </div>
        <div className={styles.div_container}>
          <form name="regist" className={styles.form_style}>
            <div className='null_container'/>
            <div className={styles.section}>
            <div className={styles.btn_container}>
                <input className={styles.input_style} type="text" placeholder="기업코드" id="companyId"/>
                <button type='button' onClick={handleCheckEID} className={`${styles.button_type_B} ${styles.check_btn} ${styles.btn_style}`}>조회</button>
            </div>
              <input className={styles.input_style} type="text" placeholder="상호" id="companyName" />
              <input className={styles.input_style} type="text" placeholder="대표자명" id="CEO" />
              {/* <input className={styles.input_style} type="text" placeholder="도로명주소" id="addressLine1" />
              <input className={styles.input_style} type="text" placeholder="상세주소" id="addressLine2" /> */}
            </div> 
            <div className={styles.section}>
              <div className={styles.btn_container}>
                <input className={styles.input_style} type="text" placeholder="아이디" id="userid"/>
                <button className={`${styles.button_type_B} ${styles.check_btn} ${styles.btn_style}`}>중복 확인</button>
              </div>
              <input className={`${styles.password} ${styles.input_style}`} type="password" placeholder="비밀번호" id="userpw" />
              <input className={`${styles.password} ${styles.input_style}`} type="password" placeholder="비밀번호 확인" id="userpw" />
            </div>
            <div className={styles.section}>
              <input className={styles.input_style} type="text" placeholder="관리자 이름" id="managerName" />
              <input className={styles.input_style} type="text" placeholder="전화번호" id="phoneNumber" />
              <input className={styles.input_style} type="text" placeholder="관리자 이메일" id="" />
            </div>
            <button className={`${styles.button_type_B} ${styles.regist} ${styles.btn_style}`}>회원가입</button>
          </form>
        </div>
      </div>

    )


};

export default ManagerRegist