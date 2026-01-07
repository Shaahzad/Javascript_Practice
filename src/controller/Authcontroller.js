import bcrypt from "bcryptjs";
import User from "../schema/authschema.js";
import jwt from "jsonwebtoken";


export const registerController = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ status: 400, message: "All fields are required" });
        }

        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ status: 400, message: "User already exists" });
        }

        const bcryptPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            name,
            email,
            password: bcryptPassword
        });

        await newUser.save();
        return res.status(201).json({ status: 201, message: "User created successfully" });

    } catch (error) {
        console.log(error);
    }
}

export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ status: 400, message: "All fields are required" });
        }

        const isUserExists = await User.findOne({ email });
        if (!isUserExists) {
            return res.status(400).json({ status: 400, message: "User does not exist" });
        }

        const isPasswordValid = await bcrypt.compare(password, isUserExists.password);
        if (!isPasswordValid) {
            return res.status(400).json({ status: 400, message: "Invalid password" });
        }


        const token = jwt.sign({
            id: isUserExists._id,
            email: isUserExists.email,
        }, process.env.JWT_SECRET, {
            expiresIn: "1h"
        })
        return res.status(200).json(
            {
                status: 200,
                message: "User logged in successfully",
                token
            });
    } catch (error) {
        console.log(error)
    }
}

export const getCurrentUser = async (req, res) => {
    try {
        const user = req.user;
        return res.status(200).json({ status: 200, message: "User fetched successfully", user });
    } catch (error) {
        console.log(error);
    }
}

export const logoutController = async (req, res) => {
    try {
        return res.status(200).json({
            status: 200,
            message: "User logged out successfully"
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ status: 500, message: "Server error" });
    }
};
