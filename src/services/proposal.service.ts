import { ProposalStatus } from "../generated/prisma/client";
import { prisma } from "../prisma/client";
import { RoleBasedFetched } from "../utils/helperFunctions";
import { HttpError } from "./errors";

export const ProposalService = {
  async getAllProposals(user: any) {
    const data = await prisma.proposal.findMany({
      where: RoleBasedFetched.BuildProposalServiceWhere(user),
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
        createdAt: "desc",
      },
    });

    const total = await prisma.proposal.count();
    return { data, total };
  },

  async createProposal(incomingData: any) {
    const { serviceId, clientId, proposal_status } = incomingData ?? {};
    return prisma.proposal.create({
      data: { serviceId, clientId, proposal_status },
    });
  },

  async updateProposal(id: string, incomingData: any) {
    return prisma.proposal.update({
      where: { id },
      data: incomingData,
    });
  },

  async deleteProposal(id: string) {
    await prisma.proposal.delete({ where: { id } });
  },

  async updateProposalStatus(id: string, proposal_status: any) {
    const allowedStatuses = Object.values(ProposalStatus);
    if (!allowedStatuses.includes(proposal_status)) {
      throw new HttpError(400, "Invalid status");
    }

    return prisma.proposal.update({
      where: { id },
      data: { proposal_status },
    });
  },
};

