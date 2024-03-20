const express = require('express')
const router = express.Router()
const StudentSearchContoller = require('../contollers/StudentSearchContoller')
const StudentCeationValidate = require('../validators/StudentCreationValidate')

router.get("/search",StudentCeationValidate(),StudentSearchContoller)
module.exports = router