'use strict';


app.controller('AirCtrl', ['$scope','$stateParams','$timeout','qService','rawFactory','forecastFactory',function($scope,$stateParams,$timeout,qService,rawFactory,forecastFactory) {

  $scope.data = null;


  var promise1 = qService.tokenHttpGet(rawFactory.query,{tableName:'airPollutionData'});
  promise1.then(function(rc1) {

    console.log(rc1.data);




  //下拉点击事件
  $scope.change=function(model){
  console.log(model);
  if(model===2){
  console.log("true");
  }else if(model===1){
  alert("aaa");
  }};
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
$scope.openorclose='↓展开';

  $scope.openHealthList = function(){
  	$scope.ishealthopen = !$scope.ishealthopen;
  	if (!$scope.ishealthopen){
  		$scope.openorclose='↓展开';
      $scope.openorclose1='↑关闭';
  	}else{
  		$scope.openorclose='↑关闭';
      $scope.openorclose1='↓展开';
  	} 			
  	$scope.issuggestionopen = false; 
  };

  $scope.openorclose1='↓展开';
  $scope.openSuggestionList = function(){
  	$scope.issuggestionopen = !$scope.issuggestionopen;
  	if (!$scope.issuggestionopen){
  		$scope.openorclose1='↓展开';
      $scope.openorclose='↑关闭';
  	}else{
  		$scope.openorclose1='↑关闭';
      $scope.openorclose='↓展开';
  	} 			
  	$scope.ishealthopen = false; 
  };

  $scope.openQuality1List = function(){
  	$scope.isQuality1open = !$scope.isQuality1open;
  };
 
  $scope.updown22=true;
  $scope.openmainpollution1List = function(){
  	$scope.ismainpollution1open = !$scope.ismainpollution1open;
  	if ($scope.ismainpollution1open){
  		$scope.updown21=true;
  		$scope.updown22=false;
      $scope.updown12=true;
      $scope.updown32=true;
      $scope.updown42=true;
      $scope.updown52=true;
      $scope.updown62=true;
      $scope.updown72=true;
      $scope.updown82=true;
      $scope.updown11=false;
      $scope.updown31=false;
      $scope.updown41=false;
      $scope.updown51=false;
      $scope.updown61=false;
      $scope.updown71=false;
      $scope.updown81=false;
  	}else{
  		$scope.updown21=false;
  		$scope.updown22=true;
  	} 	
  	$scope.isPM251open = false;
  	$scope.isPM101open = false;
  	$scope.isSO21open = false;
  	$scope.isCO1open = false;
  	$scope.isNO21open = false;
  	$scope.isO31open = false;
  	$scope.isAQI1open=false;
  };
  $scope.updown12=true;
  $scope.openAQI1List = function(){
  	$scope.isAQI1open = !$scope.isAQI1open;
  	if ($scope.isAQI1open){
  		$scope.updown11=true;
  		$scope.updown12=false;
      $scope.updown21=false;
      $scope.updown22=true;
      $scope.updown32=true;
      $scope.updown42=true;
      $scope.updown52=true;
      $scope.updown62=true;
      $scope.updown72=true;
      $scope.updown82=true;
      
      $scope.updown31=false;
      $scope.updown41=false;
      $scope.updown51=false;
      $scope.updown61=false;
      $scope.updown71=false;
      $scope.updown81=false;
  	}else{
  		$scope.updown11=false;
  		$scope.updown12=true;
  	} 	
  	$scope.isPM251open = false;
  	$scope.isPM101open = false;
  	$scope.isSO21open = false;
  	$scope.isCO1open = false;
  	$scope.isNO21open = false;
  	$scope.isO31open = false;
  	$scope.ismainpollution1open=false;
  };

  $scope.updown32=true;
  $scope.openPM251List = function(){
  	$scope.isPM251open = !$scope.isPM251open;
  	if ($scope.isPM251open){
  		$scope.updown31=true;
  		$scope.updown32=false;
      $scope.updown11=false;
      $scope.updown12=true;
      $scope.updown21=false;
      $scope.updown22=true;
 
      $scope.updown42=true;
      $scope.updown52=true;
      $scope.updown62=true;
      $scope.updown72=true;
      $scope.updown82=true;
      
   
      $scope.updown41=false;
      $scope.updown51=false;
      $scope.updown61=false;
      $scope.updown71=false;
      $scope.updown81=false;
  	}else{
  		$scope.updown31=false;
  		$scope.updown32=true;
  	} 	
  	$scope.isAQI1open = false;
  	$scope.isPM101open = false;
  	$scope.isSO21open = false;
  	$scope.isCO1open = false;
  	$scope.isNO21open = false;
  	$scope.isO31open = false;
  	$scope.ismainpollution1open=false;
  };
  $scope.updown42=true;
  $scope.openPM101List = function(){
  	$scope.isPM101open = !$scope.isPM101open;
  	  	if ($scope.isPM101open){
  		$scope.updown41=true;
  		$scope.updown42=false;
      $scope.updown11=false;
      $scope.updown12=true;
      $scope.updown21=false;
      $scope.updown22=true;
      $scope.updown32=true;

      $scope.updown52=true;
      $scope.updown62=true;
      $scope.updown72=true;
      $scope.updown82=true;
      
      $scope.updown31=false;
  
      $scope.updown51=false;
      $scope.updown61=false;
      $scope.updown71=false;
      $scope.updown81=false;
  	}else{
  		$scope.updown41=false;
  		$scope.updown42=true;
  	} 
  	$scope.isPM251open = false;
  	$scope.isAQI1open = false;
  	$scope.isSO21open = false;
  	$scope.isCO1open = false;
  	$scope.isNO21open = false;
  	$scope.isO31open = false;
  	$scope.ismainpollution1open=false;
  };
   $scope.updown52=true;
  $scope.openSO21List = function(){
  	$scope.isSO21open = !$scope.isSO21open;
  	  	if ($scope.isSO21open){
  		$scope.updown51=true;
  		$scope.updown52=false;
      $scope.updown11=false;
      $scope.updown12=true;
      $scope.updown21=false;
      $scope.updown22=true;
      $scope.updown32=true;
      $scope.updown42=true;
  
      $scope.updown62=true;
      $scope.updown72=true;
      $scope.updown82=true;
      
      $scope.updown31=false;
      $scope.updown41=false;
 
      $scope.updown61=false;
      $scope.updown71=false;
      $scope.updown81=false;
  	}else{
  		$scope.updown51=false;
  		$scope.updown52=true;
  	} 
  	$scope.isPM251open = false;
  	$scope.isPM101open = false;
  	$scope.isAQI11open = false;
  	$scope.isCO1open = false;
  	$scope.isNO21open = false;
  	$scope.isO31open = false;
  	$scope.ismainpollution1open=false;
  };
  $scope.updown72=true;
  $scope.openCO1List = function(){
  	$scope.isCO1open = !$scope.isCO1open;
  	if ($scope.isCO1open){
  		$scope.updown71=true;
  		$scope.updown72=false;
      $scope.updown11=false;
      $scope.updown12=true;
      $scope.updown21=false;
      $scope.updown22=true;
      $scope.updown32=true;
      $scope.updown42=true;
      $scope.updown52=true;
      $scope.updown62=true;

      $scope.updown82=true;
      
      $scope.updown31=false;
      $scope.updown41=false;
      $scope.updown51=false;
      $scope.updown61=false;
 
      $scope.updown81=false;
  	}else{
  		$scope.updown71=false;
  		$scope.updown72=true;
  	} 
  	$scope.isPM251open = false;
  	$scope.isPM101open = false;
  	$scope.isSO21open = false;
  	$scope.isAQI1open = false;
  	$scope.isNO21open = false;
  	$scope.isO31open = false;
  	$scope.ismainpollution1open=false;
  };
  $scope.updown62=true;
  $scope.openNO21List = function(){
  	$scope.isNO21open = !$scope.isNO21open;
  	  	if ($scope.isNO21open){
  		$scope.updown61=true;
  		$scope.updown62=false;
      $scope.updown11=false;
      $scope.updown12=true;
      $scope.updown21=false;
      $scope.updown22=true;
      $scope.updown32=true;
      $scope.updown42=true;
      $scope.updown52=true;

      $scope.updown72=true;
      $scope.updown82=true;
      
      $scope.updown31=false;
      $scope.updown41=false;
      $scope.updown51=false;
  
      $scope.updown71=false;
      $scope.updown81=false;
  	}else{
  		$scope.updown61=false;
  		$scope.updown62=true;
  	} 
  	$scope.isPM251open = false;
  	$scope.isPM101open = false;
  	$scope.isSO21open = false;
  	$scope.isCO1open = false;
  	$scope.isAQI1open = false;
  	$scope.isO31open = false;
  	$scope.ismainpollution1open=false;
  };
  $scope.updown82=true;
  $scope.openO31List = function(){
  	$scope.isO31open = !$scope.isO31open;
  	if ($scope.isO31open){
  		$scope.updown81=true;
  		$scope.updown82=false;
      $scope.updown11=false;
      $scope.updown12=true;
      $scope.updown21=false;
      $scope.updown22=true;
      $scope.updown32=true;
      $scope.updown42=true;
      $scope.updown52=true;
      $scope.updown62=true;
      $scope.updown72=true;
 
      
      $scope.updown31=false;
      $scope.updown41=false;
      $scope.updown51=false;
      $scope.updown61=false;
      $scope.updown71=false;
      
  	}else{
  		$scope.updown81=false;
  		$scope.updown82=true;
  	} 
  	$scope.isPM251open = false;
  	$scope.isPM101open = false;
  	$scope.isSO21open = false;
  	$scope.isCO1open = false;
  	$scope.isNO21open = false;
  	$scope.isAQI1open = false;
  	$scope.ismainpollution1open=false;
  };
  //end——————————
  $scope.totaldata = {
  
  	tabledata:
  	[
	  {yearvalue:'日期',weather:'天气状况' ,Htemperature:'最高气温(°C)',Ltemperature:'最低气温(°C)',wind:'风向风级'},
	  {yearvalue:'1月9日',weather:'多云',Htemperature:'8',Ltemperature:'2',wind:'东风3~4级'},
	  {yearvalue:'1月10日',weather:'小雨', Htemperature:'9',Ltemperature:'5',wind:'东风3~4级'},
	  {yearvalue:'1月11日', weather:'中雨',Htemperature:'10',Ltemperature:'5',wind:'东北风4~5级'},
	  {yearvalue:'1月12日', weather:'小雨转多云',Htemperature:'9',Ltemperature:'8',wind:'西风3级'},
	  {yearvalue:'1月13日', weather:'多云',Htemperature:'6',Ltemperature:'-1',wind:'西北风3~4级'},
	  {yearvalue:'1月14日', weather:'多云',Htemperature:'6',Ltemperature:'-1',wind:'南风3级'},
	  {yearvalue:'1月15日', weather:'多云',Htemperature:'7',Ltemperature:'0',wind:'西南风转西风3级'}
  	]
  };


    //首页表格显示状态
	$scope.mapTableStatus = {
		airQuality: true,
		airCondition: false,
		wasteAir: false
	};
	//空气质量 Button点击事件
	$scope.istownairquality = true;
	var marker3 = new AMap.Marker({
	    position: [121.106157,31.466373],//图标大小
	    icon: new AMap.Icon({            
        size: new AMap.Size(40, 50),  
        image: "/images/marker_sprite.png",
        })//太仓市气象局
	    });

		var marker4 = new AMap.Marker({
	    position: [121.180359,31.653057],//图标大小
	    icon: new AMap.Icon({            
        size: new AMap.Size(40, 50),  
        image: "/images/marker_sprite.png",
        })//华能国际电力电厂
	    });

	    var marker5 = new AMap.Marker({
	    position: [121.244154,31.592104],//图标大小
	    icon: new AMap.Icon({            
        size: new AMap.Size(40, 50),  
        image: "/images/marker_sprite.png",
        })//玖龙纸业
	    });

	    var marker6 = new AMap.Marker({
	    position: [121.252561,31.582579],//图标大小
	    icon: new AMap.Icon({            
        size: new AMap.Size(40, 50),  
        image: "/images/marker_sprite.png",
        })//太仓港协鑫发电
	    });

	    var marker7 = new AMap.Marker({
	    position: [121.256718,31.582652],//图标大小
	    icon: new AMap.Icon({            
        size: new AMap.Size(40, 50),  
        image: "/images/marker_sprite.png",
        })//国华太仓发电公司
	    });
	$scope.airQualityBtn = function() {
		$scope.istownairquality = true;
		$scope.istownaircondition=false;
		$scope.istownwasteair=false;
		map.setZoomAndCenter(15, [121.116757,31.448875]);
		$scope.mapTableStatus = {
			airQuality: true,
			airCondition: false,
			wasteAir: false
		};
		if (marker3) {
		marker3.setMap(null);
        };
        if (marker4) {
		marker4.setMap(null);
        };
        if (marker5) {
		marker5.setMap(null);
        };
        if (marker6) {
		marker6.setMap(null);
        };
        if (marker7) {
		marker7.setMap(null);
        };
		addMarker(airQualityMarkerArr, 'airQuality');
		mapObj.setCenter(new AMap.LngLat(121.106661, 31.579533));
		mapObj.setZoom(11);
		
		
	};
     
    //气象 Button点击事件
    $scope.istownaircondition = false;
	 $scope.airConditionBtn = function() {
	 	$scope.istownaircondition = true;
	 	$scope.istownairquality=false;
		$scope.istownwasteair=false;
        $scope.mapTableStatus = {
            airQuality: false,
            airCondition: true,
            wasteAir: false
        };
         if (marker4) {
		marker4.setMap(null);
        };
        if (marker5) {
		marker5.setMap(null);
        };
        if (marker6) {
		marker6.setMap(null);
        };
        if (marker7) {
		marker7.setMap(null);
        };
	 	map.setZoomAndCenter(15, [121.109247,31.469887]);

	 	
	    marker3.setMap(map);
	    var infow=[];
	    infow.push("<div style='background-color:#FFFFFF;border:2px solid #66cc66;border-radius:10px;padding:10px 10px;position:absolute;top:-10px;left:-5px;white-space:nowrap;color:#66cc66;font-size:18px'>太仓市气象局</div>")
	    marker3.setLabel({//label默认蓝框白底左上角显示，样式className为：amap-marker-label
	        offset: new AMap.Pixel(23, 5),//修改label相对于maker的位置
	        content: infow.join('')
	    });
        var info3=[];
	    info3.push("<h4><strong>太仓市气象局(明日天气预报)</strong></h4>");
	    info3.push("<table class='table table-bordered table-striped'>");
	    info3.push("<tr><td class='maptable' style='line-height:35px;'>明日气温</td><td><div class='map-table-right' style='background-Color:#5cb85c;margin-left:2.5px;margin-top:4px;'>2℃~7℃</div></td></tr>");
	    info3.push("<tr><td class='maptable' style='line-height:35px;'>相对湿度</td><td><div class='map-table-right' style='background-Color:#5cb85c;margin-left:2.5px;margin-top:4px;'>50%</div></td></tr>");
	    info3.push("<tr><td class='maptable' style='line-height:35px;'>风级</td><td><div class='map-table-right' style='background-Color:#5cb85c;margin-left:2.5px;margin-top:4px;'>2</div></td></tr>");
	    info3.push("<tr><td class='maptable' style='line-height:35px;'>风向</td><td><div class='map-table-right' style='background-Color:#5cb85c;margin-left:2.5px;margin-top:4px;'>东南风</div></td></tr>");
	    info3.push("</table>");
		var infowindow3 = new AMap.InfoWindow({
		     content: info3.join(''),
		     offset: new AMap.Pixel(0, -30),
		     size:new AMap.Size(280,0)
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
		$scope.istownwasteair = true;
		$scope.istownaircondition=false;
		$scope.istownairquality=false;
        $scope.mapTableStatus = {
            airQuality: false,
            airCondition: false,
            wasteAir: true
        };
        if (marker3) {
		marker3.setMap(null);
        };
		map.setZoomAndCenter(12, [121.201515,31.620498]);
		//华能国际电力电厂
	    marker4.setMap(map);
	    var infow=[];
	    infow.push("<div style='background-color:#FFFFFF;border:2px solid #66cc66;border-radius:10px;padding:10px 10px;position:absolute;top:-10px;left:-5px;white-space:nowrap;color:#66cc66;font-size:18px'>华能国际电力电厂</div>")
	    marker4.setLabel({//label默认蓝框白底左上角显示，样式className为：amap-marker-label
	        offset: new AMap.Pixel(23, 5),//修改label相对于maker的位置
	        content: infow.join('')
	    });
        var info4=[];
	    info4.push("<h4><strong>华能国际电力股份有限公司电厂(实时数据)</strong></h4>");
	    info4.push("<table class='table table-bordered table-striped'>");
	    info4.push("<tr><td class='maptable' style='line-height:35px;'>排放量</td><td><div class='map-table-right' style='background-Color:#5cb85c;margin-left:10px;margin-top:4px;'>0.67亿</div></td></tr>");
	    info4.push("<tr><td class='maptable' style='line-height:35px;'>烟尘浓度</td><td><div class='map-table-right' style='background-Color:#5cb85c;margin-left:10px;margin-top:4px;'>8.42mg/m³</div></td></tr>");
	    info4.push("<tr><td class='maptable' style='line-height:35px;'>二氧化硫浓度</td><td><div class='map-table-right' style='background-Color:#5cb85c;margin-left:10px;margin-top:4px;'>60.51mg/m³</div></td></tr>");
	    info4.push("<tr><td class='maptable' style='line-height:35px;'>氮氧化物浓度</td><td><div class='map-table-right' style='background-Color:#5cb85c;margin-left:10px;margin-top:4px;'>82.75mg/m³</div></td></tr>");
	    info4.push("<tr><td class='maptable' style='line-height:35px;'>废气排放状况</td><td><div class='map-table-right' style='background-Color:#5cb85c;margin-left:10px;margin-top:4px;'>正常</div></td></tr>");
	    info4.push("</table>");
		var infowindow4 = new AMap.InfoWindow({
		     content: info4.join(''),
		     offset: new AMap.Pixel(0, -30),
		     size:new AMap.Size(320,0)
		})
		var clickHandle4 = AMap.event.addListener(marker4, 'click', function() {
		    infowindow4.open(map, marker4.getPosition())
		})

		//玖龙纸业
		
	    marker5.setMap(map);
	    var infow=[];
	    infow.push("<div style='background-color:#FFFFFF;border:2px solid #66cc66;border-radius:10px;padding:10px 10px;position:absolute;top:-10px;left:-5px;white-space:nowrap;color:#66cc66;font-size:18px'>玖龙纸业</div>")
	    marker5.setLabel({//label默认蓝框白底左上角显示，样式className为：amap-marker-label
	        offset: new AMap.Pixel(23, 5),//修改label相对于maker的位置
	        content: infow.join('')
	    });
        var info5=[];
	    info5.push("<h4><strong>玖龙纸业(太仓)有限公司(实时数据)</strong></h4>");
	    info5.push("<table class='table table-bordered table-striped'>");
	    info5.push("<tr><td class='maptable' style='line-height:35px;'>排放量</td><td><div class='map-table-right' style='background-Color:#5cb85c;margin-left:10px;margin-top:4px;'>0.12亿</div></td></tr>");
	    info5.push("<tr><td class='maptable' style='line-height:35px;'>烟尘浓度</td><td><div class='map-table-right' style='background-Color:#5cb85c;margin-left:10px;margin-top:4px;'>16.95mg/m³</div></td></tr>");
	    info5.push("<tr><td class='maptable' style='line-height:35px;'>二氧化硫浓度</td><td><div class='map-table-right' style='background-Color:#5cb85c;margin-left:10px;margin-top:4px;'>23.27mg/m³</div></td></tr>");
	    info5.push("<tr><td class='maptable' style='line-height:35px;'>氮氧化物浓度</td><td><div class='map-table-right' style='background-Color:#5cb85c;margin-left:10px;margin-top:4px;'>86.85mg/m³</div></td></tr>");
	    info5.push("<tr><td class='maptable' style='line-height:35px;'>废气排放状况</td><td><div class='map-table-right' style='background-Color:#5cb85c;margin-left:10px;margin-top:4px;'>正常</div></td></tr>");
	    info5.push("</table>");
		var infowindow5 = new AMap.InfoWindow({
		     content: info5.join(''),
		     offset: new AMap.Pixel(0, -30),
		     size:new AMap.Size(320,0)
		})
		var clickHandle5 = AMap.event.addListener(marker5, 'click', function() {
		    infowindow5.open(map, marker5.getPosition())
		})

        //太仓港协鑫发电
		
	    marker6.setMap(map);
	    var infow=[];
	    infow.push("<div style='background-color:#FFFFFF;border:2px solid #66cc66;border-radius:10px;padding:10px 10px;position:absolute;top:-10px;left:-5px;white-space:nowrap;color:#66cc66;font-size:18px'>太仓港协鑫发电</div>")
	    marker6.setLabel({//label默认蓝框白底左上角显示，样式className为：amap-marker-label
	        offset: new AMap.Pixel(23, 5),//修改label相对于maker的位置
	        content: infow.join('')
	    });
        var info6=[];
        info6.push("<h4><strong>太仓港协鑫发电有限公司(实时数据)</strong></h4>");
	    info6.push("<table class='table table-bordered table-striped'>");
	    info6.push("<tr><td class='maptable' style='line-height:35px;'>排放量</td><td><div class='map-table-right' style='background-Color:#5cb85c;margin-left:10px;margin-top:4px;'>0.36亿</div></td></tr>");
	    info6.push("<tr><td class='maptable' style='line-height:35px;'>烟尘浓度</td><td><div class='map-table-right' style='background-Color:#5cb85c;margin-left:10px;margin-top:4px;'>5.91mg/m³</div></td></tr>");
	    info6.push("<tr><td class='maptable' style='line-height:35px;'>二氧化硫浓度</td><td><div class='map-table-right' style='background-Color:#5cb85c;margin-left:10px;margin-top:4px;'>34.53mg/m³</div></td></tr>");
	    info6.push("<tr><td class='maptable' style='line-height:35px;'>氮氧化物浓度</td><td><div class='map-table-right' style='background-Color:#5cb85c;margin-left:10px;margin-top:4px;'>86.85mg/m³</div></td></tr>");
	    info6.push("<tr><td class='maptable' style='line-height:35px;'>废气排放状况</td><td><div class='map-table-right' style='background-Color:#5cb85c;margin-left:10px;margin-top:4px;'>正常</div></td></tr>");
	    info6.push("</table>");
		var infowindow6 = new AMap.InfoWindow({
		     content: info6.join(''),
		     offset: new AMap.Pixel(0, -30),
		     size:new AMap.Size(320,0)
		})
		var clickHandle6 = AMap.event.addListener(marker6, 'click', function() {
		    infowindow6.open(map, marker6.getPosition())
		})

		//国华太仓发电公司
		
	    marker7.setMap(map);
	    var infow=[];
	    infow.push("<div style='background-color:#FFFFFF;border:2px solid #66cc66;border-radius:10px;padding:10px 10px;position:absolute;top:-10px;left:-5px;white-space:nowrap;color:#66cc66;font-size:18px'>国华太仓发电公司</div>")
	    marker7.setLabel({//label默认蓝框白底左上角显示，样式className为：amap-marker-label
	        offset: new AMap.Pixel(23, 5),//修改label相对于maker的位置
	        content: infow.join('')
	    });
        var info7=[];
	    info7.push("<h4><strong>国华太仓发电有限公司(实时数据)</strong></h4>");
	    info7.push("<table class='table table-bordered table-striped'>");
        info7.push("<tr><td class='maptable' style='line-height:35px;'>排放量</td><td><div class='map-table-right' style='background-Color:#5cb85c;margin-left:10px;margin-top:4px;'>0.12亿</div></td></tr>");
	    info7.push("<tr><td class='maptable' style='line-height:35px;'>烟尘浓度</td><td><div class='map-table-right' style='background-Color:#5cb85c;margin-left:10px;margin-top:4px;'>2.13mg/m³</div></td></tr>");
	    info7.push("<tr><td class='maptable' style='line-height:35px;'>二氧化硫浓度</td><td><div class='map-table-right' style='background-Color:#5cb85c;margin-left:10px;margin-top:4px;'>30.15mg/m³</div></td></tr>");
	    info7.push("<tr><td class='maptable' style='line-height:35px;'>氮氧化物浓度</td><td><div class='map-table-right' style='background-Color:#5cb85c;margin-left:10px;margin-top:4px;'>70.63mg/m³</div></td></tr>");
	    info7.push("<tr><td class='maptable' style='line-height:35px;'>废气排放状况</td><td><div class='map-table-right' style='background-Color:#5cb85c;margin-left:10px;margin-top:4px;'>正常</div></td></tr>");
	    info7.push("</table>");
		var infowindow7 = new AMap.InfoWindow({
		     content: info7.join(''),
		     offset: new AMap.Pixel(0, -30),
		     size:new AMap.Size(320,0)
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
	   info1.push("<h4><strong>太仓监测站(明日空气质量)</strong></h4>");
	    info1.push("<table class='table table-bordered table-striped'>");
	    info1.push("<tr><td class='maptable' style='line-height:35px;'>AQI</td><td><div class='map-table-right' style='background-Color:#5cb85c;margin-left:2.5px;margin-top:4px;'>93</div></td></tr>");	    
	    info1.push("<tr><td class='maptable' style='line-height:35px;'>主要污染物</td><td><div class='map-table-right' style='background-Color:#5cb85c;margin-left:2.5px;margin-top:4px;'>PM2.5</div></td></tr>");
	    info1.push("<tr><td class='maptable' style='line-height:35px;'>PM2.5</td><td><div class='map-table-right' style='background-Color:#5cb85c;margin-left:2.5px;margin-top:4px;'>72</div></td></tr>");
	    info1.push("<tr><td class='maptable' style='line-height:35px;'>二氧化硫浓度</td><td><div class='map-table-right' style='background-Color:#5cb85c;margin-left:2.5px;margin-top:4px;'>54</div></td></tr>");
	    info1.push("<tr><td class='maptable' style='line-height:35px;'>空气质量状况</td><td><div class='map-table-right' style='background-Color:#5cb85c;margin-left:2.5px;margin-top:4px;'>优良</div></td></tr>");
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
	    info2.push("<h4><strong>科教新城监测站(明日空气质量)</strong></h4>");
	    info2.push("<table class='table table-bordered table-striped'>");
	    info2.push("<tr><td class='maptable' style='line-height:35px;'>AQI</td><td><div class='map-table-right' style='background-Color:#f0ad4e;margin-left:2.5px;margin-top:4px;'>110</div></td></tr>");	    
	    info2.push("<tr><td class='maptable' style='line-height:35px;'>主要污染物</td><td><div class='map-table-right' style='background-Color:#f0ad4e;margin-left:2.5px;margin-top:4px;'>PM2.5</div></td></tr>");
	    info2.push("<tr><td class='maptable' style='line-height:35px;'>PM2.5</td><td><div class='map-table-right' style='background-Color:#f0ad4e;margin-left:2.5px;margin-top:4px;'>83</div></td></tr>");
	    info2.push("<tr><td class='maptable' style='line-height:35px;'>二氧化硫浓度</td><td><div class='map-table-right' style='background-Color:#5cb85c;margin-left:2.5px;margin-top:4px;'>54</div></td></tr>");
	    info2.push("<tr><td class='maptable' style='line-height:35px;'>空气质量状况</td><td><div class='map-table-right' style='background-Color:#f0ad4e;margin-left:2.5px;margin-top:4px;'>轻度污染</div></td></tr>");
	    info2.push("</table>");
	    var infowindow2 = new AMap.InfoWindow({
	    content:  info2.join(''),
	    //offset: new AMap.Pixel(0,0),
	    size:new AMap.Size(300,0)
		})
		//infowindow2.open(map, marker2.getPosition());
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

  //盒子2, 盒子4
  var promise = qService.tokenHttpGet(rawFactory.query,{tableName:'airQualityData'});
  promise.then(function(rc) {

          $scope.aqi=rc.data[0];
          $scope.predictaqi=rc.data[1];
          $scope.date=rc.data[2];
          $scope.firstElement=rc.data[3];
          $scope.pm25=rc.data[4];
          $scope.pm10=rc.data[5];
          $scope.so2=rc.data[6];
          $scope.no2=rc.data[7];
          $scope.co=rc.data[8];
          $scope.o3=rc.data[9];
          $scope.datetime=rc.data[10];
          $scope.airQualityLevel=rc.data[11];
          $scope.healthEffect=rc.data[12];
          $scope.proposedMeasure=rc.data[13];
          //盒子2
          $scope.aqilinechart={
              options:{
                title: {
                      text: '过去七天空气质量AQI',
                      style: {
                      	fontWeight:'bold',
                      },
                      x:20
                  },
                  credits: {
                      enabled:false
                  },
                  xAxis: {
                      categories: $scope.date
                      // ['1月1日', '1月2日', '1月3日', '1月4日', '1月5日','1月6日','1月7日']
                  },
                  yAxis: {
                      title: {
                          text: '空气质量指数(AQI)值'
                      }
                  },
                  legend: {
                  itemStyle:{
                    fontWeight:'normal'
                      }
                  }
                },
                  series: [{
                      type: 'column',
                      name: '实际AQI值',
                      color:"#95ceff",
                      data: $scope.aqi
                  },  {
                      type: 'spline',
                      name: '预测AQI值',
                      color:"#1F1F1F",
                      data: $scope.predictaqi
                  }]
          };

          //盒子4
    });


    $scope.airQualityOptions = {

    	aqiOption:{
    		options : {
				chart: {
					type: 'gauge',
					plotBackgroundColor: null,
					plotBackgroundImage: null,
					plotBorderWidth: 0,
					plotShadow: false,
					width:200
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
					plotShadow: false,
					width:200
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
					plotShadow: false,
					width:200
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
					plotShadow: false,
					width:200
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
					plotShadow: false,
					width:200
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
					plotShadow: false,
					width:200
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
					plotShadow: false,
					width:200
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
            	chart: {
            		height:250
            	},
                title: {
                    text: null,
                },
                xAxis: {
                    categories: ['22时','23时','0时','1时','2时','3时','4时','5时','6时','7时','8时','9时'],
                    tickmarkPlacement: 'on'
                },
                yAxis: {
                    title: {
                        text: ''
                    },
                    min:0,
                    max:310,
                    plotLines : [{
						        color: '#DF5353',
		                width: 2,
		                value: 300,
                    dashStyle: 'Dot',
                    label:{
                    text:'严重污染',
                    align:'left',
                    x:10,
                     style: {
                            fontSize: '8px',
                            fontWeight: 200
                        }
                     }
					           },{
          					color: '#DDDF0D',
          		              width: 2,
          		              value: 100,
                            dashStyle: 'Dot',
                             label:{
                             text:'轻度污染',
                             align:'left',
                             x:10,
                             style: {
                            fontSize: '8px',
                            fontWeight: 200
                        }
                     }
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
                    categories: ['22时','23时','0时','1时','2时','3时','4时','5时','6时','7时','8时','9时'],
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
		                value: 75,
                    dashStyle: 'Dot',
                    label:{
                             text:'轻度污染',
                             align:'left',
                             x:10,
                             style: {
                            fontSize: '8px',
                            fontWeight: 200
                        }
                     }
					},{
						color: '#DF5353',
		                width: 2,
		                value: 150,
                    	dashStyle: 'Dot',
                      label:{
                             text:'严重污染',
                             align:'left',
                             x:10,
                             style: {
                            fontSize: '8px',
                            fontWeight: 200
                        }
                     }
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
                    categories: ['22时','23时','0时','1时','2时','3时','4时','5时','6时','7时','8时','9时'],
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
		                value: 150,
                    	dashStyle: 'Dot',
                      label:{
                             text:'轻度污染',
                             align:'left',
                             x:10,
                             style: {
                            fontSize: '8px',
                            fontWeight: 200
                        }
                     }
					},{
						color: '#DF5353',
		                width: 2,
		                value: 250,
                    	dashStyle: 'Dot',
                      label:{
                             text:'严重污染',
                             align:'left',
                             x:10,
                             style: {
                            fontSize: '8px',
                            fontWeight: 200
                        }
                     }
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
                    categories: ['22时','23时','0时','1时','2时','3时','4时','5时','6时','7时','8时','9时'],
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
		                value: 150,
                    	dashStyle: 'Dot',
                      label:{
                             text:'轻度污染',
                             align:'left',
                             x:10,
                             style: {
                            fontSize: '8px',
                            fontWeight: 200
                        }
                     }
					},{
						color: '#DF5353',
		                width: 2,
		                value: 475,
                    	dashStyle: 'Dot',
                      label:{
                             text:'严重污染',
                             align:'left',
                             x:10,
                             style: {
                            fontSize: '8px',
                            fontWeight: 200
                        }
                     }
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
                    categories: ['22时','23时','0时','1时','2时','3时','4时','5时','6时','7时','8时','9时'],
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
		                value: 80,
                    	dashStyle: 'Dot',
                      label:{
                             text:'轻度污染',
                             align:'left',
                             x:10,
                             style: {
                            fontSize: '8px',
                            fontWeight: 200
                        }
                     }
					},{
						color: '#DF5353',
		                width: 2,
		                value: 180,
                    	dashStyle: 'Dot',
                      label:{
                             text:'严重污染',
                             align:'left',
                             x:10,
                             style: {
                            fontSize: '8px',
                            fontWeight: 200
                        }
                     }
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
                    categories: ['22时','23时','0时','1时','2时','3时','4时','5时','6时','7时','8时','9时'],
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
		                value: 4,
                    	dashStyle: 'Dot',
                      label:{
                             text:'轻度污染',
                             align:'left',
                             x:10,
                             style: {
                            fontSize: '8px',
                            fontWeight: 200
                        }
                     }
					},{
						color: '#DF5353',
		                width: 2,
		                value: airQualityCoScan.scan[1],
                    	dashStyle: 'Dot',
                      label:{
                             text:'严重污染',
                             align:'left',
                             x:10,
                             style: {
                            fontSize: '8px',
                            fontWeight: 200
                        }
                     }

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
                    categories: ['22时','23时','0时','1时','2时','3时','4时','5时','6时','7时','8时','9时'],
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
		                value: 160,
                    	dashStyle: 'Dot',
                      label:{
                             text:'轻度污染',
                             align:'left',
                             x:10,
                             style: {
                            fontSize: '8px',
                            fontWeight: 200
                        }
                     }
					},{
						color: '#DF5353',
		                width: 2,
		                value: 215,
                    	dashStyle: 'Dot',
                      label:{
                             text:'严重污染',
                             align:'left',
                             x:10,
                             style: {
                            fontSize: '8px',
                            fontWeight: 200
                        }
                     }
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

 //盒子1
 $scope.temperature={
	 	options:{
	 	chart: {
			renderTo: 'container',
			type: 'spline',
			
			},
    legend: {
      itemStyle:{
      fontWeight:'normal'
      }
      }},
        title: {
            text: '未来七天最高最低气温',
            style: {
            fontWeight:'bold',
            },
            x:20
        },
        xAxis: {
            categories: ['1月9日', '1月10日', '1月11日', '1月12日', '1月13日', '1月14日','1月15日']
        },
        yAxis: {
            title: {
                text: '温度 (°C)'
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
            borderWidth: 0,
        },
        series: [{
        	name: "最高气温",
            data: [8, 9, 10, 9, 6, 6, 7]
        },  {
            name: '最低气温',
            data: [2, 5, 5, 8, -1, -1, 0]
        }]
    };

   
}]);









