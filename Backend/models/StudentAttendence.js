const mongoose = require('mongoose');

const StudentAttendenceSchema = mongoose.Schema({
    name:{
        type: String,
        required:true,
    },
    classes:{
        type: Number,
        required:true,
    },
    section:{
        type: String,
        required: true,
    },
    rollno:{
        type: Number,
        default: 1,
    },
    date:{
        type: Date,
        default: Date.now()
    },
    attended: {
        type: Boolean,
        default: false, 
    },
})

const StudentAttendence = mongoose.model('StudentAttendence', StudentAttendenceSchema);

module.exports = StudentAttendence;
