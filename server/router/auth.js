import e from 'express'
import * as AuthController from '../controller/auth.js'

const router = e.Router();

// =================================
// ========== 관리자 회원가입 ==========
// =================================

// 사업자 등록 여부 체크
router.get('/checkcompanynum', AuthController.CheckCompanyNum)


// 관리자 회원가입
router.post('/adminsignup', AuthController.addAdmin)


// =================================
// ========== 유저  회원가입 ==========
// =================================

// 기업 코드 확인
router.get('/checkcompanyid', AuthController.CheckCompanyId)

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
router.get('/checkid', AuthController.CheckId)

export default router
