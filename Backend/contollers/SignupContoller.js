const SignupModel = require('../models/SignupModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const SignupController = async (req, res) => {
    try {
        const { name, email, password, cpassword } = req.body;

        // Check if email already exists in the database
        const userExists = await SignupModel.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: "User already registered with this email" });
        }

        // Check if password is empty or undefined
        if (!password || password.trim() === '') {
            return res.status(400).json({ message: "Password is required" });
        }

        // Check if password matches confirm password
        if (password !== cpassword) {
            return res.status(400).json({ message: "Password did not match with confirm password" });
        }

        // Generate salt
        const salt = await bcrypt.genSalt(10);

        // Hash the password with the generated salt
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new user with hashed password
        const newUser = new SignupModel({ name, email, password: hashedPassword });

        // Save the user to the database
        await newUser.save();

        // Generate JWT token for authentication
        const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(201).json({ message: "User registered successfully", token });
    } catch (error) {
        console.error("Signup Error:", error);
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = SignupController;
