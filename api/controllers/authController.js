import User from "../models/userModel.js"
import bcryptjs from 'bcryptjs';
import {errorHandler} from "../utils/error.js"
import jwt from 'jsonwebtoken';

export const signup = async(req,res,next)=>{
    const {username, email, password} = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10); //10 is salt number 
    const newUser = new User({username, email, password: hashedPassword});
    try{
        await newUser.save();
        res.status(201).json("User created succesfully")

    }catch(err){
        next(err);
    }
};

export const signin = async(req,res,next)=>{
    const {email, password} = req.body;
    try{
        const validUser = await User.findOne({email});
        if(!validUser){
            return next(errorHandler(404, "Email Not Found"));
        }
        
        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if(!validPassword){
            return next(errorHandler(401, "Wrong Credentials"));
        } 
        const token = jwt.sign({id: validUser._id}, process.env.JWT_SECRET);
        const{ password:pass, ...rest} = validUser._doc;  //here we are collecting the password property and renaming it to pass and we are collecting remainig all to rest

        res.cookie('access_token', token, {httpOnly:true}).status(200)
        .json({rest, access_token:token});

    }catch(err){
        next(err);
    }
}
