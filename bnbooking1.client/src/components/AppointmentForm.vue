<template>
  Appointment Form component
<Datepicker v-model="date"></Datepicker>
  <div class="row">
    <div class="col-md-6">
      col 1
    </div>
    <div class="col-md-6">
      col 2
    </div>
  </div>
</template>

<script>
import DatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

export default {
  components: { DatePicker },
  setup() {
    return {
      date: null,
    };
  }

}
</script>

<style>

</style>