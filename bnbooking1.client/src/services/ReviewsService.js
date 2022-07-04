import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class ReviewsService{
  async getProviderReviews(providerId){
    const res = await api.get('api/providers/' + providerId + '/reviews')
    AppState.reviews = res.data
  }
}

export const reviewsService = new ReviewsService()