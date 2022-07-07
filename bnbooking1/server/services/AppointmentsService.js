import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors"

class AppointmentsService{
  async getAccountAppointments(accountId) {
   const appointments = await dbContext.Appointments.find({accountId}).sort({date: 1})
   .populate('provider', 'name')
   return appointments
  }
  async getProviderAppointments(providerId) {
    const appointments = await dbContext.Appointments.find(providerId).sort({createdAt: -1}).populate('account', 'name picture')
    return appointments
  }
 
  async create(body) {
   const appointment = await dbContext.Appointments.create(body)
   return appointment
  }

  async delete(appointmentId, userId) {
    const appointment = await dbContext.Appointments.findById(appointmentId)
    if(appointment.accountId.toString() != userId){
      throw new BadRequest('You can not delete an appointment that is now yours')
    }
    await appointment.remove()
    return 'appointment canceled'
  }

}
export const appointmentsService = new AppointmentsService()