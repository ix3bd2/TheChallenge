<script setup>
import Navbar from './components/Navbar.vue'
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <Navbar />

    <RouterView />
  </div>
</template>

<style scoped>
  * {
    padding: 0;
    margin: 0;
  }
</style>