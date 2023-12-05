const express = require('express')
const router = express.Router

const login = require('./controller.login/login')

const path = require('path')

// 회원 가입
router.post('/login/register',
    validate([
        body('login_email').notEmpty(),
        body('password').notEmpty(),
    ]),
    login.handleUserRegister
)

// 로그인
router.get('/login',
    validate([
        body('user_id').isInt(),
    ]),
    login.handleUserLogin
)

