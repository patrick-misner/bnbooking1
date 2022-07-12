import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors"

class ReviewsService {
  async getProviderReviews(providerId) {
    const reviews = await dbContext.Reviews.find(providerId).sort({ createdAt: -1 }).populate('creator', 'name picture')
    return reviews
  }
  async create(reviewData) {
    const review = await dbContext.Reviews.create(reviewData)
    await review.populate('creator', 'name picture')
    return review
  }

  async delete(reviewId, userId) {
    const review = await dbContext.Reviews.findById(reviewId)
    if (review.creatorId.toString() != userId) {
      throw new BadRequest("You don't have permissions to delete this")
    }
    await review.remove()
    return 'Deleted review'
  }

}


export const reviewsService = new ReviewsService()