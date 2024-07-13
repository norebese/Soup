import styles from "./mypage.module.css";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

const MyPageSetting = () =>{

    return (
        <div className={styles.body_container}>
        <Header/>
        <div className={styles.div_container}>
            <div className={styles.setting_area}>
              비밀번호 변경
            </div>
            <div className={styles.setting_area}>
              개인정보 변경
            </div>
        </div>
        <Footer/>
      </div>

    );
}

export default MyPageSetting
