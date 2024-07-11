"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showChart = showChart;
var MY_CHART = document.getElementById("mychart");

function showChart(ArrayLabelCategory, ArraydataCategory) {
  console.log("showChart");
  new Chart(MY_CHART, {
    type: "pie",
    data: {
      labels: ArrayLabelCategory,
      datasets: [{
        label: "# Category",
        data: ArraydataCategory,
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}