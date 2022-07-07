<template>
  <div class="about text-center">
    <h1>Welcome {{ account.name }}</h1>
    <img class="rounded" :src="account.picture" alt="" />
    <p>{{ account.email }}</p>
  </div>

  <div class="container-fluid">
    <div class="row">
      <div class="col-12">

        <div class="bg-secondary text-center elevation-2 rounded py-3">
          <h4>My Appointments</h4>  
        </div>

      </div>
      <div class="col-12">
        <Appointment v-for="a in userAppointments" :key="a.id" :appointment="a"/>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { AppState } from '../AppState'
import { appointmentsService } from "../services/AppointmentsService"
import AppointmentForm from "../components/AppointmentForm.vue"
export default {
    name: "Account",
    setup() {
        onMounted(async () => {
            const userAppointments = await appointmentsService.getUserAppointments();
            // await appointmentsService.getProviderAppointments(account.id)
        });
        return {
            account: computed(() => AppState.account),
            userAppointments: computed(() => AppState.userAppointments),
        };
    },
    components: { AppointmentForm }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
