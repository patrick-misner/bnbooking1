<template>
  <div
    class="post rounded elevation-2 text-light selectable grow"
    @click="selectProvider"
    :style="`background-image: url(${provider.coverImg})`"
  >
    <div class="text-uppercase ps-2 pt-2">{{ provider.name }}</div>
    <div v-for="a in provider.availability" :key="a.id">
      {{ a.day }} {{ a.open }} {{ a.close }}
    </div>
    <!-- NOTE logic for rating -->
    <div class="d-flex justify-content-center align-items-end h-75">
      <div v-if="provider.rating >= 4.5">
        <i class="mdi mdi-star-circle fs-2"></i>
        <i class="mdi mdi-star-circle fs-2"></i>
        <i class="mdi mdi-star-circle fs-2"></i>
        <i class="mdi mdi-star-circle fs-2"></i>
        <i class="mdi mdi-star-circle fs-2"></i>
      </div>
      <div v-if="(provider.rating >= 3.5) & (provider.rating < 4.5)">
        <i class="mdi mdi-star-circle fs-2"></i>
        <i class="mdi mdi-star-circle fs-2"></i>
        <i class="mdi mdi-star-circle fs-2"></i>
        <i class="mdi mdi-star-circle fs-2"></i>
      </div>
      <div v-if="(provider.rating >= 2.5) & (provider.rating < 3.5)">
        <i class="mdi mdi-star-circle fs-2"></i>
        <i class="mdi mdi-star-circle fs-2"></i>
        <i class="mdi mdi-star-circle fs-2"></i>
      </div>
      <div v-if="(provider.rating >= 1.5) & (provider.rating < 2.5)">
        <i class="mdi mdi-star-circle fs-2"></i>
        <i class="mdi mdi-star-circle fs-2"></i>
      </div>
      <div v-if="(provider.rating >= 0.5) & (provider.rating < 1.5)">
        <i class="mdi mdi-star-circle fs-2"></i>
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
.grow { 
transition: all .2s ease-in-out; 
}

.grow:hover { 
transform: scale(1.01); 
}
</style>