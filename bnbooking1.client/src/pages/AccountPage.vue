<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3">
        <div class="row border border-secondary elevation-3 p-3 m-3">
          <div class="about text-center">
            <h1>Welcome</h1>
            <img class="account-picture" :src="account.picture" alt="" />
            <p>{{ account.name }}</p>
            <i class="mdi mdi-pen"></i>
          </div>
        </div>
      </div>
      <div class="col-md-9">
        <div class="row">
          <div class="col-12">
            <div class="row border border-secondary elevation-3 p-3 m-3">
              <h4 class="text-center" v-if="myProviders.length">My gigs</h4>
              <h4 class="text-center" v-else>You don't have any Gigs</h4>
              <div class="row justify-content-around">
                <div
                  v-for="p in myProviders"
                  :key="p.id"
                  class="col-md-4 p-0 m-2 elevation-3 grow bg-light"
                >
                  <Provider :provider="p" />
                </div>
              </div>
              <div class="text-center">
                <button
                  class="btn btn-outline-secondary me-3"
                  data-bs-toggle="modal"
                  data-bs-target="#create-provider"
                >
                  Create New Provider
                </button>
              </div>
              <Modal id="create-provider">
                <template #header>Become a Provider</template>
                <template #body>
                  <ProviderForm />
                </template>
              </Modal>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-12 m-3">
            <div class="bg-secondary text-center elevation-2 rounded p-3 mb-2">
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
            <div class="col-md-12 pb-3 collapse" id="clientappt">
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
                  title="Expand personal appointments"
                  class="mdi mdi-arrow-expand-all selectable"
                  data-bs-toggle="collapse"
                  data-bs-target="#appt"
                ></i>
              </h4>
            </div>
            <div class="col-md-12 collapse" id="appt">
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
</template>

<script>
import { computed, onMounted } from 'vue'
import { AppState } from '../AppState'
import { appointmentsService } from '../services/AppointmentsService';
import { logger } from '../utils/Logger';
import { providersService } from '../services/ProvidersService';
export default {
  name: "Account",
  setup() {

    onMounted(async () => {
      await providersService.getMyProviders()
      await appointmentsService.getUserAppointments();
      await appointmentsService.getMyProviderAppointments()
      logger.log(AppState.providers)
    });
    return {
      account: computed(() => AppState.account),
      myProviders: computed(() => AppState.myProviders),
      userAppointments: computed(() => AppState.userAppointments),
      myProviderAppointments: computed(() => AppState.myProviderAppointments),
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
