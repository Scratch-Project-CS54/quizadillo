"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const loginControllertest_js_1 = __importDefault(require("../controllers/loginControllertest.js"));
const router = express_1.default.Router();
//route to signup for new user
router.post('/signup', loginControllertest_js_1.default.createUser);
//route to the logged in page when succesfully logged in, or send an error
router.post('/login', loginControllertest_js_1.default.verifyUser);
exports.default = router;
