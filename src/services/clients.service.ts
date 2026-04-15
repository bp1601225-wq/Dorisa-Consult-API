import argon2 from "argon2";
import { prisma } from "../prisma/client";
import { resolveRoleId } from "../utils/roleHelpers";
import { HttpError } from "./errors";

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
      where: { type: "CORPORATE" },
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
};

