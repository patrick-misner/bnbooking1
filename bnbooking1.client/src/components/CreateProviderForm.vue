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
          <option value="0">
            {{ formatTime(0) }}
          </option>
          <option value="1">
            {{ formatTime(1) }}
          </option>
          <option value="2">
            {{ formatTime(2) }}
          </option>
          <option value="3">
            {{ formatTime(3) }}
          </option>
          <option value="4">
            {{ formatTime(4) }}
          </option>
          <option value="5">
            {{ formatTime(5) }}
          </option>
          <option value="6">
            {{ formatTime(6) }}
          </option>
          <option value="7">
            {{ formatTime(7) }}
          </option>
          <option value="8">
            {{ formatTime(8) }}
          </option>
          <option value="9">
            {{ formatTime(9) }}
          </option>
          <option value="10">
            {{ formatTime(10) }}
          </option>
          <option value="11">
            {{ formatTime(11) }}
          </option>
          <option value="12">
            {{ formatTime(12) }}
          </option>
          <option value="13">
            {{ formatTime(13) }}
          </option>
          <option value="12">
            {{ formatTime(12) }}
          </option>
          <option value="14">
            {{ formatTime(14) }}
          </option>
          <option value="15">
            {{ formatTime(15) }}
          </option>
          <option value="16">
            {{ formatTime(16) }}
          </option>
          <option value="17">
            {{ formatTime(17) }}
          </option>
          <option value="18">
            {{ formatTime(18) }}
          </option>
          <option value="19">
            {{ formatTime(19) }}
          </option>
          <option value="20">
            {{ formatTime(20) }}
          </option>
          <option value="21">
            {{ formatTime(21) }}
          </option>
          <option value="22">
            {{ formatTime(22) }}
          </option>
          <option value="23">
            {{ formatTime(23) }}
          </option>
          <option value="24">End of day</option>
        </select>

        <select
          v-model="editable.availability[i].close"
          name="providers"
          id="providers"
        >
          <option value="0">
            {{ formatTime(0) }}
          </option>
          <option value="1">
            {{ formatTime(1) }}
          </option>
          <option value="2">
            {{ formatTime(2) }}
          </option>
          <option value="3">
            {{ formatTime(3) }}
          </option>
          <option value="4">
            {{ formatTime(4) }}
          </option>
          <option value="5">
            {{ formatTime(5) }}
          </option>
          <option value="6">
            {{ formatTime(6) }}
          </option>
          <option value="7">
            {{ formatTime(7) }}
          </option>
          <option value="8">
            {{ formatTime(8) }}
          </option>
          <option value="9">
            {{ formatTime(9) }}
          </option>
          <option value="10">
            {{ formatTime(10) }}
          </option>
          <option value="11">
            {{ formatTime(11) }}
          </option>
          <option value="12">
            {{ formatTime(12) }}
          </option>
          <option value="13">
            {{ formatTime(13) }}
          </option>
          <option value="12">
            {{ formatTime(12) }}
          </option>
          <option value="14">
            {{ formatTime(14) }}
          </option>
          <option value="15">
            {{ formatTime(15) }}
          </option>
          <option value="16">
            {{ formatTime(16) }}
          </option>
          <option value="17">
            {{ formatTime(17) }}
          </option>
          <option value="18">
            {{ formatTime(18) }}
          </option>
          <option value="19">
            {{ formatTime(19) }}
          </option>
          <option value="20">
            {{ formatTime(20) }}
          </option>
          <option value="21">
            {{ formatTime(21) }}
          </option>
          <option value="22">
            {{ formatTime(22) }}
          </option>
          <option value="23">
            {{ formatTime(23) }}
          </option>
          <option value="24">End of day</option>
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
      // if (AppState.formProvider.id) {
      //   editable.value = formatForm()
      // }

    });
    function formatForm() {
      let provider = AppState.formProvider
      let week = provider.availability
      week.forEach(d => {
        d.open = d.oam == 'am' ? d.open : d.open - 12
        d.close = d.cam == 'am' ? d.close : d.close - 12
      })
      provider.availability = week
      return provider
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
          //   let week = editable.value.availability
          //   week.forEach(d => {
          //     d.open = d.oam == 'am' ? d.open : parseInt(d.open) + 12
          //     d.close = d.cam == 'am' ? d.close : parseInt(d.close) + 12
          //   })
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
          Pop.toast('Provider Details updated!')
          Modal.getOrCreateInstance(document.getElementById('create-provider')).hide()
        } catch (error) {
          Pop.error(error)
        }
      },
      formatTime(t) {
        if (t < 12 && t != 0) {
          t = t + ':00 AM'
        }
        if (t == 12) {
          t = t + ':00 PM'
        }
        if (t > 12) {
          t = t - 12 + ':00 PM'
        }
        if (t == 0) {
          t = t + 12 + ':00 AM'
        }
        return t
      },
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/_eventForm.scss";
</style>