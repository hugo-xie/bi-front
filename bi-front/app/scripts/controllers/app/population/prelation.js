'use strict';

app.controller('PrelationCtrl', ['$scope', function($scope) {

    $scope.buttonMap2 = [{
        name: 2024,
        label: 2024 + "年分析预测",
        radio: "Left"
      }, {
        name: 2034,
        label: 2034 + "年分析预测",
        radio: "Middle"
      }, {
        name: 2044,
        label: 2044 + "年分析预测",
        radio: "Right"
      }];
       $scope.buttonMap3 = [{
        name: 5,
        label: 5 + "年分析预测",
        radio: "Left"
      }, {
        name: 10,
        label: 10 + "年分析预测",
        radio: "Middle"
      }, {
        name: 15,
        label: 15 + "年分析预测",
        radio: "Right"
      }];
$scope.selectedRange=0;
$scope.selectedRange1=0;
$scope.r=function(){
	return $scope.selectedRange;
};
function h(newValue,oldValue,scope){
	console.log(newValue);
	popData[9]=(newValue*0.03)*50+194.1;
    gdp[9]=(newValue*0.03)*50+18.3;
}
$scope.$watch($scope.r,h);

$scope.rr=function(){
	return $scope.selectedRange1;
};
function hh(newValue,oldValue,scope){
	console.log(newValue);
    popData[9]=(newValue*0.03)*50+194.1;
    gdp[9]=(newValue*0.03)*50+18.3;
}
$scope.$watch($scope.rr,hh);

	var popData=[49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6,
		 148.5, 216.4, 194.1];
    var gdp=[7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3];

		 $scope.predictChart ={
 chart: {
            zoomType: 'xy'
        },
        title: {
            text: '劳动力人口与经济关联分析预测'
        },
        xAxis: [{
            categories: ['2016', '2017', '2018', '2019', '2020', '2021',
                '2022', '2023', '2024', '2025']
        }],
        yAxis: [{ // Primary yAxis
            labels: {
                formatter: function() {
                    return this.value ;
                },
                style: {
                    color: '#89A54E'
                }
            },
            title: {
                text: 'GDP(亿元)',
                style: {
                    color: '#89A54E'
                }
            },
            opposite: true

        }, { // Secondary yAxis
            gridLineWidth: 0,
            title: {
                text: '人口(万人)',
                style: {
                    color: '#4572A7'
                }
            },
            labels: {
                formatter: function() {
                    return this.value +'万人';
                },
                style: {
                    color: '#4572A7'
                }
            }

        }, { // Tertiary yAxis
            gridLineWidth: 0,
            title: {
                text: '关联度',
                style: {
                    color: '#AA4643'
                }
            },
            labels: {
                formatter: function() {
                    return this.value ;
                },
                style: {
                    color: '#AA4643'
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
            y: 80,
            floating: true,
            backgroundColor: '#FFFFFF'
        },
        series: [{
            name: '人口(万人)',
            color: '#4572A7',
            type: 'spline',
            yAxis: 1,
            data: popData,
            tooltip: {
                valueSuffix: '万人'
            }

        }, {
            name: '关联度',
            type: 'spline',
            color: '#AA4643',
            yAxis: 2,
            data: [0.895, 0.842, 0.7524,0.7891, 0.8512, 0.7125, 0.7951, 0.8125, 0.7415, 0.7956],
            marker: {
                enabled: false
            },
            dashStyle: 'shortdot',
            tooltip: {
                valueSuffix: ''
            }

        }, {
            name: 'GDP(亿元)',
            color: '#89A54E',
            type: 'spline',
            data: gdp,
            tooltip: {
                valueSuffix: '亿元'
            }
        }]

};	
$scope.populationChart ={
      options: {
					chart: {
						type: 'column'
					}
				},
				series: [{
					name: '劳动力总人口',
					data: popData
				}],
				title: {
					text: '劳动力总人口'
				},
				xAxis: {
					categories: [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025],
					title:{
						text:"年"
					}
				},
				yAxis: {
					min: 0,
					title: {
						text: '万人'
					}
				},
				loading: false,


	};	
	$scope.GDPChart ={
     options: {
					chart: {
						type: 'column'
					}
				},
				series: [{
					name: 'GDP总量',
					data: gdp
				}],
				title: {
					text: 'GDP总量'
				},
				xAxis: {
					categories: [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025],
					title:{
						text:"年"
					}
				},
				yAxis: {
					min: 0,
					title: {
						text: '亿元'
					}
				},
				loading: false,

	};	
	
	$scope.sumpopulation ={
   options:{
    chart:{
       type: 'spline'
    },
     title: {
            text: '产业GDP与各项人口指标的关联度分析预测',
            x: -20 //center
        },
        xAxis: {
            categories:  ['常住人口', '暂住人口', '城镇人口', '乡村人口', '第一产业人口', '第二产业人口',
                '第三产业人口'],
                labels: {
                rotation: -45,
                align: 'right',
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
             }
        },
        yAxis: {
            title: {
                text: '关联度'
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
        }
    },
        series: [{
            name: '第一产业GDP',
            data: [0.7421, 0.6998,0.7845, 0.7412, 0.7861, 0.8165,0.8152]
        }, {
            name: '第二产业GDP',
            data: [0.7952,0.8412, 0.7984,0.7842,0.8125,0.7965, 0.6845]
        }, {
            name: '第三产业GDP',
            data: [0.8452, 0.8412, 0.8112,0.7952, 0.8123, 0.7584,0.7682]
        }]
};
$scope.populationPie={
chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: '产业就业人口比重分析预测'
        },
        tooltip: {
    	    pointFormat: ' <b>{point.percentage:.1f}%</b>'
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
            data: [
                ['第一产业人口',37],
                ['第二产业人口',30],
                ['第三产业人口',33]
                ]
        }]

};
$scope.industryPie={
chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: '产业产值比重分析预测'
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
            name: '',
            data: [
               ['第一产业人口',8],
                ['第二产业人口',44],
                ['第三产业人口',48]
            ]
        }]

};              	
}]);
