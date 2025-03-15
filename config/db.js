const mongoose = require('mongoose');

const connectDatabase = () => {
    const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/products';
    mongoose.connect(uri, {
    })
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err));
};

module.exports = connectDatabase;