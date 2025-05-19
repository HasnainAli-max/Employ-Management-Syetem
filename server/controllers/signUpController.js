import express from 'express'
import Usermodel from '../database/User.js'


const registerUser = async(req, res)=>{
    let data = new Usermodel(req.body)
    let result = await data.save() // saving data into database        
    res.send(result)
}
export default registerUser