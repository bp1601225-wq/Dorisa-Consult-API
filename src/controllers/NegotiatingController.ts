import { Request, Response } from "express";
import { NegotiateServices } from "../services/negotiation.services";

export const NegotiatingController  = {

async GetAllNegotiaition(_req:Request, res:Response){
try {


    const AllData = await NegotiateServices.GetAllNegotiaters()
    return res.status(200).json({
        message: "Negotiatiation details fetched Succesful",
        data: AllData
    })

} catch (error:any) {
console.log(error)

return res.status(500).json({
    message: "failed to fetch negotiation",
    error: error.message
})

}
  },

async CreateNegotiation(req:Request, res:Response){
try {

    const incomingData = req.body

    const NegotiatedData = await NegotiateServices.CreateNegotiaiton(incomingData)

    return res.status(200).json({
        message: "negotiation sucessfully established",
        data:NegotiatedData
    })



} catch (error:any){
    console.log(error)

    return res.status(500).json({
        message: "failed to establish negotiation",
        error: error.message
    })
}
    
}






}
