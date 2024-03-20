const express = require('express')
const StudentCeation = require('../models/StudentCreation')

const StudentSearchContoller =async(req,res) =>{
    try {
        const Student = await StudentCeation.find()
        if(Student.length > 0){
            res.status(200).json(Student)
        }else{
            res.status(404).json({message: "No student found!"})
        }
    } catch (error) {
     res.status(500).json({message:`Invalide Credential ${error}`})   
    }
}
module.exports = StudentSearchContoller