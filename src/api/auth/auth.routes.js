import express from "express";
import { registerUser, loginUser, logoutUser } from "./auth.controller.js";
const userRouter = express.Router();

// Registration Route
userRouter.post("/register", registerUser);

// Login Route
userRouter.post("/login", loginUser);

// Logout Route
userRouter.post("/logout", logoutUser);

export default userRouter;
