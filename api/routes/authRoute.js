import express from 'express';
import { signup } from '../controllers/authController.js';
import { signin } from '../controllers/authController.js';
import { google } from '../controllers/authController.js';

const authRouter = express.Router();
authRouter.post("/signup", signup);
authRouter.post("/signin", signin);
authRouter.post("/google", google);

export default authRouter;