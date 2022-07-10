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
          <h5><i class="mdi mdi-plus-circle p-2"></i>Book</h5>
        </button>
      </div>
      <div class="col-3">
        <button type="button" class="btn text-light selectable" data-bs-toggle="modal" data-bs-target="#create-review">
            <h5><i class="mdi mdi-plus-circle p-2"></i>Review</h5>
        </button>
      </div>
      <div class="col-3">
        <h5><i class="mdi mdi-plus-circle p-2"></i>Share</h5>
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

  <Modal v-if="provider.id" id="create-appointment" :formProvider="this.provider">
    <template #header>Book Appointment with {{ provider.name }}</template>
    <template #body>
      <AppointmentForm :provider="provider" />
    </template>
  </Modal>

    <Modal id="create-review">
    <template #header>Review {{ provider.name }}</template>
    <template #body>
      <ReviewForm :provider="provider"/>
    </template>
  </Modal>
</template>

<script>
import { computed, onUnmounted, watchEffect } from "@vue/runtime-core"
import { useRoute } from "vue-router"
import Pop from "../utils/Pop"
import { logger } from "../utils/Logger"
import { providersService } from "../services/ProvidersService"
import { reviewsService } from "../services/ReviewsService"
import { AppState } from "../AppState"
import AppointmentForm from "../components/AppointmentForm.vue"
export default {
  setup() {
    const route = useRoute();
    watchEffect(async () => {
      try {
        if (route.name == "Provider") {
          await providersService.getProvider(route.params.id);
        //   getClosedDays();
          await reviewsService.getProviderReviews(route.params.id);
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
      reviews: computed(() => AppState.reviews),
    };
  },
  components: { AppointmentForm }
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
</style>