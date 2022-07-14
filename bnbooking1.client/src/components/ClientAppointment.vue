<template>
  <div class="bg-grey elevation-2 rounded">
    <div class="row mt-3 fs-4 align-items-center">
      <div class="col-4">
        <span class="ps-3 text-uppercase">{{ appointment.account.name }}</span>
      </div>
      <div class="col-4 text-center">
        <span
          >{{ formatDate(appointment.date) }} |
          {{ appointment.startTime }}:00</span
        >
      </div>
      <div class="col-4 text-end py-3">
        <span class="p-3"
          ><button
            @click="deleteAppointment(appointment.id)"
            type="button"
            class="btn btn-danger"
          >
            Cancel
          </button></span
        >
      </div>
    </div>
  </div>
</template>


<script>
import { id } from "date-fns/locale"
import { appointmentsService } from "../services/AppointmentsService"
import { logger } from "../utils/Logger"
import Pop from "../utils/Pop"
export default {
  props: { appointment: { type: Object, required: true } },
  setup() {
    return {
      formatDate(rawDate) {
        return new Date(rawDate).toLocaleDateString()
      },
      async deleteAppointment(appointmentId) {
        try {
          if (await Pop.confirm('Are you sure you want to cancel?')) {
            await appointmentsService.deleteAppointment(appointmentId)
            Pop.toast('Appointment deleted', 'success')

          }
        } catch (error) {
          logger.error(error)
          Pop.toast(error.message, 'error')
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>
</style>