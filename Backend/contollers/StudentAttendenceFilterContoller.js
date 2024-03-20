const StudentAttendence = require('../models/StudentAttendence');

const StudentAttendanceFilterController = async (req, res) => {
    try {
        const { date } = req.query;
        if (!date) {
            return res.status(400).json({ message: "Date parameter is required" });
        }
        
        // Extract the date without time component and format it as YYYY-MM-DD
        const selectedDate = new Date(date).toISOString().split('T')[0];
        
        // Calculate the start and end of the selected date for comparison
        const startDate = new Date(selectedDate);
        startDate.setHours(0, 0, 0, 0);
        const endDate = new Date(selectedDate);
        endDate.setHours(23, 59, 59, 999);
        
        const students = await StudentAttendence.find({
            date: { $gte: startDate, $lte: endDate }
        });
        
        if (!students || students.length === 0) {
            return res.status(404).json({ message: "No records found for the selected date" });
        }
        
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching students', error: error.message });
    }
};

module.exports = StudentAttendanceFilterController;
