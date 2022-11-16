<template>
  <div class="main-left-navbar">
    <div class="icon-bg">
    <a href="#" class="fa fa-reddit"></a>
    </div>
        <div>

    <a href="#" class="fa fa-github"></a>
    </div>
        <div class="icon-bg">

    <a href="#" class="fa fa-facebook"></a>
    </div>
        <div class="icon-bg">

    <a href="#" class="fa fa-instagram"></a>
    </div>
        <div class="icon-bg"> 

    <a href="#" class="fa fa-telegram"></a>
    </div>
        <div class="icon-bg">

    <a href="#" class="fa fa-twitter"></a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.main-left-navbar {
}
.fa-twitter{
    bottom: 40px;
    left: 40px;
}
.fa-telegram{
    bottom: 100px;
    left: 40px;
}
.fa-instagram{
    bottom: 160px;
    left: 40px;
}
.fa-facebook{
    bottom: 220px;
    left: 40px;
}
.fa-github{
    bottom: 280px;
    left: 40px;
}
.fa-reddit{
    bottom: 340px;
    left: 40px;
}
.fa {
  position: absolute;
  transform: translate(-50%,-50%);
  border: 3px solid rgba(128, 128, 128, 0.25);
  text-align: center;
  margin-top: 10%;
  text-decoration: none;
  font-size: 30px;
  width: 50px;
  height: 50px;
  line-height: 45px;
  border-radius: 50%;
  rotate: 270deg;
  background-color: black;
  color: #ccff00;
}
.fa:hover{
    color: white;
}
.icon-bg{

}
</style>