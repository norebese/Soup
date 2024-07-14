import styles from "./userSurveyMain.module.css";
import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

import Header from "../../components/Header";
import Footer from "../../components/Footer";


const UserSurveyMain = () => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate('/user/surveyintro');
    };
    
    return (
        <div className={styles.body_container}>
            <Header/>
            <div className={styles.div_container}>
                <div className={styles.filter}>
                    <input className={styles.filter_input} placeholder="검색"/>
                </div>
                <div className={styles.card_container}>
                    <Card className={`mb-2 ${styles.survey_card}`} onClick={handleCardClick}>
                        <Card.Body>
                            <Card.Title>
                                설문 이름
                            </Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">진행일/마감일</Card.Subtitle>
                            <Card.Text>
                            설문에 관한 간단한 설명
                            </Card.Text>
                            <ProgressBar now={40} label={`${40}%`} />
                        </Card.Body>
                    </Card>
                    <Card className={`mb-2 ${styles.survey_card}`}>
                        <Card.Body>
                            <Card.Title>
                                설문 이름
                            </Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">진행일/마감일</Card.Subtitle>
                            <Card.Text>
                            설문에 관한 간단한 설명
                            </Card.Text>
                            <ProgressBar now={40} label={`${40}%`} />
                        </Card.Body>
                    </Card>
                    <Card className={`mb-2 ${styles.survey_card}`}>
                        <Card.Body>
                            <Card.Title>
                                설문 이름
                            </Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">진행일/마감일</Card.Subtitle>
                            <Card.Text>
                            설문에 관한 간단한 설명
                            </Card.Text>
                            <ProgressBar now={40} label={`${40}%`} />
                        </Card.Body>
                    </Card>
                    <div className={styles.card_more_btn}>
                        <Button variant="primary" size="lg" id={styles.more_btn}>
                            더보기
                        </Button>
                    </div>
                </div>
                
            </div>
            <Footer/>
        </div>
    );
}

export default UserSurveyMain