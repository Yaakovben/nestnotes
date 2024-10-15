import { Schema } from "mongoose";
import { IUser } from "./user.interface";
import { timeStamp } from "console";

export  const UserSchema = new Schema<IUser>({
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,

    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    


},{timestamps:true})