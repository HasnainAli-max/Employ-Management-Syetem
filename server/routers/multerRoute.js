import express from 'express';
import multer from 'multer';
import ProductModel from '../models/ProductModel.js';
const multerroute = express.Router();

// Configure Multer storage
const imgconfig = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './uploads'); // Ensure this directory exists
    },
    filename: (req, file, callback) => {
        // Use a unique filename to prevent overwriting
        callback(null, `image-${file.originalname}`);
    }
});

// File filter to check if the uploaded file is an image
const isImage = (req, file, callback) => {
    if (file.mimetype.startsWith("image")) {
        callback(null, true);
    } else {
        callback(new Error("Invalid file type, only images are allowed"), false);
    }
};

// Initialize Multer with the storage configuration and file filter
const upload = multer({
    storage: imgconfig,
    fileFilter: isImage
});

// Route to register a product with an image
multerroute.post("/registerr", upload.single("photo"), async (req, res) => {
    const { filename } = req.file ; // Safely access filename
    const { name, price, description , quantity } = req.body;

    // Check if all required fields are provided
    if (!filename || !name || !price || !description ||!quantity) {
        return res.status(400).json({ status: 400, message: 'Fill all the data' });
    }

    try {
        // Create a new product in the database
        const newProduct = new ProductModel({
            name,
            price,
            description,
            image: filename,
            quantity
        });

        await newProduct.save(); // Save the product to the database
        res.status(201).json({ status: 201, message: 'Product registered successfully', newProduct });
    } catch (error) {
        res.status(500).json({ status: 500, error: error.message });
    }
});

// Route to get all products
// multerroute.get("/getdata", async (req, res) => {
//     try {
//         const products = await ProductModel.find();
//         res.status(200).json({ status: 200, products });
//     } catch (error) {
//         res.status(500).json({ status: 500, error: error.message });
//     }
// });




multerroute.get("/getdata", async (req, res) => {
    try {
        const products = await ProductModel.find();
        res.status(200).json({ status: 200, products });
    } catch (error) {
        res.status(500).json({ status: 500, error: error.message });
    }
});

// Route to delete a product by ID
multerroute.delete("/getdata/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deletedProduct = await ProductModel.findByIdAndDelete(id); // No need for {_id: id}

        if (!deletedProduct) {
            return res.status(404).json({ status: 404, message: 'Product not found' });
        }

        res.status(200).json({ status: 200, deletedProduct });
    } catch (error) {
        res.status(500).json({ status: 500, error: error.message });
    }
});


// getting single user record
multerroute.get("/getdata/:id", async(req, res)=>{
   let result = await ProductModel.findOne({_id: req.params.id}) 
   res.send(result)       
})




// app.get("/list", async(req, res)=>{
//     let data  = await Usermodel.find()
//     res.send(data)
// })

// // getting single user record
// app.get("/list/:id", async(req, res)=>{
//    let result = await SignupModel.findOne({_id: req.params.id}) 
//    res.send(result)       
// })


// app.delete("/list/:id", async(req, res)=>{    
//     let result = await SignupModel.deleteOne({_id: req.params.id})
//     res.send(result)
// })

// app.put("/users/:id", async(req, res)=>{
//     let result = await SignupModel.updateOne(
//             {_id: req.params.id},                
//             {$set: req.body},                
//     )
//     res.send(result)
// })


export default multerroute;