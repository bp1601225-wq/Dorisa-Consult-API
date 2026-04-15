import { Router } from 'express';
import { ReviewController } from '../controllers/ProposalReviewController';
import { authMiddleware } from '../middleware/AutthenticationChecker';

export const reviewsRoute = Router()



reviewsRoute.get('/get-all-reviews', authMiddleware,  ReviewController.GetAllReviews)

reviewsRoute.get('/client-personal-details/:id', ReviewController.GetReviewsById)
reviewsRoute.post(`/create-reviews`, ReviewController.CreateReviews)
reviewsRoute.put(`/update-reviews/:id`, ReviewController.EditReviews )


// Negotiating routes

reviewsRoute.post("/client-negotiating", authMiddleware, ReviewController.NegotiateProposalReview)