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
    <select
      class="ms-3"
      v-model="editable.tags"
      name="providers"
      id="providers"
    >
      <option value="unknown">unknown</option>
      <option value="unknown">unknown</option>
      <option value="unknown">unknown</option>
      <option value="unknown">unknown</option></select
    ><br />

    <label>Location</label>
    <input
      v-model="editable.location"
      type="text"
      aria-describedby="helpId"
      required
    />
    <!-- NOTE Start of availability -->
    <div>
      <label>Availability</label><br />
      <div
        v-for="(day, i) in weekDays"
        :key="day"
        class="border border-bottom mb-3"
      >
        <label class="ms-3">{{ day }}</label>
        <select
          name="providers"
          id="providers"
          v-model="editable.availability[i].open"
        >
          <option value="0">12:00</option>
          <option value="1">1:00</option>
          <option value="2">2:00</option>
          <option value="3">3:00</option>
          <option value="4">4:00</option>
          <option value="5">5:00</option>
          <option value="6">6:00</option>
          <option value="7">7:00</option>
          <option value="8">8:00</option>
          <option value="9">9:00</option>
          <option value="10">10:00</option>
          <option value="11">11:00</option>
        </select>
        <select
          v-model="editable.availability[i].oam"
          name="providers"
          id="providers"
        >
          <option value="am">AM</option>
          <option value="pm">PM</option>
        </select>
        <select
          v-model="editable.availability[i].close"
          name="providers"
          id="providers"
        >
          <option value="0">12:00</option>
          <option value="1">1:00</option>
          <option value="2">2:00</option>
          <option value="3">3:00</option>
          <option value="4">4:00</option>
          <option value="5">5:00</option>
          <option value="6">6:00</option>
          <option value="7">7:00</option>
          <option value="8">8:00</option>
          <option value="9">9:00</option>
          <option value="10">10:00</option>
          <option value="11">11:00</option>
          <option value="12">End of day</option>
        </select>
        <select
          v-model="editable.availability[i].cam"
          name="providers"
          id="providers"
        >
          <option value="am">AM</option>
          <option value="pm">PM</option>
        </select>
      </div>
      <br />
    </div>
    <label>Bio</label>
    <input
      v-model="editable.bio"
      type="text"
      aria-describedby="helpId"
      required
    />
    <label>Description of Services Provided</label>
    <textarea v-model="editable.description" required />
    <button class="ms-3" type="button" data-bs-dismiss="modal">Cancel</button>
    <button
      class="ms-3"
      v-if="!activeProvider.id"
      type="button"
      @click="createProvider"
    >
      Create
    </button>
    <button v-else type="button" @click="editProvider">Save!</button>
  </form>
</template>

<script>
import { computed, ref } from "@vue/reactivity"
import Pop from "../utils/Pop"
import { Modal } from "bootstrap"
import { onMounted, watchEffect } from '@vue/runtime-core'
import { useRoute, useRouter } from 'vue-router'
import { providersService } from '../services/ProvidersService'
import { logger } from '../utils/Logger'
import { AppState } from '../AppState'
export default {
  props: { provider: { type: Object, required: false } },
  setup(props) {
    const route = useRoute();
    function createAllDays() {
      logger.log("create all days ran")
      let days = []
      for (let i = 0; i < 7; i++) {
        days.push({ day: i, open: 0, close: 0, oam: 'am', cam: 'am' })
      }
      return days
    }
    const editable = ref({
      availability: createAllDays()
    })
    const router = useRouter()
    onMounted(() => {
      // TODO figure out best method for editing provider..
      if (AppState.formProvider.id) {
        editable.value = formatForm()
      }


    });
    function formatForm() {
      // NOTE this breaks reference of the object "availability" since that object is nested differently than normal
      let providerTest = JSON.parse(JSON.stringify(AppState.formProvider))
      let week = providerTest.availability
      week.forEach(d => {
        d.open = d.oam == 'am' ? d.open : d.open - 12
        d.close = d.cam == 'am' ? d.close : d.close - 12
      })
      providerTest.availability = week
      return providerTest
    }
    return {
      weekDays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      props,
      editable,
      activeProvider: computed(() => AppState.activeProvider),
      formProvider: computed(() => AppState.formProvider),
      async createProvider() {
        try {
          // NOTE turn times into correct values based on am/pm
          let week = editable.value.availability
          week.forEach(d => {
            d.open = d.oam == 'am' ? d.open : parseInt(d.open) + 12
            d.close = d.cam == 'am' ? d.close : parseInt(d.close) + 12
          })
          const provider = await providersService.createProvider(editable.value)
          Pop.toast('Provider Created!')
          Modal.getOrCreateInstance(document.getElementById('create-provider')).hide()
        } catch (error) {
          Pop.error(error)
        }
      },
      async editProvider() {
        try {
          let week = editable.value.availability
          week.forEach(d => {
            d.open = d.oam == 'am' ? d.open : parseInt(d.open) + 12
            d.close = d.cam == 'am' ? d.close : parseInt(d.close) + 12
          })
          console.log('edit form sent', editable.value)
          await providersService.editProvider(editable.value)
          editable.value = formatForm()
          Pop.toast('Provider Details updated!')
          Modal.getOrCreateInstance(document.getElementById('create-provider')).hide()
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