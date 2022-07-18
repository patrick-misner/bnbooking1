<template>
  <div class="row justify-content-center">
    <div class="col-12 text-center py-3">
      <h5>Select Date & Time</h5>
    </div>
    <form @submit.prevent="createAppointment" ref="form-test">
      <div class="col-12 mb-3">
        <div class="d-flex justify-content-center">
          <Datepicker
            v-model="date"
            ref="datepicker"
            @update:modelValue="getAvailableTimes(date)"
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
          />
        </div>
      </div>

      <div class="col-md-12 d-flex justify-content-center">
        <div class="mx-5 mb-3">
          <select
            v-model="editable.startTime"
            class="form-select"
            aria-label="Default select example"
          >
            <option selected>Select a time</option>
            <option
              :value="t"
              v-for="t in availableTimes"
              :key="t"
              :disabled="preBooked(t)"
            >
              {{ formatTime(t) }}
            </option>
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
  props: { provider: { type: Object, required: true } },
  setup(props) {
    const date = ref();
    const datepicker = ref(null);
    const clearDate = () => {
      if (datepicker) {
        datepicker.value.clearValue()
      }
    };
    const dailyAppointments = ref([])
    let editable = ref({
      date: date,
      providerId: '',
      startTime: 'Select a time'
    });
    const closedDays = getClosedDays()
    // const availableTimes = getAvailableTimes()
    function getClosedDays() {
      logger.log('get closed days')
      const closed = []
      for (let i = 0; i < props.provider.availability.length; i++) {
        const day = props.provider.availability[i];
        if (day.open === 0 && day.close === 0) {
          closed.push(i)
        }
      }
      return closed
    };
    const startTime = ref([{ hours: 9, minutes: 0 }, { hours: 17, minutes: 0 }]);
    const time = ref([{
      hours: 9,
      minutes: 0
    }, {
      hours: 17,
      minutes: 0
    }]);


    return {
      date,
      startTime,
      editable,
      closedDays,
      time,
      provider: computed(() => AppState.activeProvider),
      availableTimes: computed(() => AppState.availableTimes),
      myProviderAppointments: computed(() => AppState.myProviderAppointments),
      userAppointments: computed(() => AppState.userAppointments),
      providerAppointments: computed(() => AppState.providerAppointments),
      async createAppointment() {
        try {
          logger.log('appoint form attempt')
          const appointment = await appointmentsService.createAppointment(editable.value)
          Modal.getOrCreateInstance(document.getElementById("create-appointment")).hide()
          editable.value = {
            date: date,
            providerId: '',
            startTime: 'Select a time'
          }
          this.getAvailableTimes(date.value)
          Pop.toast('Appointment Created!', 'success')
          return appointment
        } catch (error) {
          logger.error(error)
          Pop.toast(error.message, 'error')
        }
      },
      getAvailableTimes(date) {
        let day = date.getDay()
        let open = this.provider.availability[day].open
        let close = this.provider.availability[day].close
        const range = [...Array(close - open + 1).keys()].map(x => x + open);
        for (let i = 0; i < range.length; i++) {
          const time = range[i];
          if ( time === 24){
            range.splice(i, 1)
          }
        }
        AppState.availableTimes = range

        const found = this.providerAppointments.filter(a => date.toLocaleDateString() == new Date(a.date).toLocaleDateString()).map(a => a.startTime)
        logger.log('found date', found)
        dailyAppointments.value = found
      },
      preBooked(t) {
        // double check this for data type
        return dailyAppointments.value.includes(t)
      },
      formatTime(t) {
        if (t < 12 && t != 0) {
          t = t + ':00 AM'
        }
        if (t == 12) {
          t = t + ':00 PM'
        }
        if (t > 12 && t < 24) {
          t = t - 12 + ':00 PM'
        }
        if (t == 0) {
          t = t + 12 + ':00 AM'
        }
        return t
      }
    };
  }

}
</script>

<style>
</style>