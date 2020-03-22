function bubbleUpdate(index){ 
  var d;
  Highcharts.getJSON('./files/res.json', function (data) {
    d = data[index-1];
  
    Highcharts.chart('story2', {
      chart: {
        type: 'packedbubble',
        height: '40%'
      },
      title: {
        text: 'Les évènements en Occitanie par département en chaque mois '
      },
      tooltip: {
        useHTML: true,
        pointFormat: '<b>{point.name}:</b> {point.value}m CO<sub>2</sub>'
      },
      plotOptions: {
        packedbubble: {
          minSize: '20%',
          maxSize: '100%',
          zMin: 0,
          zMax: 4000000,
          layoutAlgorithm: {
            gravitationalConstant: 0.05,
            splitSeries: true,
            seriesInteraction: false,
            dragBetweenSeries: false,
            parentNodeLimit: true
          },
          dataLabels: {
            enabled: true,
            format: '{point.name}',
            filter: {
              property: 'y',
              operator: '>',
              value: 250
            },
            style: {
              color: 'black',
              textOutline: 'none',
              fontWeight: 'normal'
            }
          }
        }
      },
      series: d.data
    });
  });
}

bubbleUpdate(1);