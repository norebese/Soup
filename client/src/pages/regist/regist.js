import styles from './regist.module.css';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext'; 

function Regist() {
  const [formData, setFormData] = useState({
    Corporation_Number: '',
    team: '',
    position: '',
    id: '',
    password: '',
    username: '',
    gender: '',
    date: '',
    email: ''
  });

  const { regist } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    for (let key in formData) {
      if (formData[key] === '') {
        alert(`Please fill out the ${key.replace('_', ' ')} field.`);
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
      <div className={styles.body}>
        <div className={styles.nav}>
          <button onClick={() => handleNavigate('/')} className={styles.back_btn}>←</button>
        </div>
        <div className={styles.container}>
          <form onSubmit={handleSubmit} name="regist">
            <div className={styles.section}>
              <input onChange={handleChange} name='Corporation_Number' type="text" placeholder="기업 코드" id={styles.Corporation_Number} />
              <input onChange={handleChange} name='team' type="text" placeholder="부서" id={styles.team} />
              <input onChange={handleChange} name='position' type="text" placeholder="직급" id={styles.position} />
            </div>
            <div className={styles.section}>
              <input onChange={handleChange} name='id' type="text" placeholder="아이디" id={styles.userid} />
              <input onChange={handleChange} name='password' className={styles.password} type="password" placeholder="비밀번호" id={styles.userpw} />
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
              <input onChange={handleChange} name='date' type="date" id={styles.date} min="1940-01-01" max="2024-12-31" />
              <input onChange={handleChange} name='email' type="text" placeholder="이메일" id={styles.email} />
            </div>
            <button className={`${styles.button_type_B} ${styles.regist}`}>회원가입</button>
          </form>
        </div>
      </div>
    );
  }

export default  Regist