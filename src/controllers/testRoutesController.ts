import { Request, Response } from "express";
import { createTestRouteEntry, fetchTestRoutes } from "../services/testRoutes.service";
import { isHttpError } from "../services/errors";

// GET all test routes
export async function listTestRoutes(_req: Request, res: Response) {
  try {
    const routes = await fetchTestRoutes();
    return res.json(routes);
  } catch (error: any) {
    console.error(error);
    if (isHttpError(error)) {
      return res.status(error.statusCode).json({ message: error.message });
    }
    return res.status(500).json({ message: "Internal server error" });
  }
}

// CREATE test route
export async function createTestRoute(req: Request, res: Response) {
  try {
    const route = await createTestRouteEntry(req.body?.name);
    return res.json(route);
  } catch (error: any) {
    console.error(error);
    if (isHttpError(error)) {
      return res.status(error.statusCode).json({ message: error.message });
    }
    return res.status(500).json({ message: "Internal server error" });
  }
}


export async function TestRouteMethod(req: Request, res: Response) {
console.log({
  method: req.body,
});

  res.json({ message: "TestRouteMethod response" });
}
