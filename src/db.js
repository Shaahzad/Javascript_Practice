import mongoose from "mongoose";

export const connection = () => {
    try {
        mongoose.connect("mongodb://127.0.0.1:27017/practiceDB");
        console.log("DB connected");
    } catch (error) {
        console.log(error);
    }
}