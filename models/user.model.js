 import mongoose from "mongoose";

 const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique: true
    },
    email:{
        type:String,
        required:true,
        unique: true
    },
    password:{
        type:String,
        required:true,
        unique: true
    },
    avatar:{
        type:String,
        default: "https://cdn-icons-png.freepik.com/512/6596/6596121.png"
    },
 },{timestamps:true});

 const User = mongoose.model('User',userSchema);

 export default User;