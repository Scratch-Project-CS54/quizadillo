import express from 'express';
import History from '../models/historyModel.js';
const router = express.Router();
const triviaController = {
    saveHistory: async (req, res, next) => {
        const { question, userAnswer, correctAnswer } = req.body;
        console.log(req.body);
        try {
            const newHistory = new History({ question, userAnswer, correctAnswer });
            await newHistory.save();
            res.locals.newHistory = newHistory;
            next();
            return;
        }
        catch (err) {
            console.log('error in saveHistory:', err.message);
            next({ err: `triviaController.saveHistory failed: ${err.message}` });
            return;
        }
    },
    getHistory: async (req, res, next) => {
        try {
            const history = await History.find({});
            res.locals.history = history;
            next();
            return;
        }
        catch (err) {
            if (err instanceof Error)
                throw new Error(`Error ${err.message}`);
            else
                throw new Error('There was an eror fetching your account');
        }
    }
};
export default triviaController;
