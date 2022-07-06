import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"


class AppointmentsService {
  async createAppointment(body) {
    body.providerId = AppState.activeProvider.id
    logger.log('create appointment service', body)
    const res = await api.post('api/appointments', body)
    return res.data
  }

}

export const appointmentsService = new AppointmentsService()