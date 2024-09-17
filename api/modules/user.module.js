import mongoose from "mongoose";

// Here we create the rules for our database
const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique:true,
    },
    password:{
        type: String,
        required: true,
        
    }
}, {timestamps:true}); //we use the last code to sort user inputs

const USer = mongoose.model('User', userSchema)

export default User;