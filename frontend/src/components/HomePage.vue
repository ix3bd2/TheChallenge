<template>
  <div class="homepage">
    <div class="home-page-main">
      <div class="row header" style="max-width: 100%; height: 100vh">
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
        <div class="row" style="margin-left: 0 !important">
          <div class="col-lg-6 col-sm-12">
            <h1 class="sec2-text">About the project</h1>
            <p class="sec2-p">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <div class="col-lg-6 col-sm-12" style="padding: 0 !important">
            <div class="sec2-img"></div>
          </div>
        </div>
      </div>
    </div>
    <left-nav-bar />
  </div>
</template>

<script>
import LeftNavBar from "../components/LeftNavbar.vue";

export default {
  components: { LeftNavBar },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap");

.sec2-text {
  padding-top: 10%;
  font-size: 50px !important;
  text-align: center;
  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
  font-weight: bold;
}
.sec2-p {
  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
  font-size: 20px;
  padding: 30px;
  text-align: center;
}
.home-page-main {
  width: 100%;
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
.sec2-img {
  clip-path: polygon(15% 0, 100% 0, 100% 100%, 0 100%);
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
  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
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