import {icon} from '../../assets';
import './login.css';
import { Link } from 'react-router-dom';

const LoginMain = () =>{
    return(
      <div className="body">
        <div className="container">
          <div className="logo">
            <img src={icon} alt="logo" />
            </div>
            <div className="text">슬로건 한 줄</div>
            <Link to="/regist" className="button_type_A regist">회원 가입</Link>
            <Link to="/login" className="button_type_B login">로그인</Link>
        </div>
      </div>
    );
  }
  

export default LoginMain