import BaseController from "../utils/BaseController";

export class ProvidersController extends BaseController{
  constructor() {
    super('api/providers')
    this.router
      .get ('', this.getAll)
  }


  async getAll (req, res, next){
    try {
      
    } catch (error) {
      next(error)
    }
  }
}