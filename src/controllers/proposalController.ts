import { Request, Response } from "express";
import { ProposalService } from "../services/proposal.service";
import { isHttpError } from "../services/errors";

//  Controller file for a client requesting for a service
export const ProposalController = {
  // Fetch all proposal
  async GetAllProposals(req: Request, res: Response) {
    const user = (req as any).user;

    try {
      const result = await ProposalService.getAllProposals(user);

      return res.status(200).json({
        message: "Proposals fetched succesfully",
        data: result.data,
        total: result.total,
      });
    } catch (error: any) {
      console.log(error);
      return res.status(500).json({
        message: "Internal server error",
        error: error?.message ?? error,
      });
    }
  },

  async CreateProposal(req: Request, res: Response) {
    try {
      const ProposalData = await ProposalService.createProposal(req.body);

      return res.status(200).json({
        message: "service request succesfull, A proposal will be sent to you",
        data: ProposalData,
      });
    } catch (error: any) {
      console.error(error);
      if (isHttpError(error)) {
        return res.status(error.statusCode).json({ message: error.message });
      }
      return res.status(500).json({
        message: "Internal server error",
        error: error?.message ?? error,
      });
    }
  },

  async UpdateProposal(req: Request, res: Response) {
    try {
      const id = req.params.id as string;
      const EditedProposal = await ProposalService.updateProposal(id, req.body);

      return res.status(200).json({
        message: "Proposal Edited Succesfully",
        data: EditedProposal,
      });
    } catch (error: any) {
      console.error(error);
      return res.status(500).json({
        data: error,
      });
    }
  },

  async DeleteProposals(req: Request, res: Response) {
    try {
      const id = req.params.id as string;

      await ProposalService.deleteProposal(id);

      return res.status(200).json({
        message: "proposal deleted succesfully",
      });
    } catch (error: any) {
      console.error(error);
      return res.status(500).json({
        message: "failed to delete service with request id",
        error,
      });
    }
  },

  async UpdateProposalStatus(req: Request, res: Response) {
    try {
      const id = req.params.id as string;
      const { proposal_status } = req.body;

      const Data = await ProposalService.updateProposalStatus(id, proposal_status);

      return res.status(200).json({
        message: "Status updated successfully",
        data: Data,
      });
    } catch (error: any) {
      console.log(error);
      if (isHttpError(error)) {
        return res.status(error.statusCode).json({ message: error.message });
      }

      return res.status(500).json({
        message: "Internal server error",
        error,
      });
    }
  },
};

