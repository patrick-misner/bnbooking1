import { Auth0Provider } from "@bcwdev/auth0provider"
import { appointmentsService } from "../services/AppointmentsService"
import BaseController from "../utils/BaseController"

export class AppointmentsController extends BaseController {
  constructor() {
    super('api/appointments')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.create)
      .delete('/:id', this.delete)
  }

  // req.body.date = new Date(req.body.date) this gets a new JSON formatted date
  async create(req, res, next) {
    try {
      req.body.accountId = req.userInfo.id
      req.body.date = new Date(req.body.date)
      const appointment = await appointmentsService.create(req.body)
      return res.send(appointment)
    } catch (error) {
      next(error)
    }
  }

  async delete(req, res, next) {
    try {
      await appointmentsService.delete(req.params.id, req.userInfo.id)
      return res.send('appointment deleted ')
    } catch (error) {
      next
        (error)
    }
  }
}