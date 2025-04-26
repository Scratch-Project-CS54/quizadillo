import express from 'express';   
import dotenv from 'dotenv';
import triviaRoutes from './routes/triviaRoutes.js';  

dotenv.config();

const app = express();  

// Middleware
app.use(express.json());

// Routes
app.use('/api/trivia', triviaRoutes);

// Listener
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));