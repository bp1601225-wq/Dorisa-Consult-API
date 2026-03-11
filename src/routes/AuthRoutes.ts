import {Router} from "express"
import { AuthController } from "../controllers/AuthController"

export const AuthRouter = Router()

AuthRouter.post("/auth", AuthController.Login)