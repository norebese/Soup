import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

import {config} from '../config/config.js';
import { useLocalTimeStamps, useVirtualId} from "../config/mongodb.js";


const surveySchema = new mongoose.Schema({
  S_Code: { type: String },
  S_Title: { type: String },
  S_Total: { type: Number, default: 0 }
});


const userSchema = new mongoose.Schema({
  C_Code: { type: String, required: true, ref: 'Company' },
  Team: { type: String, required: true },
  Position: { type: String, default: '' },
  Name: { type: String, required: true },
  gender: { type: Boolean, required: true },
  Birth: { type: Date, required: true },
  userId: { type: String, unique: true, required: true },
  userPw: { type: String, required: true },
  SurveyList: { type: [surveySchema], default: [] },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
}, { timestamps: true });

useLocalTimeStamps(userSchema);
useVirtualId(userSchema);

// 비밀번호 해시화
userSchema.pre('save', async function(next) {
  if (this.isModified('userPw') || this.isNew) {
    const salt = await bcrypt.genSalt(parseInt(config.bcrypt.saltRound));
    this.userPw = await bcrypt.hash(this.userPw, salt);
  }
  next();
});

// 비밀번호 비교 메서드
userSchema.methods.comparePassword = function(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.userPw);
};

const User = mongoose.model('User', userSchema);
export default User;