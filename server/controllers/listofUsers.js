import express from 'express'
import Usermodel from '../database/User.js'
import SignupModel from '../models/registerUser.js'


const listofAllUsers = async(req, res)=>{
    let data  = await SignupModel.find()
    res.send(data)
}

export default listofAllUsers