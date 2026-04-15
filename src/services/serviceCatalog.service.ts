import { prisma } from "../prisma/client";
import { serviceSchema } from "../schema/schema";
import { HttpError } from "./errors";

export const ServiceCatalogService = {
  async getAllServices() {
    return prisma.services.findMany({
      include: {
        client: {
          select: {
            email: true,
            phone: true,
            country: true,
            type: true,
            fullName: true,
          },
        },
      },
      orderBy: {
        DateCreated: "asc",
      },
    });
  },

  async createService(incomingData: unknown) {
    const { error, value } = serviceSchema.validate(incomingData);
    if (error) {
      throw new HttpError(400, error.details[0]?.message ?? "Invalid payload");
    }

    return prisma.services.create({
      data: value,
    });
  },

  async updateService(id: string, incomingData: any) {
    const { ServiceName, Description, status } = incomingData ?? {};
    return prisma.services.update({
      where: { id },
      data: { ServiceName, Description, status },
    });
  },

  async deleteService(id: string) {
    await prisma.services.delete({ where: { id } });
  },
};

