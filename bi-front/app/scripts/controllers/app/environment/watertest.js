app.controller('WaterTestCtrl', ['$scope','$stateParams', function($scope, $stateParams, $http) {
	
    //获取表格数据
    // $http.get("http://www.runoob.com/try/angularjs/data/Customers_JSON.php").success(function (response) {$scope.names = response.records;});

    // highchart图
	$scope.chartConfig0 = {	 
		title: {
            text: '太仓市水环境质量(WQI)分析预测图'
        },
        xAxis: {
            categories: ['1day', '2day', '3day', '4day', '5day']
        },
        labels: {
            items: [{
                html: 'Total fruit consumption',
                style: {
                    left: '50px',
                    top: '18px',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
                }
            }]
        },
        series: [{
            type: 'column',
            name: '工业污水',
            data: [30, 20, 10, 30, 40]
        }, {
            type: 'column',
            name: '农业污水',
            data: [62, 53, 65, 74, 68]
        }, {
            type: 'column',
            name: '生活污水',
            data: [84, 73, 63, 69, 50]
        }, {
            type: 'spline',
            name: 'WQI',
            data: [83, 62.67, 53, 86.33, 73.33],
            marker: {
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[3],
                fillColor: 'white'
            }
        }]
	};

	$scope.chartConfig1 = {	 
		title: {
            text: '溶解氧浓度预测图',
            x: -20 //center
        },
        subtitle: {
            text: '来源: 太仓市水文监测站',
            x: -20
        },
        xAxis: {
            categories: ['2h', '4h', '6h', '8h', '10h', '12h','14h', '16h', '18h', '20h', '22h', '24h']
        },
        yAxis: {
            title: {
                text: '溶解氧浓度 (mg/L)'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: '°C'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: '监测点1',
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        }, {
            name: '监测点2',
            data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
        }, {
            name: '监测点3',
            data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
        }, {
            name: '监测点4',
            data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
        }]
	};

	$scope.chartConfig2 = {	 
		chart: {
            type: 'area'
        },
        title: {
            text: '高锰酸钾浓度预测图'
        },
        subtitle: {
            text: '来源: 太仓市水文监测站'
        },
        xAxis: {
            labels: {
                formatter: function() {
                    return this.value; // clean, unformatted number for year
                }
            }
        },
        yAxis: {
            title: {
                text: '高锰酸钾浓度(μg/L)'
            },
            labels: {
                formatter: function() {
                    return this.value / 1000 +'k';
                }
            }
        },
        tooltip: {
            pointFormat: '{series.name} produced <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
        },
        plotOptions: {
            area: {
                pointStart: 1940,
                marker: {
                    enabled: false,
                    symbol: 'circle',
                    radius: 2,
                    states: {
                        hover: {
                            enabled: true
                        }
                    }
                }
            }
        },
        series: [{
            type: 'area',
            name: '实际值',
            data: [null, null, null, null, null, 6 , 11, 32, 110, 235, 369, 640,1005, 1436,
            		2063, 3057, 4618, 6444, 9822, 15468, 20434, 24126,27387, 29459, 31056, 31982,
            		32040, 31233, 29224, 27342, 26662,26956, 27912, 28999, 28965, 27826, 25579,
            		25722, 24826, 24605,24304, 23464, 23708, 24099, 24357, 24237, 24401, 24344,
            		23586,22380, 21004, 17287, 14747, 13076, 12555, 12144, 11009, 10950,
                10871, 10824, 10577, 10527, 10475, 10421, 10358, 10295, 10104 
            ]
        }, {
        	type: 'area',
            name: '预测值',
            data: [null, null, null, null, null, null, null , null , null ,null,5, 25, 50,
            	120, 150, 200, 426, 660, 869, 1060, 1605, 2471, 3322,4238, 5221, 6129,
            	7089, 8339, 9399, 10538, 11643, 13092, 14478,15915, 17385, 19055, 21205,
            	23044, 25393, 27935, 30062, 32049,33952, 35804, 37431, 39197, 45000, 43000,
            	41000, 39000, 37000,35000, 33000, 31000, 29000, 27000, 25000, 24000, 23000,
            	22000,21000, 20000, 19000, 18000, 18000, 17000, 16000
            ]
        }]
	};

	$scope.chartConfig3 = {	 
		chart: {
            type: 'column'
        },
        title: {
            text: '氨氮浓度预测图'
        },
        subtitle: {
            text: '来源: 太仓市水文监测站'
        },
        xAxis: {
            categories: [
                '2h',
                '4h',
                '6h',
                '8h',
                '10h',
                '12h',
                '14h',
                '16h',
                '18h',
                '20h',
                '22h',
                '24h'
            ]
        },
        yAxis: {
            min: 0,
            title: {
                text: '氨氮浓度 (mg/L)'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
        	type: 'column',
            name: '预测值',
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

        }, {
            name: '监测点1',
            data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]

        }, {
            name: '监测点2',
            data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]

        }, {
            name: '监测点3',
            data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]

        }]
	};

	$scope.chartConfig4 = {	 
		chart: {
            type: 'bar'
        },
        title: {
            text: '总磷浓度预测图'
        },
        xAxis: {
            categories: ['监测点1', '监测点2', '监测点3', '监测点4', '监测点5']
        },
        yAxis: {
            min: 0,
            title: {
                text: '总磷浓度(mg/L)'
            }
        },
        legend: {
            backgroundColor: '#FFFFFF',
            reversed: true
        },
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },
            series: [{
            type: 'bar',
            name: '过去24小时',
            data: [5, 3, 4, 7, 2]
        }, {
        	type: 'bar',
            name: '实时',
            data: [2, 2, 3, 2, 1]
        }, {
        	type: 'bar',
            name: '未来24小时',
            data: [3, 4, 4, 2, 5]
        }]
	};

	$scope.chartConfig5 = {	 
		chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: '工农业排污量预测分析图'
        },
        tooltip: {
    	    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    color: '#000000',
                    connectorColor: '#000000',
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                }
            }
        },
        series: [{
            type: 'pie',
            name: '所占比率',
            data: [
                ['溶解氧',   45.0],
                ['高锰酸钾',       26.8],
                {
                    name: '氨氮',
                    y: 12.8,
                    sliced: true,
                    selected: true
                },
                ['总磷',    8.5],
                ['固体污染物',     6.2],
                ['其它',   0.7]
            ]
        }]
	};

}]);

