<template>
<div>
  <footer class="footer-distributed" id="footer0" v-if="!show">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />

    <div class="footer-right">
      <a href=""><i class="fa fa-twitter footer-a"></i></a>
      <a href=""><i class="fa fa-telegram footer-a"></i></a>
      <a href=""><i class="fa fa-instagram footer-a"></i></a>
      <a href=""><i class="fa fa-facebook footer-a"></i></a>
      <a href=""><i class="fa fa-github footer-a"></i></a>
      <a href=""><i class="fa fa-reddit footer-a"></i></a>
    </div>

    <div class="footer-left">
      <p class="footer-links">
        <router-link to="/">
          <a class="link-1">Home&nbsp;</a>
        </router-link>
        <router-link to="/About">
          <a class="link-1" href="/About">About us&nbsp;</a>
        </router-link>
        <router-link to="/Order">
          <a class="link-1">Order now&nbsp;</a>
        </router-link>
        <router-link to="/Partner">
          <a class="link-1">Partner&nbsp;</a>
        </router-link>

        <!-- <a href="/patreon">Patreon&nbsp;</a> -->
      </p>

      <p>Efree &copy; 2022</p>
    </div>
    




    
  </footer>
  <footer class="footer-distributed" id="footer1" v-if="show">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />

    <div class="footer-right">
      <a href=""><i class="fa fa-twitter footer-a"></i></a>
      <a href=""><i class="fa fa-telegram footer-a"></i></a>
      <a href=""><i class="fa fa-instagram footer-a"></i></a>
      <a href=""><i class="fa fa-facebook footer-a"></i></a>
      <a href=""><i class="fa fa-github footer-a"></i></a>
      <a href="" class="footer-a"><i class="fa fa-reddit "></i></a>
    </div>

    <div class="footer-left">
      <p class="footer-links">
        <router-link to="/">
          <a class="link-1">Home&nbsp;</a>
        </router-link>
        <router-link to="/About">
          <a class="link-1" href="/About">About us&nbsp;</a>
        </router-link>
        <router-link to="/Order">
          <a class="link-1">Order now&nbsp;</a>
        </router-link>
        <router-link to="/Partners">
          <a class="link-1">Partner&nbsp;</a>
        </router-link>

        <!-- <a href="/patreon">Patreon&nbsp;</a> -->
      </p>

      <p>Efree &copy; 2022</p>
    </div>
    




    
  </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
created() {
    if (window.location.toString().includes("/users") ||
      window.location.toString().includes("/dashboard") ||
      window.location.toString().includes("/klants") ||
      window.location.toString().includes("/login") ||
      window.location.toString().includes("/micro_bits") ||
      window.location.toString().includes("/energiebesparings")) {
      this.show = true;
}else{
  this.show = false;
}
      
  },
};
</script>

<style scoped>
#footer1{
    display: none;
}
footer{
    background-color: #1f1f1f;
}
a{
    text-decoration: none;
    color: #cf0;
}
.footer-distributed {
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
  width: 100%;
  text-align: left;
  font: normal 16px sans-serif;
  padding: 45px 50px;
}

.footer-distributed .footer-left {
  color: #8f9296;
  font-size: 14px;
  margin: 0;
}
/* Footer links */

.footer-distributed .footer-links {
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
  margin: 0 0 10px;
  padding: 0;
  transition: ease 0.25s;
}

.footer-distributed .footer-links  .footer-a  {
  display: inline-block;
  line-height: 1.8;
  text-decoration: none;
  color: inherit;
  transition: ease 0.25s;
}

.footer-links .link-1:after {
  content: "??";
  font-size: 20px;
  left: 0;
  color: #fff;
  display: inline-block;
  padding-right: 5px;
}

.footer-distributed .footer-links .link-1:before {
  content: none;
}

.footer-distributed .footer-right {
  float: right;
  margin-top: 6px;
  max-width: 180px;
}

.footer-distributed .footer-right .footer-a {
  display: inline-block;
  width: 35px;
  height: 35px;
  background-color: #33383b;
  border-radius: 2px;
  font-size: 20px;
  color: #cf0;
  text-align: center;
  line-height: 35px;
  margin-left: 3px;
margin-top: 3px;
  transition: all 0.25s;
}

.footer-distributed .footer-right .footer-a:hover {
  transform: scale(1.1);
  -webkit-transform: scale(1.1);
}

.footer-distributed .footer-links .footer-a:hover {
  text-decoration: underline;
  
}

/* Media Queries */

@media (max-width: 600px) {
  .footer-distributed .footer-left,
  .footer-distributed .footer-right {
    text-align: center;
  }
  .footer-distributed .footer-right {
    float: none;
    margin: 0 auto 20px;
  }
  .footer-distributed .footer-left .footer-links {
    line-height: 1.8;
  }
}
</style>