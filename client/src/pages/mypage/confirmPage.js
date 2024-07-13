// 개인정보 수정시 거치는 비밀번호 확인 페이지
import styles from "./mypage.module.css";

import Header from "../../components/Header";
import Footer from "../../components/Footer";


const ConfirmPage= () =>{

    return (
        <div className={styles.body_container}>
          <Header/>
          <div className={styles.div_container}>
            <div className={styles.card_container}>
                <form className={styles.form_style}>
                    <input className={`${styles.password} ${styles.input_style}`} type="password" placeholder="비밀번호" id={styles.userpw}/>
                    <button>확인</button>
                </form>
            </div>
          </div>
          <Footer/>
        </div>
    );
}

export default ConfirmPage