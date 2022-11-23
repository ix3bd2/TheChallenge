<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div>
    <nav-bar/>
    <left-nav-bar/>
    <RouterView />
  </div> 
</template>

<script>
import NavBar from "./components/Navbar.vue";
import LeftNavBar from "./components/LeftNavbar.vue";
export default {
  components: { NavBar, LeftNavBar },
  name: "App",
};
</script>

<style >
*, body {
  padding: 0;
  margin: 0;
  overflow-x: hidden;
}
</style>