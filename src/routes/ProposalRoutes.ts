import { Router } from "express";
import type { RequestHandler } from "express";
import { ProposalController } from "../controllers/proposalController";

export type ProposalControllerLike = {
  fetchProposals: RequestHandler;
  CreateProposals: RequestHandler;
  UpdateProposal: RequestHandler;
  ChangeProposalStatus: RequestHandler;
};

export const registerProposalRoutes = (
  router: ReturnType<typeof Router>,
  controller: ProposalControllerLike
) => {
  router.get("/test", (_req, res) => {
    res.send("Proposal route working");
  });

  router.get("/get-all-proposals", controller.fetchProposals);

  // Canonical endpoint (use this in your frontend)
  router.post("/create-proposal", controller.CreateProposals);

  // Backwards-compat alias (older frontend used this path)
  router.post("/create-new-proposals", controller.CreateProposals);

  router.put("/update-proposal/:id", controller.UpdateProposal);

  router.patch("/proposal/:id/status", controller.ChangeProposalStatus);
};

export const ProposalRoute = Router();
registerProposalRoutes(ProposalRoute, ProposalController);
