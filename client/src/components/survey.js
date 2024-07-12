import React from 'react';
import styles from '../pages/survey/survey.module.css';
import ProgressBar from 'react-bootstrap/ProgressBar';

const SurveyContainer = ({data}) => {
    console.log(data)
    return (
        <div className={styles.survey_container}>
            <div className={styles.survey_info}>
                <div className={styles.survey_text_area}>
                    <p>{data.startDate}</p>
                    <div className={styles.text_head}>{data.title}</div>
                </div>
                <div className={styles.progress_bar}>
                    dd
                </div>
            </div>
            <div className={styles.survey_area}>
                <div className={styles.survey_text_area}>
                    <div className={styles.text_head}>{data.question}</div>
                    <div className={styles.question_area}>
                    {data.questionText}
                    </div>
                    <div className={styles.score_area}>
                        <form action="" className={styles.form_style}>
                            <div className={styles.radio_tag_container}>
                                {data.options.map((option, index) => (
                                    <div key={index} className={styles.radio_tag}>
                                        {option}
                                    </div>
                                ))}
                            </div>

                            <div className={styles.radio_container}>
                                {data.options.map((option, index) => (
                                    <div key={index} className={styles.radio_area}>
                                        <input type="radio" name="answer" className={styles.big_radio} />
                                    </div>
                                ))}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SurveyContainer;
