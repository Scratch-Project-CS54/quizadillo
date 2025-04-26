import mongoose from 'mongoose';

const Schema = mongo.Schema;

const historySchema = new Schema({
    question: {type: String},
    answer: {type: String}
});

const History = mongoose.model('History', historySchema);

export default History;