const express = require('express')
const StudentCreatesContoller = require('../contollers/StudentCreatesContoller')
const StudentCeationValidate = require('../validators/StudentCreationValidate')
const router = express.Router()

router.post("/create",StudentCeationValidate(),StudentCreatesContoller)
module.exports = router