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
      "hot dog": 148,
      "hot dogColor": "hsl(311, 70%, 50%)",
      "burger": 28,
      "burgerColor": "hsl(312, 70%, 50%)",
      "sandwich": 34,
      "sandwichColor": "hsl(358, 70%, 50%)",
      "kebab": 139,
      "kebabColor": "hsl(47, 70%, 50%)",
      "fries": 115,
      "friesColor": "hsl(138, 70%, 50%)",
      "donut": 7,
      "donutColor": "hsl(84, 70%, 50%)"
    },
    {
      "country": "AE",
      "hot dog": 46,
      "hot dogColor": "hsl(261, 70%, 50%)",
      "burger": 115,
      "burgerColor": "hsl(182, 70%, 50%)",
      "sandwich": 37,
      "sandwichColor": "hsl(352, 70%, 50%)",
      "kebab": 2,
      "kebabColor": "hsl(99, 70%, 50%)",
      "fries": 77,
      "friesColor": "hsl(230, 70%, 50%)",
      "donut": 67,
      "donutColor": "hsl(342, 70%, 50%)"
    },
    {
      "country": "AF",
      "hot dog": 30,
      "hot dogColor": "hsl(101, 70%, 50%)",
      "burger": 159,
      "burgerColor": "hsl(76, 70%, 50%)",
      "sandwich": 116,
      "sandwichColor": "hsl(205, 70%, 50%)",
      "kebab": 119,
      "kebabColor": "hsl(155, 70%, 50%)",
      "fries": 26,
      "friesColor": "hsl(175, 70%, 50%)",
      "donut": 114,
      "donutColor": "hsl(353, 70%, 50%)"
    },
    {
      "country": "AG",
      "hot dog": 161,
      "hot dogColor": "hsl(218, 70%, 50%)",
      "burger": 72,
      "burgerColor": "hsl(290, 70%, 50%)",
      "sandwich": 98,
      "sandwichColor": "hsl(342, 70%, 50%)",
      "kebab": 119,
      "kebabColor": "hsl(188, 70%, 50%)",
      "fries": 142,
      "friesColor": "hsl(177, 70%, 50%)",
      "donut": 61,
      "donutColor": "hsl(241, 70%, 50%)"
    },
    {
      "country": "AI",
      "hot dog": 9,
      "hot dogColor": "hsl(297, 70%, 50%)",
      "burger": 193,
      "burgerColor": "hsl(224, 70%, 50%)",
      "sandwich": 70,
      "sandwichColor": "hsl(92, 70%, 50%)",
      "kebab": 155,
      "kebabColor": "hsl(107, 70%, 50%)",
      "fries": 146,
      "friesColor": "hsl(300, 70%, 50%)",
      "donut": 199,
      "donutColor": "hsl(79, 70%, 50%)"
    },
    {
      "country": "AL",
      "hot dog": 70,
      "hot dogColor": "hsl(277, 70%, 50%)",
      "burger": 174,
      "burgerColor": "hsl(28, 70%, 50%)",
      "sandwich": 153,
      "sandwichColor": "hsl(11, 70%, 50%)",
      "kebab": 146,
      "kebabColor": "hsl(276, 70%, 50%)",
      "fries": 94,
      "friesColor": "hsl(272, 70%, 50%)",
      "donut": 129,
      "donutColor": "hsl(142, 70%, 50%)"
    },
    {
      "country": "AM",
      "hot dog": 196,
      "hot dogColor": "hsl(41, 70%, 50%)",
      "burger": 165,
      "burgerColor": "hsl(303, 70%, 50%)",
      "sandwich": 138,
      "sandwichColor": "hsl(304, 70%, 50%)",
      "kebab": 156,
      "kebabColor": "hsl(241, 70%, 50%)",
      "fries": 77,
      "friesColor": "hsl(140, 70%, 50%)",
      "donut": 104,
      "donutColor": "hsl(116, 70%, 50%)"
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
                  <div style={{ height: '300px', width: '100%' }}>
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