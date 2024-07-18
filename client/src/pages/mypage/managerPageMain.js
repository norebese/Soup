import Card from 'react-bootstrap/Card';
import styles from "./mypage.module.css";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SurveyPieChart from '../../components/surveyPieChart';

const MyPageManager = () =>{

    return (
        <div className={styles.body_container}>
          <Header/>
          <div className={styles.div_container}>
            <div className={styles.card_container}>
              <Card className={`mb-2 ${styles.user_info}`}>
                <div className={styles.user_fix}>ooo 님 안녕하세요</div>
              </Card>
              <div className={styles.graph_area}>
                스트레스 수준별 인원 비율
              </div>
              <div className={styles.graph_area}>
                월별 직무스트레스 점수 변화 추이 그래프
              </div>
            </div>
          </div>
          <Footer/>
        </div>
      );
}


export default MyPageManager