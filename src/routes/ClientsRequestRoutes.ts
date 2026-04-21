import { Router } from "express";
import { clientRequestController } from "../controllers/ClientRequestController";

/**
 * `ClientsRequestRoutes.ts`
 *
 * Step 1 of your flow: Client Requests a Service.
 *
 * What the client sends:
 * - `serviceId` (which service type they want)
 * - `brief` (short description of what they need)
 *
 * Example (with base prefix `/Consulting`):
 * POST `/Consulting/create-client-request`
 * Body:
 * {
 *   "serviceId": "uuid-of-service-catalog",
 *   "brief": "We need help improving our sales process"
 * }
 *
 * What the server adds automatically:
 * - `clientId` from the logged-in user (`authMiddleware`)
 * - a snapshot of client contact details (email/phone/company/contact person)
 */
export const clientRequestRoute = Router();

// Get all client requests
clientRequestRoute.get(
  "/get-all-client-requests",
//   authMiddleware,
  clientRequestController.getAllClientRequests
);

// Create client request
clientRequestRoute.post(
  "/create-client-request",
//   authMiddleware,
  clientRequestController.createClientRequest
);

// Update only status
clientRequestRoute.patch(
  "/client-request/:id/status",
//   authMiddleware,
  clientRequestController.updateClientRequestStatus
);



// Delete client request
clientRequestRoute.delete(
  "/delete-client-request/:id",
//   authMiddleware,
  clientRequestController.deleteClientRequest
);

