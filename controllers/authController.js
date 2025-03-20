const User = require('../models/user');
const generateToken = require('../utils/generateToken');
const hashPassword = require('../utils/hashPassword');
const bcrypt = require('bcrypt');

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }
    
    const hashedPassword = await hashPassword(password);

    // Create new user
    const user = await User.create({ name, email, password: hashedPassword });

    // Generate JWT token
    const token = generateToken(user._id);

    res.status(201).json({
      message: 'User created successfully', 
      token,
       data: {
        user,
       },
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log('Request Body:', req.body);

    
    const user = await User.findOne({ email });
    console.log('User Found:', user); 

    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isPasswordValid = await user.matchPassword(password);
    console.log('Password Valid:', isPasswordValid); 

    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = generateToken(user._id);

    res.status(200).json({ message: 'Login successful', token });
  } catch (err) {
    console.error('Login Error:', err);
    res.status(500).json({ message: err.message });
  }
};
module.exports = { signup, login };