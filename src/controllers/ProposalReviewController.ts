import type { Request, Response } from "express";

export const ReviewController = {
  async GetAllReviews(_req: Request, res: Response) {
    return res.status(501).json({ message: "GetAllReviews not implemented" });
  },

  async GetReviewsById(_req: Request, res: Response) {
    return res.status(501).json({ message: "GetReviewsById not implemented" });
  },

  async CreateReviews(_req: Request, res: Response) {
    return res.status(501).json({ message: "CreateReviews not implemented" });
  },

  async EditReviews(_req: Request, res: Response) {
    return res.status(501).json({ message: "EditReviews not implemented" });
  },

  async NegotiateProposalReview(_req: Request, res: Response) {
    return res.status(501).json({ message: "NegotiateProposalReview not implemented" });
  },

  async fetchClientsNegotiationDetails(_req: Request, res: Response) {
    return res.status(501).json({ message: "fetchClientsNegotiationDetails not implemented" });
  },
};

