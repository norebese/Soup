import {icon} from '../../assets';
import styles from "./login.module.css";
import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext'; 

const Login = () =>{
    const [formData, setFormData] = useState({
        id: '',
        password: ''
    });

    const { login } = useAuth();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
      };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.id || !formData.password) {
            alert('아이디 또는 비밀번호를 입력해주세요');
            return;
        }
        try {
            await login(formData.id, formData.password);
        } catch (error) {
            console.log(`(login.js) id: ${formData.id} password: ${formData.password}`);
            console.error('Error submitting report:', error);
        }
    };


    return (
    <div className={styles.body}>
        <div className={styles.container}>
            <div className={styles.logo}>
            <img src={icon} alt="logo" />
            </div>
            <div className={styles.text}>여기에 슬로건을</div>
            <form onSubmit={handleSubmit} name="login">
                <input onChange={handleChange} autoComplete="username" name='id' type="text" placeholder="아이디" id={styles.userid} />
                <input onChange={handleChange} autoComplete="current-password" name='password' className="password" type="password" placeholder="비밀번호" id={styles.userpw}/>
                <button className={`${styles.button_type_B} ${styles.login}`}>로그인</button>
            </form>
        </div>
    </div>
    );
}

export default Login