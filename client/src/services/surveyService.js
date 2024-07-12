import axios from 'axios';

const surveyData = {
    startDate: "2024-07-06",
    title: "직무스트레스 조사 테스트(김동인)",
    question: "질문 1번",
    questionText: "질문1 테스트",
    options: ["매우 아니다", "아니다", "보통", "그렇다", "매우 그렇다"]
};

// 더미 데이터를 반환하는 함수
export const getSurveyData = async () => {
    return new Promise((resolve) => {
        resolve({ data: surveyData });
    });
};
