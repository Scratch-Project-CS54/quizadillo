import express from 'express';
import loginController from '../controllers/loginController.js';
const router = express.Router();
//route to signup for new user
router.post('/signup', loginController.createUser, (req, res) => {
    res.status(201).json({ login: res.locals.newLogin });
    return;
});
//route to the logged in page when succesfully logged in, or send an error
router.post('/login', loginController.verifyUser, (req, res) => {
    res.status(200).json(res.locals.login);
    return;
});
//smartcommit addition2
export default router;
