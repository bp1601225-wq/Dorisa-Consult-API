import { Router } from 'express';
import { ReviewController } from '../controllers/projectReviewController';

export const reviewsRoute = Router()


reviewsRoute.get('/get-all-reviews', ReviewController.GetAllReviews)

reviewsRoute.get('/client-personal-details/:id', ReviewController.GetReviewsById)
reviewsRoute.post(`/create-reviews`, ReviewController.CreateReviews)
reviewsRoute.put(`/update-reviews/:id`, ReviewController.EditReviews )
