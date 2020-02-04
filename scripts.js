var data = [
    {x: "October Wk 1", y: "Mon", heat: 1000},
    {x: "October Wk 1", y: "Tues", heat: 1100},
    {x: "October Wk 1", y: "Weds", heat: 800},
    {x: "October Wk 1", y: "Thurs", heat: 1000},
    {x: "October Wk 1", y: "Fri", heat: 600},
    {x: "October Wk 2", y: "Mon", heat: 400},
    {x: "October Wk 2", y: "Tues", heat: 1000},
    {x: "October Wk 2", y: "Weds", heat: 1000},
    {x: "October Wk 2", y: "Thurs", heat: 1100},
    {x: "October Wk 2", y: "Fri", heat: 1000},
    {x: "October Wk 3", y: "Mon", heat: 500},
    {x: "October Wk 3", y: "Tues", heat: 1300},
    {x: "October Wk 3", y: "Weds", heat: 1100},
    {x: "October Wk 3", y: "Thurs", heat: 4000},
    {x: "October Wk 3", y: "Fri", heat: 1000},
    {x: "October Wk 4", y: "Mon", heat: 400},
    {x: "October Wk 4", y: "Tues", heat: 500},
    {x: "October Wk 4", y: "Weds", heat: 500},
    {x: "October Wk 4", y: "Thurs", heat: 400},
    {x: "October Wk 4", y: "Fri", heat: 1500},
    {x: "November Wk 1", y: "Mon", heat: 900},
    {x: "November Wk 1", y: "Tues", heat: 1500},
    {x: "November Wk 1", y: "Weds", heat: 300},
    {x: "November Wk 1", y: "Thurs", heat: 500},
    {x: "November Wk 1", y: "Fri", heat: 0},
    {x: "November Wk 2", y: "Mon", heat: 500},
    {x: "November Wk 2", y: "Tues", heat: 1200},
    {x: "November Wk 2", y: "Weds", heat: 1200},
    {x: "November Wk 2", y: "Thurs", heat: 500},
    {x: "November Wk 2", y: "Fri", heat: 300},
    {x: "November Wk 3", y: "Mon", heat: 1500},
    {x: "November Wk 3", y: "Tues", heat: 0, info: "NB: Birthday"},
    {x: "November Wk 3", y: "Weds", heat: 0, info: "NB: Birthday"},
    {x: "November Wk 3", y: "Thurs", heat: 500},
    {x: "November Wk 3", y: "Fri", heat: 2400},
    {x: "November Wk 4", y: "Mon", heat: 2600},
    {x: "November Wk 4", y: "Tues", heat: 1700},
    {x: "November Wk 4", y: "Weds", heat: 800},
    {x: "November Wk 4", y: "Thurs", heat: 0},
    {x: "November Wk 4", y: "Fri", heat: 400},
    {x: "December Wk 1", y: "Mon", heat: 100},
    {x: "December Wk 1", y: "Tues", heat: 100},
    {x: "December Wk 1", y: "Weds", heat: 700},
    {x: "December Wk 1", y: "Thurs", heat: 1600},
    {x: "December Wk 1", y: "Fri", heat: 800},
    {x: "December Wk 2", y: "Mon", heat: 250},
    {x: "December Wk 2", y: "Tues", heat: 700},
    {x: "December Wk 2", y: "Weds", heat: 450},
    {x: "December Wk 2", y: "Thurs", heat: 200},
    {x: "December Wk 2", y: "Fri", heat: 400},
    {x: "December Wk 3", y: "Mon", heat: 900},
    {x: "December Wk 3", y: "Tues", heat: 200},
    {x: "December Wk 3", y: "Weds", heat: 900},
    {x: "December Wk 3", y: "Thurs", heat: 850},
    {x: "December Wk 3", y: "Fri", heat: 1600},
    {x: "December Wk 4", y: "Mon", heat: 850},
    {x: "December Wk 4", y: "Tues", heat: 500},
    {x: "December Wk 4", y: "Weds", heat: 700},
    {x: "December Wk 4", y: "Thurs", heat: 500},
    {x: "December Wk 4", y: "Fri", heat: 500},
  ];

  
  // create a chart and set the data
  let chart = anychart.heatMap(data);

  let colourScale = anychart.scales.ordinalColor();
  colourScale.ranges([
    {less: 0},
    {from: 1, to: 400}, 
    {from: 401, to: 799},
    {from: 800, to: 999},
    {greater: 1000}
  ])
  colourScale.colors(['brown', 'red', 'yellow', 'forestgreen', 'lime'])

  chart.colorScale(colourScale)
  
  // set the container id
  chart.container("container");

  chart.tooltip().format("Words: {%heat}\n\n{%info}");

  
  // initiate drawing the chart
  chart.draw();

