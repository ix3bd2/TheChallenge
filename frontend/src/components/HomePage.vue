<template>
  <div class="home-page-main">
    <div class="row" style="max-width:100%;">
      <div class="col-lg-6 col-sm-12 text-col">
        
         <div class="morphing">
        <div class="word">Generate</div>
        <div class="word">Energy</div>
        <div class="word">For</div>
        <div class="word">Free</div>
      </div>
      </div>
      <div class="col-lg-6 col-sm-12 sport-col">
        <img class="sport-equipment" src="../assets/machine.png" />
        <img class="concept-equipment" src="../assets/concept-machine.png" />
      </div>
     
    </div>

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
@import url("https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap");

.home-page-main {
  width: 100%;
  height: 100vh;
  background-image: url(../assets/background.jpeg);
  background-repeat: no-repeat;
  background-size: cover;
}
.sport-col{
  position: relative;
}
.sport-equipment {
  height: 85%;
  position: absolute;
  top: 55% ;
  left: 50%;
  transform: translate(-50%,-50%);
  z-index: 4;
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
  left: 65.5%;
  top: 22%;
  z-index: 3;
  transform: translate(-50%, -50%);
}

.morphing {
  font-family: "Roboto Slab", serif;

  position: relative;
  font-size: 120px;
  color: #ccff00;
  min-height: 100vh;
  filter: contrast(25) blur(1px);
}
.text-col{
  position: relative;
}
.word {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-animation: word 16s infinite ease-in-out;
  animation: word 16s infinite ease-in-out;
}
.word:nth-child(1) {
  -webkit-animation-delay: -16s;
  animation-delay: -16s;
}
.word:nth-child(2) {
  -webkit-animation-delay: -12.8s;
  animation-delay: -12.8s;
}
.word:nth-child(3) {
  -webkit-animation-delay: -9.6s;
  animation-delay: -9.6s;
}
.word:nth-child(4) {
  -webkit-animation-delay: -6.4s;
  animation-delay: -6.4s;
}
@-webkit-keyframes word {
  0%,
  5%,
  100% {
    filter: blur(0px);
    opacity: 1;
  }
  20%,
  80% {
    filter: blur(1em);
    opacity: 0;
  }
}
@keyframes word {
  0%,
  5%,
  100% {
    filter: blur(0px);
    opacity: 1;
  }
  20%,
  80% {
    filter: blur(1em);
    opacity: 0;
  }
}
</style>