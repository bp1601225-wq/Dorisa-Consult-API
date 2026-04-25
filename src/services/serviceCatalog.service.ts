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
  const service = await prisma.services.findUnique({
    where: { id }
  });

  if (!service) {
    throw new Error("Service not found");
  }

  return prisma.services.update({
    where: { id },
    data: {
      ServiceName: incomingData.ServiceName,
      Description: incomingData.Description,
      status: incomingData.status
    }
  });
},

  async deleteService(id: string) {
    await prisma.services.delete({ where: { id } });
  },
};

