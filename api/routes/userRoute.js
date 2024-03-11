import express from 'express';
import {test, updateUser, deleteUser, getUser} from "../controllers/userController.js"
import { verifyToken } from '../utils/verifyUser.js';
import { getUserListing } from '../controllers/userController.js';

 

const userRouter = express.Router();
userRouter.get("/test", test)
userRouter.post("/update/:id", verifyToken, updateUser);
userRouter.delete("/delete/:id",verifyToken, deleteUser);
userRouter.get("/listings/:id/", verifyToken, getUserListing);
userRouter.get("/:id", verifyToken, getUser)

export default userRouter;