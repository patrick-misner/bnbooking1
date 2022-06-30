import { Auth0Provider } from "@bcwdev/auth0provider";
import { providersService } from "../services/ProvidersService";
import BaseController from "../utils/BaseController";

export class ProvidersController extends BaseController{
  constructor() {
    super('api/providers')
    this.router
      .get ('', this.getAll)
      .get('/:id', this.getById)
      .use (Auth0Provider.getAuthorizedUserInfo)
      .post ('', this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.delete)
  }
 
 

  async getAll (req, res, next){
    try {
      const providers = await providersService.find(req.query.query)
      return res.send(providers)
    } catch (error) {
      next(error)
    }
  }

  async getById (req, res, next){
    try {
      const provider = await providersService.getById(req.params.id)
      return res.send(provider)
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

  async edit(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const update = await providersService.edit(req.params.id, req.body)
      return res.send(update)
    } catch (error) {
     next(error)
    }

  }

  async delete(req, res, next) {
      try {
        const message = await providersService.delete(req.params.id, req.userInfo.id)
        res.send(message)
      } catch (error) {
        next(error)
      }
  }

}