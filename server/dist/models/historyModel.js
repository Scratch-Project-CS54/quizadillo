"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
// breakdown the schema into two schemas to pass the information around and fill in the tables.
const historySchema = new Schema({
    //! need this schema to pull the question the correct answer and user answer
    question: { type: String, required: true },
    userAnswer: { type: String, required: true },
    correctAnswer: { type: String, required: true },
});
const quizResultSchema = new Schema({
    score: { type: Number, required: true },
    totalQuestions: { type: Number, required: true },
    date: { type: Date, default: Date.now }, //! needed this for the date so we knew when they played
    history: [historySchema],
});
const QuizResult = mongoose_1.default.model('QuizResult', quizResultSchema);
const History = mongoose_1.default.model('History', historySchema);
exports.default = History;
