import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const loginSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 6 }
});

const Login = mongoose.model('Login', loginSchema);

export default Login;