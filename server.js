<<<<<<< HEAD
require('dotenv').config();
const express = require('express');
const connectDatabase = require('./config/db');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');
const authRoutes = require('./routes/authRoutes');


const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Routes
app.use('/api', productRoutes);
app.use('/api', cartRoutes);
app.use('/api', authRoutes);


// Start Server
const startServer = async () => {
  try {
    await connectDatabase(); 
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (error) {
    console.error('Server error:', error);
  }
};

=======
require('dotenv').config();
const express = require('express');
const connectDatabase = require('./config/db');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Routes
app.use('/api', productRoutes);
app.use('/api', cartRoutes); 

// Start Server
const startServer = async () => {
  try {
    await connectDatabase();
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (error) {
    console.error('Server error:', error);
  }
};

>>>>>>> 5417ad366a3d5078390286ca8c87b84794fbd974
startServer();