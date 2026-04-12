import { Request, Response } from "express";
import { prisma } from "../prisma/client";
import { ProposalStatus } from "../generated/prisma/client";


export const ProposalController = {
    // Fetch all proposal
async GetAllProposals(req:Request, res:Response){


    try {
//  Comeback later 

const AllProposals = await prisma.proposal.findMany({
  select: {
    id: true,
    proposal_status: true,
    createdAt: true,

    service: {
      select: {
        id: true,
        ServiceName: true,
        Description: true,
      },
    },

    client: {
      select: {
        id: true,
        fullName: true,
        firstName: true,
        middleName: true,
        lastName: true,
        phone: true,
        country: true,
        type: true,
        email: true,
      },
    },
    
  },

  orderBy: {
    createdAt: "desc", // ✅ CORRECT PLACE
  },
});



    // Proposal count
    const proposalCount =  await prisma.proposal.count()


    // console.log(AllProposals)

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
        message: "service request succesfull, A proposal will be sent to you",
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

},

async UpdateProposalStatus(req: Request, res: Response) {
  try {
    const id = req.params.id as string
    const { proposal_status } = req.body

   const allowedStatuses = Object.values(ProposalStatus)

    if (!allowedStatuses.includes(proposal_status)) {
      return res.status(400).json({
        message: "Invalid status"
      })
    }

    const Data = await prisma.proposal.update({
      where: { id },
      data: {
        proposal_status
      }
    })

    return res.status(200).json({
      message: "Status updated successfully",
      data: Data
    })

  } catch (error) {
    console.log(error)



    return res.status(500).json({
      message: "Internal server error",
     error
    })
  }
}




}