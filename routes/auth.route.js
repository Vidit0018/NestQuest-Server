import express from "express";
import { signup,signin } from "../controllers/auth.controller.js";

const AuthRouter = express.Router();

AuthRouter.post("/signup",signup);
AuthRouter.post("/signin",signin);

export default AuthRouter;