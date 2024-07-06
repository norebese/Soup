import {icon} from '../../assets';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import styles from "./mypage.module.css";
import { useNavigate } from 'react-router-dom';


const myPageUser = () =>{

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
            <div className={styles.card_container}>
              <div className={styles.user_info}>
                <div className={styles.user_icon}>
                </div>
                <div className={styles.user_fix}></div>
              </div>
              <div className={styles.card_2area}></div>
              <div className={styles.card_1area}></div>
              <div className={styles.card_1area}></div>
              <div className={styles.card_2area}></div>
              <div className={styles.card_2area}></div>
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


export default myPageUser