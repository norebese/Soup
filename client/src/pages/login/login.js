import {icon} from '../../assets';
import styles from "./login.module.css";
import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext'; 
import { Link, useNavigate } from 'react-router-dom';

const Login = () =>{
    const [formData, setFormData] = useState({
        id: '',
        password: ''
    });
    const [errors, setErrors] = useState({});
    const [loginState, setLoginState] = useState({ isValid: null, message: '' });

    const { login } = useAuth();
    const navigate = useNavigate();

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
        if (!formData.id) newErrors.id = '아이디가 필요합니다';
        if (!formData.password) newErrors.password = '비밀번호가 필요합니다';
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = validate();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else{
            try {
                const response = await login(formData.id, formData.password);
                console.log(response)
                if(response === 'M'){
                    navigate('/manager/main');
                  }else if(response === 'U'){
                    navigate('/user/main');
                  }else if(response === 'loginFailed'){
                    setLoginState({ isValid: false, message: '아이디 비밀번호를 확인하세요' })
                  }
            } catch (error) {
                console.error('Error login:', error);
            }
        }
    };


    return (
    <div className={styles.body_container}>
        <div className={styles.div_container}>
            <div className={styles.logo}>
            <img className={styles.logo_img} src={icon} alt="logo" />
            </div>
            <div className={styles.text}>여기에 슬로건을</div>
            <form className={styles.form_style} onSubmit={handleSubmit} name="login">
                <input onChange={handleChange} autoComplete="username" name='id' type="text" placeholder="아이디" className={styles.input_style} id={styles.userid} />
                {errors.id && <span className={styles.error_msg}>{errors.id}</span>}
                <input onChange={handleChange} autoComplete="current-password" name='password' className={`${styles.password} ${styles.input_style}`} type="password" placeholder="비밀번호" id={styles.userpw}/>
                {errors.password && <span className={styles.error_msg}>{errors.password}</span>}
                {loginState.isValid === false && <span className={styles.error_msg}>{loginState.message}</span>}
                <button className={`${styles.button_type_B} ${styles.login} ${styles.btn_style}`}>로그인</button>
                <Link to={'/auth/signup'} className={`${styles.button_type_A} ${styles.regist} ${styles.btn_style}`}>일반 회원 가입</Link>
                <Link to={'/auth/adminsighup'} className={`${styles.button_type_A} ${styles.regist} ${styles.btn_style}`}>관리자 회원 가입</Link>
            </form>
        </div>
    </div>
    );
}

export default Login