import { prisma } from "../prisma/client";
import { ClientRequestStatus, ProposalStatus } from "../generated/prisma/client";


/**
 * `ClientRequestService.ts`
 *
 * Step 1 of your flow: Client Requests a Service.
 *
 * This file is the "database logic" for service requests.
 * Prisma model/table used: `ServiceRequest`.
 */



const AllowedStatus: ClientRequestStatus[] = [
  "DRAFT",
  "PENDING"
];

export const clientRequestService = {

  // fetch all client requests
  async getAllClientRequests() {

  return prisma.clientRequest.findMany({
    select: {
      id:true,
      
request_status:true,

      service: {
        select: {
          id:true,
          ServiceName:true,
          Description:true,
        }
      },

      client: {
        select: {
          id:true,
          email:true,
          phone:true,
          firstName:true,
          fullName:true,
          middleName:true,
          lastName:true
        }
      }


    },
 

where: {
      
request_status: {
          in: AllowedStatus
        }
      }

  })
  },

  // client creates a service request
async createClientRequest(incomingData: any) {
  const { serviceId, clientId, request_status } = incomingData ?? {};

  return prisma.clientRequest.create({
    data: {
      request_status,

      service: {
        connect: {
          id: serviceId
        }
      },

      client: {
        connect: {
          id: clientId
        }
      }
    }
  });
},

  // update a client request (THIS FIXED ONE)

  // delete a client request
  async deleteClientRequest(id: string) {
    await prisma.clientRequest.delete({ where: { id } });
  },



   // update only status of a client request
 async updateClientRequestStatus(id: string, status: ClientRequestStatus ) {
 
   return prisma.clientRequest.update({
     where: { id },
     data: { request_status: status },
   });
 }
};
