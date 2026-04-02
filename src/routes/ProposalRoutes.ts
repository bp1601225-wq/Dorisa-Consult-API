import {Router} from "express"
import { ProposalController } from "../controllers/proposalController"


export const ProposalRoute = Router()

ProposalRoute.get("/get-all-proposals", ProposalController.GetAllProposals )

ProposalRoute.post("/create-proposal", ProposalController.CreateProposal)

ProposalRoute.put("/update-proposal/:id", ProposalController.UpdateProposal)

ProposalRoute.delete("/delete-proposal/:id", ProposalController.DeleteProposals)