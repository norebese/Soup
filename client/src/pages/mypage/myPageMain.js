import styles from "./mypage.module.css";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

const MyPageUser = () =>{

    return (
        <div className={styles.body_container}>
          <Header/>
          <div className={styles.div_container}>
            <div className={styles.card_container}>
              <div className={styles.user_info}>
                <div className={styles.user_icon}>
                </div>
                <div className={styles.user_fix}>유저 정보 수정</div>
              </div>
              <div className={styles.graph_area}>
                6개월간의 변화가 나타나는 그래프
              </div>

            </div>
          </div>
          <Footer/>
        </div>
      );
}


export default MyPageUser