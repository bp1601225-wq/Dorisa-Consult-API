import { Request, Response } from "express";
import { prisma } from "../prisma/client";

// GET all test routes
export async function listTestRoutes(_req: Request, res: Response) {
  const routes = await prisma.testRoute.findMany();
  res.json(routes);
}

// CREATE test route
export async function createTestRoute(req: Request, res: Response) {
  const route = await prisma.testRoute.create({
    data: { name: req.body.name }
  });

  res.json(route);
}


export async function TestRouteMethod(req: Request, res: Response) {
console.log({
  method: req.body,
});

  res.json({ message: "TestRouteMethod response" });
}