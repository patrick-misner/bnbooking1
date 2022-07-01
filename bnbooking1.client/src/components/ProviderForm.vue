<template>
  <form id="provider-form">
    <label>Provider Name</label>
    <input
      v-model="editable.name"
      type="text"
      aria-describedby="helpId"
      required
    />
    <label>Cover Image</label>
    <input
      v-model="editable.coverImg"
      type="text"
      aria-describedby="helpId"
      required
    />
    <label for="providers">Tags:</label>
    <select v-model="editable.tags" name="providers" id="providers">
      <option value="convention">Convention</option>
      <option value="sport">Sport</option>
      <option value="digital">Digital</option>
      <option value="concert">Concert</option></select
    ><br />

    <label>Location</label>
    <input
      v-model="editable.location"
      type="text"
      aria-describedby="helpId"
      required
    />
    <label>Availability</label>
    <input
      v-model="editable.startDate"
      type="date"
      aria-describedby="helpId"
      required
    />
    <label>Bio</label>
    <input
      v-model="editable.bio"
      type="number"
      aria-describedby="helpId"
      required
    />
    <label>Description of Services Provided</label>
    <textarea v-model="editable.description" required />
    <button type="button" data-bs-dismiss="modal">cancel</button>
    <button v-if="!provider" type="button" @click="createProvider">
      Create!
    </button>
    <button v-else type="button" @click="editProviderDetails">Save!</button>
  </form>
</template>

<script>
import { ref } from "@vue/reactivity"
import Pop from "../utils/Pop"
import { Modal } from "bootstrap"
import { watchEffect } from '@vue/runtime-core'
import { useRouter } from 'vue-router'
import { providersService } from '../services/ProvidersService'
export default {
  props: { provider: { type: Object, required: false } },
  setup(props) {
    const editable = ref({})
    const router = useRouter()
    watchEffect(() => {
      editable.value = { ...props.provider }
    })
    return {
      props,
      editable,
      async createProvider() {
        try {
          const provider = await providersService.createProvider(editable.value)
          Pop.toast('Provider Created!')
          router.push({ name: 'ProviderDetails', params: { id: provider.id } })
          Modal.getOrCreateInstance(document.getElementById('create-provider')).hide()
        } catch (error) {
          Pop.error(error)
        }
      },
      async editProvider() {
        try {
          await providersService.editEvent(editable.value)
          Pop.toast('Provider Details updated!')
          Modal.getOrCreateInstance(document.getElementById('edit-provider')).hide()
        } catch (error) {
          Pop.error(error)
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/_eventForm.scss";
</style>