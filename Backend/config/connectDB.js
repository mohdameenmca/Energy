const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async () => {
  try {
    // Ensure that process.env.MONGODB_URI is correctly set in your .env file
    await mongoose.connect(process.env.MONGODB_URI, {     
        useNewUrlParser: true,
        useUnifiedTopology: true,
         });
    console.log('MongoDB connected');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err.message);
    process.exit(1); // Exit the process if the connection fails
  }
};

module.exports = connectDB;
