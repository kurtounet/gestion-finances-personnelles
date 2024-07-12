export function showChart(ArrayLabelCategory, ArraydataCategory) {
  const MY_CHART = document.getElementById("mychart");
  console.log("showChart");
  new Chart(MY_CHART, {
    type: "bar",
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
