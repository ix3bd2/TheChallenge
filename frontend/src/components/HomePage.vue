<template>
<div class="home-page-main">
  <img class="sport-equipment" src="../assets/machine.png">
</div>
</template>

<script>
export default {

}
</script>

<style>
.home-page-main{
  width: 100%;
  height: 100vh;
  background-image: url(../assets/background.jpeg);
  background-repeat: no-repeat;
  background-size: cover;
}
.sport-equipment{
  position: absolute;
  left: 50%;
  top:50%;
  transform: translate(-50%,-50%);
}
</style>