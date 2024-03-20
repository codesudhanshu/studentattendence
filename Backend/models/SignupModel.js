const mongoose = require('mongoose');

const Signupschema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    cpassword: {
        type: String, // Keep the type definition but remove the required constraint
    }
});

const SignupModel = mongoose.model("SignupModel", Signupschema);
module.exports = SignupModel;
