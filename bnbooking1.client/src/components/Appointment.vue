<template>

    <div class="bg-grey elevation-2 rounded">

      <div class="row mt-3 fs-4">
        <div class="col-4"><span>{{ appointment.provider.name }}</span></div>
        <div class="col-4 text-center"><span>{{ formatDate(appointment.date) }} | {{ appointment.startTime}}:00</span></div>
        <div class="col-4 text-end">Cancel:<span> <i class="mdi mdi-delete-forever text-danger"></i></span></div>
      </div>



    </div>

</template>


<script>
export default {
      props: { appointment: { type: Object, required: true } },
  setup(){
    return {
            formatDate(rawDate){
        return new Date(rawDate).toLocaleDateString()
      }
    }
  }
}
</script>


<style lang="scss" scoped>

</style>