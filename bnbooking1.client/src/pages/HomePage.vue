\<template>
  <header>
    <!-- <Navbar /> -->
    <div class="d-flex justify-content-end align-items-center header-bg">
      <Login />
    </div>

  </header>

</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped lang="scss">

.header-bg{
  background-image: url("https://images.unsplash.com/photo-1539667468225-eebb663053e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1717&q=80");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 15vh
}
.footer{
  min-height: 10vh;

}
</style>
