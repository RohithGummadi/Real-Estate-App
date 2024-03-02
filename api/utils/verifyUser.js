import { errorHandler } from "./error.js";
import jwt from 'jsonwebtoken';
export const verifyToken = async (req, res, next) => {
    try {
        const token = req.cookies && req.cookies.access_token;
        if (!token) {
            throw errorHandler(401, "Unauthorized");
        }

        const user = jwt.verify(token, process.env.JWT_SECRET);
        console.log(user)
        req.user = user;
        next();
    } catch (error) {
        console.log(error)
        next(errorHandler(403, "Forbidden"));
    }
};
