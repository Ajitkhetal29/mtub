import { fetchUsers } from "../controller/user.js";

import express from "express";

const userRouter = express.Router();

userRouter.get("/getUser", fetchUsers);
export default userRouter;
