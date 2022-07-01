\<template>
  <header>
    <!-- <Navbar /> -->
    <div class="d-flex justify-content-around align-items-center header-bg">
      <button
        type="button"
        class="btn btn-primary me-3"
        data-bs-toggle="modal"
        data-bs-target="#create-provider"
      >
        Become a Provider
      </button>
      <Login />
    </div>
    <div class="collapse" id="collapseExample">
      <Search />
    </div>
  </header>
  <body class="bg-primary">
    <div class="container-fluid">
      <div class="row justify-content-around">
        <div v-for="p in providers" :key="p.id" class="col-md-3 p-0 m-2">
          <Provider :provider="p" />
        </div>
      </div>
    </div>
  </body>
  <Modal id="create-provider">
    <template #header>Become a Provider</template>
    <template #body>
      <ProviderForm />
    </template>
  </Modal>
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
      providers: computed(() => AppState.providers),
      searchBar: computed(() => AppState.searchBar),
      async createProvider() {
        const provider = await providersService.createProvider()
      }
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
