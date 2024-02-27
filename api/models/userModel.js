import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique:true
    },
    email:{
        type: String,
        required:true,
        unique: true
    },
    password:{
        type: String,
        required:true
    },
    avatar:{
        type: String,
        default: "https://res.cloudinary.com/dyx9awfbx/image/upload/v1709054796/anspzuww0dbq5jada9v9.jpg"
    },
    
}, {timestamps : true});

const User = mongoose.model("User", userSchema);

export default User;

