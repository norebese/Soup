import styles from "./surveypage.module.css";

import Header from "../../components/Header";
import Footer from "../../components/Footer";


const UserSurveyMain = () => {
    
    return (
        <div className={styles.body_container}>
            <Header/>
            <div className={styles.div_container}>
                <div className={styles.filter}>
                    <input className={styles.filter_input} placeholder="검색"/>
                </div>
                <div className={styles.card_container}>
                    <div className={styles.survey_card}>
                        <h2 className={styles.survey_name}>설문 이름</h2>
                        <p className={styles.survey_date}>설문 진행일 /혹은 마감일</p>
                        <p className={styles.survey_comment}>설문에 관한 간단한 설명</p>
                        <div className={styles.progressbar}>진행도 바(ProgressBar)</div>
                    </div>
                </div>
            <button className={styles.load_button}>더보기</button>
            </div>
            <Footer/>
        </div>
    );
}

export default UserSurveyMain