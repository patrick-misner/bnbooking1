import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class ReviewsService{
  async getProviderReviews(providerId){
    const res = await api.get('api/providers/' + providerId + '/reviews')
    AppState.reviews = res.data
  }
  async createReview(body) {
    logger.log('new review', body)
    body.providerId = AppState.activeProvider.id
    const res = await api.post('api/reviews', body)
    logger.log('created review', res.data)
    AppState.reviews.unshift(res.data)
    return res.data
}
async deleteReview(reviewId){
  const res = await api.delete('api/reviews/' + reviewId)
  AppState.reviews = AppState.reviews.filter(r => r.id != reviewId)
}
}

export const reviewsService = new ReviewsService()