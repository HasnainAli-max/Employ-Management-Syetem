import express from 'express'
import SignupModel from '../models/registerUser.js'
import { comparingPassword, hashPassword } from '../utils/hasingPassword.js'
import JWT from 'jsonwebtoken'



const newSignupController = async(req, res)=>{
     try {
         // Validate inputs
        const {name, email, password, address, contact} = req.body

        if(!name){
             return res.send({Message: "Name is required"})
        }
        if(!email){
             return res.send({Message: "Email is required"})
        }
        if(!password){
             return res.send({Message: "Password is required"})
        }
        if(!address){
             return res.send({Message: "Address is required"})
        }
        if(!contact){
             return res.send({Message: "Contact is required"})
        }
        // Whether the said user is registered or not ?
        // Checking if a user is already exists ?

        let existingUser = await SignupModel.findOne({email})

        if(existingUser){
            return res.status(200).send({
                success: false,
                Message: "User already exists",
            })
        }

        // Hashing a Password: 

        // ???????????????????????????????????????????
        // ???????????????????????????????????????????
        // ???????????????????????????????????????????

        let finalHashedPassword = await hashPassword(password)

         // If the user does not exist, then register the user.         
         let user = await new SignupModel({
                name, 
                email, 
                password: finalHashedPassword, 
                address, 
                contact
            }
        ).save()
    
         // Send response to client with success message and user data.
         res.status(200).send({
            success: true,
            Message: "User registered successfully...!!",
            user
         })   

        
     } catch (error) {
         res.status(500).send({
            success: false,
            Message: "Internal Server Error",
            error: error.message
         })         
     }
 
}
export default newSignupController


// Login API
export const loginController = async(req, res)=>{
     try {          
           const {email, password} = req.body           
           // Check if email and password are provided.
           if(!email ||!password){
                return res.status(400).send({
                    success: false,
                    Message: "Email and Password are required"
                })
           }
          // Check if user exists in the database.
           let user = await SignupModel.findOne({email})
           if(!user){
                return res.status(404).send({
                    success: false,
                    Message: "User not registered, please sign-up first"
                })
           }

           // Check if password matches with the hashed password in the database.
           let match = await comparingPassword(password, user.password)
           if(!match){
                return res.status(401).send({
                    success: false,
                    Message: "Incorrect Password"
                })
           }
           
          //  Signing of token to user
           let token = JWT.sign({_id: user._id}, process.env.JWT_Key, {expiresIn: '40s'})

           res.status(200).send({
               success: true,
               Message: "Logged-in successfully",
               user:{
                    name: user.name,
                    email: user.email, 
                    role:user.role,                   
               },
               token               
           })

     } catch (error) {
          res.status(500).send({
               success: false,
               Message: "Something went wrong while logged-in",
               error: error.message
            })    
     }
}

export const dummyController = (req, res) =>{
     res.send("hello")     
}