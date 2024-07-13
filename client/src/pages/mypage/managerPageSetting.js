import styles from "./mypage.module.css";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

const ManagerPageSetting = () =>{

    return (
        <div className={styles.body_container}>
        <Header/>
        <div className={styles.div_container}>
          <div className={styles.user_info}>
              <div className={styles.user_fix}>
                <div className={styles.user_company}>기업이름</div>
                <div className={styles.user_greet}>환영합니다 user님!</div>
                <div className={styles.user_lastlogin}>마지막 접속일자 : </div>
              </div>
          </div>
          <div className={styles.list_container}>
            <div className={styles.setting_area}>
              개인정보 수정
            </div>
            <div className={styles.setting_area}>
              기업정보 수정
            </div>
            <div className={styles.setting_area}>
              유저 관리
            </div>
            <div className={styles.setting_area}>
              메시지 관리
            </div>
          </div>
        </div>
        <Footer/>
      </div>

    );
}

export default ManagerPageSetting
