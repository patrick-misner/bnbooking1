<template>
<h1>Provider Details</h1>
{{ provider }}
<h1>Provider Reviews</h1>
<h4 v-if="!reviews[0]"> No reviews for this place</h4>
<span v-else> {{ reviews }} </span>

<div class="d-flex justify-content-center mt-3">
  <button type="button" class="btn btn-secondary" data-bs-toggle="modal"
        data-bs-target="#create-appointment">Book</button>
</div>


  <Modal id="create-appointment">
    <template #header>Book Appointment</template>
    <template #body>
      <AppointmentForm />
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
            reviews: computed(() => AppState.reviews)
        };
    },
    components: { AppointmentForm }
}
</script>

<style>
</style>