import express from "express";
import { signup } from "../controllers/auth.controller.js";

const AuthRouter = express.Router();

AuthRouter.post("/signup",signup);

export default AuthRouter;