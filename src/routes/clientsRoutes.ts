import { Router } from 'express';
import clientsController from '../controllers/clientsController';

export const ClientRouter = Router()

ClientRouter.get("/get-all-clients", clientsController.GetAllClients)
ClientRouter.post("/create-clients", clientsController.CreateClients)
ClientRouter.put("/update-client/:id",clientsController.updateClient
 )
 ClientRouter.delete("delete-client", clientsController.DeleteClient)

