import styles from './regist.module.css';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import {checkID} from '../../services/authService'

function UserRegist() {
  const [formData, setFormData] = useState({
    companyId: '',
    companyTeam: '',
    companyPosition: '',
    userId: '',
    userpw: '',
    userpwConfirm: '',
    userName: '',
    Gender: '',
    Birth: '',
    //email: ''
  });

  const [errors, setErrors] = useState({});
  const [idState, setid] = useState({ isValid: null, message: '' });

  const { userRegist } = useAuth();

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
    if (!formData.companyId) return { companyId: '기업 코드가 필요합니다' };
    if (!formData.companyTeam) return { companyTeam: '부서가 필요합니다' };
    if (!formData.companyPosition) return { companyPosition: '직급이 필요합니다' };
    if (!formData.userId) return { userId: '아이디가 필요합니다' };
    if (!formData.userpw) return { userpw: '비밀번호가 필요합니다' };
    if (formData.userpw !== formData.userpwConfirm) return { userpwConfirm: '비밀번호가 일치하지 않습니다' };
    if (!formData.userName) return { userName: '이름이 필요합니다' };
    if (!formData.Gender) return { Gender: '성별을 선택해주세요' };
    if (!formData.Birth) return { Birth: '생년월일을 선택해주세요' };
    return newErrors;
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
      const result = await checkID(formData.userId)
      if (result.state === 'valid'){
        setFormData(prev => ({
          ...prev,
          validId: formData.userId,
        }));
        setid({ isValid: true, message: '유효힌 아이디 입니다' });
      }else{
        setid({ isValid: false, message: '중복된 아이디 입니다' });
      }
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
        await userRegist(formData);
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
        <div className='null_container'/>
          <form onSubmit={handleSubmit} className={styles.form_style} name="regist">
            <div className={styles.section}>
              <input className={styles.input_style} onChange={handleChange} name='companyId' type="text" placeholder="기업 코드" id="companyId" />
              {errors.companyId && <span className={styles.error_msg}>{errors.companyId}</span>}
              <input className={styles.input_style} onChange={handleChange} name='companyTeam' type="text" placeholder="부서" id="companyTeam" />
              {errors.companyTeam && <span className={styles.error_msg}>{errors.companyTeam}</span>}
              <input className={styles.input_style} onChange={handleChange} name='companyPosition' type="text" placeholder="직급" id="companyPosition" />
              {errors.companyPosition && <span className={styles.error_msg}>{errors.companyPosition}</span>}
            </div>
            <div className={styles.section}>
              <div className={styles.btn_container}>
                <input className={styles.input_style} onChange={handleChange} name='userId' type="text" placeholder="아이디" id="userId" />
                <button onClick={handleCheckID} className={`${styles.button_type_B} ${styles.check_btn} ${styles.btn_style}`} type="button">중복 확인</button>
              </div>
              {errors.userId && <span className={styles.error_msg}>{errors.userId}</span>}
              {idState.isValid === false && <span className={styles.error_msg}>{idState.message}</span>}
              {idState.isValid === true && <span className={styles.valid_msg}>{idState.message}</span>}
              <input onChange={handleChange} name='userpw' className={`${styles.password} ${styles.input_style}`} type="password" placeholder="비밀번호" id="userpw" />
              {errors.userpw && <span className={styles.error_msg}>{errors.userpw}</span>}
              <input onChange={handleChange} name='userpwConfirm' className={`${styles.password} ${styles.input_style}`} type="password" placeholder="비밀번호 확인" id="userpwConfirm" />
              {errors.userpwConfirm && <span className={styles.error_msg}>{errors.userpwConfirm}</span>}
            </div>
            <div className={styles.section}>
              <input className={styles.input_style} onChange={handleChange} name='userName' type="text" placeholder="이름" id="userName" />
              {errors.userName && <span className={styles.error_msg}>{errors.userName}</span>}
              <div className={styles.radio}>
                <div className={styles.radio_tag}>
                  남자
                  <input onChange={handleChange} value="male" type="radio" name="Gender" id="Gender" />
                </div>
                <div className={styles.radio_tag}>
                  여자
                  <input onChange={handleChange} value="female" type="radio" name="Gender" id="Gender" />
                </div>
              </div>
              {errors.Gender && <span className={`${styles.error_msg} ${styles.error_msg2}`}>{errors.Gender}</span>}
              <input className={styles.input_style} onChange={handleChange} name='Birth' type="date" id="Birth" min="1940-01-01" max="2024-12-31" />
              {errors.Birth && <span className={styles.error_msg}>{errors.Birth}</span>}
            </div>
            <button className={`${styles.button_type_B} ${styles.regist} ${styles.btn_style}`} type="submit">회원가입</button>
          </form>
        </div>
      </div>
    );
  }

export default  UserRegist