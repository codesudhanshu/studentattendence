const express = require('express')
const StudentAttendanceFilterController = require('../contollers/StudentAttendenceFilterContoller')
const router = express.Router()

router.get("/filter",StudentAttendanceFilterController)
module.exports = router