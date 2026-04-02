import { Request, Response } from "express";
import { prisma } from "../prisma/client";

export const ServiceController = {

    async getAllServices(_req:Request, res:Response){

      try {
const getAllServices = await prisma.services.findMany({
    include:{
        client: {
            select: {
               email: true,
               phone: true,
               country:true,
               type: true,
               fullName: true 
            }
        }
    }, orderBy: {
      DateCreated: "asc"
    }
}
)

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

async CreateServices(req:Request, res:Response){
    try {
const incomingData = req.body;


const ServicesDetails = await prisma.services.create({
    data: incomingData
})

return res.status(200).json({
    message: "Services added to catalog",
    data: ServicesDetails 
})
    } catch (error:any){
console.error(error)
    }
}, 

async UpdateService(req:Request, res:Response){

    try {
         const id = req.params.id as string
const incomingData = req.body

const { ServiceName , Description, status} = incomingData

  const services = await prisma.services.update({
    where: {
            id        
    },
    
    data: {
        ServiceName,
        Description,
        status
    }

   
  })


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


         await prisma.services.delete({
    where: {
            id        
    }
  })


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