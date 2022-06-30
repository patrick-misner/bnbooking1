<template>
  <div
    class="post"
    @click="selectProvider"
    :style="`background-image: url(${provider.creator.picture})`"
  >
    <div>{{ provider.name }}</div>
    <div>{{ provider.availability }}</div>
    <div>
      <div v-if="provider.rating >= 4.5">
        <i class="mdi mdi-star-circle"></i>
        <i class="mdi mdi-star-circle"></i>
        <i class="mdi mdi-star-circle"></i>
        <i class="mdi mdi-star-circle"></i>
        <i class="mdi mdi-star-circle"></i>
      </div>
      <div v-if="(provider.rating >= 3.5) & (provider.rating < 4.5)">
        <i class="mdi mdi-star-circle"></i>
        <i class="mdi mdi-star-circle"></i>
        <i class="mdi mdi-star-circle"></i>
        <i class="mdi mdi-star-circle"></i>
      </div>
      <div v-if="(provider.rating >= 2.5) & (provider.rating < 3.5)">
        <i class="mdi mdi-star-circle"></i>
        <i class="mdi mdi-star-circle"></i>
        <i class="mdi mdi-star-circle"></i>
      </div>
      <div v-if="(provider.rating >= 1.5) & (provider.rating < 2.5)">
        <i class="mdi mdi-star-circle"></i>
        <i class="mdi mdi-star-circle"></i>
      </div>
      <div v-if="(provider.rating >= 0.5) & (provider.rating < 1.5)">
        <i class="mdi mdi-star-circle"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/reactivity'
import { useRouter } from 'vue-router'
import { AppState } from '../AppState'
export default {
  props: { provider: { type: Object, required: true } },
  setup(props) {
    const router = useRouter()
    return {
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
.mdi-star-circle {
  color: yellow;
}
</style>