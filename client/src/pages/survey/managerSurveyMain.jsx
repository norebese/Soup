import styles from "./surveypage.module.css";
import React, { useState } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

import Header from "../../components/Header";
import Footer from "../../components/Footer";

const ManagerSurveyMain = () => {
    
    return (
        <div className={styles.body_container}>
            <Header/>
            <div className={styles.div_container}>
                <button>새로운 설문 생성</button>
                <div className={styles.filter}>검색 필터/검색칸</div>
                <div className={styles.card_container}>
                    <div className={styles.survey_card}>
                        <h2 className={styles.survey_name}>설문 이름</h2>
                        <p className={styles.survey_date}>설문 진행일 /혹은 마감일</p>
                        <p className={styles.survey_date}>설문에 관한 간단한 설명</p>
                        <div className={styles.progressbar}>진행도 바(ProgressBar)</div>
                    </div>
                </div>
                <button className={styles.load_button}>더보기</button>
            </div>
            <Footer/>
        </div>
    );
}

export default ManagerSurveyMain