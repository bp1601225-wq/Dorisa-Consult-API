import { Router } from 'express';
import RolesController from '../controllers/rolesController';

const rolesRouter = Router();

rolesRouter.get('/get-all-roles', RolesController.GetAllRoles);
rolesRouter.post('/create-roles', RolesController.CreateRoles);
rolesRouter.delete('/delete-roles/:id', RolesController.DeleteRoles);
rolesRouter.put('/update-roles/:id', RolesController.UpdateRoles);
rolesRouter.get('/get-roles/:id', RolesController.GetRolesById);

export default rolesRouter;
