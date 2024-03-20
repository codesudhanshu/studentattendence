const express = require('express')
const LoginContoller = require('../contollers/LoginContoller')
const router = express.Router()

router.post("/login",LoginContoller)
module.exports = router