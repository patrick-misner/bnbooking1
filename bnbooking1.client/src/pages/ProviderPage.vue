<template>
  <div class="container-fluid">
    <div class="row bg-img">
      <div class="col-12">
        <div class="d-flex justify-content-center mt-5">
          <img
            class="img-fluid profile-img"
            src="https://thiscatdoesnotexist.com"
            alt=""
          />
        </div>
        <div class="text-center p-3">
          <p>
            {{ provider.name
            }}<i class="mdi mdi-pencil" @click="editProvider"></i>
          </p>
        </div>
      </div>
    </div>
    <div
      class="
        row
        flex-row
        p-3
        text-light text-center
        border-bottom border-dark border-3
      "
    >
      <div class="col-2">
        <h5><i class="mdi mdi-plus-circle p-2"></i>Add to list</h5>
      </div>
      <div class="col-2">
        <button
          type="button"
          class="btn text-light selectable"
          data-bs-toggle="modal"
          data-bs-target="#create-appointment"
        >
          <h5 v-if="loaded"><i class="mdi mdi-plus-circle p-2"></i>Book</h5>
          <h5 v-else><i class="mdi mdi-loading mdi-spin"></i></h5>
        </button>
      </div>
      <div class="col-4">
        <div v-if="provider.rating >= 4.5">
          <i class="mdi mdi-star-circle fs-3"></i>
          <i class="mdi mdi-star-circle fs-3"></i>
          <i class="mdi mdi-star-circle fs-3"></i>
          <i class="mdi mdi-star-circle fs-3"></i>
          <i class="mdi mdi-star-circle fs-3"></i>
        </div>
        <div v-if="(provider.rating >= 3.5) & (provider.rating < 4.5)">
          <i class="mdi mdi-star-circle fs-2"></i>
          <i class="mdi mdi-star-circle fs-2"></i>
          <i class="mdi mdi-star-circle fs-2"></i>
          <i class="mdi mdi-star-circle fs-2"></i>
          <i class="mdi mdi-star-circle grey fs-2"></i>
        </div>
        <div v-if="(provider.rating >= 2.5) & (provider.rating < 3.5)">
          <i class="mdi mdi-star-circle fs-2"></i>
          <i class="mdi mdi-star-circle fs-2"></i>
          <i class="mdi mdi-star-circle fs-2"></i>
          <i class="mdi mdi-star-circle grey fs-2"></i>
          <i class="mdi mdi-star-circle grey fs-2"></i>
        </div>
        <div v-if="(provider.rating >= 1.5) & (provider.rating < 2.5)">
          <i class="mdi mdi-star-circle fs-2"></i>
          <i class="mdi mdi-star-circle fs-2"></i>
          <i class="mdi mdi-star-circle grey fs-2"></i>
          <i class="mdi mdi-star-circle grey fs-2"></i>
          <i class="mdi mdi-star-circle grey fs-2"></i>
        </div>
        <div v-if="(provider.rating >= 0.5) & (provider.rating < 1.5)">
          <i class="mdi mdi-star-circle fs-2"></i>
          <i class="mdi mdi-star-circle grey fs-2"></i>
          <i class="mdi mdi-star-circle grey fs-2"></i>
          <i class="mdi mdi-star-circle grey fs-2"></i>
          <i class="mdi mdi-star-circle grey fs-2"></i>
        </div>
      </div>
      <div class="col-2">
        <button
          type="button"
          class="btn text-light selectable"
          data-bs-toggle="modal"
          data-bs-target="#create-review"
          v-if="!isProvider"
        >
          <h5><i class="mdi mdi-plus-circle p-2"></i>Review</h5>
        </button>
      </div>
      <div class="col-2">
        <h5><i class="mdi mdi-plus-circle p-2"></i>Share</h5>
      </div>
    </div>
  </div>
  <div class="d-flex justify-content-center">
    <div
      class="col-md-8 map m-3 text-success"
      style="
        background-image: linear-gradient(
            to right,
            rgba(0, 0, 0, 0.9),
            rgba(0, 0, 0, 0.5)
          ),
          url('https://c1.10times.com/map/city/91848.png');
      "
    >
      <div v-for="a in provider.availability" :key="a.id">
        <div v-if="a.day == 0">Sunday {{ a.open }} - {{ a.close }}</div>
        <div v-if="a.day == 1">Monday {{ a.open }} - {{ a.close }}</div>
        <div v-if="a.day == 2">Tuesday {{ a.open }} - {{ a.close }}</div>
        <div v-if="a.day == 3">Wednesday {{ a.open }} - {{ a.close }}</div>
        <div v-if="a.day == 4">Thursday {{ a.open }} - {{ a.close }}</div>
        <div v-if="a.day == 5">Friday {{ a.open }} - {{ a.close }}</div>
        <div v-if="a.day == 6">Saturday {{ a.open }} - {{ a.close }}</div>
      </div>
    </div>
  </div>
  <div class="text-center">
    <h1>
      <span class="border-bottom border-3 border-dark">Provider Reviews</span>
    </h1>
  </div>

  <Review v-for="r in reviews" :key="r.id" :review="r" />

  <div class="d-flex justify-content-center mt-3"></div>

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
</template>

<script>
import { computed, onMounted, onUnmounted, ref, watchEffect } from "@vue/runtime-core"
import { useRoute } from "vue-router"
import Pop from "../utils/Pop"
import { logger } from "../utils/Logger"
import { providersService } from "../services/ProvidersService"
import { reviewsService } from "../services/ReviewsService"
import { AppState } from "../AppState"
export default {
  setup() {
    // const averageRating = 
    const route = useRoute();
    const loading = ref(true)
    watchEffect(async () => {
      try {
        if (route.name == "Provider") {
          await providersService.getProvider(route.params.id);
          await reviewsService.getProviderReviews(route.params.id);

          // TODO await get provider appointments
          loading.value = false
        }
      }
      catch (error) {
        logger.error(error);
        Pop.toast(error.message, "error");
      }
    }),
      onUnmounted(() => {
        AppState.activeProvider = {};
        AppState.reviews = [];
      });
    return {
      provider: computed(() => AppState.activeProvider),
      isProvider: computed(() => AppState.account.id === AppState.activeProvider.creatorId),
      reviews: computed(() => AppState.reviews),
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
  background-size: cover;
  height: 350px;
  background-position: center;
  backdrop-filter: blur(2px);
}
</style>