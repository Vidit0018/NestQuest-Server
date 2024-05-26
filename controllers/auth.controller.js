import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs'
import { errorHandeler } from "../utils/error.js";
export const signup = async (req,res,next)=>{
    const {username,email,password} = req.body;
    const hashedPassword = bcryptjs.hashSync(password,10);
    console.log(hashedPassword)
    const newUser = new User ({username,email,password:hashedPassword});
    try {
        await newUser.save()
        res.status(201).json({
            message:"user created successfully 😘"
        })
        
    } catch (error) {
        // res.status(404).json({
        //     status:'fail',
        //     message: error.message
        // })
        next(error)
    }
}