import { NextFunction, Request, Response, Router } from "express";
import { prisma } from "../prisma/client";

const router = Router();

router.get("/", async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const routes = await prisma.testRoute.findMany({ take: 25 });
    res.json({ count: routes.length, data: routes });
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req: Request, res: Response, next: NextFunction) => {
  const { name } = req.body;
  if (!name || typeof name !== "string") {
    return res.status(400).json({ error: "name is required and must be a string" });
  }

  try {
    const created = await prisma.testRoute.create({ data: { name } });
    res.status(201).json(created);
  } catch (error) {
    next(error);
  }
});

export default router;
