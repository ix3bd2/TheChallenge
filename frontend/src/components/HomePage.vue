<template>
  <div class="home-page-main">
    <div class="row header" style="max-width: 100%; height: 100%">
      <div class="col-lg-6 col-sm-12 text-col">
        <h1 class="h1-header">
          <span> Generate&nbsp;</span>
          <span> energy &nbsp;</span><br />
          <span> for</span>
          <span> &nbsp;free </span>
        </h1>
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
    <div class="sec2">
      <div class="row" style="margin-left:0!important;"> 
        <div class="col-lg-6 col-sm-12"></div>
        <div class="col-lg-6 col-sm-12" style="padding:0!important;">
          <div class="sec2-img"></div>
        </div>
      </div>
    </div>
    <thefooter/>
  </div>
</template>

<script>
import Thefooter from "./Thefooter.vue"
export default {
  components: { Thefooter },
};
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
.sport-col {
  position: relative;
}
.sport-equipment {
  height: 85%;
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
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
.sec2-img{
      clip-path: polygon(15% 0,100% 0,100% 100%,0 100%);
    width: 100%;
    background-image: url(../assets/gym-pic.jpeg);
    height: 600px;
    background-size: cover;
    background-position: 50%;
}
.concept-equipment {
  height: 23%;
  position: absolute;
  left: 65.5%;
  top: 22%;
  z-index: 3;
  transform: translate(-50%, -50%);
}
.text-col {
  position: relative;
}

.h1-header {
  text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;
  font-family: Cambria, Georgia, serif;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 40%;
  left: 20%;
  font-size: 80px;
  color: #ccff00;
  max-width: 40ch;
  text-align: center;
  transform: scale(0.94);
  animation: scale 3s forwards cubic-bezier(0.5, 1, 0.89, 1);
}
@keyframes scale {
  100% {
    transform: scale(1);
  }
}
.header {
  margin: 0;
  border-bottom: 0.25rem solid #ccff00;
}
span {
  display: inline-block;
  opacity: 0;
  filter: blur(4px);
}
span:nth-child(1) {
  animation: fade-in 0.8s 0.1s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(2) {
  animation: fade-in 0.8s 0.2s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(3) {
  animation: fade-in 0.8s 0.3s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(4) {
  animation: fade-in 0.8s 0.4s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(5) {
  animation: fade-in 0.8s 0.5s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(6) {
  animation: fade-in 0.8s 0.6s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(7) {
  animation: fade-in 0.8s 0.7s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(8) {
  animation: fade-in 0.8s 0.8s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(9) {
  animation: fade-in 0.8s 0.9s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(10) {
  animation: fade-in 0.8s 1s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(11) {
  animation: fade-in 0.8s 1.1s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(12) {
  animation: fade-in 0.8s 1.2s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(13) {
  animation: fade-in 0.8s 1.3s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(14) {
  animation: fade-in 0.8s 1.4s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(15) {
  animation: fade-in 0.8s 1.5s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(16) {
  animation: fade-in 0.8s 1.6s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(17) {
  animation: fade-in 0.8s 1.7s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(18) {
  animation: fade-in 0.8s 1.8s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

@keyframes fade-in {
  100% {
    opacity: 1;
    filter: blur(0);
  }
}
.sec2 {
  background-color: white;
}
</style>