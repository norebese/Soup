import styles from './regist.module.css';
import { useNavigate } from 'react-router-dom';

function Regist() {
  const [formData, setFormData] = useState({
    id: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
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
          <form name="regist">
            <div className={styles.section}>
              <input onChange={handleChange} name='Corporation_Number' type="text" placeholder="기업 코드" id={styles.Corporation_Number} />
              <input type="text" placeholder="부서" id={styles.team} />
              <input type="text" placeholder="직급" id={styles.position} />
            </div>
            <div className={styles.section}>
              <input type="text" placeholder="아이디" id={styles.userid} />
              <input className={styles.password} type="password" placeholder="비밀번호" id={styles.userpw} />
            </div>
            <div className={styles.section}>
              <input type="text" placeholder="이름" id={styles.username} />
              <div className={styles.radio}>
                <div className={styles.radio_tag}>
                  남자
                  <input type="radio" name="gender" id={styles.male} />
                </div>
                <div className={styles.radio_tag}>
                  여자
                  <input type="radio" name="gender" id={styles.female} />
                </div>
              </div>
              <input type="date" id={styles.date} min="1940-01-01" max="2024-12-31" />
              <input type="text" placeholder="이메일" id={styles.email} />
            </div>
            <button className={`${styles.button_type_B} ${styles.regist}`}>회원가입</button>
          </form>
        </div>
      </div>
    );
  }

export default  Regist