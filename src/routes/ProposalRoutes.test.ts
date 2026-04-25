import assert from "node:assert/strict";
import { describe, it } from "node:test";
import express from "express";

const loadRegisterProposalRoutes = () => {
  process.env.DATABASE_URL ??=
    "postgresql://test_user:test_pass@localhost:5432/test_db?schema=public";

  // Use `require` so DATABASE_URL is set before the module (and Prisma client) loads.
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const routes = require("./ProposalRoutes") as typeof import("./ProposalRoutes");
  return routes.registerProposalRoutes;
};

const startServer = async (app: express.Express) => {
  const server = await new Promise<ReturnType<typeof app.listen>>((resolve) => {
    resolve(app.listen(0));
  });

  const address = server.address();
  if (!address || typeof address === "string") {
    server.close();
    throw new Error("Failed to bind to an ephemeral port");
  }

  const baseUrl = `http://127.0.0.1:${address.port}`;
  return {
    baseUrl,
    close: () => new Promise<void>((resolve) => server.close(() => resolve())),
  };
};

describe("ProposalRoutes", () => {
  it("accepts POST /Consulting/create-proposal with the proposal payload", async () => {
    const recordedBodies: Array<unknown> = [];
    const controller = {
      fetchProposals: async (_req: express.Request, res: express.Response) =>
        res.status(200).json([]),
      CreateProposals: async (req: express.Request, res: express.Response) => {
        recordedBodies.push(req.body);
        return res.status(200).json({ ok: true });
      },
      UpdateProposal: async (_req: express.Request, res: express.Response) =>
        res.status(200).json({ ok: true }),
      ChangeProposalStatus: async (_req: express.Request, res: express.Response) =>
        res.status(200).json({ ok: true }),
    };

    const app = express();
    app.use(express.json());
    const router = express.Router();
    const registerProposalRoutes = loadRegisterProposalRoutes();
    registerProposalRoutes(router, controller);
    app.use("/Consulting", router);
    app.use((_req, res) => res.status(404).json({ error: "Route not found" }));

    const { baseUrl, close } = await startServer(app);

    const payload = {
      client_id: "2ddbb44e-b9d2-4c84-b75c-0d9a5ab9f5e5",
      service_id: "919b985b-5df0-42a2-b460-5a7043c114d1",
      scope: "Omnis suscipit quia",
      deliverables: "Officia et deserunt",
      timeline: "Repellendus Est qu",
      pricing: 123,
      termsAndConditions: "Consectetur quis omn",
      status: "PENDING",
    };

    try {
      const response = await fetch(`${baseUrl}/Consulting/create-proposal`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });

      assert.equal(response.status, 200);
      assert.deepStrictEqual(recordedBodies, [payload]);
    } finally {
      await close();
    }
  });

  it("keeps POST /Consulting/create-new-proposals as a backwards-compatible alias", async () => {
    const controller = {
      fetchProposals: async (_req: express.Request, res: express.Response) =>
        res.status(200).json([]),
      CreateProposals: async (_req: express.Request, res: express.Response) =>
        res.status(200).json({ ok: true }),
      UpdateProposal: async (_req: express.Request, res: express.Response) =>
        res.status(200).json({ ok: true }),
      ChangeProposalStatus: async (_req: express.Request, res: express.Response) =>
        res.status(200).json({ ok: true }),
    };

    const app = express();
    app.use(express.json());
    const router = express.Router();
    const registerProposalRoutes = loadRegisterProposalRoutes();
    registerProposalRoutes(router, controller);
    app.use("/Consulting", router);
    app.use((_req, res) => res.status(404).json({ error: "Route not found" }));

    const { baseUrl, close } = await startServer(app);

    try {
      const response = await fetch(`${baseUrl}/Consulting/create-new-proposals`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({}),
      });

      assert.equal(response.status, 200);
    } finally {
      await close();
    }
  });
});
