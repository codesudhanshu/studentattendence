const mongoose = require('mongoose')

const studentschema = mongoose.Schema({
    name:{
        type: String,
        required:true,
    },
    email:{
        type: String,
        required:true
    },
    phoneNumber:{
        type:String,
        required:true
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
    address:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    parentsName:{
        type: String,
        // required: true
    },
    date:{
        type: Date,
        default: Date.now()
    },
})

const StudentCeation = mongoose.model('StudentCreation',studentschema)
module.exports=StudentCeation;