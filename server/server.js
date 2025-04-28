import express from 'express';
import express from 'express';
import dotenv from 'dotenv';
import triviaRoutes from './routes/triviaRoutes.js';

dotenv.config();

const app = express();

import cors from 'cors';
app.use(cors());

app.use(express.json());

// Route to new game
app.use('/', triviaController);

//route to login
app.use('/', loginRoute);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(':ok_hand: MongoDB connected');
  } catch (error) {
    console.log(':-1::skin-tone-2: MongoDB connection error:', error.message);
    throw new Error('MongoDB connection failed');
  }
};
connectDB();

// Listener
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
