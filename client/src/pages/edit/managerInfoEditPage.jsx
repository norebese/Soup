import styles from "./editpage.module.css";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

const ManagerInfoEditPage = () =>{

    return (
        <div className={styles.body_container}>
          <Header/>
          <div className={styles.div_container}>
            <h2>개인정보 수정</h2>
            <div className={styles.editer_container}>
                <form className={styles.form_style} name="edit">
                    <div className={styles.editer}>
                        <p className={styles.input_tag}>현재 정보 :</p>
                        <input type="text" placeholder="수정할 정보"/>
                    </div>
                    <div className={styles.editer}>
                        <p className={styles.input_tag}>현재 정보 :</p>
                        <input type="text" placeholder="수정할 정보"/>
                    </div>
                    <button className={`${styles.button_type_B} ${styles.btn_style}`}>확인</button>
                </form>
            </div>
          </div>
          <Footer/>
        </div>
    );
}

export default ManagerInfoEditPage