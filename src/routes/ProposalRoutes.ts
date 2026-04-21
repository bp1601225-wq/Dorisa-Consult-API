import { Router } from "express";
import { ProposalController } from "../controllers/proposalController";
import { authMiddleware } from "../middleware/AutthenticationChecker";


export const ProposalRoute = Router();

ProposalRoute.get(
  "/get-all-proposals",
  // authMiddleware,
  ProposalController.fetchProposals
);

ProposalRoute.post(
  "/create-proposal",
  //  authMiddleware,
   ProposalController.CreateProposals
  )
;

ProposalRoute.put(
  "/update-proposal/:id",
  authMiddleware,
  ProposalController.UpdateProposal
);



ProposalRoute.patch(
  "/proposal/:id/status",
  authMiddleware,
  ProposalController.UpdateProposal
);
