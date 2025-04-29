"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const loginModel_js_1 = __importDefault(require("../models/loginModel.js"));
const loginController = {
    //this will get all users from the login database
    getAllUsers: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const users = yield loginModel_js_1.default.find({});
            res.status(200).json(users);
        }
        catch (err) {
            console.log('error in getAllUsers:', err.message);
            return res.status(500).json({ error: 'Failed to get users' });
        }
    }),
    //create user
    createUser: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { username, password } = req.body;
            if (!username || !password) {
                return next({ err: 'missing username or password in request body' });
            }
            ;
            if (password.length < 6) {
                return res.status(400).json({ err: 'password must be at least 6 characters long' });
            }
            const newLogin = new loginModel_js_1.default({ username, password });
            yield newLogin.save();
            res.locals.newLogin = newLogin;
            return res.status(201).json({ login: newLogin });
        }
        catch (err) {
            console.log('error in createUser:', err.message);
            return next({ err: `loginController.createUser failed: ${err.message}` });
        }
        ;
    }),
    //verify the user to login
    verifyUser: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const { username, password } = req.body;
        try {
            const existing = yield loginModel_js_1.default.findOne({ username, password });
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
    })
};
exports.default = loginController;
