import { dbContext } from "../db/DbContext"

class AppointmentsService{
  async create(body) {
   const appointment = await dbContext.Appointments.create(body)
   return appointment
  }

}
export const appointmentsService = new AppointmentsService()