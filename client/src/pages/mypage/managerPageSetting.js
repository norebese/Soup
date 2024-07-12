import {icon} from '../../assets';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import styles from "./mypage.module.css";
import { useNavigate } from 'react-router-dom';


const ManagerPageSetting = () =>{

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
          <div className={styles.user_info}>
              <div className={styles.user_fix}>
                <div className={styles.user_company}>기업이름</div>
                <div className={styles.user_greet}>환영합니다 user님!</div>
                <div className={styles.user_lastlogin}>마지막 접속일자 : </div>
              </div>
          </div>
          <div className={styles.button_container}>
            <div className={styles.button_1area}>
              개인정보 수정
            </div>
            <div className={styles.button_1area}>
              기업정보 수정
            </div>
            <div className={styles.button_1area}>
              유저 관리
            </div>
            <div className={styles.button_1area}>
              메시지 관리
            </div>
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

export default ManagerPageSetting
