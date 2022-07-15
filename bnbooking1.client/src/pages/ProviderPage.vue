<template>
  <!-- <div class="container-fluid"> -->
  <div class="row bg-img">
    <div class="col-12">
      <div class="d-flex justify-content-center">
        <img
          class="img-fluid profile-img"
          src="https://thiscatdoesnotexist.com"
          alt=""
        />
      </div>
      <div class="text-center text-light">
        <p>
          {{ provider.name }}
          <button
            v-if="provider.creatorId == account.id"
            type="button"
            class="btn btn-primary p-1"
            data-bs-toggle="modal"
            data-bs-target="#create-provider"
          >
            <i class="mdi mdi-pencil"></i>
          </button>
        </p>
      </div>
    </div>
  </div>
  <div
    class="row p-3 text-light text-center border-bottom border-dark border-3"
  >
    <div class="col-3">
      <h5><i class="mdi mdi-plus-circle p-2"></i>Add to list</h5>
    </div>
    <div class="col-3">
      <button
        type="button"
        class="btn text-light selectable"
        data-bs-toggle="modal"
        data-bs-target="#create-appointment"
      >
        <h5 v-if="!loading"><i class="mdi mdi-plus-circle p-2"></i>Book</h5>
        <h5 v-else><i class="mdi mdi-loading mdi-spin"></i></h5>
      </button>
    </div>
    <div class="col-3">
      <button
        type="button"
        class="btn text-light selectable"
        data-bs-toggle="modal"
        data-bs-target="#create-review"
        v-if="!isProvider"
      >
        <h5><i class="mdi mdi-plus-circle p-2"></i>Review</h5>
      </button>
      <button
        type="button"
        class="btn text-light selectable"
        @click="deleteProvider(provider.id)"
        v-else
      >
        <h5><i class="mdi mdi-minus-circle p-2"></i>Delete</h5>
      </button>
    </div>
    <div class="col-3">
      <h5><i class="mdi mdi-plus-circle p-2"></i>Share</h5>
    </div>
    <div class="row justify-content-center">
      <div class="col-md-5 text-center">
        <div v-if="averageRating >= 4.5">
          <i class="mdi mdi-star fs-3"></i>
          <i class="mdi mdi-star fs-3"></i>
          <i class="mdi mdi-star fs-3"></i>
          <i class="mdi mdi-star fs-3"></i>
          <i class="mdi mdi-star fs-3"></i>
        </div>
        <div v-if="(averageRating >= 3.5) & (averageRating < 4.5)">
          <i class="mdi mdi-star fs-2"></i>
          <i class="mdi mdi-star fs-2"></i>
          <i class="mdi mdi-star fs-2"></i>
          <i class="mdi mdi-star fs-2"></i>
          <i class="mdi mdi-star grey fs-2"></i>
        </div>
        <div v-if="(averageRating >= 2.5) & (averageRating < 3.5)">
          <i class="mdi mdi-star fs-2"></i>
          <i class="mdi mdi-star fs-2"></i>
          <i class="mdi mdi-star fs-2"></i>
          <i class="mdi mdi-star grey fs-2"></i>
          <i class="mdi mdi-star grey fs-2"></i>
        </div>
        <div v-if="(averageRating >= 1.5) & (averageRating < 2.5)">
          <i class="mdi mdi-star fs-2"></i>
          <i class="mdi mdi-star fs-2"></i>
          <i class="mdi mdi-star grey fs-2"></i>
          <i class="mdi mdi-star grey fs-2"></i>
          <i class="mdi mdi-star grey fs-2"></i>
        </div>
        <div v-if="(averageRating >= 0.5) & (averageRating < 1.5)">
          <i class="mdi mdi-star fs-2"></i>
          <i class="mdi mdi-star grey fs-2"></i>
          <i class="mdi mdi-star grey fs-2"></i>
          <i class="mdi mdi-star grey fs-2"></i>
          <i class="mdi mdi-star grey fs-2"></i>
        </div>
      </div>
    </div>
  </div>

  <div class="row justify-content-center">
    <div
      class="col-10 col-md-8 map m-3 text-dark elevation-2"
      style="
        background-image: url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2050&q=80');
      "
    >
      <div class="row">
        <div class="col-12">
          <div class="map-card rounded elevation-2 m-3 p-2 text-center">
            <h3>Hours</h3>
            <div v-for="a in provider.availability" :key="a.id">
              <div v-if="a.day == 0">
                Sunday {{ a.open == 0 && a.close == 0 ? "Closed" : "" }}
                {{ a.open == 0 && a.close == 0 ? "" : formatTime(a.open) }}
                {{ a.open == 0 && a.close == 0 ? "" : formatTime(a.close) }}
              </div>
              <div v-if="a.day == 1">
                Monday {{ a.open == 0 && a.close == 0 ? "Closed" : "" }}
                {{ a.open == 0 && a.close == 0 ? "" : formatTime(a.open) }}
                {{ a.open == 0 && a.close == 0 ? "" : formatTime(a.close) }}
              </div>
              <div v-if="a.day == 2">
                Tuesday {{ a.open == 0 && a.close == 0 ? "Closed" : "" }}
                {{ a.open == 0 && a.close == 0 ? "" : formatTime(a.open) }}
                {{ a.open == 0 && a.close == 0 ? "" : formatTime(a.close) }}
              </div>
              <div v-if="a.day == 3">
                Wednesday {{ a.open == 0 && a.close == 0 ? "Closed" : "" }}
                {{ a.open == 0 && a.close == 0 ? "" : formatTime(a.open) }}
                {{ a.open == 0 && a.close == 0 ? "" : formatTime(a.close) }}
              </div>
              <div v-if="a.day == 4">
                Thursday {{ a.open == 0 && a.close == 0 ? "Closed" : "" }}
                {{ a.open == 0 && a.close == 0 ? "" : formatTime(a.open) }}
                {{ a.open == 0 && a.close == 0 ? "" : formatTime(a.close) }}
              </div>
              <div v-if="a.day == 5">
                Friday {{ a.open == 0 && a.close == 0 ? "Closed" : "" }}
                {{ a.open == 0 && a.close == 0 ? "" : formatTime(a.open) }}
                {{ a.open == 0 && a.close == 0 ? "" : formatTime(a.close) }}
              </div>
              <div v-if="a.day == 6">
                Saturday {{ a.open == 0 && a.close == 0 ? "Closed" : "" }}
                {{ a.open == 0 && a.close == 0 ? "" : formatTime(a.open) }}
                {{ a.open == 0 && a.close == 0 ? "" : formatTime(a.close) }}
              </div>
            </div>
            <h5 class="mt-2">
              location: {{ provider.location }}
              <a :href="`https://maps.google.com/?q=${googleAddress}`"
                ><i class="mdi mdi-google-maps text-info"></i
              ></a>
            </h5>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="text-center">
    <h1>
      <span class="border-bottom border-3 border-dark">Provider Reviews</span>
    </h1>
  </div>
  <Review v-for="r in reviews" :key="r.id" :review="r" />
  <!-- </div> -->

  <Modal
    v-if="provider.id"
    id="create-appointment"
    :formProvider="this.provider"
  >
    <template #header>Book Appointment with {{ provider.name }}</template>
    <template #body>
      <AppointmentForm :provider="provider" />
    </template>
  </Modal>

  <Modal id="create-review">
    <template #header>Review {{ provider.name }}</template>
    <template #body>
      <ReviewForm :provider="provider" />
    </template>
  </Modal>

  <Modal id="create-provider" v-if="provider.id">
    <template #header>Become a Provider</template>
    <template #body>
      <ProviderForm />
    </template>
  </Modal>
</template>

<script>
import { computed, onMounted, onUnmounted, ref, watchEffect } from "@vue/runtime-core"
import { onBeforeRouteLeave, useRoute, useRouter } from "vue-router"
import Pop from "../utils/Pop"
import { logger } from "../utils/Logger"
import { providersService } from "../services/ProvidersService"
import { reviewsService } from "../services/ReviewsService"
import { AppState } from "../AppState"
import { appointmentsService } from '../services/AppointmentsService'
export default {
  setup() {
    // const averageRating = 
    const router = useRouter()
    const route = useRoute();
    const loading = ref(true);
    onMounted(async () => {

    })
    watchEffect(async () => {
      try {
        if (route.name == "Provider") {
          await providersService.getProvider(route.params.id);
          await reviewsService.getProviderReviews(route.params.id);
          await appointmentsService.getProviderAppointments(route.params.id);
          // TODO await get provider appointments
          loading.value = false
        }
      }
      catch (error) {
        logger.error(error);
        Pop.toast(error.message, "error");
      }
    }),
      onBeforeRouteLeave(() => {
        AppState.activeProvider = {}
      })
    return {
      provider: computed(() => AppState.activeProvider),
      isProvider: computed(() => AppState.account.id === AppState.activeProvider.creatorId),
      reviews: computed(() => AppState.reviews),
      account: computed(() => AppState.account),
      googleAddress: computed(() => AppState.activeProvider.location.replace(' ', '+')),
      providerAppointments: computed(() => AppState.providerAppointments),
      loading,
      averageRating: computed(() => {
        let total = 0
        for (let i = 0; i < AppState.reviews.length; i++) {
          let review = AppState.reviews[i]
          total += review.rating
        }
        return total / AppState.reviews.length
      }),
      providerAppointments: computed(() => AppState.providerAppointments),
      formatTime(t) {
        if (t < 12 && t != 0) {
          t = t + ':00 AM'
        }
        if (t == 12) {
          t = t + ':00 PM'
        }
        if (t > 12) {
          t = t - 12 + ':00 PM'
        }
        if (t == 0) {
          t = t + 12 + ':00 AM'
        }
        return t
      },
      async deleteProvider(providerId) {
        try {
          if (await Pop.confirm('Are you sure you want to delete this gig')) {
            await providersService.deleteProvider(providerId)

            Pop.toast('Gig was deleted', 'success')
            router.push({ name: 'Account' })
          }
        } catch (error) {
          logger.error(error)
          Pop.toast(error.message, 'error')
        }
      }
    };
  },
}
</script>

<style>
.bg-img {
  background-image: url("https://placekitten.com/200");
  background-size: cover;
  height: 25vh;
  background-repeat: no-repeat;
}

.profile-img {
  border-radius: 50%;
  height: 150px;
  min-height: 150px;
}

i {
  color: black;
}

.map {
  border-radius: 5px;
  background-size: cover;
  height: 300px;
  background-position: center;
}
.map-card {
  background-color: rgba(255, 255, 255, 0.729);
}

.mdi-star {
  color: yellow;
}
</style>