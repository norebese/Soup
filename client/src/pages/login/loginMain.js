import {icon} from '../../assets';
import styles from "./login.module.css";
import { useNavigate } from 'react-router-dom';

const LoginMain = () =>{
  
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

    return(
      <div className={styles.body}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <img src={icon} alt="logo" />
            </div>
            <div className={styles.text}>슬로건 한 줄</div>
            <button onClick={() => handleNavigate('/regist')} className={`${styles.button_type_A} ${styles.regist}`}>회원 가입</button>
            <button onClick={() => handleNavigate('/login')} className={`${styles.button_type_B} ${styles.login}`}>로그인</button>
        </div>
      </div>
    );
  }
  

export default LoginMain