<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div>
    <nav-bar />
    <left-nav-bar />
    <RouterView />
          <thefooter />

  </div>
</template>

<script>
import NavBar from "./components/Navbar.vue";
import LeftNavBar from "./components/LeftNavbar.vue";
import Thefooter from "./components/Thefooter.vue";

export default {
  components: { NavBar, LeftNavBar, Thefooter },
  name: "App",
};
</script>

<style >
*,
body {
  padding: 0;
  margin: 0;
  max-width: 100%;
}
body {
  background-color: #1f1f1f;
}
</style>