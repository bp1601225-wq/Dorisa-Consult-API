import express from "express"
import { ProposalController } from "../controllers/proposalController"

export const ProposalRoute = express.Router()


ProposalRoute.get("/get-all-proposals", ProposalController.fetchProposals)
ProposalRoute.post("/create-proposals", ProposalController.CreateProposals)
ProposalRoute.put("/update-proposal/:id", ProposalController.UpdateProposal)


