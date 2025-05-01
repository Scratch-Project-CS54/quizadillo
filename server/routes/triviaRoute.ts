import express, {Request, Response, NextFunction} from 'express';
import triviaController from '../controllers/triviaController.js';
const router = express.Router();

//route to new questions
router.post('/questions', triviaController.saveHistory, (req:Request, res:Response): void =>{
    res.status(200).json({ result: res.locals.newHistory });
    return;
});

router.get('/history', triviaController.getHistory, (req:Request, res:Response): void =>{
    res.status(201).json(res.locals.history);
    return;
});

export default router;
