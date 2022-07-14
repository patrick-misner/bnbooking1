<template>
  <div @click="selectProvider()">
    <div class="row">
      <div class="col-12">
        <img class="img-fluid provider-img" :src="provider.coverImg" alt="" />
      </div>
    </div>
    <div class="row p-1">
      <div class="col-10 d-flex">
        <img
          class="img-fluid provider-picture"
          :src="provider.creator.picture"
          alt=""
        />
        <p class="p-1">{{ provider.creator.name }}</p>
      </div>
    </div>
    <div class="row p-2">
      <div class="col-12">
        <p>{{ provider.description }}</p>
        <div class="row">
          <i class="mdi mdi-star fs-5">{{ averageRating }}</i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/reactivity'
import { useRouter } from 'vue-router'
import { AppState } from '../AppState'
import { onMounted, watchEffect } from '@vue/runtime-core'
import Pop from '../utils/Pop'
import { reviewsService } from '../services/ReviewsService'
export default {
  props: { provider: { type: Object, required: true } },
  setup(props) {
    // watchEffect(async () => {
    //   try {
    //     await reviewsService.getProviderReviews(props.provider.id)
    //   } catch (error) {
    //     Pop.error(error)
    //   }
    // })
    const router = useRouter()
    return {
      // averageRating: computed(() => {
      //   let total = 0
      //   for (let i = 0; i < AppState.reviews.length; i++) {
      //     let review = AppState.reviews[i]
      //     total += review.rating
      //   }
      //   return total / AppState.reviews.length
      // }),

      account: computed(() => AppState.account),
      selectProvider() {
        router.push({ name: 'Provider', params: { id: props.provider.id } })
      }
    }
  }
}
</script>

<style>
.post {
  background-size: cover;
  background-repeat: no-repeat;
  height: 225px;
}
.mdi-star {
  color: yellow;
}

.grey {
  color: black;
  opacity: 30%;
}

.provider-img {
  height: 30vh;
  width: 100vh;
}

.provider-picture {
  height: 30px;
  border-radius: 50%;
}
</style>