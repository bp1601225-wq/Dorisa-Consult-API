import express from "express";
import cors from "cors";
import "dotenv/config";
import testRoutesRouter from "./controllers/testRoutesController";
import { prisma } from "./prisma/client";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  res.json({
    message: "Node + TypeScript + Prisma playground",
    version: process.env.npm_package_version ?? "1.0.0",
  });
});

app.get("/health", (_req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

app.use("/test-routes", testRoutesRouter);

app.get("/greet/:name", (req, res) => {
  res.json({ message: `Hello, ${req.params.name}!` });
});

app.use((_req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.use(
  (
    error: unknown,
    _req: express.Request,
    res: express.Response,
    _next: express.NextFunction
  ) => {
    console.error("Server error", error);
    res.status(500).json({ error: "Unexpected error", detail: (error as Error).message });
  }
);

const port = Number(process.env.PORT) || 4000;

const server = app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});

const shutdown = async () => {
  console.log("Shutting down prisma client...");
  await prisma.$disconnect();
  server.close(() => process.exit(0));
};

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
