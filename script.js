const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [
          { x: 0.3, y: 100 },
          { x: 1.3, y: 160 },
          { x: 2.3, y: 200 },
          { x: 3.3, y: 30 },
          { x: 4.3, y: 60 },
          { x: 5.3, y: 90 },
          { x: 6.3, y: 100 },
          { x: 7.3, y: 220 },
          { x: 8.3, y: 300 },
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
        barPercentage: 1,
        categoryPercentage: 1,
      },
    ],
  },
  options: {
    scales: {
      x: {
        type: "linear",
        offset: false,
        grid: {
          offset: false,
        },
        ticks: {
          stepSize: 3,
        },
        title: {
          display: true,
          text: "Sati",
        },
      },
      y: {
        title: {
          display: true,
          text: "Pregledi",
        },
      },
    },
  },
});
