import {icon} from '../../assets';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import styles from "./mypage.module.css";
import { useNavigate } from 'react-router-dom';


const MyPageSetting = () =>{

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
        <div className={styles.setting_area}>
            비밀번호 변경
          </div>
          <div className={styles.setting_area}>
            (변경할 개인 정보) 변경
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

export default MyPageSetting
