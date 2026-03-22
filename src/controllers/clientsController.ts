import { Request, Response, NextFunction } from "express";
import argon2 from "argon2";
import { prisma } from "../prisma/client";
import { resolveRoleId } from "../utils/roleHelpers";

const clientsController = {

  async CreateClients(req: Request, res: Response, next: NextFunction) {
    try {
      const incomingData = req.body;
      const { password, roleId, ...rest } = incomingData;

      if (!password) {
        return res.status(400).json({ message: "Password is required" });
      }

      const resolvedRoleId = await resolveRoleId(roleId);
      const hashedPassword = await argon2.hash(password);

      const newClient = await prisma.user.create({
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

      return res.status(201).json({
        message: "Client created successfully",
        data: newClient,
      });
    } catch (error: any) {
      console.error("CREATE CLIENT ERROR:", error);
      return res.status(400).json({
        message: error.message,
      });
    }
  },

  async GetAllClients(_req: Request, res: Response, next: NextFunction) {
    try {
      const clients = await prisma.user.findMany({
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

      return res.status(200).json(clients);
    } catch (error) {
      console.error("GET ALL CLIENTS ERROR:", error);
      next(error);
    }
  },
};

export default clientsController;
