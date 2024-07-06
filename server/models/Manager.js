import mongoose from 'mongoose';
import bcrypt from 'bcrypt'

import config from '../config/config.js';
import { useLocalTimeStamps, useVirtualId} from "../config/mongodb.js";

const managerSchema = new mongoose.Schema({
  C_Code: { type: String, required: true, ref: 'Company' },
  Name: { type: String, required: true },
  Email: { type: String, required: true, default: '' },
  userId: { type: String, unique: true, required: true },
  userPw: { type: String, required: true }
}, { timestamps: true });

useLocalTimeStamps(managerSchema);
useVirtualId(managerSchema);

// 비밀번호 해시화
managerSchema.pre('save', async function(next) {
  if (this.isModified('userPw') || this.isNew) {
    const salt = await bcrypt.genSalt(config.bcrypt.saltRound);
    this.userPw = await bcrypt.hash(this.userPw, salt);
  }
  next();
});

// 비밀번호 비교 메서드
managerSchema.methods.comparePassword = function(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.userPw);
};

const Manager = mongoose.model('Manager', managerSchema);
export default Manager;