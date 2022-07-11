import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"


class AppointmentsService {
  async getUserAppointments(){
    const res = await api.get('/account/appointments')
    AppState.userAppointments = res.data
  }
  async getProviderAppointments(accountId){
    const provider = AppState.providers.find(p => p.creatorId == accountId)
    logger.log('finding provider by the account Id', provider)
    const res = await api.get('api/providers/' + provider.id + '/appointments')
    return res.data
  }
  async createAppointment(body) {
    body.providerId = AppState.activeProvider.id
    logger.log('create appointment service', body)
    const res = await api.post('api/appointments', body)
    return res.data
  }

  async deleteAppointment(appointmentId){
    const res = await api.delete('api/appointments/' + appointmentId)
    AppState.userAppointments = AppState.userAppointments.filter(a => a.id != appointmentId)
  }

}

export const appointmentsService = new AppointmentsService()