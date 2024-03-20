const {body} = require('express-validator')

const SignupValidator = () =>{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const validation = [
        body('name').notEmpty().withMessage("name can not be Empty"),
        body('email').notEmpty().isEmail().matches(emailRegex).withMessage("email can not be empty"),
        body('password').notEmpty().withMessage('password can not be empty'),
        body('cpassword').notEmpty().withMessage('cpassword can not be empty')
    ]
    return validation
}
module.exports = SignupValidator