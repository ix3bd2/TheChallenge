<template>
  <div class="dashboard">
    <h1>Dashboard</h1>
    <div class="row">
      <div class="col col-lg-3 admin-dashboard-card">
        <div class="admin-card">
          <h6 class="card-header-text">Total income</h6>
          <h6 class="card-header-text">{{ this.totalKosten }}</h6>
        </div>
      </div>
      <div class="col col-lg-3 admin-dashboard-card">
        <div class="admin-card">
          <h6 class="card-header-text">Total sold equipment</h6>
          <h6 class="card-header-text">{{ this.totalSold }}</h6>
        </div>
      </div>
      <div class="col col-lg-3 admin-dashboard-card">
        <div class="admin-card">
          <h6 class="card-header-text">Total client</h6>
          <h6 class="card-header-text">{{ this.totalClients }}</h6>
        </div>
      </div>
      <div class="col col-lg-3 admin-dashboard-card" style="position: relative">
        <div class="admin-card">
          <h6 class="card-header-text">heighest energy genrating clients</h6>

          <Doughnut
            v-if="chartData.datasets[0].data"
            id="my-chart-id"
            :options="chartOptions"
            :data="chartData"
          />
          <div v-else>Loading...</div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col col-lg-6 admin-dashboard-card" style="position: relative">
        <div class="admin-card">
          <h6 class="card-header-text">heighest energy genrating clients</h6>

          <Doughnut
            id="my-chart-id"
            :options="chartOptions"
            :data="chartData"
          />
        </div>
      </div>
      <div class="col col-lg-6 admin-dashboard-card">
        <div class="admin-card">
          <h6 class="card-header-text">Total Generated Energy</h6>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col col-lg-12 admin-dashboard-card">
        <div class="admin-card" style="height: 350px">
          <h6 class="card-header-text">latest clients</h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ENTRYPOINT } from "../config/entrypoint";
import { Doughnut } from "vue-chartjs";

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
} from "chart.js";
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

export default {
  components: { Doughnut },

  data() {
    return {
      totalIncome: null,
      totalKosten: null,
      totalClients: null,
      douData: false,
      totalSold: null,
      HEC: [],
      HECN: [],
      HECC: [],
      chartData: {
        labels: [],
        datasets: [
          {
            backgroundColor: ["#e78200", "#41B883", "#00D8FF", "#DD1B16"],
            data: null,
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "bottom",
          },
        },
      },
    };
  },
  created() {
    axios
      .get(
        ENTRYPOINT + "klants?page=1&itemsPerPage=10&order%5BTotalGen%5D=desc"
      )
      .then((response) => {
        var array1 = response.data["hydra:member"].length;
        this.totalClients = response.data["hydra:member"].length;
        this.totalIncome = response.data["hydra:member"];
        for (var i = 0; i < array1; i++) {
          this.HEC.push(this.totalIncome[i].TotalGen);
          this.HECC.push(
            "#" + Math.floor(Math.random() * 16777215).toString(16)
          );

          if (this.HECN.length < 3)
            this.HECN.push(this.totalIncome[i].user.username);
          this.totalKosten += this.totalIncome[i].kosten;
        }
        this.chartData.datasets[0].data = this.HEC;
        this.chartData.labels = this.HECN;
        this.chartData.datasets[0].backgroundColor = this.HECC;
      });

    axios
      .get(ENTRYPOINT + "micro_bits", {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        this.totalSold = response.data["hydra:member"].length;
      });
  },
};
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
.card-header-text {
  padding: 30px;
  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;

  text-align: start;
}
#my-chart-id {
  position: absolute;
  top: 20%;
  height: 65% !important;
  width: 90% !important;
}
</style>