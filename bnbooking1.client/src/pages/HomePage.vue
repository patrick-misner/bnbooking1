\<template>
  <header>
    <!-- <Navbar /> -->
    <div class="d-flex justify-content-end align-items-center header-bg">
      <Login />
    </div>
  </header>
  <body>
    <div v-for="p in providers" :key="p.id" class="col-3">
      <Provider :provider="p" />
    </div>
  </body>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import Pop from '../utils/Pop'
import { AppState } from '../AppState'
import { providersService } from '../services/ProvidersService'
export default {
  name: 'Home',
  setup() {
    onMounted(async () => {
      try {
        await providersService.getProviders()
      } catch (error) {
        Pop.error(error)
      }
    })
    return {
      providers: computed(() => AppState.providers)
    }
  }
}
</script>

<style scoped lang="scss">
.header-bg {
  background-image: url("https://images.unsplash.com/photo-1539667468225-eebb663053e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1717&q=80");
  background-repeat: no-repeat;
  background-position: center;
  min-height: 15vh;
}
.footer {
  min-height: 10vh;
}
</style>
