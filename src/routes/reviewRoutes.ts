import { Router } from 'express';
import { ReviewController } from '../controllers/ProposalReviewController';
import { authMiddleware } from '../middleware/AutthenticationChecker';

/**
 * `reviewRoutes.ts`
 *
 * Naming note:
 * - These endpoints are called "reviews" in the codebase,
 *   but they are basically Proposal + Negotiation endpoints.
 *
 * Flow steps covered here:
 * - Step 2: Create / edit a Proposal (Dorisa side)
 * - Step 4: Client negotiates on the Proposal (sends negotiation text)
 */
export const reviewsRoute = Router()



reviewsRoute.get('/get-all-reviews', authMiddleware,  ReviewController.GetAllReviews)

reviewsRoute.get('/client-personal-details/:id', ReviewController.GetReviewsById)
reviewsRoute.post(`/create-reviews`, ReviewController.CreateReviews)
reviewsRoute.put(`/update-reviews/:id`, ReviewController.EditReviews )


// Negotiating routes

reviewsRoute.post("/client-negotiating", authMiddleware, ReviewController.NegotiateProposalReview)
reviewsRoute.get("/client-negotiations", authMiddleware, ReviewController.fetchClientsNegotiationDetails)
