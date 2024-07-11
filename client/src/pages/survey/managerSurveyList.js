import styles from "./surveypage.module.css";
import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ProgressBar from 'react-bootstrap/ProgressBar';

const ManagerSurveyList = () => {
    
    return (
        <div className={styles.body_container}>
            <div className={styles.header}>
            <div className={styles.head_container}>
                <div className={styles.logo}>
                <img src="" alt="logo" />
                </div>
                <div className={styles.alert}>
                <DropdownButton id="dropdown-basic-button" title="">
                <Dropdown.Item href="#/action_1">1번</Dropdown.Item>
                <Dropdown.Item href="#/action_2">2번</Dropdown.Item>
                <Dropdown.Item href="#/action_3">3번</Dropdown.Item>
                </DropdownButton>
                </div>
            </div>
            </div>
            <div className={styles.div_container}>
                <button>새로운 설문 생성</button>
                <div className={styles.filter}>검색 필터/검색칸</div>
                <div className={styles.card_container}>
                    /* 카드 시작 */
                    <div className={styles.survey_card}>
                        <h2 className={styles.survey_name}>설문 이름</h2>
                        <p className={styles.survey_date}>설문 진행일 /혹은 마감일</p>
                        <p className={styles.survey_date}>설문에 관한 간단한 설명</p>
                        <div className={styles.progressbar}>진행도 바(ProgressBar)</div>
                    </div>
                    /* 카드 끝 */
                </div>
            </div>
            <div className={styles.footer}>
            <div className={styles.menu}>■</div>
            <div className={styles.menu}>■</div>
            <div className={styles.menu}>■</div>
            </div>
        </div>
    );
}

export default ManagerSurveyList