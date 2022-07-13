<template>
  <form @submit.prevent="searchProviders" class="show">
    <input v-model="search" type="text" placeholder="Search Providers" />
  </form>
</template>


<script>
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import { providersService } from "../services/ProvidersService";
import { computed, ref } from '@vue/reactivity';
import { AppState } from '../AppState';
export default {
  setup() {
    const search = ref("");
    return {
      search,
      searchBar: computed(() => AppState.searchBar),
      async searchProviders() {
        try {
          logger.log("searching", search.value);
          await providersService.searchProviders(`query=${search.value}`);
        } catch (error) {
          Pop.toast(error.message, "error");
          logger.error(error);
        }
      },
    };
  },
};
</script>


<style lang="scss" scoped>
.show {
  transition: 50ms;
}
input {
  width: 800px;
}
</style>