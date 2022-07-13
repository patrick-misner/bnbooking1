import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"


class AppointmentsService {
  async getUserAppointments() {
    const res = await api.get('/account/appointments')
    AppState.userAppointments = res.data
  }
  // FIXME this needs to be a get my
  async getMyProviderAppointments() {
    let appointments = []
    AppState.myProviders.forEach(p => {
      appointments.push(api.get('api/providers/' + p.id + '/appointments'))
    })
    const res = await Promise.all(appointments)
    let allAppointments = []
    res.forEach(r => {
      allAppointments.push(...r.data)
    })
    // FIXME this needs to be 'my provider appointments'
    AppState.myProviderAppointments = allAppointments
    logger.log('allappointments', AppState.myProviderAppointments)
  }


  // TODO get appointments by provider id


  async createAppointment(body) {
    body.providerId = AppState.activeProvider.id
    logger.log('create appointment service', body)
    const res = await api.post('api/appointments', body)
    return res.data
  }

  async deleteAppointment(appointmentId) {
    const res = await api.delete('api/appointments/' + appointmentId)
    AppState.userAppointments = AppState.userAppointments.filter(a => a.id != appointmentId)
    AppState.providerAppointments = AppState.providerAppointments.filter(a => a.id != appointmentId)
  }

}

export const appointmentsService = new AppointmentsService()