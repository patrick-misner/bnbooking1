<template>
  <div class="row justify-content-center">
    <div class="col-12 text-center py-3">
      <h5>Select Date & Time</h5>
    </div>
    <form @submit.prevent="createAppointment">
      <div class="col-12 mb-3">
        <div class="d-flex justify-content-center">
          <Datepicker
            v-model="date"
            inline
            autoApply
            placeholder="Select Date"
            :minDate="new Date()"
            :disabledWeekDays="closedDays"
            :is24="false"
            minutesIncrement="60"
            noMinutesOverlay
            :startTime="startTime"
            format="dd-MM-yyyy"
            :enableTimePicker="false"
          ></Datepicker>
        </div>
      </div>

            <!-- <div class="col-12 mb-3 text-center">
              Monday:
        <div class="d-flex justify-content-center align-items-center">
          <Datepicker v-model="time" range minutesIncrement="60" timePicker noMinutesOverlay :startTime="startTime" :is24="false"/>
        </div>
      </div> -->
    
      <div class="col-md-12 d-flex justify-content-center">
        <div class="mx-5 mb-3">
          <!-- {{ provider.availability }} -->
          <select
            v-model="editable.startTime"
            class="form-select text-center"
            size="3"
            aria-label="size 3 select example"
          >
            <option selected>Select a time</option>
            <option value="9">9:00 AM</option>
            <option value="10">10:00 AM</option>
            <option value="11">11:00 AM</option>
            <option value="12">12:00 PM</option>
            <option value="13">1:00 PM</option>
            <option value="14">2:00 PM</option>
            <option value="15">3:00 PM</option>
            <option value="16">4:00 PM</option>
            <option value="17">5:00 PM</option>
          </select>
        </div>
      </div>
      <div class="col-12">
        <div class="modal-footer">
          <div class="d-flex justify-content-center">
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import DatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import { computed, ref } from "@vue/reactivity";
import { AppState } from "../AppState";
import { logger } from "../utils/Logger";
import { appointmentsService } from '../services/AppointmentsService'
import Pop from "../utils/Pop";
import { Modal } from "bootstrap";

export default {
  components: { DatePicker },
  setup() {
    const date = ref();
    const editable = ref({
      date: date,
      providerId: '',
    });
    const closedDays = [];
    const startTime = ref([{ hours: 9, minutes: 0 }, { hours: 17, minutes: 0}]);
    const time = ref([{
      hours: 9,
      minutes: 0
    }, {
      hours: 17,
      minutes: 0
    }])

    return {
      date,
      startTime,
      editable,
      closedDays,
      time,
      provider: computed(() => AppState.activeProvider),
      async createAppointment() {
        try {
          logger.log('appoint form attempt')
          const appointment = await appointmentsService.createAppointment(editable.value)
          Modal.getOrCreateInstance(document.getElementById("create-appointment")).hide()
          Pop.toast('Appointment Created!', 'success')
          return appointment
        } catch (error) {
          logger.error(error)
          Pop.toast(error.message, 'error')
        }
      },
    };
  }

}
</script>

<style>
</style>