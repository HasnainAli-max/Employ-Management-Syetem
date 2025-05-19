import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    address: String,
    contact: String
})

const Usermodel = mongoose.model("users",userSchema)
export default Usermodel;
