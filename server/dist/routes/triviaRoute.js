"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const triviaController_js_1 = __importDefault(require("../controllers/triviaController.js"));
const router = express_1.default.Router();
//route to new questions
router.post('/questions', triviaController_js_1.default.saveHistory);
router.get('/history', triviaController_js_1.default.getHistory);
exports.default = router;
