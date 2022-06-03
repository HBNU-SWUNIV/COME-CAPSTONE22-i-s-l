// Set new default font family and font color to mimic Bootstrap's default styling
(Chart.defaults.global.defaultFontFamily = "Nunito"),
  '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = "#858796";

// Pie Chart Example
var ctx = document.getElementById("myPieChart");

var positive_per = document.getElementById('percent').value;
var negative_per = 100 - positive_per;
console.log(positive_per);

var myPieChart = new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: ['긍정', '부정'],
    datasets: [
      {
        data: [positive_per, negative_per],
        backgroundColor: ["#4e73df", "#1cc88a"],
        hoverBackgroundColor: ["#2e59d9", "#17a673"],
        hoverBorderColor: "rgba(234, 236, 1)",
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: "#dddfeb",
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false,
    },
    cutoutPercentage: 80,
  },
});
