import soupLogo from '../../../public/img/icon.png';
import './login.css';

const LoginMain = () =>{
    return(
      <div className="body">
        <div className="container">
          <div className="logo">
            <img src={soupLogo} alt="logo Image" />
            </div>
            <div className="text">슬로건 한 줄</div>
            <button className="button_type_A regist">회원 가입</button>
            <button className="button_type_B login">로그인</button>
        </div>
      </div>
    );
  }
  

export default LoginMain