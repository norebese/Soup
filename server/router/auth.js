import e from 'express'
import * as AuthController from '../controller/auth.js'

const router = e.Router();


// =================================
// ========== 관리자 회원가입 ==========
// =================================

// 사업자 등록 여부 체크 /checkcompany?num=
router.get('/checkcompany', AuthController.CheckCompany)


// 관리자 회원가입
router.post('/adminsignup', AuthController.addAdmin)


// =================================
// ========== 유저  회원가입 ==========
// =================================

// 기업이름 검색 /searchcompany?name=
router.get('/searchcompany', AuthController.searchCompany)

// 유저 회원가입
router.post('/usersignup', AuthController.addUser)


// ================================= 
// ============  로그인  =============
// =================================

// 로그인
router.post('/sginin', AuthController.SiginIn)

// ================================= 
// ========  아이디 중복 체크  =========
// =================================

// 아이디 중복 체크 /checkid?userid=
router.get('/checkid', AuthController.CheckuserId)

export default router
