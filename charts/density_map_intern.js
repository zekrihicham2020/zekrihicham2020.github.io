Highcharts.getJSON('./files/map_intern.json', function (d) {

    var data = d;
    Highcharts.getJSON('./files/france.geojson', function (geojson) {
        
        // Initiate the chart
        Highcharts.mapChart('intern', {
            chart: {
                map: geojson
            },

            title: {
                text: 'Les touristes à travers France vers l\'occitanie'
            },

            mapNavigation: {
                enabled: false,
                buttonOptions: {
                    verticalAlign: 'bottom'
                }
            },

            colorAxis: {
                tickPixelInterval: 1000
            },

            series: [{
                data: data,
                keys: ['code', 'place1', 'code2', 'place2', 'value'],
                joinBy: 'code',
                name: 'visite',
                states: {
                    hover: {
                        color: '#a4edba'
                    }
                },
                dataLabels: {
                    enabled: true,
                    format: '{point.properties.code}'
                },
                tooltip: {
                  useHTML: true,
                  pointFormat: '<b>Depart:</b> {point.place1}<br>'
                              + '<b>destination:</b> {point.place2}<br>'
                              + '<b>nombre des visiteurs:</b> {point.value}'
                }
            }]

        });
        
    }); 
});