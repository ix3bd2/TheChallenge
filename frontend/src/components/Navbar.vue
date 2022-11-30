<script>
export default {
  data() {
    return {
      count: 0,
      show: false,
    };
  },
  created() {
    if (
      window.location.toString().includes("users") ||
      window.location.toString().includes("dashBoard") ||
      window.location.toString().includes("klants") ||
      window.location.toString().includes("micro_bits") ||
      window.location.toString().includes("energiebesparings")
    ) {
      this.show = true;
    } else {
      this.show = false;
    }
  },
};
</script>

<template>
  <div class="container">
    <header v-if="!show" id="NavBar" class=" d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4">
      <a href="/" class=" d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
        <img src="../assets/EfreeLogo.png" alt="" height="50" />
      </a>

      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><a href="/" class="nav-link px-4 link-light fw-bold">Home</a></li>
        <li><a href="#" class="nav-link px-4 link-light fw-bold">About us</a></li>
        <li><a href="#" class="nav-link px-4 link-light fw-bold">Order now</a></li>
        <li><a href="#" class="nav-link px-4 link-light fw-bold">Partners</a></li>
      </ul>

      <div class="col-md-3 text-end">
        <a href="/login">
        <button type="button" class="btn btn-outline-primary me-2 fw-bold">Login</button>
        </a>
      </div>
    </header>
    <header
    v-if="show"
    style="background-color:black!important"
      id="NavBar"
      class="
        d-flex
        flex-wrap
        align-items-center
        justify-content-center justify-content-md-between
        py-3
        mb-4
      "
    >
      <a
        href="/"
        class="
          d-flex
          align-items-center
          col-md-3
          mb-2 mb-md-0
          text-dark text-decoration-none
        "
      >
        <img src="../assets/EfreeLogo.png" alt="" height="50" />
      </a>

      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><a href="/dashBoard" class="nav-link px-4 link-light fw-bold">DashBoard</a></li>
        <!-- <li>
          <a href="/energiebesparings" class="nav-link px-4 link-light fw-bold">Energiebesparing</a>
        </li> -->
        <li>
          <a href="/micro_bits" class="nav-link px-4 link-light fw-bold">MicroBits</a>
        </li>
        <li>
          <a href="/klants" class="nav-link px-4 link-light fw-bold">Klanten</a>
        </li>
        <li>
          <a href="/users" class="nav-link px-4 link-light fw-bold">Gebruikers</a>
        </li>
      </ul>

      <div class="col-md-3 text-end">
        <button type="button" class="btn btn-outline-danger me-2 fw-bold">
          Logout
        </button>
      </div>
    </header>
  </div>
</template>

<style scoped>
#NavBar {
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  background-color: transparent;
  transition: 0.4s;
}

.btn-outline-primary {
  margin: 0 !important;
  --bs-btn-color: #ccff00;
  --bs-btn-border-color: #ccff00;
  --bs-btn-hover-color: #000;
  --bs-btn-hover-bg: #ccff00;
  --bs-btn-hover-border-color: #000;
  --bs-btn-active-color: #000;
  --bs-btn-active-bg: #ccff00;
  --bs-btn-active-border-color: #ccff00;
  --bs-btn-disabled-color: #ccff00;
  --bs-btn-disabled-border-color: #ccff00;
}
</style>