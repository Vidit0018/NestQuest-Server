import express from 'express';
import mongoose from 'mongoose';
import UserRouter from './routes/user.routes.js ';
import dotenv from 'dotenv';
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

app.listen(3000, ()=>{
    console.log('Server is running on port 3000'); 
})

app.use('/api/user',UserRouter); 