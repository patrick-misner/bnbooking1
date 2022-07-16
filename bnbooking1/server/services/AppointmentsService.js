import { dbContext } from "../db/DbContext"
import { socketProvider } from "../SocketProvider"
import { BadRequest } from "../utils/Errors"
import { logger } from "../utils/Logger"

class AppointmentsService {
  async getAccountAppointments(accountId) {
    const appointments = await dbContext.Appointments.find({ accountId }).sort({ date: 1 }).populate('account', 'name picture').populate('provider', 'name')
    return appointments
  }
  async getProviderAppointments(providerId) {
    const appointments = await dbContext.Appointments.find(providerId).sort({ date: 1 }).populate('account', 'name picture').populate('provider', 'name')
    return appointments
  }
  async create(body) {
    const appointment = await dbContext.Appointments.create(body)
    await appointment.populate('provider account')

    logger.log(body.providerId)
    socketProvider.messageUser(appointment.provider.creatorId.toString(),'appointment:created',appointment)
    return appointment
  }

  async delete(appointmentId, userId) {
    const appointment = await dbContext.Appointments.findById(appointmentId)
    await appointment.remove()


    return 'appointment canceled'
  }

}
export const appointmentsService = new AppointmentsService()