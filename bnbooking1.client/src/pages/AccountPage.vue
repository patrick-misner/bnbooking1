<template>
  <div class="container">
    <div class="row">
      <div class="col-3 border border-dark p-3 m-3">
        <div class="row">
          <div class="about text-center">
            <h1>Welcome</h1>
            <img class="account-picture" :src="account.picture" alt="" />
            <p>{{ account.name }}</p>
            <i class="mdi mdi-pen"></i>
          </div>
        </div>
        <div class="row">
          <div class="col-12 d-flex justify-content-between">
            <p><i class="mdi mdi-map-marker"></i>From</p>
            <span>Boise</span>
          </div>
          <div class="col-12"></div>
        </div>
      </div>
      <div class="col-9 justify-content-center">
        <div class="row">
          <div class="container-fluid">
            <div class="row">
              <div class="col-12 m-3">
                <!-- <i
          class="mdi mdi-magnify fs-1 text-primary selectable"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample"
        ></i>
      </router-link>
      <div class="collapse" id="collapseExample">
        <Search />
      </div> -->

                <div class="bg-secondary text-center elevation-2 rounded py-3">
                  <h4>
                    My Client Appointments
                    <i
                      title="Expand client appointments"
                      class="mdi mdi-arrow-expand-all selectable"
                      data-bs-toggle="collapse"
                      data-bs-target="#clientappt"
                    ></i>
                  </h4>
                </div>
                <div class="col-12 pb-3 collapse" id="clientappt">
                  <ClientAppointment
                    v-for="a in myProviderAppointments"
                    :key="a.id"
                    :appointment="a"
                  />
                </div>

                <div class="bg-secondary text-center elevation-2 rounded py-3">
                  <h4>
                    My Appointments
                    <i
                      title="Expand client appointments"
                      class="mdi mdi-arrow-expand-all selectable"
                      data-bs-toggle="collapse"
                      data-bs-target="#appt"
                    ></i>
                  </h4>
                </div>
                <div class="col-12 collapse" id="appt">
                  <Appointment
                    v-for="a in userAppointments"
                    :key="a.id"
                    :appointment="a"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- -->
</template>

<script>
import { computed, onMounted, watchEffect } from 'vue'
import { AppState } from '../AppState'
import { appointmentsService } from "../services/AppointmentsService"
import { providersService } from "../services/ProvidersService"
export default {
  name: "Account",
  setup() {
    onMounted(async () => {
      const userAppointments = await appointmentsService.getUserAppointments();
    });
    return {
      account: computed(() => AppState.account),
      userAppointments: computed(() => AppState.userAppointments),
      myProviderAppointments: computed(() => AppState.myProviderAppointments)
    };
  },
}
</script>

<style scoped>
img {
  max-width: 100px;
}
.account-picture {
  border-radius: 50%;
}
</style>
