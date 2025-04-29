import express, {Request, Response, NextFunction} from 'express';
import History from '../models/historyModel.js';
const router = express.Router();



const triviaController = {

  saveHistory: async (req: Request, res: Response, next: NextFunction) => {
    
    const { question, userAnswer, correctAnswer } = req.body;
    console.log(req.body);
    try {
      const newHistory = new History({ question, userAnswer, correctAnswer });
      await newHistory.save();
      return res.status(200).json({ result: newHistory });
    } catch (err: any) {
      console.log('error in saveHistory:', err.message);
      return next({ err: `triviaController.saveHistory failed: ${err.message}` });
    }
  },

  getHistory: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const history = await History.find({});
      res.status(200).json(history);
    } catch (err: any) {
      console.log('error in getHistory:', err.message);
      return res.status(500).json({ error: 'Failed to get answer history' });
    }
  }
};
export default triviaController;
