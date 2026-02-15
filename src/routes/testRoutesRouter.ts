import { Router } from "express";
import {
  createTestRoute,
  listTestRoutes,
  TestRouteMethod,
} from "../controllers/testRoutesController";

const router = Router();

router.get("/", listTestRoutes);
router.post("/", createTestRoute);
router.get("/method", TestRouteMethod);

export default router;
