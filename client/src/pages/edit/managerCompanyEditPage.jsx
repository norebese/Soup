import styles from "./editpage.module.css";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

const ManagerCompanyEditPage = () =>{

    return (
        <div className={styles.body_container}>
          <Header/>
          <div className={styles.div_container}>
            <h2>개인정보 수정</h2>
            <div className={styles.editer_container}>
                <form className={styles.form_style} name="edit">
                    <div className={styles.btn_container}>
                        <input className={styles.input_style} type="text" placeholder="기업코드" id="companyId"/>
                        <button className={`${styles.button_type_B} ${styles.check_btn} ${styles.btn_style}`}>조회</button>
                    </div>
                        <input className={styles.input_style} type="text" placeholder="상호" id="companyName" />
                        <input className={styles.input_style} type="text" placeholder="대표자명" id="CEO" />
                        <button className={`${styles.button_type_B} ${styles.btn_style}`}>확인</button>
                </form>
            </div>
          </div>
          <Footer/>
        </div>
    );
}

export default ManagerCompanyEditPage