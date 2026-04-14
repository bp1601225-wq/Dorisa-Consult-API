import { UserController } from "../controllers/userController";
import { Router } from "express";
import { authMiddleware } from "../middleware/AutthenticationChecker";
import { AllowedRoles } from "../middleware/AllowedRoles";

export const userRoutes = Router()

userRoutes.get('/get-all-user', authMiddleware, AllowedRoles("Admin"),  UserController.GetAllUsers)




userRoutes.post('/create-users',authMiddleware,AllowedRoles("Admin"), UserController.CreateUser)


userRoutes.put('/update-users/:id', authMiddleware, AllowedRoles("Admin"),UserController.EditUser)
