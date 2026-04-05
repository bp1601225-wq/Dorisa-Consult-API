import { Request, Response } from "express";
import { prisma } from "../prisma/client";


export const ProposalController = {
    // Fetch all proposal
async GetAllProposals(req:Request, res:Response){


    try {
//  Comeback later 

  const AllProposals = await prisma.proposal.findMany({
        select: {

            id:true,
            proposal_status:true,
            createdAt:true,


            service: {
                select: {
                    id:true,
                    ServiceName:true,
                    Description: true
                }
            },

            client: {
                select:{
                    id:true,
                    fullName:true,
                    firstName:true,
                    middleName:true,
                    lastName:true,
                    phone: true,
                    country: true,
                    type:true,
                    email:true
                }
            },  

        //   Search and filter 
            
        }
    })
    



    // Proposal count
    const proposalCount =  await prisma.proposal.count()


    console.log(AllProposals)

    return res.status(200).json({
        message: "Proposals fetched succesfully",
        data: AllProposals,
        total: proposalCount
    })

    } catch (error:any) {
console.log(error)
    }

    
}, 


async CreateProposal(req:Request, res:Response){
    const incomingData = req.body

    const {serviceId, clientId, proposal_status} = incomingData

    const ProposalData = await prisma.proposal.create({
        data: {
            serviceId,
            clientId,
            proposal_status
        }
    })

    return res.status(200).json({
        message: "Proposal created succesfully",
        data: ProposalData
    })


},


async UpdateProposal(req:Request, res:Response) {

    try {

    const id = req.params.id as string
    const incomingData = req.body

    const EditedProposal = await prisma.proposal.update({
        where: {
            id
        }, 

        data: incomingData
    })


    return res.status(200).json({
        message: "Proposal Edited Succesfully",
        data: EditedProposal
    })
    } catch (error:any) {
console.error(error)
return res.status(500).json({
    data: error
})
    }
    
},




async DeleteProposals(req:Request, res:Response){

    try {
         const id = req.params.id as string


         await prisma.proposal.delete({
    where: {
            id        
    }
  })


  return res.status(200).json({
    message: "proposal deleted succesfully",
  })

    } catch (error:any){
        console.error(error)
        return res.status(500).json({
            message: "failed to delete service with request id",
            error: error
        })
    }

}





}