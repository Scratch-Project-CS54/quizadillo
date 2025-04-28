import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';

import triviaRoute from './routes/triviaRoute.js';
import loginRoute from './routes/loginRoute.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route to new game
app.use('/', triviaRoute);

//route to login
app.use('/', loginRoute);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('👌 MongoDB connected');
  } catch (error) {
    console.log('👎🏻 MongoDB connection error:', error.message);
    throw new Error('MongoDB connection failed');
  }
};
connectDB();

// Listener
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
