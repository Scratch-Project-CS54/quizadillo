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
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const triviaRoute_js_1 = __importDefault(require("./routes/triviaRoute.js"));
const loginRoute_js_1 = __importDefault(require("./routes/loginRoute.js"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: 'http://localhost:5173', // your frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Routes
app.use('/api', loginRoute_js_1.default);
app.use('/', triviaRoute_js_1.default);
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.default.connect(process.env.MONGODB_URI, {
            dbName: 'Quizadillo',
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('👌👌 MongoDB connected');
    }
    catch (error) {
        console.log('👎🏻👎🏻 MongoDB connection error:', error.message);
        throw new Error('MongoDB connection failed');
    }
});
connectDB();
// Listener
const PORT = process.env.PORT || 4000;
app.listen(PORT, '0.0.0.0', () => console.log(`🎁🎁🎁 Server running on port ${PORT}`));
