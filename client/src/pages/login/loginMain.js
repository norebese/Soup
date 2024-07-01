import {icon} from '../../assets';
import styles from "./login.module.css";
import { useNavigate } from 'react-router-dom';

const LoginMain = () =>{
  
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

    return(
      <div className={styles.body_container}>
        <div className={styles.div_container}>
          <div className={styles.logo}>
            <img className='logo_img' src={icon} alt="logo" />
            </div>
            <div className={styles.text}>슬로건 한 줄</div>
            <button onClick={() => handleNavigate('/auth/signup')} className={`${styles.button_type_A} ${styles.regist} $${styles.btn_style}`}>회원 가입</button>
            <button onClick={() => handleNavigate('/login')} className={`${styles.button_type_B} ${styles.login} $${styles.btn_style}`}>로그인</button>
        </div>
      </div>
    );
  }
  

export default LoginMain