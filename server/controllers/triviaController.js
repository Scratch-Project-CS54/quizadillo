import express from 'express';
const router = express.Router();

const triviaController = {};

//this will pull new questions
triviaController.getQuestions = async (req, res) => {
  try {
    const amount = req.query.amount || process.env.DEFAULT_TRIVIA_AMOUNT;
    const difficulty = req.query.difficulty || process.env.DEFAULT_TRIVIA_DIFFICULTY;
    const type = req.query.type || process.env.DEFAULT_TRIVIA_TYPE;

    const url = `${process.env.TRIVIA_API_BASE_URL}?amount=${amount}&difficulty=${difficulty}&type=${type}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Failed to fetch trivia questions');
    }

    const data = await response.json();
    res.json(data.results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching trivia questions' });
  }
};

export default triviaController;
