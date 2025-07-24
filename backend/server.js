import express from "express";
import users from "./user.js";
import userModel from "./models/user.js";
import dotenv from 'dotenv'
import cors from "cors";
import connectDB from "./config/db.js";
import userRouter from "./routes/user.js";
dotenv.config();


const app = express();
app.use(cors());

connectDB();

app.use("/api/user", userRouter);

const addMultipleUsers = async () => {9
  await userModel.insertMany(users);
  console.log("users added");
};

// addMultipleUsers();

app.listen(process.env.PORT, () => {
  console.log("server started");
});
