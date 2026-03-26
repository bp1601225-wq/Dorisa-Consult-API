import {Router} from "express"
import { ServiceController } from "../controllers/serviceController"


export const servicesRoute = Router()

servicesRoute.get("/get-all-services", ServiceController.getAllServices),

servicesRoute.post("/create-services", ServiceController.CreateServices )
 
servicesRoute.put("/update-services/:id", ServiceController.UpdateService)

servicesRoute.delete("/delete-services/:id", ServiceController.DeleteService)