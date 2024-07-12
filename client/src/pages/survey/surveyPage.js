import {icon} from '../../assets';
import styles from "./survey.module.css";
import React, { useState, useEffect } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import SurveyContainer from '../../components/survey';
import { getSurveyData } from '../../services/surveyService';

const SurveyPage = () => {
    const [surveyData, setSurveyData] = useState(null);

    useEffect(() => {
        const fetchSurveyData = async () => {
            try {
                const response = await getSurveyData();
                console.log('Fetched Data:', response);
                setSurveyData(response.data);
            } catch (error) {
                console.error('Error fetching survey data:', error);
            }
        };
        fetchSurveyData();
    }, []);

    if (!surveyData) {
        return <div>Loading...</div>;
    }
    
    return (
        <>
        <div className={styles.body_container}>
        <div className={styles.div_container}>
            <div className={styles.header}>
                <div className={styles.head_container}>
                  <div className={styles.logo}>
                    <img src="" alt="logo" />
                  </div>
                  <div className={styles.alert}>
                   ㅇ
                </div>
              </div>
            </div>
            <SurveyContainer data={surveyData}/>
        </div>
        <div className={styles.footer}>
            <div className={styles.menu}>■</div>
            <div className={styles.menu}>■</div>
            <div className={styles.menu}>■</div>
        </div>
    </div>
    </>
    
    );
}


export default  SurveyPage