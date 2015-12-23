'use strict';

app.controller('WaterCtrl', ['$scope', '$timeout' ,function($scope, $timeout) {

 var lalaData=[5,12,2.5,4];
 var bbData=[5,12,2.5,4];
 var ccData=[5,12,2.5,4];
    //高德地图初始化
    var map = new AMap.Map('map_wMap',{
        zoom: 12,
        center: [121.157687,31.583864]

    });

     var marker = new AMap.Marker({
        position: [121.187,31.6539],
        map:map
    });

    var marker1 = new AMap.Marker({
        position: [121.268,31.585],
        map:map
    });

    var marker2 = new AMap.Marker({
        position: [121.295,31.5368],
        map:map
    });

     var marker3 = new AMap.Marker({
        position: [121.228022,31.611651],
        map:map
    });

    var marker4 = new AMap.Marker({
        position: [121.092563,31.659607],
        map:map
    });

    var marker5 = new AMap.Marker({
        position: [121.227000,31.597000],
        map:map
    });

    var marker6 = new AMap.Marker({
        position: [121.244154,31.592104],
        map:map
    });

    var marker7 = new AMap.Marker({
        position: [121.247737,31.580187],
        map:map
    });

    var marker8 = new AMap.Marker({
        position: [121.278300,31.559400],
        map:map
    });

    marker.setLabel({//label默认蓝框白底左上角显示，样式className为：amap-marker-label
        offset: new AMap.Pixel(18, 3),//修改label相对于maker的位置
        content: "第二水厂"
    });

    marker1.setLabel({//label默认蓝框白底左上角显示，样式className为：amap-marker-label
        offset: new AMap.Pixel(18, 3),//修改label相对于maker的位置
        content: "协鑫码头"
    });

    marker2.setLabel({//label默认蓝框白底左上角显示，样式className为：amap-marker-label
        offset: new AMap.Pixel(18, 3),//修改label相对于maker的位置
        content: "第三水厂"
    });

    marker3.setLabel({//label默认蓝框白底左上角显示，样式className为：amap-marker-label
        offset: new AMap.Pixel(18, 3),//修改label相对于maker的位置
        content: "岳王污水处理厂"
    });

    marker4.setLabel({//label默认蓝框白底左上角显示，样式className为：amap-marker-label
        offset: new AMap.Pixel(18, 3),//修改label相对于maker的位置
        content: "璜泾镇污水处理厂"
    });

    marker5.setLabel({//label默认蓝框白底左上角显示，样式className为：amap-marker-label
        offset: new AMap.Pixel(18, 3),//修改label相对于maker的位置
        content: "太仓江城城市污水处理厂"
    });

    marker6.setLabel({//label默认蓝框白底左上角显示，样式className为：amap-marker-label
        offset: new AMap.Pixel(18, 3),//修改label相对于maker的位置
        content: "玖龙纸业"
    });

    marker7.setLabel({//label默认蓝框白底左上角显示，样式className为：amap-marker-label
        offset: new AMap.Pixel(18, 3),//修改label相对于maker的位置
        content: "港城组团"
    });

    marker8.setLabel({//label默认蓝框白底左上角显示，样式className为：amap-marker-label
        offset: new AMap.Pixel(18, 3),//修改label相对于maker的位置
        content: "浏河镇污水处理厂"
    });

     $scope.waterlist=function(){
        map.setZoomAndCenter(15, [121.268,31.585]);
     };
     $scope.alllist=function(){
        map.setZoomAndCenter(12, [121.157687,31.583864]);
     }
    var info=[];
    info.push("<h4><strong>第二水厂</strong></h4>");
    info.push("<table class='table table-bordered table-striped'>");
    info.push("<tr><td style='font-size:15px;width:125px'>溶解氧</td><td>1998.66</td></tr>");
    info.push("<tr><td style='font-size:15px'>高锰酸钾浓度</td><td>20.01</td></tr>");
    info.push("<tr><td style='font-size:15px'>氨氮浓度</td><td>0.37</td></tr>");
    info.push("<tr><td style='font-size:15px'>总磷浓度</td><td>0.09</td></tr>");
    info.push("<tr><td style='font-size:15px'>监测站状态</td><td><button type='button' class='btn btn-success' style='font-size:110%'>正常</button></td></tr>");
    info.push("</table>");
    var infowindow = new AMap.InfoWindow({
     content: info.join(''),
     offset: new AMap.Pixel(0, -30),
     size:new AMap.Size(250,0)
     })
    var clickHandle = AMap.event.addListener(marker, 'click', function() {
        infowindow.open(map, marker.getPosition())
    })

    var info1=[];
    info1.push("<h4><strong>协鑫码头</strong></h4>");
    info1.push("<table class='table table-bordered table-striped'>");
    info1.push("<tr><td style='font-size:15px;width:125px'>溶解氧</td><td>1960.20</td></tr>");
    info1.push("<tr><td style='font-size:15px'>高锰酸钾浓度</td><td>30.12</td></tr>");
    info1.push("<tr><td style='font-size:15px'>氨氮浓度</td><td>0.36</td></tr>");
    info1.push("<tr><td style='font-size:15px'>总磷浓度</td><td>0.08</td></tr>");
    info1.push("<tr><td style='font-size:15px'>监测站状态</td><td><button type='button' class='btn btn-success' style='font-size:110%'>正常</button></td></tr>");
    info1.push("</table>");
    var infowindow1 = new AMap.InfoWindow({
     content: info1.join(''),
     offset: new AMap.Pixel(0, -30),
     size:new AMap.Size(250,0)
     })
    var clickHandle1 = AMap.event.addListener(marker1, 'click', function() {
    infowindow1.open(map, marker1.getPosition())
    })

    var info2=[];
    info2.push("<h4><strong>第三水厂</strong></h4>");
    info2.push("<table class='table table-bordered table-striped'>");
    info2.push("<tr><td style='font-size:15px;width:125px'>溶解氧</td><td>1940.36</td></tr>");
    info2.push("<tr><td style='font-size:15px'>高锰酸钾浓度</td><td>31.20</td></tr>");
    info2.push("<tr><td style='font-size:15px'>氨氮浓度</td><td>0.32</td></tr>");
    info2.push("<tr><td style='font-size:15px'>总磷浓度</td><td>0.07</td></tr>");
    info2.push("<tr><td style='font-size:15px'>监测站状态</td><td><button type='button' class='btn btn-success' style='font-size:110%'>正常</button></td></tr>");
    info2.push("</table>");
    var infowindow2 = new AMap.InfoWindow({
     content: info2.join(''),
     offset: new AMap.Pixel(0, -30),
     size:new AMap.Size(250,0)
     })
    var clickHandle2 = AMap.event.addListener(marker2, 'click', function() {
    infowindow2.open(map, marker2.getPosition())
    })

    var info3=[];
    info3.push("<h4><strong>岳王污水处理厂</strong></h4>");
    info3.push("<table class='table table-bordered table-striped'>");
    info3.push("<tr><td style='font-size:15px;width:125px'>排放量</td><td>3002</td></tr>");
    info3.push("<tr><td style='font-size:15px'>COD浓度</td><td>25.01</td></tr>");
    info3.push("<tr><td style='font-size:15px'>氨氮浓度</td><td>0.36</td></tr>");
    info3.push("<tr><td style='font-size:15px'>总磷浓度</td><td>0.08</td></tr>");
    info3.push("<tr><td style='font-size:15px'>监测站状态</td><td><button type='button' class='btn btn-success' style='font-size:110%'>正常</button></td></tr>");
    info3.push("</table>");
    var infowindow3 = new AMap.InfoWindow({
     content: info3.join(''),
     offset: new AMap.Pixel(0, -30),
     size:new AMap.Size(250,0)
     })
    var clickHandle3 = AMap.event.addListener(marker3, 'click', function() {
    infowindow3.open(map, marker3.getPosition())
    })

    var info4=[];
    info4.push("<h4><strong>璜泾镇污水处理厂</strong></h4>");
    info4.push("<table class='table table-bordered table-striped'>");
    info4.push("<tr><td style='font-size:15px;width:125px'>排放量</td><td>2491.77</td></tr>");
    info4.push("<tr><td style='font-size:15px'>COD浓度</td><td>24.11</td></tr>");
    info4.push("<tr><td style='font-size:15px'>氨氮浓度</td><td>0.35</td></tr>");
    info4.push("<tr><td style='font-size:15px'>总磷浓度</td><td>0.08</td></tr>");
    info4.push("<tr><td style='font-size:15px'>监测站状态</td><td><button type='button' class='btn btn-success' style='font-size:110%'>正常</button></td></tr>");
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
    info5.push("<h4><strong>太仓江城城市污水处理有限公司</strong></h4>");
    info5.push("<table class='table table-bordered table-striped'>");
    info5.push("<tr><td style='font-size:15px;width:125px'>排放量</td><td>2600.36</td></tr>");
    info5.push("<tr><td style='font-size:15px'>COD浓度</td><td>23.32</td></tr>");
    info5.push("<tr><td style='font-size:15px'>氨氮浓度</td><td>0.31</td></tr>");
    info5.push("<tr><td style='font-size:15px'>总磷浓度</td><td>0.07</td></tr>");
    info5.push("<tr><td style='font-size:15px'>监测站状态</td><td><button type='button' class='btn btn-success' style='font-size:110%'>正常</button></td></tr>");
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
    info6.push("<h4><strong>玖龙纸业有限公司</strong></h4>");
    info6.push("<table class='table table-bordered table-striped'>");
    info6.push("<tr><td style='font-size:15px;width:125px'>排放量</td><td>2754</td></tr>");
    info6.push("<tr><td style='font-size:15px'>COD浓度</td><td>27.21</td></tr>");
    info6.push("<tr><td style='font-size:15px'>氨氮浓度</td><td>0.35</td></tr>");
    info6.push("<tr><td style='font-size:15px'>总磷浓度</td><td>0.08</td></tr>");
    info6.push("<tr><td style='font-size:15px'>监测站状态</td><td><button type='button' class='btn btn-success' style='font-size:110%'>正常</button></td></tr>");
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
    info7.push("<h4><strong>港城组团污水处理厂</strong></h4>");
    info7.push("<table class='table table-bordered table-striped'>");
    info7.push("<tr><td style='font-size:15px;width:125px'>排放量</td><td>2902</td></tr>");
    info7.push("<tr><td style='font-size:15px'>COD浓度</td><td>23.32</td></tr>");
    info7.push("<tr><td style='font-size:15px'>氨氮浓度</td><td>0.35</td></tr>");
    info7.push("<tr><td style='font-size:15px'>总磷浓度</td><td>0.07</td></tr>");
    info7.push("<tr><td style='font-size:15px'>监测站状态</td><td><button type='button' class='btn btn-success' style='font-size:110%'>正常</button></td></tr>");
    info7.push("</table>");
    var infowindow7 = new AMap.InfoWindow({
     content: info7.join(''),
     offset: new AMap.Pixel(0, -30),
     size:new AMap.Size(250,0)
     })
    var clickHandle7 = AMap.event.addListener(marker7, 'click', function() {
    infowindow7.open(map, marker7.getPosition())
    })

    var info8=[];
    info8.push("<h4><strong>浏河镇污水处理厂</strong></h4>");
    info8.push("<table class='table table-bordered table-striped'>");
    info8.push("<tr><td style='font-size:15px;width:125px'>排放量</td><td>2854</td></tr>");
    info8.push("<tr><td style='font-size:15px'>COD浓度</td><td>26.03</td></tr>");
    info8.push("<tr><td style='font-size:15px'>氨氮浓度</td><td>0.36</td></tr>");
    info8.push("<tr><td style='font-size:15px'>总磷浓度</td><td>0.08</td></tr>");
    info8.push("<tr><td style='font-size:15px'>监测站状态</td><td><button type='button' class='btn btn-success' style='font-size:110%'>正常</button></td></tr>");
    info8.push("</table>");
    var infowindow8 = new AMap.InfoWindow({
     content: info8.join(''),
     offset: new AMap.Pixel(0, -30),
     size:new AMap.Size(250,0)
     })
    var clickHandle8 = AMap.event.addListener(marker8, 'click', function() {
    infowindow8.open(map, marker8.getPosition())
    })

     // 添加工具条和比例尺
    AMap.plugin(['AMap.ToolBar','AMap.Scale'],function(){
    //TODO  创建控件并添加
    var toolBar = new AMap.ToolBar();
    var scale = new AMap.Scale();
    map.addControl(toolBar);
    map.addControl(scale);
    });

     $scope.tableStatus = {
            allWater1: true,
            allWater2: false,
            allWater3: false
        };

    $scope.mapTableStatus = {
        airQuality: false,
        airCondition: true

    };
//空气质量 Button点击事件
    $scope.airQualityBtn = function() {
        $scope.mapTableStatus = {
             airQuality: true,
            airCondition: true
        };
    };

var splinecolors=new Array('#3CB371','#000000','#87CEFA' );
    $scope.buttonMap2 = [{
        name: 1,
        label:  "协鑫码头",
        radio: "Left"
      }, {
        name: 2,
        label: "第三水厂",
        radio: "Middle"
      }, {
        name: 3,
        label:  "第二水厂",
        radio: "Right"
      }];


//水厂按钮事件触发
$scope.btn_click=function(btn){
   $scope.change(btn);
};
$scope.change=function(btn){
if(btn.name===1){
   // alert("111");
   $scope.tableStatus = {
            allWater1: true,
            allWater2: false,
            allWater3: false
        };
}
if(btn.name===2){
   // alert("111");
   $scope.tableStatus = {
            allWater1: false,
            allWater2: true,
            allWater3: false
        };
}
if(btn.name===3){
   // alert("111");
   $scope.tableStatus = {
            allWater1: false,
            allWater2: false,
            allWater3: true
        };
}
};


//协鑫码头水厂调节函数
$scope.selectedRange=100;
$scope.selectedRange1=100;
$scope.selectedRange2=100;
$scope.r=function(){
    return $scope.selectedRange;
};
function h(newValue,oldValue,scope){
    //console.log(newValue);
    o2Data[0]=Math.round((o2Data[0]+(newValue-oldValue)/150)*100)/100;
    //console.log(o2Data[0]);
    kmno4Data[0]=Math.round((kmno4Data[0]+(newValue-oldValue)/100)*100)/100;
    nh4nData[0]=Math.round((nh4nData[0]+(newValue-oldValue)/150)*100)/100;
    pData[0]=Math.round((pData[0]+(newValue-oldValue)/200)*100)/100;
   // console.log(o2Data[0]);
   // gdp[9]=(newValue*0.03)*50+18.3;
   lalaData[0]=Math.round((lalaData[0]+(newValue-oldValue)/150)*100)/100;
   lalaData[1]=Math.round((lalaData[1]+(newValue-oldValue)/100)*100)/100;
   lalaData[2]=Math.round((lalaData[2]+(newValue-oldValue)/150)*100)/100;
   lalaData[3]=Math.round((lalaData[3]+(newValue-oldValue)/100)*100)/100;
}
$scope.$watch($scope.r,h);

$scope.rr=function(){
    return $scope.selectedRange1;
};
$scope.rrr=function(){
    return $scope.selectedRange2;
};
function hh(newValue,oldValue,scope){
  //  console.log(newValue);
  //  console.log(oldValue);
    o2Data[0]=Math.round((o2Data[0]+(newValue-oldValue)/150)*100)/100;
    kmno4Data[0]=Math.round((kmno4Data[0]+(newValue-oldValue)/100)*100)/100;
    nh4nData[0]=Math.round((nh4nData[0]+(newValue-oldValue)/150)*100)/100;
    pData[0]=Math.round((pData[0]+(newValue-oldValue)/100)*100)/100;
   // popData[9]=(newValue*0.03)*50+194.1;
  //  gdp[9]=(newValue*0.03)*50+18.3;
    lalaData[0]=Math.round((lalaData[0]+(newValue-oldValue)/150)*100)/100;
    lalaData[1]=Math.round((lalaData[1]+(newValue-oldValue)/100)*100)/100;
    lalaData[2]=Math.round((lalaData[2]+(newValue-oldValue)/150)*100)/100;
    lalaData[3]=Math.round((lalaData[3]+(newValue-oldValue)/100)*100)/100;
}
function hhh(newValue,oldValue,scope){
   // console.log(newValue);
    o2Data[0]=Math.round((o2Data[0]+(newValue-oldValue)/100)*100)/100;
    kmno4Data[0]=Math.round((kmno4Data[0]+(newValue-oldValue)/100)*100)/100;
    nh4nData[0]=Math.round((nh4nData[0]+(newValue-oldValue)/150)*100)/100;
    pData[0]=Math.round((pData[0]+(newValue-oldValue)/100)*100)/100;
    lalaData[0]=Math.round((lalaData[0]+(newValue-oldValue)/100)*100)/100;
    lalaData[1]=Math.round((lalaData[1]+(newValue-oldValue)/100)*100)/100;
    lalaData[2]=Math.round((lalaData[2]+(newValue-oldValue)/150)*100)/100;
    lalaData[3]=Math.round((lalaData[3]+(newValue-oldValue)/100)*100)/100;

}
$scope.$watch($scope.rr,hh);
$scope.$watch($scope.rrr,hhh);

$scope.lala={
 options:{
 chart: {
            type: 'column'
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: ['溶解氧', '高锰酸钾', '氨氮', '总磷(/10)']
        },
        credits: {
            enabled: false
        }
    },
        series: [{
            name: '真实值',
            data:[5,12,2.5,4]
        },{
            name: '预测值',
            data: lalaData
        }]

};
//第三水厂
$scope.bb={
 options:{
 chart: {
            type: 'column'
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: ['溶解氧', '高锰酸钾', '氨氮', '总磷(/10)']
        },
        credits: {
            enabled: false
        }
    },
        series: [{
            name: '真实值',
            data:[5,12,2.5,4]
        },{
            name: '预测值',
            data: bbData
        }]

};
//第二水厂
$scope.cc={
 options:{
 chart: {
            type: 'column'
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: ['溶解氧', '高锰酸钾', '氨氮', '总磷(/10)']
        },
        credits: {
            enabled: false
        }
    },
        series: [{
            name: '真实值',
            data:[5,12,2.5,4]
        },{
            name: '预测值',
            data: ccData
        }]

};
//console.log(lalaData[0]);


//第三水厂调节函数
$scope.selectedRange4=100;
$scope.selectedRange3=100;
$scope.r2=function(){
    return $scope.selectedRange4;
};
function h2(newValue,oldValue,scope){
    //console.log(newValue);
    o2Data2[0]=Math.round((o2Data2[0]+(newValue-oldValue)/200)*100)/100;
    kmno4Data2[0]=Math.round((kmno4Data2[0]+(newValue-oldValue)/200)*100)/100;
    nh4nData2[0]=Math.round((nh4nData2[0]+(newValue-oldValue)/200)*100)/100;
    pData2[0]=Math.round((pData2[0]+(newValue-oldValue)/200)*100)/100;
    bbData[0]=Math.round((bbData[0]+(newValue-oldValue)/200)*100)/100;
    bbData[1]=Math.round((bbData[1]+(newValue-oldValue)/200)*100)/100;
    bbData[2]=Math.round((bbData[2]+(newValue-oldValue)/200)*100)/100;
    bbData[3]=Math.round((bbData[3]+(newValue-oldValue)/200)*100)/100;

   // console.log(o2Data[0]);
   // gdp[9]=(newValue*0.03)*50+18.3;
}
$scope.$watch($scope.r2,h2);

$scope.rr2=function(){
    return $scope.selectedRange3;
};
function hh2(newValue,oldValue,scope){
   // console.log(newValue);
    o2Data2[0]=Math.round((o2Data2[0]+(newValue-oldValue)/200)*100)/100;
    kmno4Data2[0]=Math.round((kmno4Data2[0]+(newValue-oldValue)/200)*100)/100;
    nh4nData2[0]=Math.round((nh4nData2[0]+(newValue-oldValue)/200)*100)/100;
    pData2[0]=Math.round((pData2[0]+(newValue-oldValue)/200)*100)/100;
    bbData[0]=Math.round((bbData[0]+(newValue-oldValue)/200)*100)/100;
    bbData[1]=Math.round((bbData[1]+(newValue-oldValue)/200)*100)/100;
    bbData[2]=Math.round((bbData[2]+(newValue-oldValue)/200)*100)/100;
    bbData[3]=Math.round((bbData[3]+(newValue-oldValue)/200)*100)/100;
   // popData[9]=(newValue*0.03)*50+194.1;
  //  gdp[9]=(newValue*0.03)*50+18.3;
}
$scope.$watch($scope.rr2,hh2);



//第二水厂调节函数
$scope.selectedRange5=100;
$scope.r1=function(){
    return $scope.selectedRange5;
};
function h1(newValue,oldValue,scope){
   // console.log(newValue);
    o2Data1[0]=Math.round((o2Data1[0]+(newValue-oldValue)/60)*100)/100;
    kmno4Data1[0]=Math.round((kmno4Data1[0]+(newValue-oldValue)/15)*100)/100;
    nh4nData1[0]=Math.round((nh4nData1[0]+(newValue-oldValue)/40)*100)/100;
    pData1[0]=Math.round((pData1[0]+(newValue-oldValue)/25)*100)/100;

    ccData[0]=Math.round((ccData[0]+(newValue-oldValue)/60)*100)/100;
    ccData[1]=Math.round((ccData[1]+(newValue-oldValue)/15)*100)/100;
    ccData[2]=Math.round((ccData[2]+(newValue-oldValue)/40)*100)/100;
    ccData[3]=Math.round((ccData[3]+(newValue-oldValue)/25)*100)/100;
    //console.log(o2Data[0]);
   // gdp[9]=(newValue*0.03)*50+18.3;
}
$scope.$watch($scope.r1,h1);





  var o2Data=[5];
  var kmno4Data=[12];
  var nh4nData=[2.5];
  var pData=[4];

  //第三个
   var o2Data2=[5];
  var kmno4Data2=[12];
  var nh4nData2=[2.5];
  var pData2=[4];

  //第二个
  var o2Data1=[5];
  var kmno4Data1=[12];
  var nh4nData1=[2.5];
  var pData1=[4];

  //协鑫码头的仪表盘
  //溶解氧
    //console.log($scope.chart11.series[0].data);
    $scope.chart11={
         options:{           
         chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false,
            width: 180,
            height: 180,
            margin: [30,0,0,10]
        },
        exporting: {
            enabled: false
        },
        title: {
            text: '溶解氧'
        },
        
        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
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
            max: 10,
            
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
                text: 'mg/L'
            },
            plotBands: [{
                from: 0,
                to: 2,
                color: '#55BF3B' // green
            }, {
                from: 2,
                to: 3,
                color: '#DDDF0D' // yellow
            }, {
                from: 3,
                to: 10,
                color: '#DF5353' // red
            }]        
        }
    },
        series: [{
            name: '溶解氧',
            data:  o2Data,
            tooltip: {
                valueSuffix: ' mg/L'
            }
        }]
    

    };  

    //高锰酸钾仪表盘
    $scope.chart12={
         options:{           
         chart: {
                    type: 'gauge',
                    plotBackgroundColor: null,
                    plotBackgroundImage: null,
                    plotBorderWidth: 0,
                    plotShadow: false,
                    width: 180,
                    height: 180,
                    margin: [30,0,0,10]
                },
                exporting: {
                    enabled: false
                },
                title: {
                    text: '高锰酸钾'
                },
                
                pane: {
                    startAngle: -150,
                    endAngle: 150,
                    background: [{
                        backgroundColor: {
                            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                            stops: [
                                [0, '#FFF'],
                                [1, '#333']
                            ]
                        },
                        borderWidth: 0,
                        outerRadius: '109%'
                    }, {
                        backgroundColor: {
                            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
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
                    max: 30,
                    
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
                        text: 'mg/L'
                    },
                    plotBands: [{
                        from: 0,
                        to: 10,
                        color: '#55BF3B' // green
                    }, {
                        from: 10,
                        to: 14,
                        color: '#DDDF0D' // yellow
                    }, {
                        from: 18,
                        to: 30,
                        color: '#DF5353' // red
                    }]        
                }
            },
                series: [{
                    name: '高锰酸钾',
                    data: kmno4Data,
                    tooltip: {
                        valueSuffix: ' mg/L'
                    }
                }]
            

        }; 
    //氨氮仪表盘
     $scope.chart13={
         options:{           
         chart: {
                    type: 'gauge',
                    plotBackgroundColor: null,
                    plotBackgroundImage: null,
                    plotBorderWidth: 0,
                    plotShadow: false,
                    width: 180,
                    height: 180,
                    margin: [30,0,0,10]
                },
                exporting: {
                    enabled: false
                },
                title: {
                    text: '氨氮'
                },
                
                pane: {
                    startAngle: -150,
                    endAngle: 150,
                    background: [{
                        backgroundColor: {
                            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                            stops: [
                                [0, '#FFF'],
                                [1, '#333']
                            ]
                        },
                        borderWidth: 0,
                        outerRadius: '109%'
                    }, {
                        backgroundColor: {
                            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
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
                    max: 5,
                    
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
                        text: 'mg/L'
                    },
                    plotBands: [{
                        from: 0,
                        to: 1.5,
                        color: '#55BF3B' // green
                    }, {
                        from: 1.5,
                        to: 2,
                        color: '#DDDF0D' // yellow
                    }, {
                        from: 2,
                        to: 5,
                        color: '#DF5353' // red
                    }]        
                }
            },
                series: [{
                    name: '氨氮',
                    data: nh4nData,
                    tooltip: {
                        valueSuffix: ' mg/L'
                    }
                }]
            

        };  
    //总磷仪表盘
     $scope.chart14={
        options:{           
         chart: {
                    type: 'gauge',
                    plotBackgroundColor: null,
                    plotBackgroundImage: null,
                    plotBorderWidth: 0,
                    plotShadow: false,
                    width: 180,
                    height: 180,
                    margin: [30,0,0,10]
                },
                exporting: {
                    enabled: false
                },
                title: {
                    text: '总磷'
                },
                
                pane: {
                    startAngle: -150,
                    endAngle: 150,
                    background: [{
                        backgroundColor: {
                            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                            stops: [
                                [0, '#FFF'],
                                [1, '#333']
                            ]
                        },
                        borderWidth: 0,
                        outerRadius: '109%'
                    }, {
                        backgroundColor: {
                            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
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
                    max: 6,
                    
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
                        text: 'km/h'
                    },
                    plotBands: [{
                        from: 0,
                        to: 3,
                        color: '#55BF3B' // green
                    }, {
                        from: 3,
                        to: 4,
                        color: '#DDDF0D' // yellow
                    }, {
                        from: 4,
                        to: 6,
                        color: '#DF5353' // red
                    }]        
                }
            },
                series: [{
                    name: '总磷',
                    data: pData,
                    tooltip: {
                        valueSuffix: ' mg/L'
                    }
                }]
            

        };  


        //第三水厂仪表盘数据
        //溶解氧仪表盘
         $scope.chart21={
         options:{           
         chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false,
            width: 180,
            height: 180,
            margin: [30,0,0,10]
        },
        exporting: {
            enabled: false
        },
        title: {
            text: '溶解氧',
        },
        
        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
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
            max: 10,
            
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
                text: 'mg/L'
            },
            plotBands: [{
                from: 0,
                to: 2,
                color: '#55BF3B' // green
            }, {
                from: 2,
                to: 3,
                color: '#DDDF0D' // yellow
            }, {
                from: 3,
                to: 10,
                color: '#DF5353' // red
            }]        
        }
    },
        series: [{
            name: '溶解氧',
            data:  o2Data2,
            tooltip: {
                valueSuffix: ' mg/L'
            }
        }]
    

};  

       //高锰酸钾仪表盘    
        $scope.chart22={
                  options:{           
         chart: {
                    type: 'gauge',
                    plotBackgroundColor: null,
                    plotBackgroundImage: null,
                    plotBorderWidth: 0,
                    plotShadow: false,
                    width: 180,
                    height: 180,
                    margin: [30,0,0,10]
                },
                
                title: {
                    text: '高锰酸钾'
                },
                exporting: {
                    enabled: false
                },
                pane: {
                    startAngle: -150,
                    endAngle: 150,
                    background: [{
                        backgroundColor: {
                            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                            stops: [
                                [0, '#FFF'],
                                [1, '#333']
                            ]
                        },
                        borderWidth: 0,
                        outerRadius: '109%'
                    }, {
                        backgroundColor: {
                            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
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
                    max: 30,
                    
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
                        text: 'mg/L'
                    },
                    plotBands: [{
                        from: 0,
                        to: 10,
                        color: '#55BF3B' // green
                    }, {
                        from: 10,
                        to: 14,
                        color: '#DDDF0D' // yellow
                    }, {
                        from: 18,
                        to: 30,
                        color: '#DF5353' // red
                    }]        
                }
            },
                series: [{
                    name: '高锰酸钾',
                    data: kmno4Data2,
                    tooltip: {
                        valueSuffix: ' mg/L'
                    }
                }]
            

        };   
        //氨氮含量仪表盘
         $scope.chart23={
                 options:{           
         chart: {
                    type: 'gauge',
                    plotBackgroundColor: null,
                    plotBackgroundImage: null,
                    plotBorderWidth: 0,
                    plotShadow: false,
                    width: 180,
                    height: 180,
                    margin: [30,0,0,10]
                },
                exporting: {
                    enabled: false
                },
                title: {
                    text: '氨氮'
                },
                
                pane: {
                    startAngle: -150,
                    endAngle: 150,
                    background: [{
                        backgroundColor: {
                            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                            stops: [
                                [0, '#FFF'],
                                [1, '#333']
                            ]
                        },
                        borderWidth: 0,
                        outerRadius: '109%'
                    }, {
                        backgroundColor: {
                            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
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
                    max: 5,
                    
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
                        text: 'mg/L'
                    },
                    plotBands: [{
                        from: 0,
                        to: 1.5,
                        color: '#55BF3B' // green
                    }, {
                        from: 1.5,
                        to: 2,
                        color: '#DDDF0D' // yellow
                    }, {
                        from: 2,
                        to: 5,
                        color: '#DF5353' // red
                    }]        
                }
            },
                series: [{
                    name: '氨氮',
                    data: nh4nData2,
                    tooltip: {
                        valueSuffix: ' mg/L'
                    }
                }]
            

        }; 
        //总磷含量仪表盘
         $scope.chart24={
         options:{           
         chart: {
                    type: 'gauge',
                    plotBackgroundColor: null,
                    plotBackgroundImage: null,
                    plotBorderWidth: 0,
                    plotShadow: false,
                    width: 180,
                    height: 180,
                    margin: [30,0,0,10]
                },
                exporting: {
                    enabled: false
                },
                title: {
                    text: '总磷'
                },
                
                pane: {
                    startAngle: -150,
                    endAngle: 150,
                    background: [{
                        backgroundColor: {
                            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                            stops: [
                                [0, '#FFF'],
                                [1, '#333']
                            ]
                        },
                        borderWidth: 0,
                        outerRadius: '109%'
                    }, {
                        backgroundColor: {
                            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
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
                    max: 6,
                    
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
                        text: 'mg/L'
                    },
                    plotBands: [{
                        from: 0,
                        to: 3,
                        color: '#55BF3B' // green
                    }, {
                        from: 3,
                        to: 4,
                        color: '#DDDF0D' // yellow
                    }, {
                        from: 4,
                        to: 6,
                        color: '#DF5353' // red
                    }]        
                }
            },
                series: [{
                    name: '总磷',
                    data: pData2,
                    tooltip: {
                        valueSuffix: ' mg/L'
                    }
                }]
            

        };



        //第二水厂仪表盘数据
        $scope.chart31={
         options:{           
         chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false,
            width: 180,
            height: 180,
            margin: [30,0,0,10]
        },
        exporting: {
            enabled: false
        },
        title: {
            text: '溶解氧'
        },
        
        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
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
            max: 10,
            
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
                text: 'mg/L'
            },
            plotBands: [{
                from: 0,
                to: 2,
                color: '#55BF3B' // green
            }, {
                from: 2,
                to: 3,
                color: '#DDDF0D' // yellow
            }, {
                from: 3,
                to: 10,
                color: '#DF5353' // red
            }]        
        }
    },
        series: [{
            name: '溶解氧',
            data:  o2Data1,
            tooltip: {
                valueSuffix: ' mg/L'
            }
        }]
    

};  

      //高锰酸钾仪表盘
         $scope.chart32={
         options:{           
         chart: {
                    type: 'gauge',
                    plotBackgroundColor: null,
                    plotBackgroundImage: null,
                    plotBorderWidth: 0,
                    plotShadow: false,
                    width: 180,
                    height: 180,
                    margin: [30,0,0,10]
                },
                exporting: {
                    enabled: false
                },
                title: {
                    text: '高锰酸钾'
                },
                
                pane: {
                    startAngle: -150,
                    endAngle: 150,
                    background: [{
                        backgroundColor: {
                            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                            stops: [
                                [0, '#FFF'],
                                [1, '#333']
                            ]
                        },
                        borderWidth: 0,
                        outerRadius: '109%'
                    }, {
                        backgroundColor: {
                            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
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
                    max: 30,
                    
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
                        text: 'mg/L'
                    },
                    plotBands: [{
                        from: 0,
                        to: 10,
                        color: '#55BF3B' // green
                    }, {
                        from: 10,
                        to: 14,
                        color: '#DDDF0D' // yellow
                    }, {
                        from: 18,
                        to: 30,
                        color: '#DF5353' // red
                    }]        
                }
            },
                series: [{
                    name: '高锰酸钾',
                    data: kmno4Data1,
                    tooltip: {
                        valueSuffix: ' mg/L'
                    }
                }]
            

        }; 
        //氨氮仪表盘
         $scope.chart33={
         options:{           
         chart: {
                    type: 'gauge',
                    plotBackgroundColor: null,
                    plotBackgroundImage: null,
                    plotBorderWidth: 0,
                    plotShadow: false,
                    width: 180,
                    height: 180,
                    margin: [30,0,0,10]
                },
                exporting: {
                    enabled: false
                },
                title: {
                    text: '氨氮'
                },
                
                pane: {
                    startAngle: -150,
                    endAngle: 150,
                    background: [{
                        backgroundColor: {
                            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                            stops: [
                                [0, '#FFF'],
                                [1, '#333']
                            ]
                        },
                        borderWidth: 0,
                        outerRadius: '109%'
                    }, {
                        backgroundColor: {
                            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
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
                    max: 5,
                    
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
                        text: 'mg/L'
                    },
                    plotBands: [{
                        from: 0,
                        to: 1.5,
                        color: '#55BF3B' // green
                    }, {
                        from: 1.5,
                        to: 2,
                        color: '#DDDF0D' // yellow
                    }, {
                        from: 2,
                        to: 5,
                        color: '#DF5353' // red
                    }]        
                }
            },
                series: [{
                    name: '氨氮',
                    data: nh4nData1,
                    tooltip: {
                        valueSuffix: ' mg/L'
                    }
                }]
            

        };  
    //总磷仪表盘
         $scope.chart34={
         options:{           
         chart: {
                    type: 'gauge',
                    plotBackgroundColor: null,
                    plotBackgroundImage: null,
                    plotBorderWidth: 0,
                    plotShadow: false,
                    width: 180,
                    height: 180,
                    margin: [30,0,0,10]
                },
                exporting: {
                    enabled: false
                },
                title: {
                    text: '总磷'
                },
                
                pane: {
                    startAngle: -150,
                    endAngle: 150,
                    background: [{
                        backgroundColor: {
                            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                            stops: [
                                [0, '#FFF'],
                                [1, '#333']
                            ]
                        },
                        borderWidth: 0,
                        outerRadius: '109%'
                    }, {
                        backgroundColor: {
                            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
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
                    max: 6,
                    
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
                        text: 'mg/L'
                    },
                    plotBands: [{
                        from: 0,
                        to: 3,
                        color: '#55BF3B' // green
                    }, {
                        from: 3,
                        to: 4,
                        color: '#DDDF0D' // yellow
                    }, {
                        from: 4,
                        to: 6,
                        color: '#DF5353' // red
                    }]        
                }
            },
                series: [{
                    name: '总磷',
                    data: pData1,
                    tooltip: {
                        valueSuffix: ' mg/L'
                    }
                }]
            

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
                var myChart = ec.init(document.getElementById('discharge')); 
                
                var option = {
            title : {
                text: '太仓市污水分时段排放量',
                subtext: ''
            },
            tooltip : {
                trigger: 'axis'
            },
            legend: {
                data:['排放量']
            },
            toolbox: {
                show : true,
                feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    magicType : {show: true, type: ['line', 'bar']},
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    data : ['1时','2时','3时','4时','5时','6时','7时','8时','9时','10时','11时','12时']
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
          
                {
                    name:'废水排放量',
                    type:'bar',
                    data:[41316.379, 41739.668, 40126.664, 39762.43, 41144.68, 39966.195, 39523.172, 40884.328, 41141.418, 37959.043, 37114.941, 38395.945],
                    markPoint : {
                        data : [
                            {name : '过去12小时最高值', value : 41739.668, xAxis: 1, yAxis: 41739.668, symbolSize:30},
                            {name : '过去12小时最低值', value : 37114.941, xAxis: 10, yAxis: 37114.941,symbolSize:30}
                        ]
                    },
                    markLine : {
                        data : [
                            {type : 'average', name : '平均值'}
                        ]
                    }
                }
            ]
        };
                
                        // 为echarts对象加载数据 
                        myChart.setOption(option); 
                    }
                );  
        },0);





          
        }]);
