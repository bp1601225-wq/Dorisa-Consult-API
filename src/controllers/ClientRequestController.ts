import { Request, Response } from "express";
import { clientRequestService } from "../services/ClientRequestService";
import { isHttpError } from "../services/errors";


/**
 * `ClientRequestController.ts`
 *
 * Step 1 of your flow: Client submits a Service Request.
 *
 * This controller:
 * - reads the logged-in user from `req.user` (set by `authMiddleware`)
 * - calls `clientRequestService` to write/read from the database
 * - returns JSON responses to the frontend/website
 */
export const clientRequestController = {

  // Fetch all client requests
  async getAllClientRequests(_req: Request, res: Response) {
 
 const data = await clientRequestService.getAllClientRequests()
 return res.status(200).json({
   message: "all request fetched succesfully",
   data:data
 })
  },

  // Create a client request
  async createClientRequest(req: Request, res: Response) {
    try {
    
      const incomingData = req.body

      const finaldata = await clientRequestService.createClientRequest(incomingData)

      return res.status(200).json({
        message: "requested sucesfully submitted",
        data:finaldata
      })

  } catch (error:any){
    console.log(error)
    return res.status(500).json({
      message: "internal server error",
      error:error.message

    })

  }
},

  // Update full client request
  async updateClientRequest(req: Request, res: Response) {
    try {
      const id = req.params.id as string;

  const { proposal_status } = req.body;


  if (!proposal_status) {
  return res.status(400).json({ message: "proposal_status is required" });
}

  console.log("BODY RECEIVED:", req.body);
console.log("STATUS:", proposal_status);

const updated = await clientRequestService.updateClientRequestStatus(
  id,
  proposal_status
);

      return res.status(200).json({
        message: "Client request updated successfully",
        data: updated,
      });
    } catch (error: any) {
      console.error(error);
      return res.status(500).json({
        message: "Internal server error",
        error: error?.message ?? error,
      });
    }
  },

  // Delete client request
  async deleteClientRequest(req: Request, res: Response) {
    try {
      const id = req.params.id as string;

      await clientRequestService.deleteClientRequest(id);

      return res.status(200).json({
        message: "Client request deleted successfully",
      });
    } catch (error: any) {
      console.error(error);
      return res.status(500).json({
        message: "Failed to delete client request",
        error: error?.message ?? error,
      });
    }
  },

  // update only status of a client request
  async updateClientRequestStatus(req: Request, res: Response) {
    try {
      const id = req.params.id as string;
      const { proposal_status } = req.body;

      const data = await clientRequestService.updateClientRequestStatus(
        id,
        proposal_status
        
      );

      return res.status(200).json({
        message: "Status updated successfully",
        data,
      });
    } catch (error: any) {
      console.log(error);

      if (isHttpError(error)) {
        return res.status(error.statusCode).json({ message: error.message });
      }

      return res.status(500).json({
        message: "Internal server error",
        error: error?.message ?? error,
      });

    }
  },


  // get clientes requets by Id
  async getClientRequestById(req: Request, res: Response){
try {

  const id = req.params.id as string


  const data =await clientRequestService.GetClientRequestById(id)


return res.status(200).json({
  message: "clients succesfully fetched by the specific id",
  data
})

} catch (error:any){
  console.log(error)

  return res.status(500).json({
    message: "failed to fetch clients request id details",
error: error.message
  })
}

  },

//  filter by Either pending or draft
async FilterByStatusController(req: Request, res: Response) {
  try {
    const status = req.query.status as string;

    const requestedData = await clientRequestService.FilterByStatus(status);

    return res.status(200).json({
      message: "filter operation successful",
      data: requestedData,
    });

  } catch (error: any) {
    console.log(error);

    return res.status(500).json({
      message: "something went wrong",
      error: error.message,
    });
  }
},

  // Dev helper: seed ~20 client requests for quick testing.
  async seedClientRequests(req: Request, res: Response) {
    try {
      if (process.env.ALLOW_SEED !== "true") {
        return res.status(403).json({
          message: "Seeding is disabled. Set ALLOW_SEED=true to enable this endpoint.",
        });
      }

      const raw = (req.body?.count ?? req.query?.count ?? 20) as any;
      const count = Number(raw);

      if (!Number.isFinite(count) || count < 1 || count > 200) {
        return res.status(400).json({
          message: "count must be a number between 1 and 200",
        });
      }

      const data = await clientRequestService.seedClientRequests(count);

      return res.status(201).json({
        message: `Seeded ${data.length} client requests`,
        data,
      });
    } catch (error: any) {
      console.error(error);
      return res.status(500).json({
        message: "Failed to seed client requests",
        error: error?.message ?? error,
      });
    }
  },
};
