import { Request, Response } from "express";
import { ClientsService } from "../services/clients.service";
import { isHttpError } from "../services/errors";

const clientsController = {

  async CreateClients(req: Request, res: Response) {
    try {
      const newClient = await ClientsService.createClient(req.body);

      return res.status(201).json({
        message: "Client created successfully",
        data: newClient,
      });
    } catch (error: any) {
      console.error("CREATE CLIENT ERROR:", error);
      if (isHttpError(error)) {
        return res.status(error.statusCode).json({ message: error.message });
      }
      return res.status(400).json({ message: error.message });
    }
  },

  async GetAllClients(_req: Request, res: Response) {
    try {
      const clients = await ClientsService.getAllClients();

      return res.status(200).json(clients);
    } catch (error) {
      console.error("GET ALL CLIENTS ERROR:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  },
};

export default clientsController;
