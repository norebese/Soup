import e from 'express'
import * as AuthController from '../controller/auth'

const router = e.Router();

// search CompanyName
router.get('/searchcompanyname?name=name', AuthController.SearchCompanyName)

// search CompanyId
router.get('/serchcompanyid?id=id', AuthController.SearchCompanyId)

// check CompanyNum
router.get('/searchcompany?num=num', AuthController.CheckCompanyNum)

// check UserId
router.get('/userid?id=id', AuthController.CheckUserId)

// SignUp
router.post('/signup', AuthController.SignUp)

// SignIn
router.post('/signin', AuthController.SignIn)

// SignOut
router.post('/signout?', AuthController.sginout)

//MyPage
router.get('/mypage', AuthController.MyPage)


export default router
