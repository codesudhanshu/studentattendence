const express = require('express');
const StudentCreation = require('../models/StudentCreation');
const StudentAttendance = require('../models/StudentAttendence');

const StudentAttendenceController = async (req, res) => {
    const { id } = req.params;
    const { attended } = req.body;

    try {
        const student = await StudentCreation.findById(id);
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }

        student.attended = attended;
        await student.save();

        // Check if an attendance record exists for today's date
        const currentDate = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
        const existingRecord = await StudentAttendance.findOne({
            rollno: student.rollno,
            date: currentDate,
        });

        if (existingRecord) {
            // Update the existing attendance record
            existingRecord.attended = attended;
            await existingRecord.save();
        } else {
            // Create a new attendance record
            const attendanceRecord = new StudentAttendance({
                name: student.name,
                classes: student.classes,
                section: student.section,
                rollno: student.rollno,
                attended: attended,
                date: currentDate, // Set the date to today's date
            });
            await attendanceRecord.save();
        }

        res.status(200).json({ message: 'Attendance updated successfully' });
    } catch (error) {
        res.status(500).json({ message: `Error updating attendance: ${error.message}` });
    }
};

module.exports = StudentAttendenceController;
