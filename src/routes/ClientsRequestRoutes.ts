import { Router } from "express";
import { clientRequestController } from "../controllers/ClientRequestController";

export const clientRequestRoute = Router();

// Get all client requests
clientRequestRoute.get(
  "/get-all-client-requests",
clientRequestController.getAllClientRequests
);

clientRequestRoute.get("/get-all-client-requests-id/:id", clientRequestController.getClientRequestById)
// Create client request

clientRequestRoute.post(
  "/create-client-request",
  clientRequestController.createClientRequest
);

// Dev-only: seed client requests (requires ALLOW_SEED=true)
clientRequestRoute.post(
  "/seed-client-requests",
  clientRequestController.seedClientRequests
);

// Update only status
clientRequestRoute.patch(
  "/client-request/:id/status",
  clientRequestController.updateClientRequestStatus
);



// Delete client request
clientRequestRoute.delete(
  "/delete-client-request/:id",
  clientRequestController.deleteClientRequest
);

// filter by status
clientRequestRoute.get("/requests", clientRequestController.FilterByStatusController)


