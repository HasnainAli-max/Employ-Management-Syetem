import express from 'express'
import listofAllUsers from '../controllers/listofUsers.js'
let listRouter = express.Router()

listRouter.get("/list", listofAllUsers)

export default listRouter;