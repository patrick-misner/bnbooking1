import { Auth0Provider } from "@bcwdev/auth0provider"
import { appointmentsService } from "../services/AppointmentsService"
import BaseController from "../utils/BaseController"

export class AppointmentsController extends BaseController{
  constructor(){
    super('api/appointments')
    this.router
    .use(Auth0Provider.getAuthorizedUserInfo)
    .post('', this.create)
  }
  async create(req, res, next) {
   try {
    req.body.accountId = req.userInfo.id
    const appointment = await appointmentsService.create(req.body)
    return res.send(appointment)
   } catch (error) {
    next(error)
   }
  }
}