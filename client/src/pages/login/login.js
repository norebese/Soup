import {icon} from '../../assets';
import './login.css';
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
        try {
            await login(formData.id, formData.password); 
        } catch (error) {
            console.log(`(login.js) id: ${formData.id} password: ${formData.password}`)
            console.error('Error submitting report:', error);
        }
    };


    return (
    <div className="body">
        <div className="container">
            <div className="logo">
            <img src={icon} alt="logo" />
            </div>
            <div className="text">여기에 슬로건을</div>
            <form onSubmit={handleSubmit} name="login">
                <input onChange={handleChange} name='id' type="text" placeholder="아이디" id="userid" />
                <input onChange={handleChange} name='password' className="password" type="password" placeholder="비밀번호" id="userpw"/>
                <button className="button_type_B login">로그인</button>
            </form>
        </div>
    </div>
    );
}

export default Login