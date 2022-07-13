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
          <i class="mdi mdi-star fs-5">{{ Math.floor(provider.rating) }}</i>
        </div>
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