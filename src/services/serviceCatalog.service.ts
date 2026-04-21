import { prisma } from "../prisma/client";


export const ServiceCatalogService = {
  async getAllServices() {
    return prisma.services.findMany({

      // select: {
      //   id:true,
      //   ServiceName:true,
      //   Description:true
      // },


      orderBy: { createdAt: "asc" },
    });
  },

  async createService(incomingData: any) {

    return prisma.services.create({
      data: incomingData,
    });
  },

  async updateService(id: string, incomingData: any) {
    const { name, description, status } = incomingData ?? {};
    return prisma.services.update({
      where: { id },
      data: { name, description, status },
    });
  },

  async deleteService(id: string) {
    await prisma.services.delete({ where: { id } });
  },
};

