import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"


class AppointmentsService {
  async getUserAppointments(){
    const res = await api.get('/account/appointments')
    AppState.userAppointments = res.data
  }
  async getProviderAppointments(accountId){
    logger.log('finding provider by the account Id', providers)
    let appointments = []
    AppState.myProviders.forEach(p => {
      appointments.push(api.get('api/providers/' + p.id + '/appointments'))
    })
    const res = await Promise.all(appointments)
    // const res = await api.get('api/providers/' + provider.id + '/appointments')
    logger.log('get provider appts', res.data)
    AppState.providerAppointments = res.data
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