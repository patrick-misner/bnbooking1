<template>
  <div class="row">
    <form @submit.prevent="searchProviders">
      <input
        v-model="search"
        type="text"
        class="col-10"
        placeholder="search providers"
      />
      <button class="col-2 btn btn-primary">
        <i class="mdi mdi-magnify"></i>
      </button>
    </form>
  </div>
</template>


<script>
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import { providersService } from "../services/ProvidersService";
import { ref } from '@vue/reactivity';
export default {
  setup() {
    const search = ref("");
    return {
      search,
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
</style>