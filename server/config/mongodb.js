import mongoose from 'mongoose'

import { config } from './config';

// mongodb 연결
export async function connectDB() {
  return mongoose.connect(config.mongodb.mongodbUrl);
}

// mongoose 혹 정의
// _id 가상 필드 생성
export function useVirtualId(schema) {
  schema.virtual('id').get(function () {
    return this._id.toString();
  });
  schema.set('toJSON', { virtuals: true });
  schema.set('toObject', { virtuals: true });
}

// createdAt과 updatedAt 필드를 로컬 시간으로 설정하는 pre-save 훅
export function useLocalTimeStamps(schema) {
  schema.pre('save', function(next) {
    const now = new Date();
    const localTime = new Date(now.getTime() - (now.getTimezoneOffset() * 60000));
    this.createdAt = localTime;
    this.updatedAt = localTime;
    next();
  });
}
