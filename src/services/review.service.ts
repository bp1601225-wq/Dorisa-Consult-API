import { prisma } from "../prisma/client";
import { RoleBasedFetched } from "../utils/helperFunctions";

export const ReviewService = {

  async getAllReviews(user: any) {
    const data = await prisma.projectReview.findMany({
      where: RoleBasedFetched.BuildReviewsWhere(user),
      select: {
        id: true,
        scope: true,
        deliverables: true,
        timeline: true,
        pricing: true,
        status: true,
        termsAndConditions: true,
        service: {
          select: {
            ServiceName: true,
            Description: true,
          },
        },
        client: {
          select: {
            id: true,
            phone: true,
            email: true,
            country: true,
            fullName: true,
            firstName: true,
            middleName: true,
            lastName: true,
            companyName: true,
            companyWebsite: true,
            industry: true,
          },
        },
      },
    });

    const total = await prisma.projectReview.count();
    return { data, total };
  },

  async createReview(incomingData: any) {
    return prisma.projectReview.create({ data: incomingData });
  },

  async editReview(id: string, incomingData: any) {
    return prisma.projectReview.update({
      where: { id },
      data: incomingData,
    });
  },

  async getReviewsByClientId(clientId: string) {
    return prisma.projectReview.findMany({
      where: { client_id: clientId },
    });
  },


  //  When clients negotites a proposal 
  async NegotiateProposalReview(payload:any){

    const {clientId, proposal_id, NegotiationText} = payload

    return prisma.negotiate.create({
     data: {
      clientId,
      proposal_id,
     NegotiationText
     }
    })
  },


  //  fetch all negotiated client details 

  async fetchAllClientsNegotatedDetails(){
    
    return prisma.negotiate.findMany({
      select: {
        id:true,
         NegotiatingText:true, 

          client:{
            select: {
              id:true,
              firstName:true,
              middleName:true,
              lastName:true,
              fullName:true,
              email:true,
              country:true,
              phone:true
            }            
          },

          proposal: {
            select: {
              id:true,

            }
          },

          service: {
            select: {
              id:true,
              ServiceName:true,
              Description:true,
            }
          }, 



        
      }
    })
  },





};

