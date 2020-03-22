Highcharts.getJSON('./files/map_extern.json', function (data) {

    // Initiate the chart
    Highcharts.mapChart('story1', {
        chart: {
            map: 'custom/world'
        },

        title: {
            text: 'Les touristes à travers le monde vers l\'occitanie'
        },

        mapNavigation: {
            enabled: false,
            enableDoubleClickZoomTo: true
        },

        colorAxis: {
            min: 10000,
            max: 400000,
            type: 'logarithmic'
        },

        series: [{
            data: data,
            joinBy: ['iso-a2', 'Pays'],
            name: 'Nombre des visteurs',
            states: {
                hover: {
                    color: '#a4edba'
                }
            },
            tooltip: {
                pointFormat: '<b>{point.Nom_Pays}:</b> {point.value}',
                valueSuffix: ''
            }
        }]
    });
});

// var data = [
//     ['Gard', 728]
// ];

// Highcharts.getJSON('./files/capacites.geojson', function (geojson) {

//     // Initiate the chart
//     Highcharts.mapChart('story1', {
//         chart: {
//             map: geojson
//         },

//         title: {
//             text: 'GeoJSON in Highmaps'
//         },

//         mapNavigation: {
//             enabled: true,
//             buttonOptions: {
//                 verticalAlign: 'bottom'
//             }
//         },

//         colorAxis: {
//             tickPixelInterval: 100
//         },

//         series: [{
//             data: data,
//             keys: ['code_hasc', 'value'],
//             joinBy: 'nom_dpt',
//             name: 'Random data',
//             states: {
//                 hover: {
//                     color: '#a4edba'
//                 }
//             },
//             dataLabels: {
//                 enabled: true,
//                 format: '{point.properties.nom_dpt}'
//             }
//         }]
//     });
// });