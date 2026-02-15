import express from "express";
import cors from "cors";
import "dotenv/config";
import testRoutesRouter from "./routes/testRoutesRouter";
import { prisma } from "./prisma/client";
import { globalErrorHandler } from "./middleware/errorhandler";
import rolesRouter from "./routes/rolesRoutes";

const app = express();

app.use(cors());
app.use(express.json());

const baseRoutes = "Consulting";

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

// ✅ Register roles routes
app.use(`/${baseRoutes}`, rolesRouter);

// ✅ 404 must be after routes
app.use((_req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// ✅ Error handler LAST
app.use(globalErrorHandler);

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
