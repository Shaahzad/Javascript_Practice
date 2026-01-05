import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/env.js";


export const verifytoken = (req, res, next) => {
    let token;
    let authHeader = req.headers.Authorization || req.headers.authorization;

    if (authHeader && authHeader.startsWith("Bearer ")) {
        token = authHeader.split(" ")[1];
        if(!token){
            return res.status(401).json({
                status: 401,
                message: "No Token, Authorization Denied",
            })
        }
        try {
            const decode = jwt.verify(token, JWT_SECRET);
            req.user = decode;
            next()
        } catch (error) {
            res.status(400).json({
                status: 400,
                message: "Token is not valid",
            })
        }
    } else {
        return res.status(401).json({
            status: 401,
            message: "No Token, Authorization Denied",
        })
    }
}
