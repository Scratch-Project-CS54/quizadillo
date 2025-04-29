import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';

import triviaRoute from './routes/triviaRoute.js';
import loginRoute from './routes/loginRoute.js';

dotenv.config();

const app = express();

app.use(
  cors({
    origin: 'http://localhost:5173', // your frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', loginRoute);
app.use('/', triviaRoute);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: 'Quizadillo',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('👌👌 MongoDB connected');
  } catch (error) {
    console.log('👎🏻👎🏻 MongoDB connection error:', error.message);
    throw new Error('MongoDB connection failed');
  }
};
connectDB();

// Listener
const PORT = process.env.PORT || 4000;
app.listen(PORT, '0.0.0.0', () => console.log(`🎁🎁🎁 Server running on port ${PORT}`));

export {}