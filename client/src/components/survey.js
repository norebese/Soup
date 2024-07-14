import React, { useState, useEffect } from 'react';
import styles from '../pages/survey/survey.module.css';

const SurveyContainer = ({ data, onSelect, currentQuestionIndex, selectedOptions }) => {
    const [selectedOption, setSelectedOption] = useState('');

    useEffect(() => {
        setSelectedOption(selectedOptions[currentQuestionIndex] || '');
    }, [currentQuestionIndex, selectedOptions]);

    const handleOptionChange = (option) => {
        setSelectedOption(option);
        onSelect(option);
    };

    return (
        <div className={styles.survey_container}>
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
                                        {index === 0 || index === 2 || index === 4 ? option : ''}
                                    </div>
                                ))}
                            </div>
                            <div className={styles.radio_container}>
                                {data.options.map((option, index) => (
                                    <div key={index} onClick={() => handleOptionChange(option)} className={styles.radio_area}>
                                        <input
                                            type="radio"
                                            name="answer"
                                            className={styles.big_radio}
                                            checked={selectedOption === option}
                                            onChange={() => handleOptionChange(option)}
                                        />
                                    </div>
                                ))}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SurveyContainer;
