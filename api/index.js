import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/userRoute.js";
import authRouter from "./routes/authRoute.js";
import { err } from "./middlewares/authMiddleware.js";
dotenv.config()


mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
    console.log("Connected to MongoDB")
    })
.catch((err)=>{
    console.log(err)
})

const app = express();
app.use(express.json());

app.listen(3000, ()=>{
    console.log("Server is running in port 3000")
})


//Middleware
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);



//Middleware
app.use(err)