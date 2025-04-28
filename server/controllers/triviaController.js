import express from 'express';
import History from '../models/historyModel.js';
const router = express.Router();

const triviaController = {};

triviaController.saveHistory = async (req, res, next) => {
  const { question, userAnswer, correctAnswer } = req.body;
  console.log(req.body);
  try {
    const newHistory = new History({ question, userAnswer, correctAnswer });
    await newHistory.save();
    return res.status(200).json({ result: newHistory });
  } catch (err) {
    console.log('error in saveHistory:', err.message);
    return next({ err: `triviaController.saveHistory failed: ${err.message}` });
  }
};

triviaController.getHistory = async (req, res, next) => {
  try {
    const history = await History.find({});
    res.status(200).json(history);
  } catch (err) {
    console.log('error in getHistory:', err.message);
    return res.status(500).json({ error: 'Failed to get answer history' });
  }
};

export default triviaController;
