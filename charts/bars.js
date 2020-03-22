// Create the chart
Highcharts.chart('bars', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Le nombre des nuitées passées par département en 2018'
    },
    accessibility: {
        announceNewData: {
            enabled: true
        }
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {
        title: {
            text: 'Nombre des nuitées'
        }

    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: '{point.y}'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{point.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">nombre des nuitées</span>: <b>{point.y}</b><br/>'
                     + '<span style="color:{point.color}">max nuitées</span>: <b>{point.max}</b><br/>'
                     + '<span style="color:{point.color}">date de max nuitées</span>: <b>{point.date}</b><br/>'
                    },

    series: [
        {
            name: "departements",
            colorByPoint: true,
            data: [
                {
                  "name": "Ariege",
                  "y": 12856,
                  "max": 38392,
                  "date": "2018-08-11"
                },
                {
                  "name": "Aude",
                  "y": 44450,
                  "max": 136945,
                  "date": "2018-08-14"
                },
                {
                  "name": "Aveyron",
                  "y": 21846,
                  "max": 71531,
                  "date": "2018-08-11"
                },
                {
                  "name": "Gard",
                  "y": 58778,
                  "max": 152483,
                  "date": "2018-08-14"
                },
                {
                  "name": "Haute-Garonne",
                  "y": 78642,
                  "max": 161793,
                  "date": "2018-01-01"
                },
                {
                  "name": "Gers",
                  "y": 15660,
                  "max": 55238,
                  "date": "2018-07-28"
                },
                {
                  "name": "Herault",
                  "y": 136957,
                  "max": 401637,
                  "date": "2018-08-14"
                },
                {
                  "name": "Lot",
                  "y": 21674,
                  "max": 73458,
                  "date": "2018-08-04"
                },
                {
                  "name": "Lozere",
                  "y": 9671,
                  "max": 34037,
                  "date": "2018-08-14"
                },
                {
                  "name": "Hautes-Pyrenees",
                  "y": 30143,
                  "max": 94459,
                  "date": "2018-01-01"
                },
                {
                  "name": "Pyrenees-Orientales",
                  "y": 87546,
                  "max": 283421,
                  "date": "2018-08-14"
                },
                {
                  "name": "Tarn",
                  "y": 17418,
                  "max": 44735,
                  "date": "2018-08-17"
                },
                {
                  "name": "Tarn-et-Garonne",
                  "y": 16576,
                  "max": 38910,
                  "date": "2018-07-28"
                }
              ]
        }
    ]
});