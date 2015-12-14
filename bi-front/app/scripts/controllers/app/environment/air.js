'use strict';


app.controller('AirCtrl', ['$scope','$stateParams', function($scope, $stateParams) {

  $scope.title = $stateParams.title;
    var map = new AMap.Map('map_canvas');
    
     //高德地图初始化
    var map = new AMap.Map('map_canvas',{
        zoom: 10,
        center: [121.106661, 31.579533]
     });
    
 
	//变色范围 
	var airQualityAQIScan = {
        scan: [100,300],
        type: 'asc'
    };
    var airQualitySo2Scan = {
        scan: [150,500],
        type: 'asc'
    };
    var airQualityNo2Scan = {
        scan:[200,200],
        type: 'asc'
    };
    var airQualityCoScan = {
        scan:[10,10],
        type: 'asc'
    };
    var airQualityO3Scan = {
        scan:[160,200],
        type: 'asc'
    };
    var airQualityPM10Scan = {
        scan:[150,250],
        type: 'asc'
    };
    var airQualityPM25Scan = {
        scan:[75,115],
        type: 'asc'
    };
    var airPollutionDischargeScan = {
    	scan:[0.2,0.4],
        type: 'asc'
    };
    var airPollutionSmokeScan = {
    	scan:[30,80],
    	type: 'asc'
    };
    var airPollutionSo2Scan = {
    	scan:[200,200],
    	type:'asc'
    };
    var airPollutionNoScan = {
    	scan:[100,400],
    	type:'asc'
    };
    var airConditionScan = {
    	temperature: [37,-5],
    	wind: 7,
    	humidity: [100,10]

    };


    var mapObj, marker;
	var airQualityMarkerArr;
	var airQualityCurrentArr;
	var airQualityCurrentTimeList;
	/*var airConditionMarkerArr;
	var airConditionCurrentArr;
	var airConditionCurrentTimeList*/
	var wasteAirMarkerArr;
	var wasteAirCurrentArr;
	var wasteAirCurrentTimeList;


$scope.aqilinechart={
 title: {
            text: '空气质量AQI'
        },
        xAxis: {
            categories: ['12月11', '12月12', '12月13', '12月14', '12月15','12月16','12月17']
        },
        labels: {
            items: [{
                html: '',
                style: {
                    left: '50px',
                    top: '18px',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
                }
            }]
        },
        series: [{
            type: 'column',
            name: '实际AQI值',
            data: [50, 60, 70, 80, 90,100,130]
        },  {
            type: 'spline',
            name: '预测AQI值',
            data: [52, 64, 73, 83, 90,100,143],
            
            dataLabels: {
                enabled: false
            }
        }]
};


//废气排放Button点击事件
	$scope.wasteAirBtn = function() {
		$scope.mapTableStatus = {
			airQuality: false,
			airCondition: false,
			wasteAir: true
		};
		removeMarker();
		addMarker(wasteAirMarkerArr, 'airPollution');
		mapObj.setFitView();
	};
//首页表格显示状态
	$scope.mapTableStatus = {
		airQuality: true,
		airCondition: false,
		wasteAir: false
	};
	//空气质量 Button点击事件
	$scope.airQualityBtn = function() {
		$scope.mapTableStatus = {
			airQuality: true,
			airCondition: false,
			wasteAir: false
		};
		removeMarker();
		addMarker(airQualityMarkerArr, 'airQuality');
		mapObj.setCenter(new AMap.LngLat(121.106661, 31.579533));
		mapObj.setZoom(11);
	};

    //气象 Button点击事件
	 $scope.airConditionBtn = function() {
	 	$scope.mapTableStatus = {
	 		airQuality: false,
	 		airCondition: true,
	 		wasteAir: false
	 	};
	 	removeMarker();
	 	addMarker(airConditionMarkerArr, 'airCondition');
	 	mapObj.setCenter(new AMap.LngLat(121.106661, 31.579533));
	 	mapObj.setZoom(11);
	 };


//空气质量 highcharts options
//AQI
    $scope.airQualityOptions = {

    	aqiOption:{
    		options : {
				chart: {
					type: 'gauge',
					plotBackgroundColor: null,
					plotBackgroundImage: null,
					plotBorderWidth: 0,
					plotShadow: false
				},
				title: {
					text: 'AQI'
				},
				pane: {
					startAngle: -150, 
					endAngle: 150,
					background: [{
						backgroundColor: {
							linearGradient: {
								x1: 0,
								y1: 0,
								x2: 0,
								y2: 1
							},
							stops: [
								[0, '#FFF'],
								[1, '#333']
							]
						},
						borderWidth: 0,
						outerRadius: '109%'
					}, {
						backgroundColor: {
							linearGradient: {
								x1: 0,
								y1: 0,
								x2: 0,
								y2: 1
							},
							stops: [
								[0, '#333'],
								[1, '#FFF']
							]
						},
						borderWidth: 1,
						outerRadius: '107%'
					}, {
						// default background
					}, {
						backgroundColor: '#DDD',
						borderWidth: 0,
						outerRadius: '105%',
						innerRadius: '103%'
					}]
				},
				// the value axis
				yAxis: {
					min: 0,
					max: 400,

					minorTickInterval: 'auto',
					minorTickWidth: 1,
					minorTickLength: 10,
					minorTickPosition: 'inside',
					minorTickColor: '#666',

					tickPixelInterval: 30,
					tickWidth: 2,
					tickPosition: 'inside',
					tickLength: 10,
					tickColor: '#666',
					labels: {
						step: 2,
						rotation: 'auto'
					},
					title: {
						text: ''
					},
					plotBands: [{
						from: 0,
						to: airQualityAQIScan.scan[0],
						color: '#55BF3B' // green
					}, {
						from: airQualityAQIScan.scan[0],
						to: airQualityAQIScan.scan[1],
						color: '#DDDF0D' // yellow
					}, {
						from: airQualityAQIScan.scan[1],
						to: 400,
						color: '#DF5353' // red
					}]
				},
				credits: {
					enabled: false
				}
			},
			series: [{
				name: 'AQI',
				data: [0],
				tooltip: {
					valueSuffix: ''
				}
			}],
			size:{
                width: 200,
                height: 250
            }
    	},

    //pm2.5
    	pm25Option:{
    		options:{
   				chart: {
					type: 'gauge',
					plotBackgroundColor: null,
					plotBackgroundImage: null,
					plotBorderWidth: 0,
					plotShadow: false
				},

				title: {
					text: 'PM2.5'
				},

				pane: {
					startAngle: -150,
					endAngle: 150,
					background: [{
						backgroundColor: {
							linearGradient: {
								x1: 0,
								y1: 0,
								x2: 0,
								y2: 1
							},
							stops: [
								[0, '#FFF'],
								[1, '#333']
							]
						},
						borderWidth: 0,
						outerRadius: '109%'
					}, {
						backgroundColor: {
							linearGradient: {
								x1: 0,
								y1: 0,
								x2: 0,
								y2: 1
							},
							stops: [
								[0, '#333'],
								[1, '#FFF']
							]
						},
						borderWidth: 1,
						outerRadius: '107%'
					}, {
						// default background
					}, {
						backgroundColor: '#DDD',
						borderWidth: 0,
						outerRadius: '105%',
						innerRadius: '103%'
					}]
				},

				// the value axis
				yAxis: {
					min: 0,
					max: 250,

					minorTickInterval: 'auto',
					minorTickWidth: 1,
					minorTickLength: 10,
					minorTickPosition: 'inside',
					minorTickColor: '#666',

					tickPixelInterval: 30,
					tickWidth: 2,
					tickPosition: 'inside',
					tickLength: 10,
					tickColor: '#666',
					labels: {
						step: 2,
						rotation: 'auto'
					},
					title: {
						text: ''
					},
					plotBands: [{
						from: 0,
						to: airQualityPM25Scan.scan[0],
						color: '#55BF3B' // green
					}, {
						from: airQualityPM25Scan.scan[0],
						to: airQualityPM25Scan.scan[1],
						color: '#DDDF0D' // yellow
					}, {
						from: airQualityPM25Scan.scan[1],
						to: 250,
						color: '#DF5353' // red
					}]
				},
				credits: {
					enabled: false
				}
			},
			series: [{
				name: 'PM2.5',
				data: [0],
				tooltip: {
					valueSuffix: 'μg/m³'
				}
			}],
			size:{
                width: 200,
                height: 250
            }
    	},

    	//pm10
    	pm10Option:{
    		options:{
				chart: {
					type: 'gauge',
					plotBackgroundColor: null,
					plotBackgroundImage: null,
					plotBorderWidth: 0,
					plotShadow: false
				},

				title: {
					text: 'PM10'
				},

				pane: {
					startAngle: -150,
					endAngle: 150,
					background: [{
						backgroundColor: {
							linearGradient: {
								x1: 0,
								y1: 0,
								x2: 0,
								y2: 1
							},
							stops: [
								[0, '#FFF'],
								[1, '#333']
							]
						},
						borderWidth: 0,
						outerRadius: '109%'
					}, {
						backgroundColor: {
							linearGradient: {
								x1: 0,
								y1: 0,
								x2: 0,
								y2: 1
							},
							stops: [
								[0, '#333'],
								[1, '#FFF']
							]
						},
						borderWidth: 1,
						outerRadius: '107%'
					}, {
						// default background
					}, {
						backgroundColor: '#DDD',
						borderWidth: 0,
						outerRadius: '105%',
						innerRadius: '103%'
					}]
				},

				// the value axis
				yAxis: {
					min: 0,
					max: 400,

					minorTickInterval: 'auto',
					minorTickWidth: 1,
					minorTickLength: 10,
					minorTickPosition: 'inside',
					minorTickColor: '#666',

					tickPixelInterval: 30,
					tickWidth: 2,
					tickPosition: 'inside',
					tickLength: 10,
					tickColor: '#666',
					labels: {
						step: 2,
						rotation: 'auto'
					},
					title: {
						text: ''
					},
					plotBands: [{
						from: 0,
						to: airQualityPM10Scan.scan[0],
						color: '#55BF3B' // green
					}, {
						from: airQualityPM10Scan.scan[0],
						to: airQualityPM10Scan.scan[1],
						color: '#DDDF0D' // yellow
					}, {
						from: airQualityPM10Scan.scan[1],
						to: 400,
						color: '#DF5353' // red
					}]
				},

				credits: {
					enabled: false
				}
			},
			series: [{
				name: 'PM10',
				data: [0],
				tooltip: {
					valueSuffix: 'μg/m³'
				}
			}],
			size:{
                width: 200,
                height: 250
            }
    	},

    	//so2
    	so2Option:{
    		options:{
				chart: {
					type: 'gauge',
					plotBackgroundColor: null,
					plotBackgroundImage: null,
					plotBorderWidth: 0,
					plotShadow: false
				},

				title: {
					text: '二氧化硫'
				},

				pane: {
					startAngle: -150,
					endAngle: 150,
					background: [{
						backgroundColor: {
							linearGradient: {
								x1: 0,
								y1: 0,
								x2: 0,
								y2: 1
							},
							stops: [
								[0, '#FFF'],
								[1, '#333']
							]
						},
						borderWidth: 0,
						outerRadius: '109%'
					}, {
						backgroundColor: {
							linearGradient: {
								x1: 0,
								y1: 0,
								x2: 0,
								y2: 1
							},
							stops: [
								[0, '#333'],
								[1, '#FFF']
							]
						},
						borderWidth: 1,
						outerRadius: '107%'
					}, {
						// default background
					}, {
						backgroundColor: '#DDD',
						borderWidth: 0,
						outerRadius: '105%',
						innerRadius: '103%'
					}]
				},

				// the value axis
				yAxis: {
					min: 0,
					max: 700,

					minorTickInterval: 'auto',
					minorTickWidth: 1,
					minorTickLength: 10,
					minorTickPosition: 'inside',
					minorTickColor: '#666',

					tickPixelInterval: 30,
					tickWidth: 2,
					tickPosition: 'inside',
					tickLength: 10,
					tickColor: '#666',
					labels: {
						step: 2,
						rotation: 'auto'
					},
					title: {
						text: ''
					},
					plotBands: [{
						from: 0,
						to: airQualitySo2Scan.scan[0],
						color: '#55BF3B' // green
					}, {
						from: airQualitySo2Scan.scan[0],
						to: airQualitySo2Scan.scan[1],
						color: '#DDDF0D' // yellow
					}, {
						from: airQualitySo2Scan.scan[1],
						to: 700,
						color: '#DF5353' // red
					}]
				},

				credits: {
					enabled: false
				}
			},
			series: [{
				name: '二氧化硫',
				data: [0],
				tooltip: {
					valueSuffix: 'μg/m³'
				}
			}],
			size:{
                width: 200,
                height: 250
            }
    	},

    	//NO2
    	no2Option:{
    		options:{
				chart: {
					type: 'gauge',
					plotBackgroundColor: null,
					plotBackgroundImage: null,
					plotBorderWidth: 0,
					plotShadow: false
				},

				title: {
					text: '二氧化氮'
				},

				pane: {
					startAngle: -150,
					endAngle: 150,
					background: [{
						backgroundColor: {
							linearGradient: {
								x1: 0,
								y1: 0,
								x2: 0,
								y2: 1
							},
							stops: [
								[0, '#FFF'],
								[1, '#333']
							]
						},
						borderWidth: 0,
						outerRadius: '109%'
					}, {
						backgroundColor: {
							linearGradient: {
								x1: 0,
								y1: 0,
								x2: 0,
								y2: 1
							},
							stops: [
								[0, '#333'],
								[1, '#FFF']
							]
						},
						borderWidth: 1,
						outerRadius: '107%'
					}, {
						// default background
					}, {
						backgroundColor: '#DDD',
						borderWidth: 0,
						outerRadius: '105%',
						innerRadius: '103%'
					}]
				},

				// the value axis
				yAxis: {
					min: 0,
					max: 400,

					minorTickInterval: 'auto',
					minorTickWidth: 1,
					minorTickLength: 10,
					minorTickPosition: 'inside',
					minorTickColor: '#666',

					tickPixelInterval: 30,
					tickWidth: 2,
					tickPosition: 'inside',
					tickLength: 10,
					tickColor: '#666',
					labels: {
						step: 2,
						rotation: 'auto'
					},
					title: {
						text: ''
					},
					plotBands: [{
						from: 0,
						to: airQualityNo2Scan.scan[0],
						color: '#55BF3B' // green
					}, {
						from: airQualityNo2Scan.scan[0],
						to: airQualityNo2Scan.scan[1],
						color: '#DDDF0D' // yellow
					}, {
						from: airQualityNo2Scan.scan[1],
						to: 400,
						color: '#DF5353' // red
					}]
				},

				credits: {
					enabled: false
				}
			},
			series: [{
				name: '二氧化碳',
				data: [0],
				tooltip: {
					valueSuffix: 'μg/m³'
				}
			}],
			size:{
                width: 200,
                height: 250
            }
    	},

        //SO2
    	coOption:{
    		options:{
				chart: {
					type: 'gauge',
					plotBackgroundColor: null,
					plotBackgroundImage: null,
					plotBorderWidth: 0,
					plotShadow: false
				},

				title: {
					text: '一氧化碳'
				},

				pane: {
					startAngle: -150,
					endAngle: 150,
					background: [{
						backgroundColor: {
							linearGradient: {
								x1: 0,
								y1: 0,
								x2: 0,
								y2: 1
							},
							stops: [
								[0, '#FFF'],
								[1, '#333']
							]
						},
						borderWidth: 0,
						outerRadius: '109%'
					}, {
						backgroundColor: {
							linearGradient: {
								x1: 0,
								y1: 0,
								x2: 0,
								y2: 1
							},
							stops: [
								[0, '#333'],
								[1, '#FFF']
							]
						},
						borderWidth: 1,
						outerRadius: '107%'
					}, {
						// default background
					}, {
						backgroundColor: '#DDD',
						borderWidth: 0,
						outerRadius: '105%',
						innerRadius: '103%'
					}]
				},

				// the value axis
				yAxis: {
					min: 0,
					max: 20,

					minorTickInterval: 'auto',
					minorTickWidth: 1,
					minorTickLength: 10,
					minorTickPosition: 'inside',
					minorTickColor: '#666',

					tickPixelInterval: 30,
					tickWidth: 2,
					tickPosition: 'inside',
					tickLength: 10,
					tickColor: '#666',
					labels: {
						step: 2,
						rotation: 'auto'
					},
					title: {
						text: ''
					},
					plotBands: [{
						from: 0,
						to: airQualityCoScan.scan[0],
						color: '#55BF3B' // green
					}, {
						from: airQualityCoScan.scan[0],
						to: airQualityCoScan.scan[1],
						color: '#DDDF0D' // yellow
					}, {
						from: airQualityCoScan.scan[1],
						to: 20,
						color: '#DF5353' // red
					}]
				},

				credits: {
					enabled: false
				}
			},
			series: [{
				name: '一氧化碳',
				data: [0],
				tooltip: {
					valueSuffix: 'mg/m³'
				}
			}],
			size:{
                width: 200,
                height: 250
            }
    	},

    	//O3 
    	o3Option:{
    		options:{
				chart: {
					type: 'gauge',
					plotBackgroundColor: null,
					plotBackgroundImage: null,
					plotBorderWidth: 0,
					plotShadow: false
				},

				title: {
					text: '臭氧'
				},

				pane: {
					startAngle: -150,
					endAngle: 150,
					background: [{
						backgroundColor: {
							linearGradient: {
								x1: 0,
								y1: 0,
								x2: 0,
								y2: 1
							},
							stops: [
								[0, '#FFF'],
								[1, '#333']
							]
						},
						borderWidth: 0,
						outerRadius: '109%'
					}, {
						backgroundColor: {
							linearGradient: {
								x1: 0,
								y1: 0,
								x2: 0,
								y2: 1
							},
							stops: [
								[0, '#333'],
								[1, '#FFF']
							]
						},
						borderWidth: 1,
						outerRadius: '107%'
					}, {
						// default background
					}, {
						backgroundColor: '#DDD',
						borderWidth: 0,
						outerRadius: '105%',
						innerRadius: '103%'
					}]
				},

				// the value axis
				yAxis: {
					min: 0,
					max: 300,

					minorTickInterval: 'auto',
					minorTickWidth: 1,
					minorTickLength: 10,
					minorTickPosition: 'inside',
					minorTickColor: '#666',

					tickPixelInterval: 30,
					tickWidth: 2,
					tickPosition: 'inside',
					tickLength: 10,
					tickColor: '#666',
					labels: {
						step: 2,
						rotation: 'auto'
					},
					title: {
						text: ''
					},
					plotBands: [{
						from: 0,
						to: airQualityO3Scan.scan[0],
						color: '#55BF3B' // green
					}, {
						from: airQualityO3Scan.scan[0],
						to: airQualityO3Scan.scan[1],
						color: '#DDDF0D' // yellow
					}, {
						from: airQualityO3Scan.scan[1],
						to: 300,
						color: '#DF5353' // red
					}]
				},

				credits: {
					enabled: false
				}
			},
			series: [{
				name: '臭氧',
				data: [0],
				tooltip: {
					valueSuffix: 'μg/m³'
				}
			}],
			size:{
                width: 200,
                height: 250
            }
    	},

    	//上面仪表盘加折线图结束

    	currentAqiLineOption:{
            options:{
                title: {
                    text: null,
                },
                xAxis: {
                    categories: [],
                    tickmarkPlacement: 'on'
                },
                yAxis: {
                    title: {
                        text: ''
                    },
                    min:0,
                    max:310,
                    plotLines : [{
						color: '#DDDF0D',
		                width: 2,
		                value: airQualityAQIScan.scan[0],
                    	dashStyle: 'Dot'
					},{
						color: '#DF5353',
		                width: 2,
		                value: airQualityAQIScan.scan[1],
                    	dashStyle: 'Dot'
					}]
                },
                tooltip: {
                    valueSuffix: ''
                },
                legend: {
                    enabled: false
                },
                plotOptions:{
                	series: {
		                cursor: 'pointer',
		                events: {
		                    click: function (event) {
		                    	$scope.$apply(function(){
		                    		$scope.airQualityOptions.aqiOption.series[0].data = [event.point.y];
		                    	});
		                    }
		                }
		            }
                },
                credits: {
                    enabled: false
                }
            },
            series: [{
                name: 'AQI',
                data: []
            }],
            size:{
                width: 500,
                height: 250
            }
        },


        currentPm25LineOption:{
            options:{
                title: {
                    text: null,
                },
                xAxis: {
                    categories: [],
                    tickmarkPlacement: 'on'
                },
                yAxis: {
                    title: {
                        text: 'μg/m³'
                    },
                    min:0,
                    max:250,
                    plotLines : [{
						color: '#DDDF0D',
		                width: 2,
		                value: airQualityPM25Scan.scan[0],
                    	dashStyle: 'Dot'
					},{
						color: '#DF5353',
		                width: 2,
		                value: airQualityPM25Scan.scan[1],
                    	dashStyle: 'Dot'
					}]
                },
                tooltip: {
                    valueSuffix: 'μg/m³'
                },
                legend: {
                    enabled: false
                },
                plotOptions:{
                	series: {
		                cursor: 'pointer',
		                events: {
		                    click: function (event) {
		                    	$scope.$apply(function(){
		                    		$scope.airQualityOptions.pm25Option.series[0].data = [event.point.y];
		                    	});
		                    }
		                }
		            }
                },
                credits: {
                    enabled: false
                }
            },
            series: [{
                name: 'PM2.5',
                data: []
            }],
            size:{
                width: 500,
                height: 250
            }
        },


        currentPm10LineOption:{
            options:{
                title: {
                    text: null,
                },
                xAxis: {
                    categories: [],
                    tickmarkPlacement: 'on'
                },
                yAxis: {
                    title: {
                        text: 'μg/m³'
                    },
                    min:0,
                    max:400,
                    plotLines : [{
						color: '#DDDF0D',
		                width: 2,
		                value: airQualityPM10Scan.scan[0],
                    	dashStyle: 'Dot'
					},{
						color: '#DF5353',
		                width: 2,
		                value: airQualityPM10Scan.scan[1],
                    	dashStyle: 'Dot'
					}]
                },
                tooltip: {
                    valueSuffix: 'μg/m³'
                },
                legend: {
                    enabled: false
                },
                plotOptions:{
                	series: {
		                cursor: 'pointer',
		                events: {
		                    click: function (event) {
		                    	$scope.$apply(function(){
		                    		$scope.airQualityOptions.pm10Option.series[0].data = [event.point.y];
		                    	});
		                    }
		                }
		            }
                },
                credits: {
                    enabled: false
                }
            },
            series: [{
                name: 'PM10',
                data: []
            }],
            size:{
                width: 500,
                height: 250
            }
        },


        currentSo2LineOption:{
            options:{
                title: {
                    text: null,
                },
                xAxis: {
                    categories: [],
                    tickmarkPlacement: 'on'
                },
                yAxis: {
                    title: {
                        text: 'μg/m³'
                    },
                    min:0,
                    max:700,
                    plotLines : [{
						color: '#DDDF0D',
		                width: 2,
		                value: airQualitySo2Scan.scan[0],
                    	dashStyle: 'Dot'
					},{
						color: '#DF5353',
		                width: 2,
		                value: airQualitySo2Scan.scan[1],
                    	dashStyle: 'Dot'
					}]
                },
                tooltip: {
                    valueSuffix: 'μg/m³'
                },
                legend: {
                    enabled: false
                },
                plotOptions:{
                	series: {
		                cursor: 'pointer',
		                events: {
		                    click: function (event) {
		                    	$scope.$apply(function(){
		                    		$scope.airQualityOptions.so2Option.series[0].data = [event.point.y];
		                    	});
		                    }
		                }
		            }
                },
                credits: {
                    enabled: false
                }
            },
            series: [{
                name: '二氧化硫',
                data: []
            }],
            size:{
                width: 500,
                height: 250
            }
        },


        currentNo2LineOption:{
            options:{
                title: {
                    text: null,
                },
                xAxis: {
                    categories: [],
                    tickmarkPlacement: 'on'
                },
                yAxis: {
                    title: {
                        text: 'μg/m³'
                    },
                    min:0,
                    max:400,
                    plotLines : [{
						color: '#DDDF0D',
		                width: 2,
		                value: airQualityNo2Scan.scan[0],
                    	dashStyle: 'Dot'
					},{
						color: '#DF5353',
		                width: 2,
		                value: airQualityNo2Scan.scan[1],
                    	dashStyle: 'Dot'
					}]
                },
                tooltip: {
                    valueSuffix: 'μg/m³'
                },
                legend: {
                    enabled: false
                },
                plotOptions:{
                	series: {
		                cursor: 'pointer',
		                events: {
		                    click: function (event) {
		                    	$scope.$apply(function(){
		                    		$scope.airQualityOptions.no2Option.series[0].data = [event.point.y];
		                    	});
		                    }
		                }
		            }
                },
                credits: {
                    enabled: false
                }
            },
            series: [{
                name: '二氧化氮',
                data: []
            }],
            size:{
                width: 500,
                height: 250
            }
        },


        currentCoLineOption:{
            options:{
                title: {
                    text: null,
                },
                xAxis: {
                    categories: [],
                    tickmarkPlacement: 'on'
                },
                yAxis: {
                    title: {
                        text: 'mg/m³'
                    },
                    min:0,
                    max:20,
                    plotLines : [{
						color: '#DDDF0D',
		                width: 2,
		                value: airQualityCoScan.scan[0],
                    	dashStyle: 'Dot'
					},{
						color: '#DF5353',
		                width: 2,
		                value: airQualityCoScan.scan[1],
                    	dashStyle: 'Dot'
					}]
                },
                tooltip: {
                    valueSuffix: 'mg/m³'
                },
                legend: {
                    enabled: false
                },
                plotOptions:{
                	series: {
		                cursor: 'pointer',
		                events: {
		                    click: function (event) {
		                    	$scope.$apply(function(){
		                    		$scope.airQualityOptions.coOption.series[0].data = [event.point.y];
		                    	});
		                    }
		                }
		            }
                },
                credits: {
                    enabled: false
                }
            },
            series: [{
                name: '一氧化碳',
                data: []
            }],
            size:{
                width: 500,
                height: 250
            }
        },


        currentO3LineOption:{
            options:{
                title: {
                    text: null,
                },
                xAxis: {
                    categories: [],
                    tickmarkPlacement: 'on'
                },
                yAxis: {
                    title: {
                        text: 'μg/m³'
                    },
                    min:0,
                    max:300,
                    plotLines : [{
						color: '#DDDF0D',
		                width: 2,
		                value: airQualityO3Scan.scan[0],
                    	dashStyle: 'Dot'
					},{
						color: '#DF5353',
		                width: 2,
		                value: airQualityO3Scan.scan[1],
                    	dashStyle: 'Dot'
					}]
                },
                tooltip: {
                    valueSuffix: 'μg/m³'
                },
                legend: {
                    enabled: false
                },
                plotOptions:{
                	series: {
		                cursor: 'pointer',
		                events: {
		                    click: function (event) {
		                    	$scope.$apply(function(){
		                    		$scope.airQualityOptions.o3Option.series[0].data = [event.point.y];
		                    	});
		                    }
		                }
		            }
                },
                credits: {
                    enabled: false
                }
            },
            series: [{
                name: '臭氧',
                data: []
            }],
            size:{
                width: 500,
                height: 250
            }
        }


    };
 



   




 


   
}]);
	//气象 highcharts options
	/*$scope.airConditionOptions = {
		airConditionCurrentOption: {
			options: {
				colors: ['#7CADDF', '#7CADDF', '#195489', '#1FC22B', '#FB9705', '#F26200'],
				chart: {
					type: 'line',
				},
				tooltip: {},
				xAxis: {
					categories: [],
					tickmarkPlacement: 'on'
				},
				plotOptions: {
					column: {
						dataLabels: {
							enabled: true,
						},
						pointPadding: 0.2,
						borderWidth: 0
					}
				},
				credits: {
					enabled: false
				}
			},
			title: {
				text: ''
			},
			yAxis: {
				min: 0,
				title: {
					text: ''
				}
			},
			series: [{
				name: '',
				data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
			}]
		}
	};*/








