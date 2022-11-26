<template>
<div>
  <div class="login-box">
  <h2>Login</h2>
  <form>
    <div class="user-box">
      <input type="text" name="" required="">
      <label>Username</label>
    </div>
    <div class="user-box">
      <input type="password" name="" required="">
      <label>Password</label>
    </div>
    <a href="#">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Submit
    </a>
  </form>
</div>
<div class="wrapper">
	<div class="wrapper__absolute--full beacon-wrapper beacon-wrapper-01">
		<div class="beacon beacon-01"></div>
	</div>
	<div class="wrapper__absolute--full beacon-wrapper beacon-wrapper-02">
		<div class="beacon beacon-02"></div>
	</div>
	<div class="wrapper__absolute--full beacon-wrapper beacon-wrapper-03">
		<div class="beacon beacon-03"></div>
	</div>
	
	<div id="particles-js" class="wrapper__absolute--full"></div>
	
	<div class="space-nebula__wrapper wrapper__absolute--full">
		<div class="space-nebula space-nebula-01"></div>
		<div class="space-nebula space-nebula-02"></div>
		<div class="space-nebula space-nebula-03"></div>
	</div>

	<div class="orb__wrapper">
		<div class="orb__mask">
			<div class="orb__texture"></div>

			<div class="orb__cloudgroup orb__cloudgroup-01">
				<div class="orb__clouds orb__clouds-01"></div>
				<div class="orb__clouds orb__clouds-02"></div>
			</div>
			<div class="orb__cloudgroup orb__cloudgroup-02">
				<div class="orb__clouds orb__clouds-01"></div>
				<div class="orb__clouds orb__clouds-02"></div>
			</div>
			<div class="orb__cloudgroup orb__cloudgroup-03">
				<div class="orb__clouds orb__clouds-01"></div>
				<div class="orb__clouds orb__clouds-02"></div>
			</div>
			<div class="orb__cloudgroup orb__cloudgroup-04">
				<div class="orb__clouds orb__clouds-01"></div>
				<div class="orb__clouds orb__clouds-02"></div>
			</div>

			<div class="orb__shading"></div>
			<div class="orb__lighting"></div>
		</div>
	</div>
	
	<div class="wrapper__absolute--full landscape-clouds__wrapper">
			<div class="landscape-clouds landscape-clouds-01"></div>
			<div class="landscape-clouds landscape-clouds-02"></div>
	</div>

	<div class="landscape">
		<div class="landscape__bg landscape__bg--03"></div>
		<div class="landscape__bg landscape__bg--02"></div>
		<div class="landscape__bg landscape__bg--01"></div>
	</div>
</div>
</div>
</template>

<script>



export default {

}
</script>

<style scoped>
html {
  background-color: #111111;
}

html, body {
  height: 100%;
}

canvas {
  display: block;
  width: 100%;
  height: 100%;
}

.wrapper {
  position: absolute;
  z-index: 2;
  height: 100vh;
  width: 100%;
  background-color: #111;
  background: linear-gradient(to bottom, #080808 0%, #0d0d0d 70%, #281e1e 90%);
  overflow: hidden;
}

.wrapper__absolute--full {
  position: absolute;
  width: 100%;
  height: 100%;
}

#particles-js {
  padding-bottom: 150px;
}

.space-nebula__wrapper {
  opacity: 0.08;
}

@-webkit-keyframes space-nebula-scroll-small {
  from {
    background-position: 0% 0%;
  }
  to {
    background-position: -1200px 0%;
  }
}

@keyframes space-nebula-scroll-small {
  from {
    background-position: 0% 0%;
  }
  to {
    background-position: -1200px 0%;
  }
}
@-webkit-keyframes space-nebula-scroll-med {
  from {
    background-position: 0% 0%;
  }
  to {
    background-position: -1600px 0%;
  }
}
@keyframes space-nebula-scroll-med {
  from {
    background-position: 0% 0%;
  }
  to {
    background-position: -1600px 0%;
  }
}
@-webkit-keyframes space-nebula-scroll-large {
  from {
    background-position: 0% 0%;
  }
  to {
    background-position: -2400px 0%;
  }
}
@keyframes space-nebula-scroll-large {
  from {
    background-position: 0% 0%;
  }
  to {
    background-position: -2400px 0%;
  }
}
.space-nebula {
  position: absolute;
  width: 100%;
  height: 800px;
  top: 16%;
  background-size: 1600px 800px;
  background-position: 0% 0%;
}

.space-nebula-01 {
  background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/350480/bg_nebula_01.svg");
  background-size: 1200px 600px;
  height: 600px;
  top: 20%;
  opacity: 0.65;
  -webkit-animation: space-nebula-scroll-small 40s linear infinite;
          animation: space-nebula-scroll-small 40s linear infinite;
}

.space-nebula-02 {
  background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/350480/bg_nebula_02.svg");
  opacity: 0.8;
  -webkit-animation: space-nebula-scroll-med 60s linear infinite;
          animation: space-nebula-scroll-med 60s linear infinite;
}

.space-nebula-03 {
  background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/350480/bg_nebula_02.svg");
  background-size: 2400px 1200px;
  height: 1200px;
  opacity: 0.5;
  top: -4%;
  background-position: 0% 0%;
  -webkit-animation: space-nebula-scroll-large 45s linear infinite;
          animation: space-nebula-scroll-large 45s linear infinite;
}

.orb__wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 0;
}

@-webkit-keyframes orb-mover {
  0% {
    transform: translateY(-100px);
    -webkit-animation-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
            animation-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
  }
  1% {
    transform: translateY(-100px);
    -webkit-animation-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
            animation-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
  }
  49% {
    transform: translateY(-50px);
    -webkit-animation-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
            animation-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
  }
  51% {
    transform: translateY(-50px);
    -webkit-animation-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
            animation-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
  }
  99% {
    transform: translateY(-100px);
    -webkit-animation-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
            animation-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
  }
  100% {
    transform: translateY(-100px);
    -webkit-animation-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
            animation-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
  }
}

@keyframes orb-mover {
  0% {
    transform: translateY(-100px);
    -webkit-animation-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
            animation-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
  }
  1% {
    transform: translateY(-100px);
    -webkit-animation-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
            animation-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
  }
  49% {
    transform: translateY(-50px);
    -webkit-animation-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
            animation-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
  }
  51% {
    transform: translateY(-50px);
    -webkit-animation-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
            animation-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
  }
  99% {
    transform: translateY(-100px);
    -webkit-animation-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
            animation-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
  }
  100% {
    transform: translateY(-100px);
    -webkit-animation-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
            animation-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
  }
}
.orb__mask {
  position: relative;
  height: 300px;
  width: 300px;
  border-radius: 50%;
  overflow: hidden;
  z-index: 1;
  box-shadow: 0px 15px 20px rgba(255, 10, 10, 0.1), 0px 1px rgba(255, 50, 50, 0.18);
  -webkit-animation: orb-mover 8s linear infinite;
          animation: orb-mover 8s linear infinite;
}

@-webkit-keyframes orb-rotater {
  from {
    background-position: 0px 0%;
  }
  to {
    background-position: 800px 0%;
  }
}

@keyframes orb-rotater {
  from {
    background-position: 0px 0%;
  }
  to {
    background-position: 800px 0%;
  }
}
.orb__texture {
  position: absolute;
  height: 100%;
  width: 100%;
  background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/350480/planet_bg_base.svg");
  background-size: 800px 400px;
  background-position: 0% 0%;
  border-radius: 50%;
  transform: rotateZ(-35deg);
  -webkit-animation: orb-rotater 8s linear infinite;
          animation: orb-rotater 8s linear infinite;
  z-index: 1;
}

.orb__cloudgroup {
  position: absolute;
  height: 300px;
  width: 300px;
  z-index: 2;
}

.orb__clouds {
  position: absolute;
  height: 100%;
  width: 100%;
  background-size: 800px 400px;
  background-position: center center;
  background-position: 0% 0%;
}

.orb__clouds-01 {
  background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/350480/planet_bg_clouds_01.svg");
}

.orb__clouds-02 {
  background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/350480/planet_bg_clouds_02.svg");
}

.orb__cloudgroup-01 {
  opacity: 0.2;
  transform: rotateZ(-19deg) translateY(-50%);
}
.orb__cloudgroup-01 .orb__clouds-01 {
  -webkit-animation: orb-rotater 17s linear infinite;
          animation: orb-rotater 17s linear infinite;
}
.orb__cloudgroup-01 .orb__clouds-02 {
  -webkit-animation: orb-rotater 35s linear infinite;
          animation: orb-rotater 35s linear infinite;
  opacity: 0.5;
}

.orb__cloudgroup-02 {
  opacity: 0.4;
  transform: rotateZ(-19deg) translateY(-27%);
}
.orb__cloudgroup-02 .orb__clouds-01 {
  -webkit-animation: orb-rotater 35s linear infinite;
          animation: orb-rotater 35s linear infinite;
  opacity: 0.5;
}
.orb__cloudgroup-02 .orb__clouds-02 {
  -webkit-animation: orb-rotater 25s linear infinite;
          animation: orb-rotater 25s linear infinite;
}

.orb__cloudgroup-03 {
  opacity: 0.4;
  transform: rotateZ(-19deg) translateY(-1%);
}
.orb__cloudgroup-03 .orb__clouds-01 {
  -webkit-animation: orb-rotater 17s linear infinite;
          animation: orb-rotater 17s linear infinite;
}
.orb__cloudgroup-03 .orb__clouds-02 {
  -webkit-animation: orb-rotater 35s linear infinite;
          animation: orb-rotater 35s linear infinite;
  opacity: 0.5;
}

.orb__cloudgroup-04 {
  opacity: 0.85;
  transform: rotateZ(-19deg) translateY(24%);
}
.orb__cloudgroup-04 .orb__clouds-01 {
  -webkit-animation: orb-rotater 35s linear infinite;
          animation: orb-rotater 35s linear infinite;
  opacity: 0.5;
}
.orb__cloudgroup-04 .orb__clouds-02 {
  -webkit-animation: orb-rotater 25s linear infinite;
          animation: orb-rotater 25s linear infinite;
}

.orb__shading {
  position: absolute;
  height: 300px;
  width: 300px;
  transform: translateY(-60px) scale(1.4);
  background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0) 0%, black 65%, black 100%);
  z-index: 3;
}

.orb__lighting {
  position: absolute;
  height: 300px;
  width: 300px;
  box-shadow: inset 0px -5px 7px rgba(255, 50, 50, 0.15), inset 0px -1px 1px rgba(255, 255, 255, 0.18);
  border-radius: 50%;
  z-index: 4;
}

@-webkit-keyframes beacon-flight-01 {
  0% {
    transform: translate(-20%, 55%);
  }
  50% {
    transform: translate(120%, 28%);
  }
  51% {
    transform: translate(120%, 55%);
  }
  100% {
    transform: translate(-20%, 65%);
  }
}

@keyframes beacon-flight-01 {
  0% {
    transform: translate(-20%, 55%);
  }
  50% {
    transform: translate(120%, 28%);
  }
  51% {
    transform: translate(120%, 55%);
  }
  100% {
    transform: translate(-20%, 65%);
  }
}
@-webkit-keyframes beacon-flight-02 {
  0% {
    transform: translate(-20%, 7%);
  }
  50% {
    transform: translate(120%, 32%);
  }
  51% {
    transform: translate(120%, 23%);
  }
  100% {
    transform: translate(-20%, 65%);
  }
}
@keyframes beacon-flight-02 {
  0% {
    transform: translate(-20%, 7%);
  }
  50% {
    transform: translate(120%, 32%);
  }
  51% {
    transform: translate(120%, 23%);
  }
  100% {
    transform: translate(-20%, 65%);
  }
}
@-webkit-keyframes beacon-flight-03 {
  0% {
    transform: translate(-20%, 78%);
  }
  50% {
    transform: translate(120%, 32%);
  }
  51% {
    transform: translate(120%, 78%);
  }
  100% {
    transform: translate(-20%, 72%);
  }
}
@keyframes beacon-flight-03 {
  0% {
    transform: translate(-20%, 78%);
  }
  50% {
    transform: translate(120%, 32%);
  }
  51% {
    transform: translate(120%, 78%);
  }
  100% {
    transform: translate(-20%, 72%);
  }
}
.beacon-wrapper {
  top: 0;
  z-index: 4;
}

.beacon-wrapper-01 {
  transform: translate(-20%, 55%);
  -webkit-animation: beacon-flight-01 12s linear infinite;
          animation: beacon-flight-01 12s linear infinite;
}

.beacon-wrapper-02 {
  transform: translate(-20%, 55%);
  -webkit-animation: beacon-flight-02 12s 4s linear infinite;
          animation: beacon-flight-02 12s 4s linear infinite;
}

.beacon-wrapper-03 {
  transform: translate(-20%, 55%);
  -webkit-animation: beacon-flight-03 12s 8s linear infinite;
          animation: beacon-flight-03 12s 8s linear infinite;
}

@-webkit-keyframes beacon-flash {
  0% {
    opacity: 0.25;
  }
  5% {
    opacity: 1;
  }
  100% {
    opacity: 0.25;
  }
}

@keyframes beacon-flash {
  0% {
    opacity: 0.25;
  }
  5% {
    opacity: 1;
  }
  100% {
    opacity: 0.25;
  }
}
.beacon {
  position: absolute;
  top: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: radial-gradient(ellipse at center, white 0%, rgba(44, 130, 235, 0.75) 15%, rgba(44, 130, 235, 0.25) 30%, rgba(44, 130, 235, 0) 65%);
  opacity: 1;
  -webkit-animation: beacon-flash 0.8s linear infinite;
          animation: beacon-flash 0.8s linear infinite;
}

.landscape {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 150px;
}

@-webkit-keyframes landscape__bg-scroller {
  from {
    background-position: 0px bottom;
  }
  to {
    background-position: 2400px bottom;
  }
}

@keyframes landscape__bg-scroller {
  from {
    background-position: 0px bottom;
  }
  to {
    background-position: 2400px bottom;
  }
}
.landscape__bg {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 220px;
  background-size: 2400px 220px;
  background-position: 0px bottom;
  background-repeat: repeat;
}

.landscape__bg--01 {
  background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/350480/landscape_fg_01.svg");
  -webkit-animation: landscape__bg-scroller 40s linear infinite;
          animation: landscape__bg-scroller 40s linear infinite;
}

.landscape__bg--02 {
  background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/350480/landscape_fg_02.svg");
  -webkit-animation: landscape__bg-scroller 60s linear infinite;
          animation: landscape__bg-scroller 60s linear infinite;
}

.landscape__bg--03 {
  background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/350480/landscape_fg_03.svg");
  -webkit-animation: landscape__bg-scroller 100s linear infinite;
          animation: landscape__bg-scroller 100s linear infinite;
}

.landscape-clouds__wrapper {
  top: 0%;
  opacity: 0.05;
}

@-webkit-keyframes landscape-clouds-scroller {
  from {
    background-position: 0px 0%;
  }
  to {
    background-position: -800px 0%;
  }
}

@keyframes landscape-clouds-scroller {
  from {
    background-position: 0px 0%;
  }
  to {
    background-position: -800px 0%;
  }
}
.landscape-clouds {
  position: absolute;
  width: 100%;
  height: 400px;
  bottom: -2%;
  background-size: 800px 400px;
  background-position: 0% 0%;
}

.landscape-clouds-01 {
  background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/350480/landscape_clouds_01.svg");
  -webkit-animation: landscape-clouds-scroller 80s linear infinite;
          animation: landscape-clouds-scroller 80s linear infinite;
}

.landscape-clouds-02 {
  background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/350480/landscape_clouds_02.svg");
  opacity: 0.5;
  -webkit-animation: landscape-clouds-scroller 26s linear infinite;
          animation: landscape-clouds-scroller 26s linear infinite;
}
.login-cont{
    width: 100%;
    height: 100vh;
    background-color: #1f1f1f;
}
#tsparticles {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 0;
}





.login-box {
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 15;
  width: 400px;
  padding: 40px;
  transform: translate(-50%, -50%);
  background: rgba(0,0,0,.5);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0,0,0,.6);
  border-radius: 10px;
}

.login-box h2 {
  margin: 0 0 30px;
  padding: 0;
  color: #fff;
  text-align: center;
}

.login-box .user-box {
  position: relative;
}

.login-box .user-box input {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
}
.login-box .user-box label {
  position: absolute;
  top:0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  pointer-events: none;
  transition: .5s;
}

.login-box .user-box input:focus ~ label,
.login-box .user-box input:valid ~ label {
  top: -20px;
  left: 0;
  color: #ccff00;
  font-size: 12px;
}

.login-box form a {
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #ccff00;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: .5s;
  margin-top: 40px;
  letter-spacing: 4px
}

.login-box a:hover {
  background: #ccff00;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px #ccff00,
              0 0 25px #ccff00,
              0 0 50px #ccff00,
              0 0 100px #ccff00;
}

.login-box a span {
  position: absolute;
  display: block;
}

.login-box a span:nth-child(1) {
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #ccff00);
  animation: btn-anim1 1s linear infinite;
}

@keyframes btn-anim1 {
  0% {
    left: -100%;
  }
  50%,100% {
    left: 100%;
  }
}

.login-box a span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #ccff00);
  animation: btn-anim2 1s linear infinite;
  animation-delay: .25s
}

@keyframes btn-anim2 {
  0% {
    top: -100%;
  }
  50%,100% {
    top: 100%;
  }
}

.login-box a span:nth-child(3) {
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, #ccff00);
  animation: btn-anim3 1s linear infinite;
  animation-delay: .5s
}

@keyframes btn-anim3 {
  0% {
    right: -100%;
  }
  50%,100% {
    right: 100%;
  }
}

.login-box a span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #ccff00);
  animation: btn-anim4 1s linear infinite;
  animation-delay: .75s
}

@keyframes btn-anim4 {
  0% {
    bottom: -100%;
  }
  50%,100% {
    bottom: 100%;
  }
}

</style>