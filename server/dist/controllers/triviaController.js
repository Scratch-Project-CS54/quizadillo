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
const express_1 = __importDefault(require("express"));
const historyModel_js_1 = __importDefault(require("../models/historyModel.js"));
const router = express_1.default.Router();
const triviaController = {};
triviaController.saveHistory = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { question, userAnswer, correctAnswer } = req.body;
    console.log(req.body);
    try {
        const newHistory = new historyModel_js_1.default({ question, userAnswer, correctAnswer });
        yield newHistory.save();
        return res.status(200).json({ result: newHistory });
    }
    catch (err) {
        console.log('error in saveHistory:', err.message);
        return next({ err: `triviaController.saveHistory failed: ${err.message}` });
    }
});
triviaController.getHistory = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const history = yield historyModel_js_1.default.find({});
        res.status(200).json(history);
    }
    catch (err) {
        console.log('error in getHistory:', err.message);
        return res.status(500).json({ error: 'Failed to get answer history' });
    }
});
exports.default = triviaController;
