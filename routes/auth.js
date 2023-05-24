const router = require('express').Router()
const { userRegister, userLogin, userLogout} = require('../controllers/authController')


router.post('/register', userRegister)

router.post('/login', userLogin)

router.get('/logout', userLogout)


module.exports = router