const express = require('express')
const SignupController = require('../contollers/SignupContoller')
const SignupValidator = require('../validators/SignupValidator')
const router = express.Router()
router.post("/signup",SignupValidator(),SignupController)
module.exports = router