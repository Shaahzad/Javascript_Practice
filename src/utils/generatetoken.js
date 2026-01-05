import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/env.js";


const user = {
    id: 1,
    name: 'john',
    role: 'admin',
    department: 'IT',
    accesslevel: 4
}

const token = jwt.sign(user, JWT_SECRET, {expiresIn: "1h"});
console.log(token);