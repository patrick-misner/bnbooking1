import { Auth0Provider } from "@bcwdev/auth0provider";
import { providersService } from "../services/ProvidersService";
import BaseController from "../utils/BaseController";

export class ProvidersController extends BaseController{
  constructor() {
    super('api/providers')
    this.router
      .get ('', this.getAll)
      .use (Auth0Provider.getAuthorizedUserInfo)
      .post ('', this.create)
  }

  async getAll (req, res, next){
    try {
      const providers = await providersService.getAll(req.query)
      return res.send(providers)
    } catch (error) {
      next(error)
    }
  }

  async create (req, res, next){
    try {
      req.body.creatorId = req.userInfo.id
      const provider = await providersService.create(req.body)
      return res.send(provider)
    } catch (error) {
      next(error)
    }
  }

}