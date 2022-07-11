<template>
  <div class="row justify-content-center">
    <div class="col-6">
      <div class="elevation-2 bg-grey m-3 rounded">
        <div class="d-flex flex-row align-items-center">
          <img
            src="https://thiscatdoesnotexist.com/"
            class="img-fluid profile-review-img m-3"
            alt=""
          />
          <div class="">
            <p>{{ review.body }}</p>
          </div>
        </div>

        <div class="d-flex justify-content-between align-items-end h-75">
          <div>
            <i
              v-if="review.creator.id == account.id"
              class="selectable fs-5 mdi mdi-delete-forever text-danger"
              @click="deleteReview(review.id)"
            ></i>
          </div>
          <div v-if="review.rating >= 4.5" class="ms-5">
            <i class="mdi mdi-star-circle fs-2"></i>
            <i class="mdi mdi-star-circle fs-2"></i>
            <i class="mdi mdi-star-circle fs-2"></i>
            <i class="mdi mdi-star-circle fs-2"></i>
            <i class="mdi mdi-star-circle fs-2"></i>
          </div>
          <div
            v-if="(review.rating >= 3.5) & (review.rating < 4.5)"
            class="ms-5"
          >
            <i class="mdi mdi-star-circle fs-2"></i>
            <i class="mdi mdi-star-circle fs-2"></i>
            <i class="mdi mdi-star-circle fs-2"></i>
            <i class="mdi mdi-star-circle fs-2"></i>
            <i class="mdi mdi-star-circle grey fs-2"></i>
          </div>
          <div
            v-if="(review.rating >= 2.5) & (review.rating < 3.5)"
            class="ms-5"
          >
            <i class="mdi mdi-star-circle fs-2"></i>
            <i class="mdi mdi-star-circle fs-2"></i>
            <i class="mdi mdi-star-circle fs-2"></i>
            <i class="mdi mdi-star-circle grey fs-2"></i>
            <i class="mdi mdi-star-circle grey fs-2"></i>
          </div>
          <div
            v-if="(review.rating >= 1.5) & (review.rating < 2.5)"
            class="ms-5"
          >
            <i class="mdi mdi-star-circle fs-2"></i>
            <i class="mdi mdi-star-circle fs-2"></i>
            <i class="mdi mdi-star-circle grey fs-2"></i>
            <i class="mdi mdi-star-circle grey fs-2"></i>
            <i class="mdi mdi-star-circle grey fs-2"></i>
          </div>
          <div
            v-if="(review.rating >= 0.5) & (review.rating < 1.5)"
            class="ms-5"
          >
            <i class="mdi mdi-star-circle fs-2"></i>
            <i class="mdi mdi-star-circle grey fs-2"></i>
            <i class="mdi mdi-star-circle grey fs-2"></i>
            <i class="mdi mdi-star-circle grey fs-2"></i>
            <i class="mdi mdi-star-circle grey fs-2"></i>
          </div>
          <div class="p-3">{{ formatDate(review.createdAt) }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity"
import { AppState } from "../AppState"
import { reviewsService } from "../services/ReviewsService"
import Pop from "../utils/Pop"
export default {
  props: { review: { type: Object, required: true } },
  setup(props) {
    return {
      account: computed(() => AppState.account),
      formatDate(rawDate) {
        return new Date(rawDate).toLocaleDateString()
      },
      async deleteReview(reviewId) {
        try {
          if (await Pop.confirm('Are you sure you want to delete this review?')) {
            await reviewsService.deleteReview(reviewId)
            Pop.toast('Review deleted', 'success')
          }
        } catch (error) {
          logger.error(error)
          Pop.toast(error.message, 'error')
        }
      }
    }
  }
}
</script>

<style>
.profile-review-img {
  height: 75px;
  max-height: 75px;
  border-radius: 50%;
}

.grey {
  color: black;
  opacity: 20%;
}
</style>