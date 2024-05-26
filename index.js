import express from 'express';
import mongoose from 'mongoose';
import UserRouter from './routes/user.routes.js ';
import dotenv from 'dotenv';
import AuthRouter from './routes/auth.route.js';
dotenv.config();

mongoose
.connect(process.env.MONGO_URI)
.then(()=>{
    console.log('DB Connection successful ✌️')
})
.catch((err)=>{
    console.log(err)
})

const app = express() ;
app.use(express.json())
app.listen(3000, ()=>{
    console.log('Server is running on port 3000'); 
})

app.use('/api/user',UserRouter); 
app.use('/api/auth',AuthRouter); 

app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500 ;
    const message= err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    })
})