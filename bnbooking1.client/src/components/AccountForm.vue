<template>
 <form id="Account-form" @submit.prevent="saveAccount">
    <label>Name</label>
    <input
      v-model="editable.name"
      type="text"
      aria-describedby="helpId"
      required
    />
    <label>Profile Picture</label>
    <input
      v-model="editable.picture"
      type="text"
      aria-describedby="helpId"
      required
    />
    <button class="btn btn-outline-danger" data-bs-dismiss="modal">cancel</button>
    <button class="btn btn-outline-success" type="submit">Update Account</button>
  </form>
</template>


<script>
import { Modal } from 'bootstrap'
import { computed, ref, watchEffect } from 'vue'
import { AppState } from '../AppState'
import { accountService } from '../services/AccountService'
import { logger } from '../utils/Logger'
import Pop from '../utils/Pop'


export default {
  name: 'Account',
  setup(){
    const editable = ref({})
    watchEffect(()=>{
        AppState.account
        editable.value = {...AppState.account}
      })
    return {
      editable,
       async saveAccount(){
       try {
         await accountService.saveAccount(editable.value)
         Modal.getOrCreateInstance(document.getElementById("Account-form")).hide()
       } catch (error) {
         logger.error(error)
         Pop.toast(error.message, 'error')
       }
      },
      account: computed(()=> AppState.account)
    }
  }
}
</script>


<style lang="scss" scoped>
#Account-form{
height: 25vh;
}

</style>