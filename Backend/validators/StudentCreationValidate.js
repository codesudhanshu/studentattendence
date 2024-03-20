const {body} = require('express-validator')

const StudentCeationValidate = () =>{
    // Regular expression pattern for validating email addresses
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Regular expression pattern for validating phone numbers with country code and 10 digits
    const phoneRegex = /^\+\d{1,3}\d{10}$/;

    // Validation rules for creating a new student
    const createStudentValidation = [
    body('name').notEmpty().trim().escape(),
    body('email').notEmpty().isEmail().withMessage('Invalid email format').matches(emailRegex).withMessage('Invalid email format'),
    body('phoneNumber').notEmpty().matches(phoneRegex).withMessage('Invalid phone number format'),
    body('classes').notEmpty().trim().escape(),
    body('section').notEmpty().trim().escape(),
    body('address').notEmpty().trim().escape(),
    body('city').notEmpty().trim().escape(),
    body('parentsName').notEmpty().trim().escape()
    ];
    return createStudentValidation
}
module.exports = StudentCeationValidate