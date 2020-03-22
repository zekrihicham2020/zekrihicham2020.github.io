Highcharts.chart('ordered', {
    chart: {
        zoomType: 'xy'
    },
    title: {
        text: 'Les évènements et les visiteurs des évènements par département'
    },
    xAxis: [{
        categories: ['Ariège','Aude','Aveyron','Gard','Haute-Garonne','Gers','Hérault','Lot','Lozère','Hautes-Pyrénées','Pyrénées-Orientales','Tarn','Tarn-et-Garonne'],
        crosshair: true
    }],
    yAxis: [{ // Primary yAxis
        labels: {
            format: '{value}',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        },
        title: {
            text: 'Nombre des visiteurs d\'évènements',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        }
    }, { // Secondary yAxis
        title: {
            text: 'Nombre d\'évènements',
            style: {
                color: Highcharts.getOptions().colors[0]
            }
        },
        labels: {
            format: '{value}',
            style: {
                color: Highcharts.getOptions().colors[0]
            }
        },
        opposite: true
    }],
    tooltip: {
        shared: true
    },
    legend: {
        layout: 'vertical',
        align: 'left',
        x: 120,
        verticalAlign: 'top',
        y: 100,
        floating: true,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || // theme
            'rgba(255,255,255,0.25)'
    },
    series: [{
        name: 'Nombre d\'évènements',
        type: 'column',
        yAxis: 1,
        data: [ 5, 21,  7, 33, 15, 14, 48,  5, 10,  7, 26,  6,  5],
        tooltip: {
            valueSuffix: ''
        }

    }, {
        name: 'Nombre des visiteurs d\'évènements',
        type: 'spline',
        data: [ 3652807, 21147626,  5702480, 26132625, 15480023,  1684656, 59714519,  3672799,   798928,  3129313, 24651327,  1243056,1278508],
        tooltip: {
            valueSuffix: ''
        }
    }]
});