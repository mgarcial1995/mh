<template>
  <div id="app">
    <div id="nav">
      <Navbar />
    </div>
    <!-- editado -->
    <router-view />
  </div>
</template>
<script>
import Navbar from "@/components/Navbar";
export default {
  name: "App",
  components: {
    Navbar
  }
};
</script>
<style lang="scss">
</style>
