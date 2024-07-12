"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showChart = showChart;

function showChart(ArrayLabelCategory, ArraydataCategory) {
  var MY_CHART = document.getElementById("mychart");
  console.log("showChart");
  new Chart(MY_CHART, {
    type: "bar",
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