import { Request, Response, NextFunction } from "express";
import argon2 from "argon2";
import { prisma } from "../prisma/client";

const clientsController = {

  async CreateClients(req: Request, res: Response, next: NextFunction) {
    try {
      const incomingData = req.body;

      const { password, ...rest } = incomingData;

      // hash password
      const hashedPassword = await argon2.hash(password);

      const newClient = await prisma.client.create({
        data: {
          ...rest,
          password: hashedPassword,
        },
      });

      return res.status(201).json(newClient);

    } catch (error: any) {
  console.error("CREATE CLIENT ERROR:", error);
  return res.status(400).json({
    message: error.message,
  });
}
  },

  async GetAllClients(_req: Request, res: Response, next: NextFunction) {
    try {
      const clients = await prisma.client.findMany({
        orderBy: { createdAt: "desc" },
      });

      return res.status(200).json(clients);
    } catch (error) {
      next(error);
    }
  },
};

export default clientsController;