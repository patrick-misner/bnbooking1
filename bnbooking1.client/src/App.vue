<template>
  <main class="bg-primary">
    <router-view />
  </main>
  <footer>
    <div
      class="
        bg-secondary
        footer
        d-flex
        justify-content-around
        align-items-center
      "
    >
      <router-link
        :to="{ name: 'Home' }"
        class="btn text-primary text-uppercase"
      >
        <i class="mdi mdi-home fs-1 text-primary selectable"></i>
      </router-link>

      <router-link
        :to="{ name: 'Home' }"
        class="btn text-primary text-uppercase"
      >
        <i
          class="mdi mdi-magnify fs-1 text-primary selectable"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample"
        ></i>
      </router-link>
      <div class="collapse" id="collapseExample">
        <Search />
      </div>

      <router-link
        :to="{ name: 'Account' }"
        class="btn text-primary text-uppercase"
      >
        <i class="mdi mdi-cog fs-1 text-primary selectable"></i>
      </router-link>
    </div>
  </footer>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
import { logger } from './utils/Logger'
export default {
  name: 'App',
  setup() {
    return {
      appState: computed(() => AppState),
      searchBar: computed(() => AppState.searchBar),
      showSearch() {
        logger.log('is it working?')
        AppState.searchBar = !AppState.searchBar
      }
    }
  }
}

</script>
<style lang="scss">
@import "./assets/scss/main.scss";
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
