import { Request, Response, NextFunction } from "express";
import { prisma } from "../prisma/client";
import type { rolesType } from "../GlobalTypes";

const RolesController = {
    async GetAllRoles(_req: Request, res: Response, next: NextFunction) { 
        try {
    const roles: rolesType[] = await prisma.role.findMany();
            res.status(200).json(roles);
        } catch (error: any) {
            next(error);
        }
    },

    async CreateRoles(req:Request, res:Response, next:NextFunction
    ) {
        try {

            const incomingData: rolesType = req.body
            const roles: rolesType = await prisma.role.create({
                data:incomingData
            })
            return res.status(200).json({
                message: "Roles created successfully",
                data: roles
            })
        } catch (error:any) {
next(error)
        }
    },

    async DeleteRoles(req:Request, res:Response, next:NextFunction) {
        try {
            const id = req.params.id as string;
            await prisma.role.delete({
                where: {
                    id
                }
            })
            return res.status(200).json({
                message: "Roles deleted successfully",
            })
        } catch (error:any) {
            next(error)
        }       
    },

    async UpdateRoles(req:Request, res:Response, next:NextFunction) {
        try {
            const id = req.params.id as string;
            const incomingData: rolesType = req.body
            const roles: rolesType = await prisma.role.update({
                where: {
                    id
                },
                data: incomingData
            })
            return res.status(200).json({
                message: "Roles updated successfully",
                data: roles
            })     
        } catch (error:any) {
            next(error)
        }
    },           
    
    async GetRolesById(req:Request, res:Response, next:NextFunction) {
        try {
            const id = req.params.id as string;
            const roles: rolesType | null = await prisma.role.findUnique({
                where: {
                    id
                }
            })
            return res.status(200).json(roles)              
        } catch (error:any) {
            next(error)
        }
    }           

};

export default RolesController;
