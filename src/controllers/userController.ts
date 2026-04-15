import { Request, Response } from "express";
import { UserService } from "../services/user.service";
import { isHttpError } from "../services/errors";

export const UserController = {
async GetAllUsers(req: Request, res: Response) {

 const user = (req as any).user
    
  try {
    const result = await UserService.getAllUsers(user, req.query);

   
       return res.status(200).json({
           message: "Users fetched successfully",
           data: result.data,
           total: result.total,
           page: result.page,
           PageSize: result.PageSize
       });
  } catch (error: any) {
      console.error("GET ALL USERS ERROR:", error);
      return res.status(500).json({
           message: "Failed to fetch users",
           error: error.message,
       });
  }
},



// User creation
async CreateUser(req: Request, res: Response) {
try {
const newUser = await UserService.createUser(req.body);

return res.status(201).json({
message: "User created successfully",
data: newUser,
});

} catch (error: any) {
console.error("CREATE USER ERROR:", error);
if (isHttpError(error)) {
  return res.status(error.statusCode).json({ message: error.message });
}
return res.status(400).json({
message: error.message,
});
}
}, 


async EditUser(req: Request, res: Response) {
try {
const id = req.params.id as string;
const user = await UserService.editUser(id, req.body);

return res.status(200).json({
message: "User updated successfully",
data: user,
});

} catch (error: any) {
console.error(error);
if (isHttpError(error)) {
  return res.status(error.statusCode).json({ message: error.message });
}
return res.status(500).json({
message: "Failed to update user",
error: error.message,
});
}
}
};
