import { Request, Response } from "express";
import { ClientsService } from "../services/clients.service";
import { isHttpError } from "../services/errors";

/**
 * `clientsController.ts`
 *
 * What this file does:
 * - Creates client accounts (saved as `User` records).
 * - Lists all corporate clients.
 *
 * How it fits your flow:
 * - A client must exist as a `User` before they can submit a Service Request.
 */
const clientsController = {

  async CreateClients(req: Request, res: Response) {
    try {
      // Creates the client record (hashes password and links a role internally).
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
      // Returns all users where `type = CORPORATE`.
      const clients = await ClientsService.getAllClients();

      return res.status(200).json({
        message: "users fetched succesfully",
        data:clients
      });
    } catch (error) {
      console.error("GET ALL CLIENTS ERROR:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  },

  async updateClient(req:Request, res:Response){
    try {
const id = req.params.id as string

const incomingData = req.body
const {password, ...rest} = incomingData


const data = await ClientsService.updateClient(id, rest)

return res.status(200).json({
  message: "user updated sucessfully",
  data:data
})

    } catch (error:any){
console.log(error)
return res.status(500).json({
  message: "failed to update user",
  error:error.message
})
    }
  },


  async DeleteClient(req:Request, res:Response){

    try {
  const id = req.params.id as string
  
await ClientsService.DeleteClient(id)

return res.status(200).json({
  message: "user deleted succesfully"

})
    } catch(error:any) {
console.log(error)
return res.status(500).json({
  message: "something went wrong",
  error:error.message
})
}
  



  }
};

export default clientsController;
