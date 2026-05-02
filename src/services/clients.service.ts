import argon2 from "argon2";
import { prisma } from "../prisma/client";
import { resolveRoleId } from "../utils/roleHelpers";
import { HttpError } from "./errors";


//  CREATE CLIENT OR USER
export const ClientsService = {

  async createClient(incomingData: any) {
    const { password, roleId, ...rest } = incomingData ?? {};

    if (!password) {
      throw new HttpError(400, "Password is required");
    }

    const resolvedRoleId = await resolveRoleId(roleId);
    const hashedPassword = await argon2.hash(password);

    return prisma.user.create({
      data: {
        ...rest,
        type: "CORPORATE",
        password: hashedPassword,
        role: {
          connect: { id: resolvedRoleId },
        },
      },
      
      include: {
        role: {
          select: {
            name: true,
          },
        },
      },
    });
  },

  async getAllClients() {
    return prisma.user.findMany({
      include: {
        role: {
          select: {
            name: true,
          },
        },
      },
      orderBy: { createdAt: "desc" },
    });
  },

  async updateClient(id:string, data:any){
    return prisma.user.update({
      where: {id},
      data
    })
  },


  async DeleteClient(id:string) {
    return prisma.user.delete({
      where: {id}
    })
  }


};

