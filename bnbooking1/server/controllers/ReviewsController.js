import { Auth0Provider } from "@bcwdev/auth0provider";
import { reviewsService } from "../services/ReviewsService";
import BaseController from "../utils/BaseController";


export class ReviewsController extends BaseController{
  constructor(){
    super('api/reviews')
    this.router
      .use (Auth0Provider.getAuthorizedUserInfo)
      .post('', this.create)
      .delete('/:id', this.delete)
  }

  async create(req, res, next){
    try {
      req.body.creatorId = req.userInfo.id
      const review = await reviewsService.create(req.body)
      return res.send(review)
    } catch (error) {
      next(error)
    }
  }

  async delete(req, res, next){
    try {
      const message = await reviewsService.delete(req.params.id, req.userInfo.id)
      return res.send(message)
    } catch (error) {
      next(error)
    }
  }
}