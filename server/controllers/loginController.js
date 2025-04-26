import Login from '../models/loginModel.js';

const loginController = {};

//this will get all users from the login database
loginController.getAllUsers = async (req, res) => {
    try {
        const users = await Login.find({});
        res.status(200).json(users)
    }
    catch (err) {
        console.log('error in getAllUsers:', err.message)
        return res.status(500).json({error: 'Failed to get users'})
    }
};

//create user
loginController.createUser = async(req, res, next) => {
    try{
        const { username, password } = req.body;
        if (!username || !password){return next({err: 'missing username or password in request body'})};
        if (password.length < 6){return res.status(400).json({err: 'password must be at least 6 characters long'})}

        const newLogin = new Login({ username, password });
        await newLogin.save();

        res.locals.newLogin = newLogin;
    }
}