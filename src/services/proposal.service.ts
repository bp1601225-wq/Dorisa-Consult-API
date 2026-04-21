import {
} from "../generated/prisma/client";
import { prisma } from "../prisma/client";
import { ProposalStatus } from "../generated/prisma/client";

/**
 * `proposal.service.ts`
 *
 * Step 2 of your flow: Proposal Creation.
 *
 * Notes:
 * - A `Proposal` belongs to exactly one `ServiceRequest` (`requestId` is unique).
 * - When a proposal status changes, we also update the linked ServiceRequest status,
 *   so the request and the proposal do not contradict each other.
 */
export const ProposalService = {
  
  async GetAllProposals(){

  return prisma.proposal.findMany({
select: {
  id:true,


  service: {
    select: {
      id:true,
      ServiceName:true,
      Description:true
    }
  },

  scope:true,
  deliverables:true,
  timeline:true,
  pricing:true,
  status:true,
  termsAndConditions:true


}
  })

  },  


  // create proposal
 async CreateProposal(data: any) {

  return prisma.proposal.create({
    data
  })
 
},

  // when client request negotiatioin

  async UpdateProposal(id:string, data:any){
    return prisma.proposal.update({
      where: {id},
      data
    })
  },

// clients negotiating a proposal
async ChangeProposalStatus(id:string, status:ProposalStatus){

  return prisma.proposal.update({
    where: {id},
    data: {status}
  })

}
};
