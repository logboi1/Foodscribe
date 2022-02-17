var myChart = new Chart("myChart", {
  type: "line",
  data: {},
  options: {}
});

var xValues = [0,2,4,6,8,10,12,14,16,18,20];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
        label: 'This Month',
      data: [80,58,90,60,40,70,40,55,57,50],
      borderColor: "#FEC400",
      fill: false
    },{
        label: 'Last Month',
      data: [89,120,28,15,130,55,60,28, 25,30],
      borderColor: "#4EB370",
      fill: false
    }]
  },
  options: {
    legend: {display: true}
  }
});