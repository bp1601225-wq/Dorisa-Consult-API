import {Router} from "express"
import { ServiceController } from "../controllers/serviceController"

/**
 * `ServicesRoutes.ts`
 *
 * Endpoints for the Service Catalog (the list of services Dorisa offers).
 * Clients will later pick one of these services when they submit a Service Request.
 *
 * Examples (with base prefix `/Consulting`):
 * - GET  `/Consulting/get-all-services`
 * - POST `/Consulting/create-services`
 */

export const servicesRoute = Router()

servicesRoute.get("/get-all-services", ServiceController.getAllServices),

servicesRoute.post("/create-services", ServiceController.CreateServices )
 
servicesRoute.put("/update-services/:id", ServiceController.UpdateService)

servicesRoute.delete("/delete-services/:id", ServiceController.DeleteService)
