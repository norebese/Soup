import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./survey.module.css";
import ProgressBar from 'react-bootstrap/ProgressBar';
import SurveyContainer from '../../components/survey';
import { getSurveyData } from '../../services/surveyService';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const SurveyPage = () => {
    const [surveyData, setSurveyData] = useState(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [SurveyEnd, setSurveyEnd] = useState(false);

    const navigate = useNavigate();

    const handleGoResult = (event) => {
        event.preventDefault();
        navigate('/user/surveyResult');
    };

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

    const handleOptionSelect = (option) => {
        console.log('Selected option:', option);
        setSelectedOptions((prevOptions) => [
            ...prevOptions.slice(0, currentQuestionIndex),
            option,
            ...prevOptions.slice(currentQuestionIndex + 1)
        ]);
        if (currentQuestionIndex < surveyData.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            console.log('설문이 완료되었습니다.');
            setSurveyEnd(true)
        }
    };

    if (!surveyData) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className={styles.body_container}>
                <div className={styles.div_container}>
                    <Header />
                    <div className={styles.survey_container}>
                        <div className={styles.survey_info}>
                            <div className={styles.survey_text_area}>
                                <p>20xx.xx.xx~</p>
                                <div className={styles.text_head}>설문조사 이름</div>
                            </div>
                            <div className={styles.progress_bar}>
                                <ProgressBar now={(currentQuestionIndex + 1) / surveyData.length * 100} label={`${currentQuestionIndex + 1}/${surveyData.length}`} />
                            </div>
                        </div>
                        <div className={styles.survey_area}>
                            {SurveyEnd === false ? (
                                <SurveyContainer
                                    data={surveyData[currentQuestionIndex]}
                                    onSelect={handleOptionSelect}
                                    currentQuestionIndex={currentQuestionIndex}
                                    selectedOptions={selectedOptions}
                                />
                            ) : (
                                <Card className="text-center">
                                    <Card.Body>
                                        <Card.Title>설문이 완료되었습니다</Card.Title>
                                        <Button variant="primary" onClick={handleGoResult}>결과보기</Button>
                                    </Card.Body>
                                </Card>
                            )}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default SurveyPage;
