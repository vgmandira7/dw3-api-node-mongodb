//importar o express
import express from 'express'

const userRoutes = express.Router();

//IMportar o controller
import userController from '../controllers/userController.js';

//endpoint para cadastrar um usuario

userRoutes.post("/user", userController.createUser)

userRoutes.post("/auth", userController.loginUser)

export default userRoutes;
