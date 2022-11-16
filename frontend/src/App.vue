<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div>
    <nav-bar/>
    <RouterView />
  </div> 
</template>

<script>
import NavBar from "./components/Navbar.vue";
export default {
  components: { NavBar },
  name: "App",
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
</style>