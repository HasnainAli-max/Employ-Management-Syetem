import express from 'express'
import registerUser from '../controllers/signUpController.js'

let router = express.Router()


router.post("/register", registerUser)


export default router