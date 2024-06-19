import express from "express";
import { signup,signin,google } from "../controllers/auth.controller.js";

const AuthRouter = express.Router();

AuthRouter.post("/signup",signup);
AuthRouter.post("/signin",signin);
AuthRouter.post("/google",google);

export default AuthRouter;