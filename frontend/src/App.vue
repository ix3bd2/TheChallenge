<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div>
    <nav-bar />
    <RouterView />
    <thefooter />
  </div>
</template>

<script>
import NavBar from "./components/Navbar.vue";
import Thefooter from "./components/Thefooter.vue";

export default {
  components: { NavBar, Thefooter },
  name: "App",
    created() {
     if(!sessionStorage.getItem("token")){
      if(window.location.toString().includes("users") ||
      window.location.toString().includes("dashBoard") ||
      window.location.toString().includes("klants") ||
      window.location.toString().includes("micro_bits")){
          window.location.href= "/"
    } else {
            console.log('ssd') 

    }
     }
   
  },
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
  background-color: rgb(234, 234, 234);
}
.btn{
  margin-top: 10px;
  margin-right: 10px;
  
}
</style>