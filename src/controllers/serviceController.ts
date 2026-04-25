import { Request, Response } from "express";
import { ServiceCatalogService } from "../services/serviceCatalog.service";
import { isHttpError } from "../services/errors";

export const ServiceController = {

    async getAllServices(_req:Request, res:Response){

      try {
const getAllServices = await ServiceCatalogService.getAllServices()

return res.status(200).json({
    message: "All Services loaded Succesfully",
    data: getAllServices
})
      } catch(error:any) {

console.error(error)


return res.status(500).json({
    message: "failed to fetch services",
    error:error.message
})
      }
    },


    //  Create services

async CreateServices(req: Request, res: Response) {

  
  try {
    const servicesDetails = await ServiceCatalogService.createService(req.body);

    return res.status(201).json({
      message: "Service added to catalog",
      data: servicesDetails,
    });

  } catch (error: any) {
    console.error("CREATE SERVICE ERROR:", error);
    if (isHttpError(error)) {
      return res.status(error.statusCode).json({ message: error.message });
    }

    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
},

async UpdateService(req:Request, res:Response){






    try {
          const id = req.params.id as string

const incomingData = req.body


// const data = {
//   id, 
//   incomingData
// }
const services = await ServiceCatalogService.updateService(id, incomingData)


  return res.status(200).json({
    message: "Service updated succesfully",
    data: services
  })

    } catch (error:any){
        console.error(error)
        return res.status(500).json({
            message: "failed to update service with request id",
            error: error
        })
    }

},


async DeleteService(req:Request, res:Response){

    try {
          const id = req.params.id as string


         await ServiceCatalogService.deleteService(id)


  return res.status(200).json({
    message: "Service updated succesfully",
  })

    } catch (error:any){
        console.error(error)
        return res.status(500).json({
            message: "failed to update service with request id",
            error: error
        })
    }

}


}
