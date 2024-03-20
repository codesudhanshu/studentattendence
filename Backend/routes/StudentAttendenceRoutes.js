const express = require('express')
// const StudentCeationValidate = require('../validators/StudentCreationValidate')
const StudentAttendanceController = require('../contollers/StudentAttendenceController')
const router = express.Router()

router.post("/attendence/:id",StudentAttendanceController)
module.exports = router