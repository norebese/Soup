import styles from "./mypage.module.css";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useNavigate } from 'react-router-dom';

import Header from "../../components/Header";
import Footer from "../../components/Footer";

const ManagerPageSetting = () =>{

  const navigate = useNavigate();

  return (
      <div className={styles.body_container}>
      <Header/>
      <div className={styles.div_container}>
        <div className={styles.card_container}>
          <Card className={`mb-2 ${styles.user_info}`}>
            <Card.Header>기업이름</Card.Header>
            <Card.Body>
              <Card.Title>환영합니다 user님!</Card.Title>
            </Card.Body>
            <Card.Footer className="text-muted">마지막 접속일자 :</Card.Footer>
          </Card>
            {/* <div className={styles.user_fix}>
              <div className={styles.user_company}>기업이름</div>
              <div className={styles.user_greet}>환영합니다 user님!</div>
              <div className={styles.user_lastlogin}>마지막 접속일자 : </div>
            </div> */}
          <div className={styles.list_container}>
            <ListGroup className={styles.setting_area}>
            <ListGroup.Item action onClick={() => navigate('/')}>
                  개인정보 수정
              </ListGroup.Item>
              <ListGroup.Item action onClick={() => navigate('/')}>
                  기업정보 수정
              </ListGroup.Item>
              <ListGroup.Item action onClick={() => navigate('/manager/manageruserlist')}>
                  유저 관리
              </ListGroup.Item>
              <ListGroup.Item action onClick={() => navigate('/')}>
                  메시지 관리
              </ListGroup.Item>
            </ListGroup>
          </div>
        </div>
      </div>
      <Footer/>
    </div>

  );
}

export default ManagerPageSetting
