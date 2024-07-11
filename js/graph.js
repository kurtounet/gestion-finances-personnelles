const MY_CHART = document.getElementById("mychart");
export function showChart(ArrayLabelCategory, ArraydataCategory) {
  console.log("showChart");
  new Chart(MY_CHART, {
    type: "pie",
    data: {
      labels: ArrayLabelCategory,
      datasets: [
        {
          label: "# Category",
          data: ArraydataCategory,
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}
