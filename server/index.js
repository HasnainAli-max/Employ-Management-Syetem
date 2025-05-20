import express from 'express'
import dbConnection from './database/dbcon.js'
import cors from 'cors'
import listRouter from './routers/userList.js'
import newsignuproute from './routers/newSignup.js'
import dotenv from 'dotenv'
import SignupModel from './models/registerUser.js'
import ProductModel from './models/ProductModel.js'
import multerroute from './routers/MulterRoute.js'
import mongoose from 'mongoose'

const app = express()
app.use(express.json())
// dbConnection()

dotenv.config()
const port = process.env.PORT


app.use(cors());
app.use(multerroute)


app.use(listRouter)
app.use(newsignuproute)


try {
        mongoose.connect("mongodb+srv://hasnainaliconsole:kDe4awBxXUyPwffy@novu-pk.rzwglve.mongodb.net/?retryWrites=true&w=majority&appName=Novu-pk")
.then(() => console.log("Connected to MongoDB"))
} catch (error) {
        
}





app.use('/uploads', express.static('./uploads'));




app.get("/list", async(req, res)=>{
        let data  = await Usermodel.find()
        res.send(data)
})

// getting single user record
app.get("/list/:id", async(req, res)=>{
       let result = await SignupModel.findOne({_id: req.params.id}) 
       res.send(result)       
})


app.delete("/list/:id", async(req, res)=>{    
        let result = await SignupModel.deleteOne({_id: req.params.id})
        res.send(result)
})

app.put("/users/:id", async(req, res)=>{
        let result = await SignupModel.updateOne(
                {_id: req.params.id},                
                {$set: req.body},                
        )
        res.send(result)
})





app.listen(port,()=>{
    console.log(`Server is started at port ${port}`)
})