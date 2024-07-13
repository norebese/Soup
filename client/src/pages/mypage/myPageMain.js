import styles from "./mypage.module.css";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SurveyBarChart from '../../components/mainBarChart';

const MyPageUser = () =>{

  const navigate = useNavigate();

  const handleAllListClick = () => {
    navigate('/user/surveylist');
  };

  const data = [
    {
      "country": "AD",
      "hot dog": 58,
      "hot dogColor": "hsl(68, 70%, 50%)"
    },
    {
      "country": "AE",
      "hot dog": 80,
      "hot dogColor": "hsl(142, 70%, 50%)"
    },
    {
      "country": "AF",
      "hot dog": 18,
      "hot dogColor": "hsl(313, 70%, 50%)"
    },
    {
      "country": "AG",
      "hot dog": 2,
      "hot dogColor": "hsl(166, 70%, 50%)"
    },
    {
      "country": "AI",
      "hot dog": 175,
      "hot dogColor": "hsl(233, 70%, 50%)"
    },
    {
      "country": "AL",
      "hot dog": 193,
      "hot dogColor": "hsl(355, 70%, 50%)"
    },
    {
      "country": "AM",
      "hot dog": 49,
      "hot dogColor": "hsl(39, 70%, 50%)"
    }
  ]

    return (
        <div className={styles.body_container}>
          <Header/>
          <div className={styles.div_container}>
            <div className={styles.card_container}>
              <Card className={`mb-2 ${styles.user_info}`}>
                <div className={styles.user_fix}>ooo 님 안녕하세요</div>
              </Card>
              <div className={styles.graph_area}>
                <Card className="mb-2">
                  <div style={{ height: '200px', width: '100%' }}>
                    <SurveyBarChart data={data}/>
                  </div>
                </Card>
              </div>
              <div className={styles.info_card_area}>
                <Card className={`mb-2 ${styles.survey_lastDate}`}>
                  <Card.Body>
                    <Card.Title>000 일 전에 설문을 참여했습니다
                    </Card.Title>
                  </Card.Body>
                </Card>
                <div className={styles.survey_scores}>
                  <Card className={`mb-2 ${styles.survey_avg_score}`}>
                    평균 직무스트레스 점수
                  </Card>
                  <Card className={`mb-2 ${styles.survey_avg_score}`}>
                    스트레스 요인 가장 점수가 높은 항목
                  </Card>
                </div>
              </div>
              <div className={styles.survey_list}>
                <Card className="text-center">
                  <Card.Header>나의 설문조사 현황</Card.Header>
                  <Card.Body>
                    <ListGroup>
                      <ListGroup.Item action>
                        설문이름, 작성일, 평균 점수 or 최종점수
                      </ListGroup.Item>
                      <ListGroup.Item action href="#link2">
                        설문이름
                      </ListGroup.Item>
                      <ListGroup.Item action>
                        설문이름
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                  <Button className={styles.survey_alllist} onClick={handleAllListClick}>설문 전체보기</Button>
                </Card>
              </div>
            </div>
          </div>
          <Footer/>
        </div>
      );
}


export default MyPageUser