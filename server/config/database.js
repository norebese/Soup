import { connectDB } from "./mongodb.js";

// 공통 데이터베이스 연결 함수
export default async function connectDatabases() {
  try {
    await connectDB();
    console.log('MongoDB connected.');
  } catch (error) {
    console.error('Unable to connect to the databases:', error);
    throw error;
  }
}