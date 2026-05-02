import {
} from "../generated/prisma/client";
import { prisma } from "../prisma/client";

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


//     where: {
// status: "PENDING"
//     },


select: {
  id:true,
  client_request_id:true,
  client_id:true,

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


},

orderBy: {
  createdAt: "desc"
}
  })


  
  },  


  // create proposal and change status from draft to pending
async CreateProposal(data: any) {
  const { client_request_id, ...rest } = data;

  return prisma.$transaction(async (tx) => {

    await tx.clientRequest.update({
      where: { id: client_request_id },
      data: {
        request_status: "PENDING"
      }
    });

    return tx.proposal.create({
      data: {
        ...rest,
        client_request_id
      }
    });
  });
},


  // when client request needs some changes 
  async UpdateProposal(id:string, data:any){
    return prisma.proposal.update({
      where: {id},
      data
    })
  },




// clients negotiating a proposal
async ChangeProposalStatus( data:any){

const { id, ...rest } = data;
 
  return prisma.$transaction(async (tx) => {

    // update proposal when client clicks approved
    await tx.proposal.update({
      where: { id },
      data: { status: "APPROVED" }
    });

    // if status is APPROVED then you create a project

    if (status === "APPROVED"){
    const project = await tx.project.create({
      data: {
        proposal_id: id,
        ...rest
      }
    });

    return project;
    }


  });

},



};
