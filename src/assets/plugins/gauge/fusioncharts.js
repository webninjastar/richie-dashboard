jQuery('document').ready(function () {
    // Once the window with a document is ready, execute the Chart module
    // and pass FusionCharts as a dependency
    Charts(FusionCharts);

    // Render the chart using `insertFusionCharts` method
    $("#gauge-chart").insertFusionCharts({
        type: "column2d",
        width: "500",
        height: "300",
        dataFormat: "json",
        dataSource: {
            "chart": {
                "caption": "Monthly revenue",
                "subCaption": "Last Year",
                "xAxisName": "Month",
                "yAxisName": "Revenues",
                "numberPrefix": "$",
                "theme": "fint"
            },
            "data": [{
                "label": "Jan",
                "value": "420000"
            }, {
                "label": "Feb",
                "value": "810000"
            }, {
                "label": "Mar",
                "value": "720000"
            }, {
                "label": "Apr",
                "value": "550000"
            }, {
                "label": "May",
                "value": "910000"
            }, {
                "label": "Jun",
                "value": "510000"
            }, {
                "label": "Jul",
                "value": "680000"
            }, {
                "label": "Aug",
                "value": "620000"
            }, {
                "label": "Sep",
                "value": "610000"
            }, {
                "label": "Oct",
                "value": "490000"
            }, {
                "label": "Nov",
                "value": "900000"
            }, {
                "label": "Dec",
                "value": "730000"
            }]
        }
    });
});