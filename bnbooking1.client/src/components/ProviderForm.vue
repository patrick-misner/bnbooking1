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
    <!-- NOTE Start of availability -->
    <div>
      <label>Availability</label><br />
      <label>Monday</label>
      <select v-model="editable.startDate" name="providers" id="providers">
        <option value="1">1:00am</option>
        <option value="2">2:00am</option>
        <option value="3">3:00am</option>
        <option value="4">4:00am</option>
        <option value="5">5:00am</option>
        <option value="6">6:00am</option>
        <option value="7">7:00am</option>
        <option value="8">8:00am</option>
        <option value="9">9:00am</option>
        <option value="10">10:00am</option>
        <option value="11">11:00am</option>
        <option value="12">12:00pm</option>
        <option value="13">1:00pm</option>
        <option value="14">2:00pm</option>
        <option value="15">3:00pm</option>
        <option value="16">4:00pm</option>
        <option value="17">5:00pm</option>
        <option value="18">6:00pm</option>
        <option value="19">7:00pm</option>
        <option value="20">8:00pm</option>
        <option value="21">9:00pm</option>
        <option value="22">10:00pm</option>
        <option value="23">11:00pm</option>
        <option value="24">12:00am</option>
      </select>
      <select v-model="editable.endDate" name="providers" id="providers">
        <option value="1">1:00am</option>
        <option value="2">2:00am</option>
        <option value="3">3:00am</option>
        <option value="4">4:00am</option>
        <option value="5">5:00am</option>
        <option value="6">6:00am</option>
        <option value="7">7:00am</option>
        <option value="8">8:00am</option>
        <option value="9">9:00am</option>
        <option value="10">10:00am</option>
        <option value="11">11:00am</option>
        <option value="12">12:00pm</option>
        <option value="13">1:00pm</option>
        <option value="14">2:00pm</option>
        <option value="15">3:00pm</option>
        <option value="16">4:00pm</option>
        <option value="17">5:00pm</option>
        <option value="18">6:00pm</option>
        <option value="19">7:00pm</option>
        <option value="20">8:00pm</option>
        <option value="21">9:00pm</option>
        <option value="22">10:00pm</option>
        <option value="23">11:00pm</option>
        <option value="24">12:00am</option></select
      ><br />
      <label>Tuesday</label>
      <select v-model="editable.startDate" name="providers" id="providers">
        <option value="1">1:00am</option>
        <option value="2">2:00am</option>
        <option value="3">3:00am</option>
        <option value="4">4:00am</option>
        <option value="5">5:00am</option>
        <option value="6">6:00am</option>
        <option value="7">7:00am</option>
        <option value="8">8:00am</option>
        <option value="9">9:00am</option>
        <option value="10">10:00am</option>
        <option value="11">11:00am</option>
        <option value="12">12:00pm</option>
        <option value="13">1:00pm</option>
        <option value="14">2:00pm</option>
        <option value="15">3:00pm</option>
        <option value="16">4:00pm</option>
        <option value="17">5:00pm</option>
        <option value="18">6:00pm</option>
        <option value="19">7:00pm</option>
        <option value="20">8:00pm</option>
        <option value="21">9:00pm</option>
        <option value="22">10:00pm</option>
        <option value="23">11:00pm</option>
        <option value="24">12:00am</option>
      </select>
      <select v-model="editable.endDate" name="providers" id="providers">
        <option value="1">1:00am</option>
        <option value="2">2:00am</option>
        <option value="3">3:00am</option>
        <option value="4">4:00am</option>
        <option value="5">5:00am</option>
        <option value="6">6:00am</option>
        <option value="7">7:00am</option>
        <option value="8">8:00am</option>
        <option value="9">9:00am</option>
        <option value="10">10:00am</option>
        <option value="11">11:00am</option>
        <option value="12">12:00pm</option>
        <option value="13">1:00pm</option>
        <option value="14">2:00pm</option>
        <option value="15">3:00pm</option>
        <option value="16">4:00pm</option>
        <option value="17">5:00pm</option>
        <option value="18">6:00pm</option>
        <option value="19">7:00pm</option>
        <option value="20">8:00pm</option>
        <option value="21">9:00pm</option>
        <option value="22">10:00pm</option>
        <option value="23">11:00pm</option>
        <option value="24">12:00am</option></select
      ><br />
      <label>Wednesday</label>
      <select v-model="editable.startDate" name="providers" id="providers">
        <option value="1">1:00am</option>
        <option value="2">2:00am</option>
        <option value="3">3:00am</option>
        <option value="4">4:00am</option>
        <option value="5">5:00am</option>
        <option value="6">6:00am</option>
        <option value="7">7:00am</option>
        <option value="8">8:00am</option>
        <option value="9">9:00am</option>
        <option value="10">10:00am</option>
        <option value="11">11:00am</option>
        <option value="12">12:00pm</option>
        <option value="13">1:00pm</option>
        <option value="14">2:00pm</option>
        <option value="15">3:00pm</option>
        <option value="16">4:00pm</option>
        <option value="17">5:00pm</option>
        <option value="18">6:00pm</option>
        <option value="19">7:00pm</option>
        <option value="20">8:00pm</option>
        <option value="21">9:00pm</option>
        <option value="22">10:00pm</option>
        <option value="23">11:00pm</option>
        <option value="24">12:00am</option>
      </select>
      <select v-model="editable.endDate" name="providers" id="providers">
        <option value="1">1:00am</option>
        <option value="2">2:00am</option>
        <option value="3">3:00am</option>
        <option value="4">4:00am</option>
        <option value="5">5:00am</option>
        <option value="6">6:00am</option>
        <option value="7">7:00am</option>
        <option value="8">8:00am</option>
        <option value="9">9:00am</option>
        <option value="10">10:00am</option>
        <option value="11">11:00am</option>
        <option value="12">12:00pm</option>
        <option value="13">1:00pm</option>
        <option value="14">2:00pm</option>
        <option value="15">3:00pm</option>
        <option value="16">4:00pm</option>
        <option value="17">5:00pm</option>
        <option value="18">6:00pm</option>
        <option value="19">7:00pm</option>
        <option value="20">8:00pm</option>
        <option value="21">9:00pm</option>
        <option value="22">10:00pm</option>
        <option value="23">11:00pm</option>
        <option value="24">12:00am</option></select
      ><br />
      <label>Thursday</label>
      <select v-model="editable.startDate" name="providers" id="providers">
        <option value="1">1:00am</option>
        <option value="2">2:00am</option>
        <option value="3">3:00am</option>
        <option value="4">4:00am</option>
        <option value="5">5:00am</option>
        <option value="6">6:00am</option>
        <option value="7">7:00am</option>
        <option value="8">8:00am</option>
        <option value="9">9:00am</option>
        <option value="10">10:00am</option>
        <option value="11">11:00am</option>
        <option value="12">12:00pm</option>
        <option value="13">1:00pm</option>
        <option value="14">2:00pm</option>
        <option value="15">3:00pm</option>
        <option value="16">4:00pm</option>
        <option value="17">5:00pm</option>
        <option value="18">6:00pm</option>
        <option value="19">7:00pm</option>
        <option value="20">8:00pm</option>
        <option value="21">9:00pm</option>
        <option value="22">10:00pm</option>
        <option value="23">11:00pm</option>
        <option value="24">12:00am</option>
      </select>
      <select v-model="editable.endDate" name="providers" id="providers">
        <option value="1">1:00am</option>
        <option value="2">2:00am</option>
        <option value="3">3:00am</option>
        <option value="4">4:00am</option>
        <option value="5">5:00am</option>
        <option value="6">6:00am</option>
        <option value="7">7:00am</option>
        <option value="8">8:00am</option>
        <option value="9">9:00am</option>
        <option value="10">10:00am</option>
        <option value="11">11:00am</option>
        <option value="12">12:00pm</option>
        <option value="13">1:00pm</option>
        <option value="14">2:00pm</option>
        <option value="15">3:00pm</option>
        <option value="16">4:00pm</option>
        <option value="17">5:00pm</option>
        <option value="18">6:00pm</option>
        <option value="19">7:00pm</option>
        <option value="20">8:00pm</option>
        <option value="21">9:00pm</option>
        <option value="22">10:00pm</option>
        <option value="23">11:00pm</option>
        <option value="24">12:00am</option></select
      ><br />
      <label>Friday</label>
      <select v-model="editable.startDate" name="providers" id="providers">
        <option value="1">1:00am</option>
        <option value="2">2:00am</option>
        <option value="3">3:00am</option>
        <option value="4">4:00am</option>
        <option value="5">5:00am</option>
        <option value="6">6:00am</option>
        <option value="7">7:00am</option>
        <option value="8">8:00am</option>
        <option value="9">9:00am</option>
        <option value="10">10:00am</option>
        <option value="11">11:00am</option>
        <option value="12">12:00pm</option>
        <option value="13">1:00pm</option>
        <option value="14">2:00pm</option>
        <option value="15">3:00pm</option>
        <option value="16">4:00pm</option>
        <option value="17">5:00pm</option>
        <option value="18">6:00pm</option>
        <option value="19">7:00pm</option>
        <option value="20">8:00pm</option>
        <option value="21">9:00pm</option>
        <option value="22">10:00pm</option>
        <option value="23">11:00pm</option>
        <option value="24">12:00am</option>
      </select>
      <select v-model="editable.endDate" name="providers" id="providers">
        <option value="1">1:00am</option>
        <option value="2">2:00am</option>
        <option value="3">3:00am</option>
        <option value="4">4:00am</option>
        <option value="5">5:00am</option>
        <option value="6">6:00am</option>
        <option value="7">7:00am</option>
        <option value="8">8:00am</option>
        <option value="9">9:00am</option>
        <option value="10">10:00am</option>
        <option value="11">11:00am</option>
        <option value="12">12:00pm</option>
        <option value="13">1:00pm</option>
        <option value="14">2:00pm</option>
        <option value="15">3:00pm</option>
        <option value="16">4:00pm</option>
        <option value="17">5:00pm</option>
        <option value="18">6:00pm</option>
        <option value="19">7:00pm</option>
        <option value="20">8:00pm</option>
        <option value="21">9:00pm</option>
        <option value="22">10:00pm</option>
        <option value="23">11:00pm</option>
        <option value="24">12:00am</option></select
      ><br />
      <label>Saturday</label>
      <select v-model="editable.startDate" name="providers" id="providers">
        <option value="1">1:00am</option>
        <option value="2">2:00am</option>
        <option value="3">3:00am</option>
        <option value="4">4:00am</option>
        <option value="5">5:00am</option>
        <option value="6">6:00am</option>
        <option value="7">7:00am</option>
        <option value="8">8:00am</option>
        <option value="9">9:00am</option>
        <option value="10">10:00am</option>
        <option value="11">11:00am</option>
        <option value="12">12:00pm</option>
        <option value="13">1:00pm</option>
        <option value="14">2:00pm</option>
        <option value="15">3:00pm</option>
        <option value="16">4:00pm</option>
        <option value="17">5:00pm</option>
        <option value="18">6:00pm</option>
        <option value="19">7:00pm</option>
        <option value="20">8:00pm</option>
        <option value="21">9:00pm</option>
        <option value="22">10:00pm</option>
        <option value="23">11:00pm</option>
        <option value="24">12:00am</option>
      </select>
      <select v-model="editable.endDate" name="providers" id="providers">
        <option value="1">1:00am</option>
        <option value="2">2:00am</option>
        <option value="3">3:00am</option>
        <option value="4">4:00am</option>
        <option value="5">5:00am</option>
        <option value="6">6:00am</option>
        <option value="7">7:00am</option>
        <option value="8">8:00am</option>
        <option value="9">9:00am</option>
        <option value="10">10:00am</option>
        <option value="11">11:00am</option>
        <option value="12">12:00pm</option>
        <option value="13">1:00pm</option>
        <option value="14">2:00pm</option>
        <option value="15">3:00pm</option>
        <option value="16">4:00pm</option>
        <option value="17">5:00pm</option>
        <option value="18">6:00pm</option>
        <option value="19">7:00pm</option>
        <option value="20">8:00pm</option>
        <option value="21">9:00pm</option>
        <option value="22">10:00pm</option>
        <option value="23">11:00pm</option>
        <option value="24">12:00am</option></select
      ><br />
      <label>Sunday</label>
      <select v-model="editable.startDate" name="providers" id="providers">
        <option value="1">1:00am</option>
        <option value="2">2:00am</option>
        <option value="3">3:00am</option>
        <option value="4">4:00am</option>
        <option value="5">5:00am</option>
        <option value="6">6:00am</option>
        <option value="7">7:00am</option>
        <option value="8">8:00am</option>
        <option value="9">9:00am</option>
        <option value="10">10:00am</option>
        <option value="11">11:00am</option>
        <option value="12">12:00pm</option>
        <option value="13">1:00pm</option>
        <option value="14">2:00pm</option>
        <option value="15">3:00pm</option>
        <option value="16">4:00pm</option>
        <option value="17">5:00pm</option>
        <option value="18">6:00pm</option>
        <option value="19">7:00pm</option>
        <option value="20">8:00pm</option>
        <option value="21">9:00pm</option>
        <option value="22">10:00pm</option>
        <option value="23">11:00pm</option>
        <option value="24">12:00am</option>
      </select>
      <select v-model="editable.endDate" name="providers" id="providers">
        <option value="1">1:00am</option>
        <option value="2">2:00am</option>
        <option value="3">3:00am</option>
        <option value="4">4:00am</option>
        <option value="5">5:00am</option>
        <option value="6">6:00am</option>
        <option value="7">7:00am</option>
        <option value="8">8:00am</option>
        <option value="9">9:00am</option>
        <option value="10">10:00am</option>
        <option value="11">11:00am</option>
        <option value="12">12:00pm</option>
        <option value="13">1:00pm</option>
        <option value="14">2:00pm</option>
        <option value="15">3:00pm</option>
        <option value="16">4:00pm</option>
        <option value="17">5:00pm</option>
        <option value="18">6:00pm</option>
        <option value="19">7:00pm</option>
        <option value="20">8:00pm</option>
        <option value="21">9:00pm</option>
        <option value="22">10:00pm</option>
        <option value="23">11:00pm</option>
        <option value="24">12:00am</option></select
      ><br />
    </div>
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