<template>
  <header>

    
    <div class="row">
      <div class="col-12 p-0">
            <div class="d-flex justify-content-around align-items-center newHeader">
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
      </div>
    </div>

  </header>
  
    <div class="row">
      <div class="col-12">
      <body class="bg-primary">
    <div class="row justify-content-around">
      <div
        v-for="p in providers"
        :key="p.id"
        class="col-md-3 p-0 m-2 elevation-3 grow bg-light"
      >
        <Provider :provider="p" />
      </div>
    </div>
       </body>   
      </div>
    </div>


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
    const isProvider = computed(() => AppState.providers.find(p => p.creatorId == AppState.account.id))
    onMounted(async () => {
      try {
        await providersService.getProviders()
      } catch (error) {
        Pop.error(error)
      }
    })
    return {
      isProvider,
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
.newHeader {
  background-color: #635666;
  min-height: 15vh;
}
.footer {
  min-height: 10vh;
}
.grow {
  transition: all 0.2s ease-in-out;
  cursor: pointer;
}

.grow:hover {
  transform: scale(1.01);
}
</style>
