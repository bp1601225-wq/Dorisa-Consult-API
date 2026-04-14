import {Router} from "express"
import { ProposalController } from "../controllers/proposalController"
import { authMiddleware } from "../middleware/AutthenticationChecker"


//  When a client request a services points up to this file

export const ProposalRoute = Router()

ProposalRoute.get("/get-all-proposals", authMiddleware,  ProposalController.GetAllProposals )

ProposalRoute.post("/create-proposal", ProposalController.CreateProposal)

ProposalRoute.put("/update-proposal/:id", ProposalController.UpdateProposal)

ProposalRoute.delete("/delete-proposal/:id", ProposalController.DeleteProposals)

ProposalRoute.patch("/proposal/:id/status", ProposalController.UpdateProposalStatus)