import mongoose from 'mongoose';
import { useLocalTimeStamps, useVirtualId } from '../config/mongodb.js';

// Answer 스키마 정의
const answerSchema = new mongoose.Schema({
  A_Number: { type: Number, required: true },
  A_Text: { type: String, required: true },
  A_Score: { type: Number, required: true }
});

// Question 스키마 정의
const questionSchema = new mongoose.Schema({
  Q_Number: { type: Number, required: true },
  Question: { type: String, required: true },
  AnswerList: [answerSchema]
});

// Survey 스키마 정의
const surveySchema = new mongoose.Schema({
  S_Code: { type: String, required: true, unique: true },
  S_Title: { type: String, required: true },
  C_Code: { type: String, required: true, ref: 'Company' },
  QuestionList: [questionSchema], // QuestionList에 QuestionSchema 포함
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
}, { timestamps: true });

useLocalTimeStamps(surveySchema);
useVirtualId(surveySchema);

// Q_Number 자동 증가 및 AnswerList 정렬
surveySchema.pre('save', function(next) {
  this.QuestionList.forEach((question, index) => {
    if (!question.Q_Number) {
      question.Q_Number = index + 1;
    }
    question.AnswerList.sort((a, b) => a.A_Number - b.A_Number);
  });

  next();
});

surveySchema.pre('save', async function (next) {  // 'save' 훅: 문서가 저장되기 전에 실행됩니다.
  if (!this.S_Code) {  // Code 필드가 비어 있는 경우에만 실행합니다.
    let unique = false;
    let generatedCode;
    while (!unique) {
      // 유니크한 코드가 생성될 때까지 반복합니다.
      generatedCode = Math.random().toString(36).substring(2, 8).toUpperCase();
      // 랜덤 코드를 생성합니다. 예: 'ABC123'
      const existingCompany = await mongoose.models.Survey.findOne({ S_Code: generatedCode });
      // 생성된 코드가 이미 존재하는지 확인합니다.
      if (!existingCompany) {
        // 존재하지 않으면, 유니크한 코드로 확인하고 반복을 종료합니다.
        unique = true;
      }
    }
    // 유니크한 코드를 Code 필드에 할당합니다.
    this.S_Code = generatedCode;
  }
  next(); // 다음 미들웨어 또는 저장 작업을 실행합니다.
});

const Survey = mongoose.model('Survey', surveySchema);
export default Survey;