'use strict';


app.controller('AirCtrl', ['$scope','$stateParams', '$timeout', function($scope, $stateParams, $timeout) {
  
  $scope.title = $stateParams.title;
    /*var map = new AMap.Map('map_canvas');*/
     $scope.showTotalTable = function(){
  	$scope.totalshow= !$scope.totalshow;
  };

  //以下是空气质量预测右侧详情展开控制函数
  $scope.ishealthopen = false;
  $scope.issuggestionopen = false;
  $scope.isQuality1open = false;
  $scope.ismainpollution1open = false;
  $scope.isAQI1open = false;
  $scope.isPM251open = false;
  $scope.isPM101open = false;
  $scope.isSO21open = false;
  $scope.isCO1open = false;
  $scope.isNO21open = false;
   $scope.isO31open = false;

  $scope.openHealthList = function(){
  	$scope.ishealthopen = !$scope.ishealthopen;
  };
  $scope.openSuggestionList = function(){
  	$scope.issuggestionopen = !$scope.issuggestionopen;
  };
  $scope.openQuality1List = function(){
  	$scope.isQuality1open = !$scope.isQuality1open;
  };
  $scope.openmainpollution1List = function(){
  	$scope.ismainpollution1open = !$scope.ismainpollution1open;
  };
  $scope.openAQI1List = function(){
  	$scope.isAQI1open = !$scope.isAQI1open;
  };
  $scope.openPM251List = function(){
  	$scope.isPM251open = !$scope.isPM251open;
  };
  $scope.openPM101List = function(){
  	$scope.isPM101open = !$scope.isPM101open;
  };
  $scope.openSO21List = function(){
  	$scope.isSO21open = !$scope.isSO21open;
  };
  $scope.openCO1List = function(){
  	$scope.isCO1open = !$scope.isCO1open;
  };
  $scope.openNO21List = function(){
  	$scope.isNO21open = !$scope.isNO21open;
  };
  $scope.openO31List = function(){
  	$scope.isO31open = !$scope.isO31open;
  };
  //end——————————
  $scope.totaldata = {
  
  	tabledata:
  	[
	  {yearvalue:'时间', evaporation:'蒸发量',water:'降水量',avetep:'平均气温'},
	  {yearvalue:'12月19号', evaporation:'2',water:'2.6',avetep:'2'},
	  {yearvalue:'12月20号', evaporation:'4.9',water:'5.9',avetep:'2.2'},
	  {yearvalue:'12月21号', evaporation:'7',water:'9',avetep:'3.3'},
	  {yearvalue:'12月22号', evaporation:'23.2',water:'26.4',avetep:'4.5'},
	  {yearvalue:'12月23号', evaporation:'25.6',water:'28.7',avetep:'6.3'},
	  {yearvalue:'12月24号', evaporation:'76.7',water:'70.7',avetep:'10.2'},
	  {yearvalue:'12月25号', evaporation:'135.6',water:'175.6',avetep:'11.3'}
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
                	color : [ 
                		//颜色待调
					    '#Fcb371', '#F8860b', '#F0e0e0',
					],
                	title : {
				        text: '未来七天天气状况',
				        x:'center',
				        textStyle:{
				        	fontFamily:'宋体标题',
				        },
				    },
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
                        data:['蒸发量','降水量','平均气温'],
                        y:'bottom',
                    },
                    xAxis : [
                        {
                            type : 'category',
                            data : ['12月19号','12月20号','12月21号','12月22号','12月23号','12月24号','12月25号']
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
                            Color:'#030303',
                            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6]
                        },
                        {
                            name:'降水量',
                            type:'bar',
                            data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6]
                        },
                        {
                            name:'平均气温',
                            type:'line',
                            yAxisIndex: 1,
                            data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 11.3]
                        }
                    ]
                };
        
                // 为echarts对象加载数据 
                myChart.setOption(option); 
            }
        );  
},0);

    //首页表格显示状态
	$scope.mapTableStatus = {
		airQuality: true,
		airCondition: false,
		wasteAir: false
	};
	//空气质量 Button点击事件
	$scope.istownairquality = false;
	$scope.airQualityBtn = function() {
		$scope.istownairquality = !$scope.istownairquality;
		map.setZoomAndCenter(15, [121.116757,31.448875]);
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
    $scope.istownaircondition = false;
	 $scope.airConditionBtn = function() {
	 	$scope.istownaircondition = !$scope.istownaircondition;
        $scope.mapTableStatus = {
            airQuality: false,
            airCondition: true,
            wasteAir: false
        };
	 	map.setZoomAndCenter(15, [121.109247,31.469887]);

	 	var marker3 = new AMap.Marker({
	    position: [121.106157,31.466373],//图标大小
	    icon: new AMap.Icon({            
        size: new AMap.Size(40, 50),  
        image: "/images/marker_sprite.png",
        })//太仓市气象局
	    });
	    marker3.setMap(map);
	    var infow=[];
	    infow.push("<div style='background-color:#FFFFFF;border:2px solid #66cc66;border-radius:10px;padding:10px 10px;position:absolute;top:-10px;left:-5px;white-space:nowrap;color:#66cc66;font-size:18px'>太仓市气象局</div>")
	    marker3.setLabel({//label默认蓝框白底左上角显示，样式className为：amap-marker-label
	        offset: new AMap.Pixel(23, 5),//修改label相对于maker的位置
	        content: infow.join('')
	    });
        var info3=[];
	    info3.push("<h4><strong>太仓市气象局</strong></h4>");
	    info3.push("<table class='table table-bordered table-striped'>");
	    info3.push("<tr><td style='font-size:15px;width:125px'>明日气温</td><td>5</td></tr>");
	    info3.push("<tr><td style='font-size:15px'>相对湿度</td><td>50%</td></tr>");
	    info3.push("<tr><td style='font-size:15px'>风级</td><td>2</td></tr>");
	    info3.push("<tr><td style='font-size:15px'>风向</td><td>东南风</td></tr>");
	    info3.push("</table>");
		var infowindow3 = new AMap.InfoWindow({
		     content: info3.join(''),
		     offset: new AMap.Pixel(0, -30),
		     size:new AMap.Size(250,0)
		})
		var clickHandle3 = AMap.event.addListener(marker3, 'click', function() {
		    infowindow3.open(map, marker3.getPosition())
		})

		AMap.event.addDomListener(document.getElementById('airConditionBtn'), 'click', function() {
        markers[0].setMap(null);
        markers[1].setMap(null);
        markers.push(marker);
    	}, false);
	 };
//废气排放Button点击事件
    $scope.istownwasteair = false;
	$scope.wasteAirBtn = function() {
		$scope.istownwasteair = !$scope.istownwasteair;
        $scope.mapTableStatus = {
            airQuality: false,
            airCondition: false,
            wasteAir: true
        };
		map.setZoomAndCenter(12, [121.201515,31.620498]);
		//华能国际电力电厂
		var marker4 = new AMap.Marker({
	    position: [121.180359,31.653057],//图标大小
	    icon: new AMap.Icon({            
        size: new AMap.Size(40, 50),  
        image: "/images/marker_sprite.png",
        })//华能国际电力电厂
	    });
	    marker4.setMap(map);
	    var infow=[];
	    infow.push("<div style='background-color:#FFFFFF;border:2px solid #66cc66;border-radius:10px;padding:10px 10px;position:absolute;top:-10px;left:-5px;white-space:nowrap;color:#66cc66;font-size:18px'>华能国际电力电厂</div>")
	    marker4.setLabel({//label默认蓝框白底左上角显示，样式className为：amap-marker-label
	        offset: new AMap.Pixel(23, 5),//修改label相对于maker的位置
	        content: infow.join('')
	    });
        var info4=[];
	    info4.push("<h4><strong>华能国际电力股份有限公司电厂</strong></h4>");
	    info4.push("<table class='table table-bordered table-striped'>");
	    info4.push("<tr><td style='font-size:15px;width:125px'>排放量</td><td>0.26亿</td></tr>");
	    info4.push("<tr><td style='font-size:15px'>烟尘浓度</td><td>8.42mg/m³</td></tr>");
	    info4.push("<tr><td style='font-size:15px'>二氧化硫浓度</td><td>60.51mg/m³</td></tr>");
	    info4.push("<tr><td style='font-size:15px'>氮氧化物浓度</td><td>82.75mg/m³</td></tr>");
	    info4.push("<tr><td style='font-size:15px'>监测站状态</td><td>正常</td></tr>");
	    info4.push("</table>");
		var infowindow4 = new AMap.InfoWindow({
		     content: info4.join(''),
		     offset: new AMap.Pixel(0, -30),
		     size:new AMap.Size(250,0)
		})
		var clickHandle4 = AMap.event.addListener(marker4, 'click', function() {
		    infowindow4.open(map, marker4.getPosition())
		})

		//玖龙纸业
		var marker5 = new AMap.Marker({
	    position: [121.244154,31.592104],//图标大小
	    icon: new AMap.Icon({            
        size: new AMap.Size(40, 50),  
        image: "/images/marker_sprite.png",
        })//玖龙纸业
	    });
	    marker5.setMap(map);
	    var infow=[];
	    infow.push("<div style='background-color:#FFFFFF;border:2px solid #66cc66;border-radius:10px;padding:10px 10px;position:absolute;top:-10px;left:-5px;white-space:nowrap;color:#66cc66;font-size:18px'>玖龙纸业</div>")
	    marker5.setLabel({//label默认蓝框白底左上角显示，样式className为：amap-marker-label
	        offset: new AMap.Pixel(23, 5),//修改label相对于maker的位置
	        content: infow.join('')
	    });
        var info5=[];
	    info5.push("<h4><strong>玖龙纸业(太仓)有限公司</strong></h4>");
	    info5.push("<table class='table table-bordered table-striped'>");
	    info5.push("<tr><td style='font-size:15px;width:125px'>排放量</td><td>0.12亿</td></tr>");
	    info5.push("<tr><td style='font-size:15px'>烟尘浓度</td><td>16.95mg/m³</td></tr>");
	    info5.push("<tr><td style='font-size:15px'>二氧化硫浓度</td><td>23.27mg/m³</td></tr>");
	    info5.push("<tr><td style='font-size:15px'>氮氧化物浓度</td><td>86.85mg/m³</td></tr>");
	    info5.push("<tr><td style='font-size:15px'>监测站状态</td><td>正常</td></tr>");
	    info5.push("</table>");
		var infowindow5 = new AMap.InfoWindow({
		     content: info5.join(''),
		     offset: new AMap.Pixel(0, -30),
		     size:new AMap.Size(250,0)
		})
		var clickHandle5 = AMap.event.addListener(marker5, 'click', function() {
		    infowindow5.open(map, marker5.getPosition())
		})

        //太仓港协鑫发电
		var marker6 = new AMap.Marker({
	    position: [121.252561,31.582579],//图标大小
	    icon: new AMap.Icon({            
        size: new AMap.Size(40, 50),  
        image: "/images/marker_sprite.png",
        })//太仓港协鑫发电
	    });
	    marker6.setMap(map);
	    var infow=[];
	    infow.push("<div style='background-color:#FFFFFF;border:2px solid #66cc66;border-radius:10px;padding:10px 10px;position:absolute;top:-10px;left:-5px;white-space:nowrap;color:#66cc66;font-size:18px'>太仓港协鑫发电</div>")
	    marker6.setLabel({//label默认蓝框白底左上角显示，样式className为：amap-marker-label
	        offset: new AMap.Pixel(23, 5),//修改label相对于maker的位置
	        content: infow.join('')
	    });
        var info6=[];
        info6.push("<h4><strong>太仓港协鑫发电有限公司</strong></h4>");
	    info6.push("<table class='table table-bordered table-striped'>");
	    info6.push("<tr><td style='font-size:15px;width:125px'>排放量</td><td>0.36亿</td></tr>");
	    info6.push("<tr><td style='font-size:15px'>烟尘浓度</td><td>5.91mg/m³</td></tr>");
	    info6.push("<tr><td style='font-size:15px'>二氧化硫浓度浓度</td><td>34.53mg/m³</td></tr>");
	    info6.push("<tr><td style='font-size:15px'>氮氧化物浓度</td><td>86.85mg/m³</td></tr>");
	    info6.push("<tr><td style='font-size:15px'>监测站状态</td><td>正常</td></tr>");
	    info6.push("</table>");
		var infowindow6 = new AMap.InfoWindow({
		     content: info6.join(''),
		     offset: new AMap.Pixel(0, -30),
		     size:new AMap.Size(250,0)
		})
		var clickHandle6 = AMap.event.addListener(marker6, 'click', function() {
		    infowindow6.open(map, marker6.getPosition())
		})

		//国华太仓发电公司
		var marker7 = new AMap.Marker({
	    position: [121.256718,31.582652],//图标大小
	    icon: new AMap.Icon({            
        size: new AMap.Size(40, 50),  
        image: "/images/marker_sprite.png",
        })//国华太仓发电公司
	    });
	    marker7.setMap(map);
	    var infow=[];
	    infow.push("<div style='background-color:#FFFFFF;border:2px solid #66cc66;border-radius:10px;padding:10px 10px;position:absolute;top:-10px;left:-5px;white-space:nowrap;color:#66cc66;font-size:18px'>国华太仓发电公司</div>")
	    marker7.setLabel({//label默认蓝框白底左上角显示，样式className为：amap-marker-label
	        offset: new AMap.Pixel(23, 5),//修改label相对于maker的位置
	        content: infow.join('')
	    });
        var info7=[];
	    info7.push("<h4><strong>国华太仓发电有限公司</strong></h4>");
	    info7.push("<table class='table table-bordered table-striped'>");
	    info7.push("<tr><td style='font-size:15px;width:125px'>排放量</td><td>0.12亿</td></tr>");
	    info7.push("<tr><td style='font-size:15px'>烟尘浓度</td><td>2.13</td></tr>");
	    info7.push("<tr><td style='font-size:15px'>二氧化硫浓度浓度</td><td>30.15</td></tr>");
	    info7.push("<tr><td style='font-size:15px'>氮氧化物浓度</td><td>70.63</td>70.13</tr>");
	    info7.push("<tr><td style='font-size:15px'>监测站状态</td><td>正常</td></tr>");
	    info7.push("</table>");
		var infowindow7 = new AMap.InfoWindow({
		     content: info7.join(''),
		     offset: new AMap.Pixel(0, -30),
		     size:new AMap.Size(250,0)
		})
		var clickHandle7 = AMap.event.addListener(marker7, 'click', function() {
		    infowindow7.open(map, marker7.getPosition())
		})
	 };


    //高德地图初始化
    var map = new AMap.Map('map_canvas',{
        zoom: 12,
        center: [121.130619,31.461029]

     });

    $timeout(function () {
    var marker1 = new AMap.Marker({
	position: [121.11414, 31.45605],//太仓监测站
	map:map,
	icon: new AMap.Icon({            
    size: new AMap.Size(40, 50),  
    image: "/images/marker_sprite.png",
    })
	});

	var marker2 = new AMap.Marker({
	position: [121.124353, 31.444371],//科教新城监测站
	map:map,
	icon: new AMap.Icon({            
    size: new AMap.Size(40, 50),  
    image: "/images/marker_sprite.png",
    })
	});
    

    // 设置label标签
    var infow=[];
    infow.push("<div style='background-color:#FFFFFF;border:2px solid #66cc66;border-radius:10px;padding:10px 10px;position:absolute;top:-10px;left:-5px;white-space:nowrap;color:#66cc66;font-size:18px'>太仓监测站</div>")
    marker1.setLabel({//label默认蓝框白底左上角显示，样式className为：amap-marker-label
        offset: new AMap.Pixel(23, 5),//修改label相对于maker的位置
        content: infow.join('')
    });
    var infow=[];
    infow.push("<div style='background-color:#FFFFFF;border:2px solid #66cc66;border-radius:10px;padding:10px 10px;position:absolute;top:-10px;left:-5px;white-space:nowrap;color:#66cc66;font-size:18px'>科教新城监测站</div>")
    marker2.setLabel({//label默认蓝框白底左上角显示，样式className为：amap-marker-label
        offset: new AMap.Pixel(23, 5),//修改label相对于maker的位置
        content: infow.join('')
    });

 
	//显示信息窗体(可单击位置显示隐藏的信息窗体)
	var info1=[];
	   info1.push("<h4><strong>太仓监测站</strong></h4>");
	    info1.push("<table class='table table-bordered table-striped'>");
	    info1.push("<tr><td style='font-size:15px;width:150%'>AQI</td><td><button type='button' class='btn btn-danger' style='width:100%'>183</button></td></tr>");
	    info1.push("<tr><td style='font-size:15px'>主要污染物</td><td style='text-align:center'>PM2.5</td></tr>");
	    info1.push("<tr><td style='font-size:15px'>PM2.5</td><td><button type='button' class='btn btn-success' style='width:100%'>83</button></td></tr>");
	    info1.push("<tr><td style='font-size:15px'>二氧化硫浓度</td><td><button type='button' class='btn btn-success' style='width:100%'>54</button></td></tr>");
	    info1.push("<tr><td style='font-size:15px'>监测站状态</td><td><button type='button' class='btn btn-warning' style='width:100%'>轻度污染</button></td></tr>");
	    info1.push("</table>");
	var infowindow1 = new AMap.InfoWindow({
	     content: info1.join(''),
	     offset: new AMap.Pixel(0, -30),
	     size:new AMap.Size(300,0)
	})
	var clickHandle1 = AMap.event.addListener(marker1, 'click', function() {
	    infowindow1.open(map, marker1.getPosition())
	})

	var info2=[];
	    info2.push("<h4><strong>科教新城监测站</strong></h4>");
	    info2.push("<table class='table table-bordered table-striped'>");

	    info2.push("<tr><td style='font-size:15px;width:150%'>AQI</td><td><button type='button' class='btn btn-danger' style='width:100%'>161</button></td></tr>");
	    info2.push("<tr><td style='font-size:15px'>主要污染物</td><td style='text-align:center'>PM2.5</td></tr>");
	    info2.push("<tr><td style='font-size:15px'>PM2.5</td><td><button type='button' class='btn btn-success' style='width:100%'>83</button></td></tr>");
	    info2.push("<tr><td style='font-size:15px'>二氧化硫浓度</td><td><button type='button' class='btn btn-success' style='width:100%'>54</button></td></tr>");
	    info2.push("<tr><td style='font-size:15px'>监测站状态</td><td><button type='button' class='btn btn-warning' style='width:100%'>轻度污染</button></td></tr>");

	    info2.push("</table>");
	var infowindow2 = new AMap.InfoWindow({

	     content:  info2.join(''),
	     //offset: new AMap.Pixel(0,0),

	     size:new AMap.Size(300,0)

	})
	infowindow2.open(map, marker2.getPosition());
	var clickHandle2 = AMap.event.addListener(marker2, 'click', function() {
	    infowindow2.open(map, marker2.getPosition())
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
            categories: ['12月19', '12月20', '12月21', '12月22', '12月23','12月24','12月25']
        },
        yAxis: {
            title: {
                text: '空气质量指数(AQI)值'
            }
        },

        series: [{
            type: 'column',
            name: '实际AQI值',
            color:"#23b7e5",
            data: [90, 116, 140, 168, 150,210,182]
        },  {
            type: 'spline',
            name: '预测AQI值',
            color:"#1F1F1F",
            data: [100, 120, 138, 175, 163, 201,185],
            
            dataLabels: {
                enabled: false
            }
        }]
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
					text: 'AQI',
					y:40,
					style:{                
                    fontFamily:'微软雅黑'
                   }

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
				data: [118],
				tooltip: {
					valueSuffix: ''
				}
			}],
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
					text: 'PM2.5',
					y:40,
					style:{                
                    fontFamily:'微软雅黑'
                   }
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
				data: [64],
				tooltip: {
					valueSuffix: ''
				}
			}],
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
					text: 'PM10',
					y:40,
					style:{                
                    fontFamily:'微软雅黑'
                   }
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
				data: [70],
				tooltip: {
					valueSuffix: 'μg/m³'
				}
			}],
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
					text: '二氧化硫',
					y:40,
					style:{                
                    fontFamily:'微软雅黑'
                   }
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
				data: [54],
				tooltip: {
					valueSuffix: 'μg/m³'
				}
			}],
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
					text: '二氧化氮',
					y:40,
					style:{                
                    fontFamily:'微软雅黑'
                   }
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
				name: '二氧化氮',
				data: [44],
				tooltip: {
					valueSuffix: 'μg/m³'
				}
			}],
    	},

        //CO
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
					text: '一氧化碳',
			        y:40,
					style:{                
                    fontFamily:'微软雅黑'
                   }
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
				data: [1],
				tooltip: {
					valueSuffix: 'mg/m³'
				}
			}],
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
					text: '臭氧',
					y:40,
					style:{                
                    fontFamily:'微软雅黑'
                   }
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
				data: [7],
				tooltip: {
					valueSuffix: 'μg/m³'
				}
			}],
    	},

    	//上面仪表盘加折线图结束

        //AQI折线图
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
                data: [43,45,48,53,57,63,60,63,75,87,100,118]
            }]

        },

        //PM2.5折线图
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
                data: [52,56,65,58,52,55,40,55,60,49,57,64]
            }],
        },

        //PM10折线图
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
                data: [106,102,95,105,115,116,95,83,71,83,78,70]
            }],
        },

        //SO2折线图
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
                data: [109,119,93,81,80,78,69,51,47,49,28,54]
            }],
        },

        //NO2折线图
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
                data: [43,52,55,58,51,43,35,28,23,20,33,44]
            }],
        },

        //CO折线图
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
                data: [1,2,1,1,2,2,2,1,1,1,1,1]
            }],
        },

        //O3折线图
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
                data: [3,8,19,23,8,6,12,13,15,11,9,7]
            }],

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








