import styles from './regist.module.css';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import {checkEID} from '../../services/authService'

function ManagerRegist() {
    const [formData, setFormData] = useState({
      EID : '',
      validEID: '',
      CompanyName: '',
      CEO: '',
      userId: '',
      validId: '',
      userpw: '',
      userpwConfirm: '',
      ManagerName: '',
      CompanyTel: '',
      ManagerEmail: ''
    });

    const [errors, setErrors] = useState({});
    const [eidState, setEid] = useState({ isValid: null, message: '' });

    const { regist } = useAuth();

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
      setErrors({
        ...errors,
        [name]: '',
      });
    };

    const validate = () => {
      const newErrors = {};
      if (!formData.EID) return { EID: '사업자등록번호가 필요합니다' };
      if (!formData.CompanyName) return { CompanyName: '상호가 필요합니다' };
      if (!formData.CEO) return { CEO: '대표자명이 필요합니다' };
      if (!formData.userId) return { userId: '아이디가 필요합니다' };
      if (!formData.userpw) return { userpw: '비밀번호가 필요합니다' };
      if (formData.userpw !== formData.userpwConfirm) return { userpwConfirm: '비밀번호가 일치하지 않습니다' };
      if (!formData.ManagerName) return { ManagerName: '이름이 필요합니다' };
      if (!formData.CompanyTel) return { CompanyTel: '전화번호가 필요합니다' };
      if (!formData.ManagerEmail) return { ManagerEmail: '이메일이 필요합니다' };
      if (!formData.validEID) return { validEID: '사업자등록번호 검사가 필요합니다' };
      return newErrors;
    };

    const handleCheckEID = async (e) => {
      if (!formData.EID) {
        setErrors(prevErrors => ({
          ...prevErrors,
          EID: '사업자등록번호가 필요합니다',
        }));
        return;
      }
      try {
        const result = await checkEID(formData.EID)
        if (result.state === 'valid'){
          setEid({ isValid: true, message: '일치' });
          setFormData(prev => ({
            ...prev,
            validEID: result.eid,
          }));
        }else {
          setEid({ isValid: false, message: '사업자등록번호가 일치하지 않음' });
        }
      } catch(error) {
        console.error('사업자등록번호 검사오류:', error);
      }
    };

    const handleCheckID = async (e) => {
      if (!formData.userId) {
        setErrors(prevErrors => ({
          ...prevErrors,
          userId: '아이디가 필요합니다',
        }));
        return;
      }
      try {
        //중복검사
      } catch (error) {
        console.error('아이디 중복 검사오류:', error);
      }
    }

    const handleSubmit = async (e) => {
      e.preventDefault();
      const newErrors = validate();
      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        const firstErrorKey = Object.keys(newErrors)[0];
        const firstErrorElement = document.getElementById(firstErrorKey);
        if (firstErrorElement) {
          firstErrorElement.scrollIntoView({ behavior: 'smooth' });
        }
      }else {
        try {
          await regist(formData);
        } catch (error) {
            console.log(formData);
            console.error('Error submitting report:', error);
        }
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
          <form onSubmit={handleSubmit} name="regist" className={styles.form_style}>
            <div className='null_container'/>
            <div className={styles.section}>
            <div className={styles.btn_container}>
                <input onChange={handleChange} name='EID' className={styles.input_style} type="text" placeholder="사업자등록번호" id="EID" disabled={eidState.isValid === true}/>
                <button type='button' onClick={handleCheckEID} disabled={eidState.isValid === true} className={`${styles.button_type_B} ${styles.check_btn} ${styles.btn_style}`}>조회</button>
            </div>
            {errors.EID && <span className={styles.error_msg}>{errors.EID}</span>}
            {errors.validEID && <span className={styles.error_msg}>{errors.validEID}</span>}
            {eidState.isValid === false && <span className={styles.error_msg}>{eidState.message}</span>}
              <input onChange={handleChange} className={styles.input_style} name='CompanyName' type="text" placeholder="상호" id="companyName" />
              {errors.CompanyName && <span className={styles.error_msg}>{errors.CompanyName}</span>}
              <input onChange={handleChange} className={styles.input_style} name='CEO' type="text" placeholder="대표자명" id="CEO" />
              {errors.CEO && <span className={styles.error_msg}>{errors.CEO}</span>}
              {/* <input className={styles.input_style} type="text" placeholder="도로명주소" id="addressLine1" />
              <input className={styles.input_style} type="text" placeholder="상세주소" id="addressLine2" /> */}
            </div> 
            <div className={styles.section}>
              <div className={styles.btn_container}>
                <input onChange={handleChange} className={styles.input_style} name='userId' type="text" placeholder="아이디" id="userId"/>
                <button type='button' onClick={handleCheckID} className={`${styles.button_type_B} ${styles.check_btn} ${styles.btn_style}`}>중복 확인</button>
              </div>
              {errors.userId && <span className={styles.error_msg}>{errors.userId}</span>}
              <input onChange={handleChange} className={`${styles.password} ${styles.input_style}`} name='userpw' type="password" placeholder="비밀번호" id="userpw" />
              {errors.userpw && <span className={styles.error_msg}>{errors.userpw}</span>}
              <input onChange={handleChange} className={`${styles.password} ${styles.input_style}`} name='userpwConfirm' type="password" placeholder="비밀번호 확인" id="userpw" />
              {errors.userpwConfirm && <span className={styles.error_msg}>{errors.userpwConfirm}</span>}
            </div>
            <div className={styles.section}>
              <input onChange={handleChange} className={styles.input_style} name='ManagerName' type="text" placeholder="관리자 이름" id="managerName" />
              {errors.ManagerName && <span className={styles.error_msg}>{errors.ManagerName}</span>}
              <input onChange={handleChange} className={styles.input_style} name='CompanyTel' type="text" placeholder="전화번호" id="phoneNumber" />
              {errors.CompanyTel && <span className={styles.error_msg}>{errors.CompanyTel}</span>}
              <input onChange={handleChange} className={styles.input_style} name='ManagerEmail' type="email" placeholder="관리자 이메일" id="" />
              {errors.ManagerEmail && <span className={styles.error_msg}>{errors.ManagerEmail}</span>}
            </div>
            <button className={`${styles.button_type_B} ${styles.regist} ${styles.btn_style}`}>회원가입</button>
          </form>
        </div>
      </div>

    )


};

export default ManagerRegist