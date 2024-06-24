import soupLogo from '../../../public/img/icon.png';
import './login.css';

const Login = () =>{
    return (
    <div className="body">
        <div className="container">
            <div className="logo">
            <img src={soupLogo} alt="logo" />
            </div>
            <div className="text">여기에 슬로건을</div>
            <form name="login">
                <input type="text" placeholder="아이디" id="userid" />
                <input className="password" type="password" placeholder="비밀번호" id="userpw"/>
                <button className="button_type_B login">로그인</button>
            </form>
        </div>
    </div>
    );
}

export default Login