<template>


  <div class="row">
    <div class="col-12 text-center py-3">
      <h5>Select Date & Time</h5>
    </div>
    <div class="col-12 mb-3">
        <div class="d-flex justify-content-center">
                
                <Datepicker v-model="date" inline autoApply placeholder="Select Date" :minDate="new Date()" :disabledWeekDays="[6, 0]" :is24="false" minutesIncrement="60" noMinutesOverlay :startTime="startTime" :minTime="minTime"></Datepicker>
        </div>

    </div>
      <div class="col-12">
        <div class="modal-footer">
          <div class="d-flex justify-content-center">
          <button type="button" class="btn btn-primary">Submit</button>
          </div>
        </div>

      </div>

  </div>
</template>

<script>
import DatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import { computed, ref } from "@vue/reactivity";
import { AppState } from "../AppState";

export default {
  components: { DatePicker },
  setup() {
    const date = ref();
    const startTime = ref({ hours: 9, minutes: 0})
    const minTime = ref({ hours: 9})
    return {
      date,
      startTime,
      minTime,
      provider: computed(() => AppState.activeProvider),
    };
  }

}
</script>

<style>

</style>