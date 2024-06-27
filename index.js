import express from 'express';
import mongoose from 'mongoose';
import UserRouter from './routes/user.routes.js ';
import dotenv from 'dotenv';
import AuthRouter from './routes/auth.route.js';
import listingRouter from './routes/listing.route.js'
import cookieParser from 'cookie-parser';
import cors from 'cors'
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
app.use(express.json());
app.use(cookieParser());

app.use(cors({
    origin: 'https://nestquest-global.netlify.app',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    exposedHeaders: ['Content-Length', 'Access-Control-Allow-Origin', 'Access-Control-Allow-Headers', 'Access-Control-Allow-Methods', 'Access-Control-Expose-Headers', 'Set-Cookie'],
    credentials: true
  }));
  
  

app.listen(3000, ()=>{
    console.log('Server is running on port 3000'); 
})
app.get('/' ,(req,res) =>{
    res.status(200).json("api connected")
})
app.use('/api/user',UserRouter); 
app.use('/api/auth',AuthRouter); 
app.use('/api/listing',listingRouter); 

app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500 ;
    const message= err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    })
})