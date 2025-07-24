import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
const connectDB = () => {
  mongoose
    .connect(`${process.env.MONGO_URI}`)
    .then(() => {
      console.log("MongoDB database connected");
    })
    .catch((err) => {
      console.log(err);
    });
};

export default connectDB;
