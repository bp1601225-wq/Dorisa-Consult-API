import { UserController } from "../controllers/userController";
import { Router } from "express";
import {  } from "../middleware/AutthenticationChecker";

export const userRoutes = Router()

userRoutes.get('/get-all-users',   UserController.GetAllUsers)

userRoutes.post('/create-users', UserController.CreateUser)

userRoutes.put('/update-users/:id',UserController.EditUser)

userRoutes.delete("/delete-user/:id", UserController.DeleteUser)
