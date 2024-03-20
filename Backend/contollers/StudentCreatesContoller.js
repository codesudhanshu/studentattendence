const express = require('express')
const StudentCreation = require("../models/StudentCreation")
const StudentCeation = require('../models/StudentCreation')

const StudentCreatesContoller = async(req,res) =>{
    const {name,email,phoneNumber,classes,section,address,city,parentsName} = req.body
    try {
        const student = await StudentCeation({
            name:name,
            email:email,
            phoneNumber:phoneNumber,
            classes:classes,
            section:section,
            address:address,
            city:city,
            parentsName: parentsName
        })

        const lastStudent = await StudentCreation.findOne({}, {}, { sort: { 'rollno': -1 } });
        if (lastStudent) {
            student.rollno = lastStudent.rollno + 1;
        }

        const saveStudent = await student.save()
        res.status(200).json(saveStudent)
    } catch (error) {
        res.status(500).json({message:`invalid creadential ${error}`})
    }
}
module.exports = StudentCreatesContoller