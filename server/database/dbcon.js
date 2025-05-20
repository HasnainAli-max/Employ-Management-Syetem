import mongoose from "mongoose";

const dbConnection = async()=>{
    try {

        await mongoose.connect("mongodb://localhost:27017/FenalProject")
        console.log(`Database connected successfully`)

    } catch (error) {

        console.log(`Error in DB Connection`)
    }
}
export default dbConnection