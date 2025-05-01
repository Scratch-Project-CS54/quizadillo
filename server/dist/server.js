import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import triviaRoute from './routes/triviaRoute.js';
import loginRoute from './routes/loginRoute.js';
dotenv.config();
const app = express();
app.use(cors({
    origin: 'http://localhost:5173', // your frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Routes
app.use('/api', loginRoute);
app.use('/', triviaRoute);
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'Quizadillo',
        });
        console.log('👌👌 MongoDB connected');
    }
    catch (err) {
        if (err instanceof Error)
            throw new Error(`Error ${err.message}`);
        else
            throw new Error(`Error is not an Object in the mongoDB: ${err}`);
    }
};
connectDB();
// Listener
const PORT = 4000;
app.listen(PORT, '0.0.0.0', () => console.log(`🎁🎁🎁 Server running on port ${PORT}`));
