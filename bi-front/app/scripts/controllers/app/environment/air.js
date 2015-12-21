'use strict';


app.controller('AirCtrl', ['$scope','$stateParams', '$timeout', function($scope, $stateParams, $timeout) {

  $scope.title = $stateParams.title;
    /*var map = new AMap.Map('map_canvas');*/
     $scope.showTotalTable = function(){
  	$scope.totalshow= !$scope.totalshow;
  };
  $scope.totaldata = {
  
  	tabledata:
  	[
	  {yearvalue:'时间', evaporation:'蒸发量',water:'降水量',avetep:'平均温度'},
	  {yearvalue:'12月11号', evaporation:'2',water:'2.6',avetep:'2'},
	  {yearvalue:'12月12号', evaporation:'4.9',water:'5.9',avetep:'2.2'},
	  {yearvalue:'12月13号', evaporation:'7',water:'9',avetep:'3.3'},
	  {yearvalue:'12月14号', evaporation:'23.2',water:'26.4',avetep:'4.5'},
	  {yearvalue:'12月15号', evaporation:'25.6',water:'28.7',avetep:'6.3'},
	  {yearvalue:'12月16号', evaporation:'76.7',water:'70.7',avetep:'10.2'},
	  {yearvalue:'12月17号', evaporation:'135.6',water:'175.6',avetep:'20.3'}
  	]
  };
 $timeout(function () {
    // 路径配置
        require.config({
            paths: {
                echarts: 'http://echarts.baidu.com/build/dist'
            }
        });
        
        // 使用
        require(
            [
                'echarts',
                'echarts/chart/bar',// 使用柱状图就加载bar模块，按需加载
                'echarts/chart/line' 
            ],
            function (ec) {
                // 基于准备好的dom，初始化echarts图表
                var myChart = ec.init(document.getElementById('main')); 
                
                var option = {
                    tooltip : {
                        trigger: 'axis'
                    },
                    toolbox: {
                        show : true,
                        feature : {
                            mark : {show: true},
                            dataView : {show: true, readOnly: false},
                            magicType: {show: true, type: ['line', 'bar']},
                            restore : {show: true},
                            saveAsImage : {show: true}
                        }
                    },
                    calculable : true,
                    legend: {
                        data:['蒸发量','降水量','平均温度']
                    },
                    xAxis : [
                        {
                            type : 'category',
                            data : ['12月11号','12月12号','12月13号','12月14号','12月15号','12月16号','12月17号']
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value',
                            name : '水量',
                            axisLabel : {
                                formatter: '{value} ml'
                            }
                        },
                        {
                            type : 'value',
                            name : '温度',
                            axisLabel : {
                                formatter: '{value} °C'
                            }
                        }
                    ],
                    series : [

                        {
                            name:'蒸发量',
                            type:'bar',
                            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6]
                        },
                        {
                            name:'降水量',
                            type:'bar',
                            data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6]
                        },
                        {
                            name:'平均温度',
                            type:'line',
                            yAxisIndex: 1,
                            data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3]
                        }
                    ]
                };
        
                // 为echarts对象加载数据 
                myChart.setOption(option); 
            }
        );  
},0);
    
    //高德地图初始化
    var map = new AMap.Map('map_canvas',{
        zoom: 12,
        center: [121.130619,31.461029]


    });
    $timeout(function () {
   var marker1 = new AMap.Marker({
    position: [121.11414, 31.45605],
    });
    marker1.setMap(map);

	var marker2 = new AMap.Marker({
	    position: [121.124353, 31.444371],
	});
	marker2.setMap(map);

	var marker3 = new AMap.Marker({
	    position: [121.106157,31.466373],
	});
	marker3.setMap(map);

	var marker4 = new AMap.Marker({
		position: [121.180359,31.653057],
	});
	marker4.setMap(map);

	var marker5 = new AMap.Marker({
		position: [121.244154,31.592104],
	});
	marker5.setMap(map);
    
	var marker6 = new AMap.Marker({
		position: [121.252561,31.582579],
	});
	marker6.setMap(map);

	var marker7 = new AMap.Marker({
		position: [121.256718,31.582652],
	});
	marker7.setMap(map);
//显示信息窗体(可单击位置显示隐藏的信息窗体)
var info1=[];
   info1.push("<h4><strong>太仓监测站</strong></h4>");
    info1.push("<table class='table table-bordered table-striped'>");
    info1.push("<tr><td style='font-size:15px;width:125px'>AQI</td><td></td></tr>");
    info1.push("<tr><td style='font-size:15px'>主要污染物</td><td></td></tr>");
    info1.push("<tr><td style='font-size:15px'>PM2.5</td><td></td></tr>");
    info1.push("<tr><td style='font-size:15px'>二氧化硫浓度</td><td></td></tr>");
    info1.push("<tr><td style='font-size:15px'>监测站状态</td><td></td></tr>");
    info1.push("</table>");
var infowindow1 = new AMap.InfoWindow({
     content: info1.join(''),
     offset: new AMap.Pixel(0, -30),
     size:new AMap.Size(250,0)
})
var clickHandle1 = AMap.event.addListener(marker1, 'click', function() {
    infowindow1.open(map, marker1.getPosition())
})

var info=[];
   info.push("<h4><strong>科教新城监测站</strong></h4>");
    info.push("<table class='table table-bordered table-striped'>");
    info.push("<tr><td style='font-size:15px;width:125px'>AQI</td><td></td></tr>");
    info.push("<tr><td style='font-size:15px'>主要污染物</td><td></td></tr>");
    info.push("<tr><td style='font-size:15px'>PM2.5</td><td></td></tr>");
    info.push("<tr><td style='font-size:15px'>二氧化硫浓度</td><td></td></tr>");
    info.push("<tr><td style='font-size:15px'>监测站状态</td><td></td></tr>");
    info.push("</table>");
var infowindow2 = new AMap.InfoWindow({

     content:  info.join(''),
     //offset: new AMap.Pixel(0,0),
     size:new AMap.Size(250,0)
})
infowindow2.open(map, marker2.getPosition());
var clickHandle2 = AMap.event.addListener(marker2, 'click', function() {
    infowindow2.open(map, marker2.getPosition())
})
var info2=[];
   info2.push("<h4><strong>太仓市气象局</strong></h4>");
    info2.push("<table class='table table-bordered table-striped'>");
    info2.push("<tr><td style='font-size:15px;width:125px'>当前气温</td><td></td></tr>");
    info2.push("<tr><td style='font-size:15px'>相对湿度</td><td></td></tr>");
    info2.push("<tr><td style='font-size:15px'>风级</td><td></td></tr>");
    info2.push("<tr><td style='font-size:15px'>风向</td><td></td></tr>");
    info2.push("</table>");
var infowindow3 = new AMap.InfoWindow({
     content: info2.join(''),
     offset: new AMap.Pixel(0, -30),
     size:new AMap.Size(250,0)
})
var clickHandle3 = AMap.event.addListener(marker3, 'click', function() {
    infowindow3.open(map, marker3.getPosition())
})

var info4=[];
   info4.push("<h4><strong>华能国际电力股份有限公司太仓电厂</strong></h4>");
    info4.push("<table class='table table-bordered table-striped'>");
    info4.push("<tr><td style='font-size:15px;width:125px'>排放量</td><td></td></tr>");
    info4.push("<tr><td style='font-size:15px'>烟尘浓度</td><td></td></tr>");
    info4.push("<tr><td style='font-size:15px'>二氧化硫浓度浓度</td><td></td></tr>");
    info4.push("<tr><td style='font-size:15px'>氮氧化物浓度</td><td></td></tr>");
    info4.push("<tr><td style='font-size:15px'>监测站状态</td><td></td></tr>");
    info4.push("</table>");
var infowindow4 = new AMap.InfoWindow({
     content: info4.join(''),
     offset: new AMap.Pixel(0, -30),
     size:new AMap.Size(250,0)
})
var clickHandle4 = AMap.event.addListener(marker4, 'click', function() {
    infowindow4.open(map, marker4.getPosition())
})

var info5=[];
   info5.push("<h4><strong>玖龙纸业（太仓）有限公司</strong></h4>");
    info5.push("<table class='table table-bordered table-striped'>");
    info5.push("<tr><td style='font-size:15px;width:125px'>排放量</td><td></td></tr>");
    info5.push("<tr><td style='font-size:15px'>烟尘浓度</td><td></td></tr>");
    info5.push("<tr><td style='font-size:15px'>二氧化硫浓度浓度</td><td></td></tr>");
    info5.push("<tr><td style='font-size:15px'>氮氧化物浓度</td><td></td></tr>");
    info5.push("<tr><td style='font-size:15px'>监测站状态</td><td></td></tr>");
    info5.push("</table>");
var infowindow5 = new AMap.InfoWindow({
     content: info5.join(''),
     offset: new AMap.Pixel(0, -30),
     size:new AMap.Size(250,0)
})
var clickHandle5 = AMap.event.addListener(marker5, 'click', function() {
    infowindow5.open(map, marker5.getPosition())
})

var info6=[];
    info6.push("<h4><strong>太仓港协鑫发电有限公司</strong></h4>");
    info6.push("<table class='table table-bordered table-striped'>");
    info6.push("<tr><td style='font-size:15px;width:125px'>排放量</td><td></td></tr>");
    info6.push("<tr><td style='font-size:15px'>烟尘浓度</td><td></td></tr>");
    info6.push("<tr><td style='font-size:15px'>二氧化硫浓度浓度</td><td></td></tr>");
    info6.push("<tr><td style='font-size:15px'>氮氧化物浓度</td><td></td></tr>");
    info6.push("<tr><td style='font-size:15px'>监测站状态</td><td></td></tr>");
    info6.push("</table>");
var infowindow6 = new AMap.InfoWindow({
     content: info6.join(''),
     offset: new AMap.Pixel(0, -30),
     size:new AMap.Size(250,0)
})
var clickHandle6 = AMap.event.addListener(marker6, 'click', function() {
    infowindow6.open(map, marker6.getPosition())
})

var info7=[];
    info7.push("<h4><strong>国华太仓发电有限公司</strong></h4>");
    info7.push("<table class='table table-bordered table-striped'>");
    info7.push("<tr><td style='font-size:15px;width:125px'>排放量</td><td></td></tr>");
    info7.push("<tr><td style='font-size:15px'>烟尘浓度</td><td></td></tr>");
    info7.push("<tr><td style='font-size:15px'>二氧化硫浓度浓度</td><td></td></tr>");
    info7.push("<tr><td style='font-size:15px'>氮氧化物浓度</td><td></td></tr>");
    info7.push("<tr><td style='font-size:15px'>监测站状态</td><td></td></tr>");
    info7.push("</table>");
var infowindow7 = new AMap.InfoWindow({
     content: info7.join(''),
     offset: new AMap.Pixel(0, -30),
     size:new AMap.Size(250,0)
})
var clickHandle7 = AMap.event.addListener(marker7, 'click', function() {
    infowindow7.open(map, marker7.getPosition())
})
// 添加工具条和比例尺
AMap.plugin(['AMap.ToolBar','AMap.Scale'],function(){
    //TODO  创建控件并添加
    var toolBar = new AMap.ToolBar();
    var scale = new AMap.Scale();
    map.addControl(toolBar);
    map.addControl(scale);
})
    }, 0);
    
 
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
                data: [100,150,123,142]
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
 	//button状态改变标签
	$scope.getButtonStatus = function(status) {
		if (status == 'accept')
			return "btn-success";
		else if (status == 'caution')
			return "btn-warning";
		else if (status == 'take_action')
			return "btn-danger"
		else if (status == 'invalid')
			return "";
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








