<template>
  <div class="home-page-main">
    <img class="sport-equipment" src="../assets/machine.png" />
    <img class="concept-equipment" src="../assets/concept-machine.png" />
    <div class="machine-text">
      <p>
        Students project to help solve the problem of affordble and clean
        energy.
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.home-page-main {
  width: 100%;
  height: 100vh;
  background-image: url(../assets/background.jpeg);
  background-repeat: no-repeat;
  background-size: cover;
}
.sport-equipment {
  height: 80%;
  position: absolute;
  left: 48%;
  top: 50%;
  z-index: 4;
  transform: translate(-50%, -50%);
}
.machine-text {
  color: white;
  font-size: 17px;
  position: absolute;
  left: 50%;
  bottom: 3%;
  transform: translate(-50%, -50%);
}
.concept-equipment {
  height: 23%;
  position: absolute;
  left:54.5%;
  top: 21%;
  z-index: 3;
  transform: translate(-50%, -50%);
}
</style>