import mongoose from 'mongoose';

const Schema = mongo.Schema;

const historySchema = new Schema({
  question: { type: String },
  answer: { type: String },
});

const History = mongoose.model('History', historySchema);

export default History;

/* recommended updates for schema based on working on the profile for history.

breakdown the schema into two schemas to pass the information around and fill in the tables.


const historySchema = new mongoose.Schema({ //! need this schema to pull the question the correct answer and user answer
    question: { type: String, required: true },
    userAnswer: { type: String, required: true },
    correctAnswer: { type: String, required: true },
  });
  
  const quizResultSchema = new mongoose.Schema({
    score: { type: Number, required: true },
    totalQuestions: { type: Number, required: true },
    date: { type: Date, default: Date.now }, //! needed this for the date so we knew when they played
    history: [historySchema],
  });
  
  const QuizResult = mongoose.model('QuizResult', quizResultSchema);
  
  export default QuizResult;
*/
