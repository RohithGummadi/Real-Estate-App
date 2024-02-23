import User from "../models/userModel.js"
import bcryptjs from 'bcryptjs';

export const signup = async(req,res)=>{
    const {username, email, password} = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10); //10 is salt number 
    const newUser = new User({username, email, password: hashedPassword});
    try{
        await newUser.save();
        res.status(201).json("User created succesfully")

    }catch(err){
        res.status(500).json(err.message);

    }
};
