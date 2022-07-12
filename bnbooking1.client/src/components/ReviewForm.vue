<template>
  <form id="provider-form">
    <label>Review</label>
    <input
      v-model="editable.body"
      type="text"
      aria-describedby="helpId"
      required
    />
    <label>Rating</label>
    <input
      v-model="editable.rating"
      type="number"
      aria-describedby="helpId"
      required
      min="1"
      max="5"
    />
    <button type="button" data-bs-dismiss="modal">cancel</button>
    <button type="button" @click="createReview">Create!</button>
  </form>
</template>

<script>
import { computed, ref } from "@vue/reactivity"
import { AppState } from "../AppState"
import { reviewsService } from "../services/ReviewsService"
import Pop from "../utils/Pop"
import { Modal } from "bootstrap"
export default {
  setup() {
    const hasReview = computed(() => AppState.reviews.find(r => r.accountId == AppState.account.id))
    const editable = ref({
      providerId: '',
    })
    return {
      provider: computed(() => AppState.activeProvider),
      editable,
      hasReview,
      async createReview() {
        try {
          if (hasReview.value) {
            Pop.toast('Place already reviewed')
          } else {
            const provider = await reviewsService.createReview(editable.value)
            Pop.toast('Review Created!', 'success')
            Modal.getOrCreateInstance(document.getElementById('create-review')).hide()
          }
        } catch (error) {
          Pop.error(error)
        }
      },
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/_eventForm.scss";
</style>