import mongoose from "@nestjs/common";
import Schema from "mongoose";


const UserSchema =  new mongoose.Schema({

    id: Number,
    name: String,
    username: String,
    password: String,
    email: String,

})