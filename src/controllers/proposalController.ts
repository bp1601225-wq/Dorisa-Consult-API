import { Request, Response } from "express";
import { ProposalService } from "../services/proposal.service";
import { ProposalStatus } from "../generated/prisma/client";
/**
 * `proposalController.ts`
 *
 * Step 2 of your flow: Proposal Creation.
 *
 * In simple English:
 * - A client first submits a Service Request.
 * - Then Dorisa Consult (Admin/Staff) creates a Proposal for that request.
 * - This controller exposes endpoints to create/update/delete proposals and update their status.
 */

  
export const ProposalController = {

  // get all proposals

  async fetchProposals(_req:Request, res:Response){

try {
   const proposalsdata = await ProposalService.GetAllProposals()
    return res.status(200).json({
      message: "proposas fetched successfully",
      data:proposalsdata
    })

} catch (error:any){
console.log(error)

return res.status(500).json({
  message: "failed to fetch proposals",
  error: error.message
})
}
   


  },


  async CreateProposals(req:Request, res:Response){

    try {

    const incomingData = req.body

    const createdData = await ProposalService.CreateProposal(incomingData)

    return res.status(200).json({
      message: "proposal created succesfuly",
      data:createdData
    })

    } catch (error:any){
      console.log(error)
      return res.status(200).json({
        message: "failed to create proposal",
        error: error.message
      })

    }



  },

  // update a proposal details

  async UpdateProposal(req:Request, res:Response){

    try {

        const id = req.params.id as string

    const incomingData = req.body

    const finaldata = await ProposalService.UpdateProposal(id, incomingData)

    return res.status(200).json({
      message: "Proposal updated succesfully",
      data:finaldata

    })

    } catch (error:any){
console.log(error)
return res.status(500).json({
  message: "failed to update proposal",
  error:error.message
})
    }
  },

  async ChangeProposalStatus(req:Request, res:Response){

    try {
 
const id = req.params.id as string
const status:ProposalStatus = req.body

const returnedData = await ProposalService.UpdateProposal(id, status)

return res.status(200).json({
  message: "status updated succesfully",
  data: returnedData
})

    } catch (error:any){
console.log(error)
return res.status(500).json({
  message:"failed to update status request",
  error: error.message
})

    }

  }


  









}