<script>
export default {
  data() {
    return {
      count: 0
    }
  }
}
</script>

<template>
  <div class="navbar">
    <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#news">News</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#about">About</a></li>
    </ul>
  </div>
</template>

<style scoped>
    .navbar {
        position: fixed;
        top: 0;
        padding: 40px;
    }

    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        color: white;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }

    li {
        display: inline;
        margin: 10px;
    }
</style>