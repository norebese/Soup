# Soup client Server

## install
1. yarn install
2. create .env in root Directory
3. yarn run start

## 브렌치 생성 규칙
개발중인 기능-작성자
git checkout -b login-soo 

## commit 생성 규칙
개발중인 기능, 상태, 설명
git commit -m "login fix"

## Directory
root/
├── node_modules/
│   ├──...
├── public/
│   ├──...
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   └── footer.js 
│   ├── pages/
│   │   ├── survey/
│   │   │   ├── survey.jsx
│   │   └── Home.jsx
│   ├── routes/
│   │   └── index.js
│   ├── services/
│   │   └── database.js
│   ├── App.js
│   ├── index.js
│   └── .gitignore
├── .env
├── .gitignore
├── package.json
├── README.md
└── yarn.lock

회원관리
  로그인
    로그인 여부에 따라 일반회원, 관리자회원, 시스템 관리자 등으로 구분하여 서비스 제공
    자동 로그인 여부 체크
  회원가입
    유저 회원가입
      아이디 - 고유식별번호
      비밀번호
      성명
      기업코드
      부서
      직급
      (실명인증은 보류)
      생년월일 -> 나이
      성별
      이메일
    관리자 회원가입
      아이디 ✔️
      비밀번호 ✔️
      상호 ✔️
      사업자등록번호 ✔️
      대표자 ✔️
      전화번호 ✔️
      주소 ✔️
      관리자 이름 ✔️
      기업코드 = 자동생성
  마이페이지
    일반회원
      설문 결과 = 이전 설문결과
      통계 시각화(마지막 설문의 통계)
      ToDo
    관리자 회원
      통계(전국 통계, 회사 통계)
      직원 관리(알림 전송(설문/면담/...), 직원 수정/삭제/목록화)
      설문 관리(설문리스트 등록/수정/삭제, 커스텀 설문 등록/수정/삭제)
      일정 관리(사내 일정, 직원 면담 일정 등)
  회원 수정
  회원 탈퇴
  

