<template>
  <div class="show-energy">
    <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
  </div>
</template>

<script>
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default {
  name: "BarChart",
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        
        datasets: [
          {
            label: "Saved energy",
            backgroundColor: "#e78200",
            data: [JSON.parse(sessionStorage.getItem('energy'))[0], JSON.parse(sessionStorage.getItem('energy'))[1], JSON.parse(sessionStorage.getItem('energy'))[2],JSON.parse(sessionStorage.getItem('energy'))[3],JSON.parse(sessionStorage.getItem('energy'))[4],JSON.parse(sessionStorage.getItem('energy'))[5],JSON.parse(sessionStorage.getItem('energy'))[6],JSON.parse(sessionStorage.getItem('energy'))[7],JSON.parse(sessionStorage.getItem('energy'))[8],JSON.parse(sessionStorage.getItem('energy'))[9],JSON.parse(sessionStorage.getItem('energy'))[10],JSON.parse(sessionStorage.getItem('energy'))[11]],
          },
        ],
      },
    };
  },
  created(){
    console.log(JSON.parse(sessionStorage.getItem('energy'))[0])
  }
};
</script>

<style>
.show-energy {
  text-align: center;
  padding-top: 120px;
  padding-left: 10%;
  padding-right: 10%;
}
</style>