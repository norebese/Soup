import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import { useNavigate } from 'react-router-dom';
import styles from "./mypage.module.css";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

const ManagerUserList = () =>{

    const navigate = useNavigate();

    return (
        <div className={styles.body_container}>
            <Header/>
            <div className={styles.div_container}>
             <div className={styles.card_container}>
                <Card className={`mb-2 ${styles.user_card}`}>
                    <Card.Body className={styles.user_card_inner}>
                        <Card className={`mb-1 ${styles.user_inner_card}`}>
                            <Card.Title>김사과</Card.Title>
                            <ListGroup.Item>부서</ListGroup.Item>
                        </Card>
                        <div className={styles.user_card_btn}>
                            <Button>설문보기</Button>
                            <Button>정보수정</Button>
                        </div>
                    </Card.Body>
                </Card>
             </div>
            </div>
            <Footer/>
        </div>
    );
}

export default ManagerUserList