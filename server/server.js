import express from 'express';
import dotenv from 'dotenv';
<<<<<<< HEAD
import cors from 'cors';
import mongoose from 'mongoose';

import triviaRoute from './routes/triviaRoute.js';
import loginRoute from './routes/loginRoute.js';
=======
import triviaRoutes from './routes/triviaRoutes.js';
>>>>>>> aaabb58 (game page done, pending for test)

dotenv.config();

const app = express();

<<<<<<< HEAD
app.use(
  cors({
    origin: 'http://localhost:5173', // your frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  })
);
=======
import cors from 'cors';
app.use(cors());
>>>>>>> aaabb58 (game page done, pending for test)

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/api/signup', (req, res) => {
  res.json({ message: 'sign up successful' });
});

// Routes
app.use('/api', loginRoute);
app.use('/', triviaRoute);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
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
<<<<<<< HEAD
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`🎁🎁🎁 Server running on port ${PORT}`));
=======
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
>>>>>>> aaabb58 (game page done, pending for test)
