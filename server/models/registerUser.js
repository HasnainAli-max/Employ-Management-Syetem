import mongoose from "mongoose";

let signupSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true        
    },
    email: {
        type: String,
        required: true,
        unique: true,        
    },
    password: {
        type: String,
        required: true,      
    },
    address: String,
    contact: String, 
    role: {
        type: Number,
        default: 1
    }
},
    {
        timestamps: true
    }
)

let SignupModel = mongoose.model("signups", signupSchema)
export default SignupModel