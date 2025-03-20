<<<<<<< HEAD
const mongoose = require('mongoose');

const connectDatabase = () => {
    const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/products';
    mongoose.connect(uri, {
    })
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err));
};

=======
const mongoose = require('mongoose');

const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

>>>>>>> 5417ad366a3d5078390286ca8c87b84794fbd974
module.exports = connectDatabase;