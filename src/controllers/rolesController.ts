import { Request, Response } from "express";
import { RolesService } from "../services/roles.service";
import { isHttpError } from "../services/errors";

//  Roles Controller for Basic Crud
const RolesController = {
async GetAllRoles(_req: Request, res: Response) { 
try {
const roles = await RolesService.getAllRoles();
res.status(200).json({
    message: "Roles Fetched Successfully",
    data: roles,
})

} catch (error: any) {
console.error(error);
return res.status(500).json({ message: "Internal server error" });
}
},

async CreateRoles(req:Request, res:Response) {
    
try {

const role = await RolesService.createRole(req.body)
return res.status(200).json({
    message: "Roles created successfully",
    data: role
})
} catch (error:any) {
if (isHttpError(error)) {
  return res.status(error.statusCode).json({ message: error.message });
}
console.error(error);
return res.status(500).json({ message: "Internal server error" });
}
},

async DeleteRoles(req:Request, res:Response) {
try {
const id = req.params.id as string;
await RolesService.deleteRole(id)
return res.status(200).json({
    message: "Roles deleted successfully",
})
} catch (error:any) {
console.error(error);
return res.status(500).json({ message: "Internal server error" });
}       
},

async UpdateRoles(req:Request, res:Response) {
try {
const id = req.params.id as string;
const role = await RolesService.updateRole(id, req.body)
return res.status(200).json({
    message: "Roles updated successfully",
    data: role
})     
} catch (error:any) {
console.error(error);
return res.status(500).json({ message: "Internal server error" });
}
},           

async GetRolesById(req:Request, res:Response) {
try {
const id = req.params.id as string;
const role = await RolesService.getRoleById(id)
return res.status(200).json(role)              
} catch (error:any) {
console.error(error);
return res.status(500).json({ message: "Internal server error" });
}
}           

};

export default RolesController;
