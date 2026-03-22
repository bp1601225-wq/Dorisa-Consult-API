import { Request, Response, NextFunction } from "express";
import type { Role } from "../generated/prisma/client";
import { prisma } from "../prisma/client";

const readableDateFormatter = new Intl.DateTimeFormat("en-US", {
  dateStyle: "medium",
  timeStyle: "short",
});

type RoleWithReadableDate = Role & { createdAtReadable: string };

const addReadableDate = (role: Role): RoleWithReadableDate => ({
  ...role,
  createdAtReadable: readableDateFormatter.format(role.createdAt),
});

const mapRoleWithReadableDate = (role: Role | null): RoleWithReadableDate | null =>
  role ? addReadableDate(role) : null;

//  Roles Controller for Basic Crud
const RolesController = {
async GetAllRoles(_req: Request, res: Response, next: NextFunction) { 
try {
const roles = await prisma.role.findMany();
res.status(200).json({
    message: "Roles Fetched Successfully",
    data: roles.map(addReadableDate),
})

} catch (error: any) {
next(error);
}
},

async CreateRoles(req:Request, res:Response, next:NextFunction
) {
    
try {

const incomingData = req.body

    if (!incomingData.name) {
        return res.status(200).json({
            message: "name must include a text"
        })
    }

const role = await prisma.role.create({
    data:incomingData
})
return res.status(200).json({
    message: "Roles created successfully",
    data: addReadableDate(role)
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
const incomingData = req.body
const role = await prisma.role.update({
    where: {
        id
    },
    data: incomingData
})
return res.status(200).json({
    message: "Roles updated successfully",
    data: addReadableDate(role)
})     
} catch (error:any) {
next(error)
}
},           

async GetRolesById(req:Request, res:Response, next:NextFunction) {
try {
const id = req.params.id as string;
const role = await prisma.role.findUnique({
    where: {
        id
    }
})
return res.status(200).json(mapRoleWithReadableDate(role))              
} catch (error:any) {
next(error)
}
}           

};

export default RolesController;
