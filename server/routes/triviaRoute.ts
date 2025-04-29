import express from 'express';
import triviaController from '../controllers/triviaController.js';
const router = express.Router();

//route to new questions
router.post('/questions', triviaController.saveHistory);

router.get('/history', triviaController.getHistory);

export default router;
