$(function () {
    $('#line').highcharts({
        credits:{
                enabled:false
        },
        exporting: {
            enabled: false
        },
        chart: {
            zoomType: 'xy'
        },
        title: {
            text: '太仓市水环境质量(WQI)预测图'
        },
        subtitle: {
            text: '来源: 太仓市监测站'
        },
        xAxis: [{
            categories: ['1day', '2day', '3day', '4day', '5day', '6day',
                '7day', '8day', '9day', '10day', '11day', '12day'],
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
                text: 'WQI(水环境质量指数)',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            }
        }, { // Secondary yAxis
            title: {
                text: '',
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
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
        },
        series: [{
            name: '实际值',
            type: 'column',
            yAxis: 1,
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
            tooltip: {
                valueSuffix: ''
            }

        }, {
            name: '预测值',
            type: 'spline',
            data: [37.0, 86.9, 99.5, 114.5, 118.2, 221.5, 125.2, 126.5, 223.3, 118.3, 83.9, 49.6],
            tooltip: {
                valueSuffix: ''
            }
        }]
    });
});

