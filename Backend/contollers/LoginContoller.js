const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SignupModel = require('../models/SignupModel');

const LoginContoller = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if email exists in the database
        const user = await SignupModel.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        // Compare the provided password with the hashed password in the database
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        // Generate JWT token for authentication
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        
        res.status(200).json({ message: "Login successful", token });
    } catch (error) {
        console.error("Login Error:", error);
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = LoginContoller;
