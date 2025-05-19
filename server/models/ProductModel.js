import mongoose from "mongoose";


const ProductScheme = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    image:String,
    quantity:Number,
    
})
let ProductModel = mongoose.model("products", ProductScheme)
export default ProductModel