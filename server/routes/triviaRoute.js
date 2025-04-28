import express from 'express';
import triviaController from '../controllers/triviaController';
const router = express.Router();

//route to new questions
router.get('/questions', triviaController.getQuestions);

export default router;
