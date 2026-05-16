import { Router } from "express";
import type { RequestHandler } from "express";
import { ProposalController } from "../controllers/proposalController";

export type ProposalControllerLike = {
  fetchProposals: RequestHandler;
  CreateProposals: RequestHandler;
  UpdateProposal: RequestHandler;
  ChangeProposalStatus: RequestHandler;
  GetProposalByIdController: RequestHandler;
  CreateProposalsVersion: RequestHandler;
};

export const registerProposalRoutes = (
  router: ReturnType<typeof Router>,
  controller: ProposalControllerLike
) => {
  router.get("/get-all-proposals", controller.fetchProposals);
  router.get("/get-proposals-by-id/:id", controller.GetProposalByIdController);

  router.post("/create-proposal", controller.CreateProposals);
  router.post("/create-new-proposals", controller.CreateProposals);
  router.post("/create-proposal-version", controller.CreateProposalsVersion);

  router.put("/update-proposal/:id", controller.UpdateProposal);
  router.patch("/proposal/:id/status", controller.ChangeProposalStatus);
};

export const ProposalRoute = Router();
registerProposalRoutes(ProposalRoute, {
  fetchProposals: ProposalController.fetchProposals,
  CreateProposals: ProposalController.CreateProposals,
  UpdateProposal: ProposalController.UpdateProposal,
  ChangeProposalStatus: ProposalController.ChangeProposalStatus,
  GetProposalByIdController: ProposalController.GetProposalByIdController,
  CreateProposalsVersion: ProposalController.CreateProposalsVersion,
});
