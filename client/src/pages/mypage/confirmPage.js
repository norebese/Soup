// 개인정보 수정시 거치는 비밀번호 확인 페이지

import {icon} from '../../assets';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import styles from "./mypage.module.css";
import { useNavigate } from 'react-router-dom';

const ConfirmPage= () =>{

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
                <form className={styles.form_style}>
                    <input className={`${styles.password} ${styles.input_style}`} type="password" placeholder="비밀번호" id={styles.userpw}/>
                    <button>확인</button>
                </form>
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

export default ConfirmPage