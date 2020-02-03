var data = [
    {x: "October", y: "Wk1", heat: 15},
    {x: "October", y: "Wk2", heat: 17},
    {x: "October", y: "Wk3", heat: 21},
    {x: "October", y: "Wk4", heat: 34},
    {x: "November", y: 'Wk1', heat: 33},
    {x: "November", y: "Wk2", heat: 32},
    {x: "November", y: "Wk3", heat: 51},
    {x: "November", y: "Wk4", heat: 50},
    {x: "December", y: "Wk1", heat: 47}
  ];

  
  // create a chart and set the data
  chart = anychart.heatMap(data);
  
  // set the container id
  chart.container("container");
  
  // initiate drawing the chart
  chart.draw();