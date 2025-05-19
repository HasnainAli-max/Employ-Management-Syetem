import express from 'express'
import newSignupController, { dummyController, loginController } from '../controllers/newSignupController.js'
import { requireSignIn } from '../middleware/authMiddleware.js'


let newsignuproute = express.Router()


newsignuproute.post("/newregister", newSignupController)
newsignuproute.post("/login", loginController)
newsignuproute.get("/test", requireSignIn, dummyController)
// newsignuproute.get("/test", dummyController)


export default newsignuproute