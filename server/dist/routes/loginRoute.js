import express from 'express';
import loginController from '../controllers/loginControllertest.js';
const router = express.Router();
//route to signup for new user
router.post('/signup', loginController.createUser);
//route to the logged in page when succesfully logged in, or send an error
router.post('/login', loginController.verifyUser);
export default router;
