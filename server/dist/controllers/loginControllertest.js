import Login from '../models/loginModel.js';
const loginController = {
    //this will get all users from the login database
    getAllUsers: async (req, res) => {
        try {
            const users = await Login.find({});
            res.status(200).json(users);
        }
        catch (err) {
            console.log('error in getAllUsers:', err.message);
            return res.status(500).json({ error: 'Failed to get users' });
        }
    },
    //create user
    createUser: async (req, res, next) => {
        try {
            const { username, password } = req.body;
            if (!username || !password) {
                return next({ err: 'missing username or password in request body' });
            }
            ;
            if (password.length < 6) {
                return res.status(400).json({ err: 'password must be at least 6 characters long' });
            }
            const newLogin = new Login({ username, password });
            await newLogin.save();
            res.locals.newLogin = newLogin;
            return res.status(201).json({ login: newLogin });
        }
        catch (err) {
            console.log('error in createUser:', err.message);
            return next({ err: `loginController.createUser failed: ${err.message}` });
        }
        ;
    },
    //verify the user to login
    verifyUser: async (req, res, next) => {
        const { username, password } = req.body;
        try {
            const existing = await Login.findOne({ username, password });
            if (!existing) {
                return res.status(401).json({ message: 'invalid user or password' });
            }
            ;
            req.session = { username };
            res.locals.login = existing;
            return res.status(200).json({ login: existing });
        }
        catch (err) {
            return next({ err: `loginController.verifyUser failed ${err.message}` });
        }
        ;
    }
};
export default loginController;
