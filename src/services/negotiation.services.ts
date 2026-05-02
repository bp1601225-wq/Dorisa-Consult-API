import { prisma } from "../prisma/client";

export const NegotiateServices = {

async GetAllNegotiaters(){

return prisma.negotiate.findMany({

select: {
id: true,
client_request_id:true,
clientId:true,
proposal_id:true,

client: {
select: {
firstName:true,
lastName:true,
fullName:true,
email:true,
phone:true
}
},

service: {
select: {
ServiceName:true,
Description:true,
}

},


proposal: {
select: {
scope:true,
deliverables:true,
timeline:true,
pricing:true,
termsAndConditions:true
}
}
}


})

},

async CreateNegotiaiton(data: any) {

  const {
    serviceId,
    clientId,
    client_request_id,
    proposal_id,
    NegotiatingText,
  } = data;

  return prisma.$transaction(async (tx) => {

    // update proposal status
    const statusUpdateProposal = await tx.proposal.update({
      where: {
        id: proposal_id,
      },
      data: {
        status: "NEGOTIATING",
      },
    });

// update client request status
const statusUpdateClientRequest = await tx.clientRequest.update({
  where: {
    id: client_request_id,
  }, 
   data: {
    request_status: "CHANGES_REQUESTED",
   }
})

    // create negotiation
    const negotiation = await tx.negotiate.create({
      data: {
        NegotiatingText,
        clientId,
        client_request_id,
        proposal_id,
        serviceId,
      },
    });

    //  return something
    return {
      statusUpdateProposal,
      negotiation,
      statusUpdateClientRequest
    };
  });
}



}