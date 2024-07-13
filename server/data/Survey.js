import mongoose from "mongoose";
import { Schema } from "mongoose";

const AnswerSchema = new Schema({
  answer_id: Number,
  answer_text: String,
  score: Number
});

const QuestionSchema = new Schema({
  question_id: Number,
  question_text: String,
  answers: [AnswerSchema]
});

const SurveySchema = new Schema({
  survey_code: { type: String, unique: true, required: true },
  title: String,
  questions: [QuestionSchema],
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

const Survey = mongoose.model('Survey', SurveySchema);