import { Router } from 'express';
import clientsController from '../controllers/clientsController';

export const ClientRouter = Router()

ClientRouter.get("/all-clients", clientsController.GetAllClients)
ClientRouter.post("/create-clients", clientsController.CreateClients)

