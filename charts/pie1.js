// Make monochrome colors
var pieColors = (function () {
    var colors = [],
        base = Highcharts.getOptions().colors[0],
        i;

    for (i = 0; i < 12; i += 1) {
        // Start out with a darkened base color (negative brighten), and end
        // up with a much brighter color
        colors.push(Highcharts.color(base).brighten((i - 4) / 7).get());
    }
    return colors;
}());

// Build the chart
Highcharts.chart('pie1', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Le nombre des visiteurs du plusieurs pays vers l\'occitanie'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.y}</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            colors: pieColors,
            dataLabels: {
                enabled: true,
                format: '<b>{point.code}</b><br>',
                distance: -50,
                filter: {
                    property: 'percentage',
                    operator: '>',
                    value: 4
                }
            }
        }
    },
    series: [{
        name: 'Frequence',
        data: [
            {
                "code": "GB",
                "name": "Royaume-Uni de Grande-Bretagne et d'Irlande du Nord",
                "y": 5099
            },
            {
                "code": "DE",
                "name": "Allemagne",
                "y": 4734
            },
            {
                "code": "BE+LU",
                "name": "Belgique et Luxembourg",
                "y": 4734
            },
            {
                "code": "ES+PT",
                "name": "Espagne et Portuggal",
                "y": 4733
            },
            {
                "code": "NL",
                "name": "Pays-Bas",
                "y": 4732
            },
            {
                "code": "IT",
                "name": "Italie",
                "y": 4723
            },
            {
                "code": "CH",
                "name": "Suisse",
                "y": 4715
            },
            {
                "code": "DK+SE+NO",
                "name": "Danemark et Suede et Norvege",
                "y": 4704
            },
            {
                "code": "US",
                "name": "Etats-Unis d'Amérique",
                "y": 4682
            }
        ]
    }]
});