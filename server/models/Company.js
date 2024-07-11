import mongoose from 'mongoose';
import { useLocalTimeStamps, useVirtualId } from '../config/mongodb.js';

const managerListSchema = new mongoose.Schema({
  M_Id: { type: String, required: true },
  M_Name: { type: String, required: true }
});

const userListSchema = new mongoose.Schema({
  U_Id: { type: String, required: true },
  U_Name: { type: String, required: true }
});

const surveyListSchema = new mongoose.Schema({
  S_Code: { type: String, required: true },
  S_Title: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
}, { timestamps: true });

const companySchema = new mongoose.Schema({
  C_Code: { type: String, unique: true },  // 회사 코드 필드
  C_Name: { type: String, required: true },  // 회사 이름 필드
  C_CEO: { type: String, required: true },  // CEO 이름 필드
  C_TEL: { type: String, default: '' },  // 전화번호 필드
  C_EID: { type: String, required: true },  // 기업 식별자 필드
  ManagerList: { type: [managerListSchema], default: [] },  // 관리자 목록 필드
  TeamList: { type: [String], default: [] },  // 팀 목록 필드
  UserList: { type: [userListSchema], default: [] },  // 유저 목록 필드
  defaultSurveyList: { type: [surveyListSchema], default: [] },  // 기본 설문 목록 필드
  customSurveyList: { type: [surveyListSchema], default: [] }  // 사용자 정의 설문 목록 필드
}, { timestamps: true });

useLocalTimeStamps(companySchema);  // 현재 시간으로 초기화
useVirtualId(companySchema);  // 가상 id 필드 생성

// 랜덤 기업 코드 생성
companySchema.pre('save', async function (next) {
  // C_Code 필드가 비어 있는 경우에만 실행합니다.
  if (!this.C_Code) {
    let unique = false;
    let generatedCode;
    while (!unique) {
      // 유니크한 코드가 생성될 때까지 반복합니다.
      generatedCode = Math.random().toString(36).substring(2, 8).toUpperCase();
      // 랜덤 코드를 생성합니다. 예: 'ABC123'
      const existingCompany = await mongoose.models.Company.findOne({ C_Code: generatedCode });
      // 생성된 코드가 이미 존재하는지 확인합니다.
      if (!existingCompany) {
        // 존재하지 않으면, 유니크한 코드로 확인하고 반복을 종료합니다.
        unique = true;
      }
    }
    // 유니크한 코드를 C_Code 필드에 할당합니다.
    this.C_Code = generatedCode;
  }
  next(); // 다음 미들웨어 또는 저장 작업을 실행합니다.
});

const Company = mongoose.model('Company', companySchema);
export default Company;
// {
//   Code:'00112',
//   Name:'가나다',
//   CEO:'김사과',
//   TEL:'0212345678',
//   EID:'102200112',
//   ManagerList:[
//     {
//       M_Id:'orange12',
//       M_Name:'오랜지',
//     },
//     {
//       M_Id:'banana22',
//       M_Name:'반하나'
//     }
//   ],
//   TeamList:[
//     '인사','개발','경영',
//   ],
//   UserList:[
//     {
//       U_Id:'cherry',
//       U_Name:'채에리'
//     },
//     {
//       U_Id:'melon',
//       U_Name:'이메론'
//     }
//   ],
//   defaultSurveyList:[
//     {
//       S_Code:'0001',
//       S_Title:'직무스트레스 검사',
//       C_Code:'00000', // 기본 설문
//       Questions:[

//       ],
//       created_at:"2024-06-06 16:24:30",
//       updated_at:"2024-06-06 16:24:30"
//     }
//   ],
//   customSurveyList:[

//   ],
//   created_at:"2024-06-06 16:24:30",
//   updated_at:"2024-06-06 16:24:30"
// }