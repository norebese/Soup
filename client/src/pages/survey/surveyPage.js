import {icon} from '../../assets';
import styles from "./survey.module.css";
import React, { useState } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

const SurveyPage = () => {
    
    return (
        <>
        <div className={styles.body_container}>
        <div className={styles.div_container}>
            <div className={styles.header}>
                <div className={styles.head_container}>
                  <div className={styles.logo}>
                    <img src="" alt="logo" />
                  </div>
                  <div className={styles.alert}>
                   ㅇ
                </div>
              </div>
            </div>
          <div className={styles.survey_container}>
            <div className={styles.survey_info}>
                <div className={styles.survey_text_area}>
                    <p>20xx.xx.xx~</p>
                    <div className={styles.text_head}>설문조사 이름</div>
                </div>
                <div className={styles.progress_bar}>
                    dd
                </div>
            </div>
            <div className={styles.survey_area}>
                <div className={styles.survey_text_area}>
                    <div className={styles.text_head}>질문 1번</div>
                    <div className={styles.question_area}>
                        질문이 들어갈 위치
                    </div>
                    <div className={styles.score_area}>
                        <form action="" className={styles.form_style}>
                            <div className={styles.radio_tag_container}>
                                <div className={styles.radio_tag}>
                                    매우<br/>아니다
                                </div>
                                <div className={styles.radio_tag}>
                                    보통
                                </div>
                                <div className={styles.radio_tag}>
                                    매우<br/>그렇다
                                </div>
                            </div>

                            <div className={styles.radio_container}>
                                <div className={styles.radio_area}>
                                    <input type="radio" name="answer" id="strongly_disagree"className={styles.big_radio}/>
                                </div>
                                <div className={styles.radio_area}>
                                    <input type="radio" name="answer" id="disagree" className={styles.middle_radio}/>
                                </div>
                                <div className={styles.radio_area}>
                                    <input type="radio" name="answer" id="netural"/>
                                </div>
                                <div className={styles.radio_area}>
                                    <input type="radio" name="answer" id="agree" className={styles.middle_radio}/>
                                </div>
                                <div className={styles.radio_area}>
                                    <input type="radio" name="answer" id="strongly_agree" className={styles.big_radio}/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
          </div>
        </div>
        <div className={styles.footer}>
            <div className={styles.menu}>■</div>
            <div className={styles.menu}>■</div>
            <div className={styles.menu}>■</div>
        </div>
    </div>
    </>
    
    );
}


export default  SurveyPage