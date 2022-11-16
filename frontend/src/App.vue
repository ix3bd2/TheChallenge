<script setup>
import Navbar from './components/Navbar.vue'
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <Navbar />

  <RouterView />
</template>

<style scoped>
  * {
    padding: 0;
    margin: 0;
  }
</style>