import { Auth0Provider } from '@bcwdev/auth0provider'
import { accountService } from '../services/AccountService'
import { appointmentsService } from "../services/AppointmentsService"
import BaseController from '../utils/BaseController'

export class AccountController extends BaseController {
  constructor() {
    super('account')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getUserAccount)
      .get('/appointments', this.getAccountAppointments)
  }
 async getAccountAppointments(req, res, next) {
    try {
      const appointments = await appointmentsService.getAccountAppointments(req.userInfo.id)
    return res.send(appointments)
    } catch (error) {
      next(error)
    }
    
  }

  async getUserAccount(req, res, next) {
    try {
      const account = await accountService.getAccount(req.userInfo)
      res.send(account)
    } catch (error) {
      next(error)
    }
  }
}
