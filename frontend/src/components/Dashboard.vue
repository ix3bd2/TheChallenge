<template>
  <div class="dashboard">
    <h1>Dashboard</h1>
    <div class="row">
      <div class="col col-lg-4 admin-dashboard-card">
        <div class="admin-card">
          <h5 class="card-header-text">Total income</h5>
        </div>
      </div>
      <div class="col col-lg-4 admin-dashboard-card">
        <div class="admin-card">
          <h5 class="card-header-text">Total sold equipment</h5>
        </div>
      </div>
      <div class="col col-lg-4 admin-dashboard-card">
        <div class="admin-card">
          <h5 class="card-header-text">Total client</h5>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col col-lg-6 admin-dashboard-card">
        <div class="admin-card">
          <h5 class="card-header-text">heighest energy genrating clients</h5>
        </div>
      </div>
      <div class="col col-lg-6 admin-dashboard-card">
        <div class="admin-card">
          <h5 class="card-header-text">Total Generated Energy</h5>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col col-lg-12 admin-dashboard-card">
        <div class="admin-card" style="height: 350px">
          <h5 class="card-header-text">latest clients</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap");

.dashboard {
  text-align: center;
  padding-top: 100px;
  padding-left: 5%;
  padding-right: 5%;
}
.admin-card {
  background-color: white;
  width: 100%;
  height: 250px;
  border-radius: 30px;
  margin-bottom: 20px;
  border: 1px solid rgba(0, 0, 0, 0.146);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
}
* {
  max-width: 100vw;
}
.card-header-text{
    padding: 30px;
      font-family: Arial, Helvetica Neue, Helvetica, sans-serif;

    text-align: start;
}
</style>