import { UserController } from "../controllers/userController";
import { Router } from "express";

export const userRoutes = Router()

userRoutes.get('/get-all-user', UserController.GetAllUsers)
userRoutes.post('/create-users', UserController.CreateUser)
userRoutes.put('/update-users/:id', UserController.EditUser)
