import { Request, Response, NextFunction  } from "express";
import { prisma } from "../prisma/client";

const UserController = {
    async GetAllUsers(_req: Request, res: Response, next: NextFunction) { 
        try {  
                const users = await prisma.user.findMany(); 
            res.status(200).json({
                message: "Get all users",
                data: users
            });
        } catch (error: any) {
            next(error);
        }
    },

    
    async CreateUser(req:Request, res:Response, next:NextFunction
    ) {
        try {
            const incomingData = req.body
            const user = await prisma.user.create({
                data:incomingData
            })
            return res.status(200).json({
                message: "User created successfully",
                data: user
            })
        } catch (error:any) {
next(error)
        }
    },

    async DeleteUser(req:Request, res:Response, next:NextFunction) {
        try {
            const id = req.params.id as string;
            await prisma.user.delete({
                where: {
                    id
                }
            })
            return res.status(200).json({
                message: "User deleted successfully",
            })
        } catch (error:any) {
            next(error)
        }           
        },

    async UpdateUser(req:Request, res:Response, next:NextFunction) {
        try {
            const id = req.params.id as string;         
            const incomingData = req.body
            const user = await prisma.user.update({
                where: {
                    id
                },
                data: incomingData
            })
            return res.status(200).json({
                message: "User updated successfully",
                data: user
            })     
        } catch (error:any) {
            next(error)             
    }
    },

    async GetUserById(req:Request, res:Response, next:NextFunction) {
        try {
            const id = req.params.id as string;         
            const user = await prisma.user.findUnique({
                where: {
                    id
                }
            })
            return res.status(200).json({       

                message: "Get user by id",
                data: user
            })     
        } catch (error:any) {
            next(error)             
    }
    }
};

export default UserController;