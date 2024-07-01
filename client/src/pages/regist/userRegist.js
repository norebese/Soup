import styles from './regist.module.css';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext'; 

function UserRegist() {
  const [formData, setFormData] = useState({
    companyId: '',
    companyTeam: '',
    companyPosition: '',
    userId: '',
    userpw: '',
    userName: '',
    Gender: '',
    Birth: '',
    //email: ''
  });

  const { regist } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  function alertmsg(key) {
    const translations = {
      companyId: '기업 코드',
      companyTeam: '부서',
      companyPosition: '직급',
      userId: '아이디',
      userpw: '비밀번호',
      userName: '이름',
      Gender: '성별',
      Birth: '날짜',
      //email: '이메일'
    };
    return translations[key] || key;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    for (let key in formData) {
      if (formData[key] === '') {
        alert(`${alertmsg(key)} 항목을 채워주세요.`);
        return;
      }
    }
    try {
        await regist(formData);
    } catch (error) {
        console.log(formData);
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
          <form onSubmit={handleSubmit} name="regist">
            <div className={styles.section}>
              <input onChange={handleChange} name='Corporation_Number' type="text" placeholder="기업 코드" id={styles.Corporation_Number} />
              <input className="input_style" onChange={handleChange} name='team' type="text" placeholder="부서" id={styles.team} />
              <input className="input_style" onChange={handleChange} name='position' type="text" placeholder="직급" id={styles.position} />
            </div>
            <div className={styles.section}>
              <div className="btn_container">
                <input className="input_style" onChange={handleChange} name='id' type="text" placeholder="아이디" id={styles.userid} />
                <button className={`${styles.button_type_B} ${styles.check_btn} ${styles.btn_style}`}>중복 확인</button>
              </div>
              <input onChange={handleChange} name='password' className={`${styles.password} ${styles.input_style}`} type="password" placeholder="비밀번호" id={styles.userpw} />
              <input onChange={handleChange} name='password' className={`${styles.password} ${styles.input_style}`} type="password" placeholder="비밀번호 확인" id={styles.userpw} />
            </div>
            <div className={styles.section}>
              <input onChange={handleChange} name='username' type="text" placeholder="이름" id={styles.username} />
              <div className={styles.radio}>
                <div className={styles.radio_tag}>
                  남자
                  <input onChange={handleChange} value="male" type="radio" name="gender" id={styles.male} />
                </div>
                <div className={styles.radio_tag}>
                  여자
                  <input onChange={handleChange} value="female" type="radio" name="gender" id={styles.female} />
                </div>
              </div>
              <input className="input_style" onChange={handleChange} name='date' type="date" id={styles.date} min="1940-01-01" max="2024-12-31" />
            </div>
            <button className={`${styles.button_type_B} ${styles.regist} ${styles.btn_style}`}>회원가입</button>
          </form>
        </div>
      </div>
    );
  }

export default  UserRegist