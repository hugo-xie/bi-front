'use strict';

app.controller('PopulationStructureCtrl', function($scope) {
  var columnColors = new Array( '#87CEFA','#929bce','#0787C8', '#465296');
  var pieColors = new Array('#3795BC', '#FB9705');  //'#0787C8', '#1FC22B'
 // var lineColors = new Array('#0787C8', '#1FC22B');
  //var compareColors = new Array('#3795BC', '#FB9705', '#195489', '#F26200')

  //var population_prediction_year
  //var current_age_distribution
  //var prediction_age_distribution
 // var age_ration;



  //var divisor = 10000;

  // set current Date; use fake date.
  // var time = new Date();
  // var year = time.getUTCFullYear();
  //  to-do : year should be set



var map = new AMap.Map('conMap');
map.setZoom(12);
map.setCenter([121.10, 31.45]);

//
 
AMap.plugin(['AMap.ToolBar','AMap.Scale'],function(){
    var toolBar = new AMap.ToolBar();
    var scale = new AMap.Scale();
    map.addControl(toolBar);
    map.addControl(scale);
});




 var marker1 = new AMap.Marker({
        position: [121.046329, 31.471813],   //新湖镇
        map:map,
        icon: new AMap.Icon({            
          size: new AMap.Size(40, 50),  //图标大小
          image: "/images/marker_sprite.png",
        })        
    });
 marker1.setMap(map);
    // 设置鼠标划过点标记显示的文字提示
    marker1.setTitle('');
var infow=[];
infow.push("<div style='background-color:#FFFFFF;border:2px solid #CC0033;border-radius:10px;padding:10px 10px;position:absolute;top:-10px;left:-5px;white-space:nowrap;color:#CC0033;font-size:18px'>新湖镇</div>")
    // 设置label标签
    marker1.setLabel({//label默认蓝框白底左上角显示，样式className为：amap-marker-label
        offset: new AMap.Pixel(20, 20),//修改label相对于maker的位置
        content: infow.join('')
    });
 var marker5 = new AMap.Marker({
        position: [121.070907, 31.556999],   //沙溪镇
        map:map,
        icon: new AMap.Icon({            
          size: new AMap.Size(40, 50),  //图标大小
          image: "/images/marker_sprite.png",
        })
    });
 var infow5=[];
infow5.push("<div style='background-color:#FFFFFF;border:2px solid #66cc66;border-radius:10px;padding:10px 10px;position:absolute;top:-10px;left:-5px;white-space:nowrap;color:#66cc66;font-size:18px'>沙溪镇</div>")
    // 设置label标签
    marker5.setLabel({//label默认蓝框白底左上角显示，样式className为：amap-marker-label
        offset: new AMap.Pixel(20, 20),//修改label相对于maker的位置
        content: infow5.join('')
    });
 var marker4 = new AMap.Marker({            //板桥镇
        position: [121.134911, 31.491627],
        map:map,
        icon: new AMap.Icon({            
          size: new AMap.Size(40, 50),  //图标大小
          image: "/images/marker_sprite.png",
        })
    });
  var infow4=[];
infow4.push("<div style='background-color:#FFFFFF;border:2px solid #CC0033;border-radius:10px;padding:10px 10px;position:absolute;top:-10px;left:-5px;white-space:nowrap;color:#CC0033;font-size:18px'>板桥镇</div>")
    // 设置label标签
    marker4.setLabel({//label默认蓝框白底左上角显示，样式className为：amap-marker-label
        offset: new AMap.Pixel(20, 20),//修改label相对于maker的位置
        content: infow4.join('')
    });
  var marker2 = new AMap.Marker({
        position: [121.276413, 31.515122], //浏河镇
        map:map,
        icon: new AMap.Icon({            
          size: new AMap.Size(40, 50),  //图标大小
          image: "/images/marker_sprite.png",
        })
    });
   var infow2=[];
infow2.push("<div style='background-color:#FFFFFF;border:2px solid #66cc66;border-radius:10px;padding:10px 10px;position:absolute;top:-10px;left:-5px;white-space:nowrap;color:#66cc66;font-size:18px'>浏河镇</div>")
    // 设置label标签
    marker2.setLabel({//label默认蓝框白底左上角显示，样式className为：amap-marker-label
        offset: new AMap.Pixel(20, 20),//修改label相对于maker的位置
        content: infow2.join('')
    });
   var marker3 = new AMap.Marker({
        position: [121.10, 31.45],  //太仓市
        map:map,
        icon: new AMap.Icon({            
          size: new AMap.Size(40, 50),  //图标大小
          image: "/images/marker_sprite.png",
        })
    });
   var infow3=[];
infow3.push("<div style='background-color:#FFFFFF;border:2px solid #66cc66;border-radius:10px;padding:10px 10px;position:absolute;top:-10px;left:-5px;white-space:nowrap;color:#66cc66;font-size:18px'>太仓城区</div>")
    // 设置label标签
    marker3.setLabel({//label默认蓝框白底左上角显示，样式className为：amap-marker-label
        offset: new AMap.Pixel(20, 20),//修改label相对于maker的位置
        content: infow3.join('')
    });
   var marker6 = new AMap.Marker({
        position: [121.190549, 31.467665],  //陆渡镇
        map:map,
        icon: new AMap.Icon({            
          size: new AMap.Size(40, 50),  //图标大小
          image: "/images/marker_sprite.png",
        })
    });
   var infow6=[];
infow6.push("<div style='background-color:#FFFFFF;border:2px solid #66cc66;border-radius:10px;padding:10px 10px;position:absolute;top:-10px;left:-5px;white-space:nowrap;color:#66cc66;font-size:18px'>陆渡镇</div>")
    // 设置label标签
    marker6.setLabel({//label默认蓝框白底左上角显示，样式className为：amap-marker-label
        offset: new AMap.Pixel(20, 20),//修改label相对于maker的位置
        content: infow6.join('')
    });
   var marker7 = new AMap.Marker({
        position: [121.106514, 31.649675],  //璜泾镇
        map:map,
        icon: new AMap.Icon({            
          size: new AMap.Size(40, 50),  //图标大小
          image: "/images/marker_sprite.png",
        })
    });
   var infow7=[];
infow7.push("<div style='background-color:#FFFFFF;border:2px solid #CC0033;border-radius:10px;padding:10px 10px;position:absolute;top:-10px;left:-5px;white-space:nowrap;color:#CC0033;font-size:18px'>璜泾镇</div>")
    // 设置label标签
    marker7.setLabel({//label默认蓝框白底左上角显示，样式className为：amap-marker-label
        offset: new AMap.Pixel(20, 20),//修改label相对于maker的位置
        content: infow7.join('')
    });
//显示信息窗体(可单击位置显示隐藏的信息窗体)
var info1=[];
   info1.push("<h4><strong>新湖镇人口自然增长率</strong></h4>");
    info1.push("<table class='table table-bordered table-striped'>");
    info1.push("<tr><td style='font-size:15px;text-align:center'>出生率</td><td style='text-align:center'>6.31‰</td></tr>");
    info1.push("<tr><td style='font-size:15px;text-align:center'>死亡率</td><td style='text-align:center'>6.34‰</td></tr>");
    info1.push("<tr><td style='font-size:15px;text-align:center'>人口自然增长率</td><td style='text-align:center'>-0.03‰</td></tr>");
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
   info2.push("<h4><strong>浏河镇人口自然增长率</strong></h4>");
    info2.push("<table class='table table-bordered table-striped'>");
    info2.push("<tr><td style='font-size:15px;width:150px;text-align:center'>出生率</td><td style='text-align:center'>8.05‰</td></tr>");
    info2.push("<tr><td style='font-size:15px;text-align:center'>死亡率</td><td style='text-align:center'>7.95‰</td></tr>");
    info2.push("<tr><td style='font-size:15px;text-align:center'>人口自然增长率</td><td style='text-align:center'>0.1‰</td></tr>");
    info2.push("</table>");
var infowindow2 = new AMap.InfoWindow({
     content: info2.join(''),
     offset: new AMap.Pixel(0, -30),
     size:new AMap.Size(300,0)
})
var clickHandle2 = AMap.event.addListener(marker2, 'click', function() {
    infowindow2.open(map, marker2.getPosition())
})

var info3=[];
   info3.push("<h4><strong>太仓城区人口自然增长率</strong></h4>");
    info3.push("<table class='table table-bordered table-striped'>");
    info3.push("<tr><td style='font-size:15px;text-align:center'>出生率</td><td>8.34‰</td style='text-align:center'></tr>");
    info3.push("<tr><td style='font-size:15px;text-align:center'>死亡率</td><td>8.12‰</td style='text-align:center'></tr>");
    info3.push("<tr><td style='font-size:15px;text-align:center'>人口自然增长率</td><td style='text-align:center'>0.22‰</td></tr>");
    info3.push("</table>");
var infowindow3 = new AMap.InfoWindow({
     content: info3.join(''),
     offset: new AMap.Pixel(0, -30),
     size:new AMap.Size(300,0)
})
infowindow3.open(map, marker3.getPosition());
var clickHandle3 = AMap.event.addListener(marker3, 'click', function() {
    infowindow3.open(map, marker3.getPosition())
})

var info4=[];
    info4.push("<h4><strong>板桥镇人口自然增长率</strong></h4>");
    info4.push("<table class='table table-bordered table-striped'>");
    info4.push("<tr><td style='font-size:15px;text-align:center'>出生率</td><td style='text-align:center'>7.54‰</td></tr>");
    info4.push("<tr><td style='font-size:15px;text-align:center'>死亡率</td><td style='text-align:center'>7.85‰</td></tr>");
    info4.push("<tr><td style='font-size:15px;text-align:center'>人口自然增长率</td><td style='text-align:center'>-0.31‰</td></tr>");
    info4.push("</table>");
var infowindow4 = new AMap.InfoWindow({
     content: info4.join(''),
     offset: new AMap.Pixel(0, -30),
     size:new AMap.Size(300,0)
})
var clickHandle4 = AMap.event.addListener(marker4, 'click', function() {
    infowindow4.open(map, marker4.getPosition())
})

var info5=[];
   info5.push("<h4><strong>沙溪镇人口自然增长率</strong></h4>");
    info5.push("<table class='table table-bordered table-striped'>");
    info5.push("<tr><td style='font-size:15px;text-align:center'>出生率</td><td style='text-align:center'>8.11‰</td></tr>");
    info5.push("<tr><td style='font-size:15px;text-align:center'>死亡率</td><td style='text-align:center'>7.98‰</td></tr>");
    info5.push("<tr><td style='font-size:15px;text-align:center'>人口自然增长率</td><td style='text-align:center'>0.13‰</td></tr>");
    info5.push("</table>");
var infowindow5 = new AMap.InfoWindow({
     content: info5.join(''),
     offset: new AMap.Pixel(0, -30),
     size:new AMap.Size(300,0)
})
var clickHandle5 = AMap.event.addListener(marker5, 'click', function() {
    infowindow5.open(map, marker5.getPosition())
})

var info6=[];
   info6.push("<h4><strong>陆渡镇人口自然增长率</strong></h4>");
    info6.push("<table class='table table-bordered table-striped'>");
    info6.push("<tr><td style='font-size:15px;text-align:center'>出生率</td><td style='text-align:center'>8.54‰</td></tr>");
    info6.push("<tr><td style='font-size:15px;text-align:center'>死亡率</td><td style='text-align:center'>8.24‰</td></tr>");
    info6.push("<tr><td style='font-size:15px;text-align:center'>人口自然增长率</td><td style='text-align:center'>0.3‰</td></tr>");
    info6.push("</table>");
var infowindow6 = new AMap.InfoWindow({
     content: info6.join(''),
     offset: new AMap.Pixel(0, -30),
     size:new AMap.Size(300,0)
})
var clickHandle6 = AMap.event.addListener(marker6, 'click', function() {
    infowindow6.open(map, marker6.getPosition())
})
var info7=[];
   info7.push("<h4><strong>璜泾镇人口自然增长率</strong></h4>");
    info7.push("<table class='table table-bordered table-striped'>");
    info7.push("<tr><td style='font-size:15px;text-align:center'>出生率</td><td style='text-align:center'>8.34‰</td></tr>");
    info7.push("<tr><td style='font-size:15px;text-align:center'>死亡率</td><td style='text-align:center'>8.54‰</td></tr>");
    info7.push("<tr><td style='font-size:15px;text-align:center'>人口自然增长率</td><td style='text-align:center'>-0.2‰</td></tr>");
    info7.push("</table>");
var infowindow7 = new AMap.InfoWindow({
     content: info7.join(''),
     offset: new AMap.Pixel(0, -30),
     size:new AMap.Size(300,0)
})
var clickHandle7 = AMap.event.addListener(marker7, 'click', function() {
    infowindow7.open(map, marker7.getPosition())
})
//var heatmap;
var points =[
    {"lng":121.10,"lat":31.45,"count":30},
    {"lng":121.046329,"lat":31.471813,"count":90},
    {"lng":121.135737,"lat":31.491485,"count":12},
    {"lng":121.134911,"lat":31.491627,"count":100},
    {"lng":121.276413,"lat":31.515122,"count":50},
    {"lng":121.106514,"lat":31.649675,"count":15},
    {"lng":121.070907,"lat":31.556999,"count":16},
   // {"lng":121.118541,"lat":31.592205,"count":16},  //金浪镇
    {"lng":121.190549,"lat":31.467665,"count":16}
];
/* map.plugin(["AMap.Heatmap"], function() {
        //初始化heatmap对象
        heatmap = new AMap.Heatmap(map, {
            radius: 50, //给定半径
            opacity: [0, 0.8],
         
            gradient:{
             0.5: 'blue',
             0.65: 'rgb(117,211,248)',
             0.7: 'rgb(0, 255, 0)',
             0.9: '#ffea00',
             1.0: 'red'
             
             }
        });
        //设置数据集：该数据为北京部分“公园”数据
        heatmap.setDataSet({
            data: points,
            max: 100
        });
    });
    //判断浏览区是否支持canvas
    function isSupportCanvas() {
        var elem = document.createElement('canvas');
        return !!(elem.getContext && elem.getContext('2d'));
    }

 */



 
  $scope.buttonMap = [{
        name: 2020,
        label: 2020 + "年人口结构预测",
       
      }, {
        name: 2025,
        label: 2025 + "年人口结构预测",
       
      },
       {
        name: 2030,
        label: 2030 + "年人口结构预测",
       
      },
       {
        name: 2035,
        label: 2035 + "年人口结构预测",
       
      },
       {
        name: 2040,
        label: 2040 + "年人口结构预测",
        
      }, {
        name: 2045,
        label: 2045 + "年人口结构预测",
        
      }];

    $scope.buttonMap1 = [{
        name: 2025,
        label: 2025 + "年人口总量预测",
        radio: "Left"
      }, {
        name: 2035,
        label: 2035 + "年人口总量预测",
        radio: "Middle"
      }, {
        name: 2045,
        label: 2045 + "年人口总量预测",
        radio: "Right"
      }];
  $scope.btn_click=function(btn){
    $scope.change(btn);
  };
  $scope.change=function(btn){
  //  var columnColors = new Array('#7CADDF', '#327EBD', '#195489', '#1FC22B', '#FB9705', '#F26200');
     if(btn.name===2020){
        document.getElementById('abc').innerHTML='&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp太仓市人口结构持续老龄化；其中，60岁及以上人口比例从2015的 5% 增加到2025的 7%。';
        $scope.age_ration.options.colors=columnColors;
        $scope.age_ration.options.title.text="太仓市人口结构预测2015/2020年龄层比例图";
        $scope.age_ration.series=[{
            name: '当前男性比例',
            data: [5, 3, 4, 7, 2,5,6,3,3,7,2],
            stack: 'male'
        },{
            name: '当前女性比例',
            data: [2, 5, 6, 2, 1,2, 5, 6, 2, 1,3],
            stack: 'male'
        },{
            name: '预测男性比例',
            data: [3, 4, 4, 2, 5,3, 4, 4, 2, 5,4],
            stack: 'female'
        },{
            name: '预测女性比例',
            data: [3, 2, 4, 4, 3,3, 2, 4, 4, 3,3],
            stack: 'female'
        }];
        $scope.population_prediction_year.options.title.text="太仓市2020年常住人口结构图";
        $scope.population_prediction_year.series=[{
                name: '男性',
                data: [-1508, -1483, -1573, -1624, -1674, -1792, -1670,
                    -1548, -1840, -1594, -1498, -1398, -1363, -1352,
                    
                    -1308, -1447, -1720, -1343, -1543, -1473, -1815,
                    -1622, -1741, -1880, -1841, -1882, -2019, -2089,-2247, -2442, -2735, -2881, -3215, -3758, -4048,
                    -3637, -2003, -2386, -3854, -3929, -2463, -3570,-3443, -3818, -4205, -3766, -3469, -3996, -4640,
                    -4410, -4607, -3387, -4052, -4137, -5623, -4715,
                    
                    -1874, -2844, -2690, -3269, -3368, -3854, -3894,
                    -4628, -4299, -4834, -3924, -2998, -3170, -3084,-3045, -2858, -2409, -2299, -1849, -1843, -2064,
                    -1447, -1248, -1385, -1190, -1254, -1070, -1026,-1133, -880, -690, -890, -733, -740, -605,
                    -537, -551, -396, -288, -266, -201, -182,
                    -110, -83, -182]
            }, {
                name: '女性',
                data: [1529, 1555, 1571, 1668, 1785, 1776, 1671, 1654,
                    1892, 1591, 1571, 1419, 1312, 1467, 1379, 1531,
                    1730, 1366, 1613, 1638, 1739,1665, 1819, 1927, 1930, 1836, 2083, 2184, 2215,
                    2215, 2508, 2629, 2689, 3296, 3545, 3129, 1543,
                    1863, 3391, 3439, 2270, 3196,3153, 3114, 3072, 3398, 3888, 3604, 3173, 3788,
                    4512, 4235, 4592, 3407, 4134, 4112, 4073, 5550,
                    4617, 1947, 2946, 2832, 3469,3592, 3906, 4006, 4808, 4237, 4816, 3796, 2942,
                    2935, 2745, 2812, 2768, 2328, 2135, 1752, 1723,
                    1896, 1287, 1177, 1307, 1071,948, 856, 790, 839, 659, 559, 482, 404,
                    385, 283, 186, 163, 116, 98, 56, 39,
                    66]
            }]
          }
      if(btn.name===2025){
        document.getElementById('abc').innerHTML='&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp太仓市人口结构持续老龄化；其中，60岁及以上人口比例从2015的 5% 增加到2025的 7%。';
        $scope.age_ration.options.colors=columnColors;
        $scope.age_ration.options.title.text="太仓市人口结构预测2015/2025年龄层比例图";
        $scope.age_ration.series=[{
            name: '当前男性比例',
            data: [5, 3, 4, 7, 2,5,6,3,3,7,2],
            stack: 'male'
        },{
            name: '当前女性比例',
            data: [2, 5, 6, 2, 1,2, 5, 6, 2, 1,3],
            stack: 'male'
        },{
            name: '预测男性比例',
            data: [3, 4, 4, 2, 5,3, 4, 4, 2, 5,4],
            stack: 'female'
        },{
            name: '预测女性比例',
            data: [3, 2, 4, 4, 3,3, 2, 4, 4, 3,3],
            stack: 'female'
        }];
        $scope.population_prediction_year.options.title.text="太仓市2025年常住人口结构图";
        $scope.population_prediction_year.series=[{
                name: '男性',
                data: [-1223, -1223, -1276, -1317, -1476, -1493, -1470,
                    -1562, -1615, -1667, -1787, -1665, -1543, -1835,
                    
                    -1589, -1493, -1393, -1358, -1347, -1303, -1442,
                    -1714, -1338, -1536, -1468, -1805, -1612, -1731,-1870, -1831, -1872, -2008, -2077, -2234, -2428,
                    -2720, -2861, -3193, -3735, -4019, -3612, -1987,-2366, -3821, -3895, -2438, -3536, -3407, -3470,
                    -3453, -3768, -4146, -3710, -3415, -3929, -4560,
                    
                    -4328, -4513, -3312, -3958, -4034, -3857, -5448,
                    -4553, -1802, -2728, -2564, -3097, -3170, -3606,-3621, -4261, -3920, -4364, -3508, -2653, -2719,
                    -2629, -2547, -2346, -1939, -1802, -1409, -1365,-1488, -1015, -838, -890, -733, -740, -605,
                    -537, -551, -396, -288, -266, -201, -182,
                    -110, -83, -182]
            }, {
                name: '女性',
                data: [1230, 1295, 1344, 1427, 1417, 1514, 1542, 1560,
                    1659, 1778, 1771, 1666, 1649, 1887, 1586, 1566,
                    1414, 1307, 1462, 1374, 1526,1724, 1361, 1605, 1629, 1729, 1655, 1809, 1917,
                    1920, 1826, 2072, 2172, 2202, 2201, 2493, 2613,
                    2672, 3273, 3521, 3104, 1528,1846, 3363, 3410, 2250, 3163, 3117, 3078, 3034,
                    3353, 3834, 3548, 3122, 3726, 4432, 4154, 4498,
                    3332, 4038, 4010, 3960, 5377,4459, 1873, 2825, 2690, 3286, 3381, 3655, 3725,
                    4429, 3864, 4349, 3393, 2604, 2549, 2340, 2352,
                    2273, 1875, 1673, 1335, 1277,1367, 902, 790, 839, 659, 559, 482, 404,
                    385, 283, 186, 163, 116, 98, 56, 39,
                    66]
            }]
     }
      if(btn.name===2030){
        document.getElementById('abc').innerHTML='&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp太仓市人口结构持续老龄化；其中，60岁及以上人口比例从2015的 5% 增加到2025的 7%。';
        $scope.age_ration.options.colors=columnColors;
        $scope.age_ration.options.title.text="太仓市人口结构预测2015/2030年龄层比例图";
        $scope.age_ration.series=[{
            name: '当前男性比例',
            data: [5, 3, 4, 7, 2,5,6,3,3,7,2],
            stack: 'male'
        },{
            name: '当前女性比例',
            data: [2, 5, 6, 2, 1,2, 5, 6, 2, 1,3],
            stack: 'male'
        },{
            name: '预测男性比例',
            data: [3, 4, 4, 2, 5,3, 4, 4, 2, 5,4],
            stack: 'female'
        },{
            name: '预测女性比例',
            data: [3, 2, 4, 4, 3,3, 2, 4, 4, 3,3],
            stack: 'female'
        }];
        $scope.population_prediction_year.options.title.text="太仓市2030年常住人口结构图";
        $scope.population_prediction_year.series=[{
                name: '男性',
                data: [ -983, -1012, -1072, -1025, -1099,
                    -1161, -1212, -1213, -1267, -1309, -1469, -1487,-1464, -1556, -1609, -1661,-1589,
                    -1454, -1448, -1343, -1323, -1245, -1212, -1448,-1104, -1329, -1554, -1379, -1849, -1889, -1259, -1241, -1749,
                    -1687, -1705, -1925, -1773, -1673, -1447, -1934,
                    
                    -1737, -1400, -1245, -2933, -2865, -1903, -1781, -1659, -1537,
                    -2829, -2583, -2487, -2387, -2352, -2929, -2560,
                    
                    -3328, -4513, -3312, -3958, -4034, -3857, -5448,
                    -4553, -1802, -2728, -2564, -2097, -3170, -3606,-3621, -4261, -3920, -4364, -3508, -2653, -2719,
                    -2629, -2547, -2346, -1939, -1802, -1409, -1365,-1488, -1015, -838, -890, -733, -740, -605,
                    -537, -551, -396, -288, -266, -201, -182,
                    -110, -183, -182]
            }, {
                name: '女性',
                data: [1043, 1029, 1142, 1151, 1185, 1220, 1286, 1336,
                    1420, 1411, 1509, 1537, 1555, 1654, 1773, 1766,
                    1661, 1644, 1882, 1581, 1561,1409, 1302, 1457, 1369, 1521, 1741, 1354, 1597,
                    1620, 1719, 1645, 1799, 1907, 1910, 1816, 2057,
                    2157, 2187, 2186, 2473, 2592,2650, 3245, 3492, 3079, 1512, 1827, 3326, 3368,
                    2220, 3121, 3073, 3032, 2986, 3298, 3763, 3090,
                    3646, 4332, 4047, 4369, 3227,3898, 3858, 3790, 5119, 4222, 1762, 2645, 2496,
                    3022, 3081, 3301, 3334, 3895, 3338, 3693, 2829,
                    2133, 2036, 1821, 1787, 1683,1354, 1156, 884, 839, 659, 559, 482, 404,
                    385, 283, 186, 163, 116, 98, 56, 39,
                    66]
            }]
     }
      if(btn.name===2040){
        document.getElementById('abc').innerHTML='&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp太仓市人口结构持续老龄化；其中，60岁及以上人口比例从2015的 5% 增加到2025的 7%。';
        $scope.age_ration.options.colors=columnColors;
        $scope.age_ration.options.title.text="太仓市人口结构预测2015/2040年龄层比例图";
        $scope.age_ration.series=[{
            name: '当前男性比例',
            data: [5, 3, 4, 7, 2,5,6,3,3,7,2],
            stack: 'male'
        },{
            name: '当前女性比例',
            data: [2, 5, 6, 2, 1,2, 5, 6, 2, 1,3],
            stack: 'male'
        },{
            name: '预测男性比例',
            data: [3, 4, 4, 2, 5,3, 4, 4, 2, 5,4],
            stack: 'female'
        },{
            name: '预测女性比例',
            data: [3, 2, 4, 4, 3,3, 2, 4, 4, 3,3],
            stack: 'female'
        }];
        $scope.population_prediction_year.options.title.text="太仓市2040年常住人口结构图";
        $scope.population_prediction_year.series=[{
                name: '男性',
                data: [-995, -997, -1002, -960, -930, -942, -969,
                    -940, -961, -969, -999, -1060, -1014, -1089,
                    
                    -1152, -1203, -1204, -1258, -1300, -1406, -1478,
                    -1455, -1547, -1600, -1652, -1772, -1649, -1526,-1814, -1570, -1478, -1377, -1341, -1329, -1248,
                    -1683, -1316, -1508, -1439, -1770, -1581, -1694,-1832, -1792, -1832, -1792, -1832, -1965, -2026,
                    -2178, -2362, -2645, -2777, -3096, -3619, -3887,
                    
                    -3487, -1908, -2269, -3658, -3718, -2323, -3352,
                    -3210, -3257, -3224, -3503, -3818, -3383, -3085,-3519, -4261, -3920, -4364, -3508, -2653, -2719,
                    -2629, -2547, -2346, -1939, -1802, -1409, -1365,-1488, -1015, -838, -890, -733, -740, -605,
                    -537, -551, -396, -288, -266, -201, -182,
                    -110, -83, -182]
            }, {
                name: '女性',
                data: [906, 914, 906, 945, 969, 960, 947, 990,
                    986, 1012, 1028, 1015, 1129, 1139, 1174, 1210,
                    1276, 1326, 1410, 1401, 1499,1527, 1545, 1644, 1763, 1756, 1650, 1632, 1864,
                    1567, 1546, 1398, 1290, 1441, 1355, 1501, 1693,
                    1337, 1577, 1600, 1694, 1623,1772, 1879, 1881, 1786, 2024, 2118, 2146, 2143,
                    2423, 2538, 2591, 3170, 3406, 2999, 1456, 1769,
                    3218, 3254, 2140, 2998, 2939,2886, 2832, 3116, 3533, 3238, 2823, 3336, 3934,
                    3625, 3864, 2814, 3355, 3277, 3141, 4140, 3330,
                    1354, 1984, 1800, 2095, 2052,2114, 2053, 2253, 839, 659, 559, 482, 404,
                    385, 283, 156, 163, 116, 98, 56, 39,
                    65]
            }]
     }
     if(btn.name===2035){
        document.getElementById('abc').innerHTML='&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp太仓市人口结构持续老龄化；其中，54~59岁的人口比例从8%到10%；60岁及以上人口比例从2015的 5% 增加到2025的 7%。';
        $scope.age_ration.options.colors=columnColors;
        $scope.age_ration.options.title.text="太仓市人口结构预测2015/2035年龄层比例图";
        $scope.age_ration.series=[{
            name: '当前男性比例',
            data: [5, 3, 4, 7, 2,5,6,3,3,7,2],
            stack: 'male'
        }, {
            name: '当前女性比例',
            data: [2, 5, 6, 2, 1,2, 5, 6, 2, 1,3],
            stack: 'male'
        }, {
            name: '预测男性比例',
            data: [3, 4, 4, 2, 5,3, 4, 4, 2, 5,4],
            stack: 'female'
        },{
            name: '预测女性比例',
            data: [2, 3, 3, 4, 3,3, 3, 2, 4, 5,3],
            stack: 'female'
        }];
         $scope.population_prediction_year.options.title.text="太仓市2035年常住人口结构图";
        $scope.population_prediction_year.series=[{
                name: '男性',
                data: [-952, -978, -948, -968, -975, -1044, -1065,
                    -1019, -1094, -1157, -1208, -1209, -1263, -1305,
                    -1465, -1483, -1460, -1552, -1605, -1777, -1655,-1533, -1822, -1579, -1483, -1383, -1348, -1337,
                    -1293, -1427, -1694, -1326, -1518, -1449, -1785,
                    -1592, -1709, -1847, -1807, -1847, -1982, -2045,-2201, -2390, -2675, -2813, -3135, -3668, -3940,
                    -3537, -1940, -2310, -3726, -3793, -2373, -3432,
                    -3928, -3354, -1847, -3628, -3974, -3540, -3244,-3717, -4296, -4043, -4183, -3044, -3608, -3647,
                    -3438, -4792, -3947, -1538, -2299, -2104, -2480,
                    -2473, -2741, -2683, -3030, -2672, -2856, -2201,-1596, -1540, -1399, -1275, -1105, -860, -710,
                    -494, -427, -415, -251, -188, -182, -135,
                    -124, -410, -180]
            }, {
                name: '女性',
                data: [970, 956, 998, 993, 1018, 1033, 1020, 1134,
                    1144, 1179, 1215, 1281, 1331, 1415, 1406, 1504,
                    1532, 1550, 1649, 1768, 1761,1656, 1639, 1874, 1576, 1556, 1404, 1297, 1449,
                    1364, 1511, 1704, 1347, 1587, 1610, 1709, 1634,
                    1787, 1894, 1896, 1801, 2041,2140, 2169, 2167, 2453, 2570, 2625, 3211, 3454,
                    3044, 1491, 1800, 3280, 3320, 2185, 3071, 3020,
                    2975, 2925, 3228, 3678, 3388,2968, 3525, 4176, 3881, 4169, 3064, 3682, 3625,
                    3531, 4729, 3866, 1598, 2380, 2209, 2631, 2636,
                    2778, 2760, 3149, 2634, 2846,2128, 1566, 1442, 1244, 1178, 1070, 831, 659,
                    468, 398, 381, 223, 177, 171, 121, 93,
                    62]
            }]
     }
     if(btn.name===2045){
        document.getElementById('abc').innerHTML='&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp太仓市人口结构持续老龄化；其中，54~59岁的人口比例从8%到10%；60岁及以上人口比例从2015的 5% 增加到2025的 9%。';
        $scope.age_ration.options.colors=columnColors;
        $scope.age_ration.options.title.text="太仓市人口结构预测2015/2045年龄层比例图";
        $scope.age_ration.series=[{
            name: '当前男性比例',
            data: [5, 3, 4, 7, 2,5,6,3,3,7,2],
            stack: 'male'
        },{
            name: '当前女性比例',
            data: [2, 5, 6, 2, 1,2, 5, 6, 2, 1,3],
            stack: 'male'
        },{
            name: '预测男性比例',
            data: [3, 4, 4, 2, 5,3, 4, 4, 2, 5,4],
            stack: 'female'
        },{
            name: '预测女性比例',
            data: [3, 0, 4, 4, 3,3, 4, 4, 4, 5,5],
            stack: 'female'
        }];
        $scope.population_prediction_year.options.title.text="太仓市2045年常住人口结构图";
        $scope.population_prediction_year.series=[{
                name: '男性',
                data: [-1022, -988, -987, -1000, -1023, -985, -988,
                    -994, -953, -924, -937, -964, -935, -956,
                    -964, -994, -1055, -1009, -1084, -1147, -1198,-1199, -1253, -1295, -1455, -1473, -1450, -1540,
                    -1592, -1643, -1762, -1639, -1519, -1804, -1560,
                    -1468, -1367, -1331, -1319, -1274, -1407, -1672,-1306, -1495, -1425, -1755, -1565, -1677, -1814,
                    -1773, -1812, -1939, -1999, -2150, -2329, -2605,
                    -2734, -3043, -3554, -3812, -3417, -1863, -2212,-3554, -3603, -2243, -3223, -3072, -3103, -3056,
                    -3305, -3573, -3142, -2842, -3215, -3670, -3372,
                    -3403, -2420, -2801, -2765, -2508, -3366, -2668,-1000, -1439, -1238, -1375, -1290, -1346, -1240,
                    -1265, -1009, -975, -678, -444, -393, -326,
                    -272, -216, -76]
            }, {
                name: '女性',
                data: [789, 851, 866, 877, 855, 896, 905, 898,
                    938, 963, 955, 942, 985, 981, 1007, 1023,
                    1010, 1124, 1134, 1169, 1205,1271, 1321, 1405, 1396, 1494, 1522, 1538, 1636,
                    1754, 1746, 1640, 1622, 1854, 1557, 1536, 1388,
                    1280, 1431, 1345, 1491, 1682,1327, 1564, 1586, 1679, 1607, 1755, 1861, 1862,
                    1766, 1988, 2091, 2118, 2114, 2388, 2500, 2548,
                    3113, 3340, 2939, 1431, 1724,3126, 3153, 2066, 2883, 2813, 2748, 2685, 2940,
                    3308, 3006, 2599, 3048, 3567, 3236, 3395, 2434,
                    2858, 2749, 2576, 3323, 2614,1038, 1488, 1300, 1458, 1376, 1364, 1275, 1316,
                    995, 973, 656, 436, 368, 290, 252, 209,
                    30]
            }]
     }
  };
   $scope.btn_click1=function(btn){
    $scope.change1(btn);
  };
  $scope.change1=function(btn){
    if(btn.name===2025){
        document.getElementById('a').innerHTML="&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp 总体来看，太仓市的人口总量处于平稳状态，呈增长趋势，随着二胎政策的全面开放，促进了人口数量的增加。";
    $scope.sumpopulation.options.xAxis[0].categories=['2016','2017','2018','2019','2020','2021','2022','2023','2024','2025'];
    $scope.sumpopulation.options.title.text="太仓市2016年到2025年常住人口人口总量预测趋势图";
    $scope.sumpopulation.series=[{
            name: '人口总量',
            type: 'column',
            yAxis: 1,
            color: "#7CB5EC",
            data: [447046, 450908, 454570, 457963, 461066, 463863, 466970, 469950, 472652, 475038],
            tooltip: {
                valueSuffix: '人'
            }

        }, {
            name: '人口增长率',
            type: 'spline',
             color: "#434348",
            data: [0.38, 0.43, 0.50, 0.57, 0.63, 0.67, 0.60, 0.67, 0.74, 0.81],
            marker:{
                symbol:"circle"
            },
            tooltip: {
                valueSuffix: '%'
            }
        }];
     }
     if(btn.name===2035){
        document.getElementById('a').innerHTML="&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp 总体来看，太仓市的人口总量处于平稳状态，呈增长趋势，随着二胎政策的全面开放，促进了人口数量的增加。2035年的人口增长率1.17%相比2026年的0.86%有了小幅度的增长。";
        $scope.sumpopulation.options.xAxis[0].categories=['2026','2027','2028','2029','2030','2031','2032','2033','2034','2035'];
        $scope.sumpopulation.options.title.text="太仓市2026年到2035年常住人口人口总量预测趋势图";
    $scope.sumpopulation.series=[{
            name: '人口总量',
            type: 'column',
            yAxis: 1,
            color: "#7CB5EC",
            data: [503463, 508465, 513319, 518001, 522475, 526754, 531251, 535567, 539655, 543482],
            tooltip: {
                valueSuffix: '人'
            }

        }, {
            name: '人口增长率',
            type: 'spline',
            color: "#434348",
            data: [0.86, 0.80, 0.86, 0.93, 0.99,1.04, 1.00, 1.06, 1.12, 1.17],
            marker:{
                symbol:"circle"
            },
            tooltip: {
                valueSuffix: '%'
            }
        }];
     }
     if(btn.name===2045){
    document.getElementById('a').innerHTML="&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp 总体来看，太仓市的人口总量处于平稳状态，呈增长趋势，随着二胎政策的全面开放，促进了人口数量的增加。2045年的人口增长率1.54%相比2036年的1.22%有了小幅度的增长。";
     $scope.sumpopulation.options.xAxis[0].categories=['2036','2037','2038','2039','2040','2041','2042','2043','2044','2045'];
        $scope.sumpopulation.options.title.text="太仓市2036年到2045年常住人口人口总量预测趋势图";
    $scope.sumpopulation.series=[{
            name: '人口总量',
            type: 'column',
            yAxis: 1,
            color: "#7CB5EC",
            data: [550441, 556081, 561654, 567106, 572420, 577676, 583104, 588418, 593579, 598577],
            tooltip: {
                valueSuffix: '人'
            }

        }, {
            name: '人口增长率',
            type: 'spline',
            color: "#434348",
            data: [1.22, 1.21,1.25, 1.31, 1.37, 1.42, 1.39, 1.43, 1.49, 1.54],
            marker:{
                symbol:"circle"
            },
            tooltip: {
                valueSuffix: '%'
            }
        }];
     }
  };
  $scope.age_ration={
    options:{
        colors:columnColors,
         chart: {
            type: 'column'
        },

        title: {
            text: '太仓市人口结构预测2015/2020年龄层比例图',
            floationg: 'true'
        },
        credits:{
          enabled:false
        },
        legend:{
           itemDistance: 30,
           itemStyle:{
            fontWeight:'normal'
           }
         },
        xAxis: {
            categories: ['0-5岁', '6-11岁', '12-17岁', '18-23岁', '24-29岁','30-35岁','36-41岁','42-47岁','48-53岁','54-59岁','60岁以上'],
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
            allowDecimals: false,
            min: 0,
            title: {
                text: '人口比例(%)'
            }
        },

        tooltip: {
            formatter: function() {
                return ' <b>'+ this.x +'</b><br/>'+
                    this.series.name +': '+ this.y +'%'+'<br/>'+
                    '总共: '+ this.point.stackTotal+'%';
            }
        },

        plotOptions: {
            column: {
                stacking: 'normal'
            }
        }
      },

        series: [{
            name: '当前男性比例',
            data: [5, 3, 4, 7, 2,5,6,3,3,4,2],
            stack: 'male'
        },{
            name: '当前女性比例',
            data: [2, 5, 6, 2, 1,2, 5, 6, 2, 1,3],
            stack: 'male'
        },{
            name: '预测男性比例',
            data: [3, 4, 4, 2, 5,3, 4, 4, 2, 5,4],
            stack: 'female'
        },{
            name: '预测女性比例',
            data: [3, 2, 4, 4, 3,3, 2, 4, 4, 3,3],
            stack: 'female'
        }]

      };
    var categories = ['0岁', '1岁', '2岁', '3岁',
            '4岁', '5岁', '6岁', '7岁', '8岁',
            '9岁', '10岁', '11岁', '12岁', '13岁',
            '14岁', '15岁', '16岁', '17岁', '18岁',
            '19岁','20岁', '21岁', '22岁', '23岁',
            '24岁', '25岁', '26岁', '27岁', '28岁',
            '29岁', '30岁', '31岁', '32岁', '33岁',
            '34岁', '35岁', '36岁', '37岁', '38岁',
            '39岁', '40岁', '41岁', '42岁', '43岁',
            '44岁', '45岁', '46岁', '47岁', '48岁',
            '49岁', '50岁', '51岁', '52岁', '53岁',
            '54岁', '55岁', '56岁', '57岁', '58岁',
            '59岁','60岁', '61岁', '62岁', '63岁',
            '64岁', '65岁', '66岁', '67岁', '68岁',
            '69岁', '70岁', '71岁', '72岁', '73岁',
            '74岁', '75岁', '76岁', '77岁', '78岁',
            '79岁','80岁', '81岁', '82岁', '83岁',
            '84岁', '85岁', '86岁', '87岁', '88岁',
            '89岁', '90岁', '91岁', '92岁', '93岁',
            '94岁', '95岁', '96岁', '97岁', '98岁',
            '99岁','100岁+'];
$scope.population_year={
        options:{
            colors:pieColors,
        chart: {
                type: 'bar'
            },
            title: {
                text: '太仓市2015年常住人口结构图'
            },
        legend:{
        
           itemStyle:{
            fontWeight:'normal'
           }
         },
            xAxis: [{
                categories: categories,
                reversed: false,
                labels: {
                    step: 5
                }
            }, { // mirror axis on right side
                opposite: true,
                reversed: false,
                categories: categories,
                linkedTo: 0,
                labels: {
                    step: 5
                }
            }],
            yAxis: {
                title: {
                    text: null
                },
                labels: {
                    formatter: function () {
                        return (Math.abs(this.value) / 1000) + 'K';
                    }
                },
                min: -6000,
                max: 6000
            },

            plotOptions: {
                series: {
                    stacking: 'normal'
                }
            },
            credits:{
          enabled:false
            },
            tooltip: {
                formatter: function () {
                    return ' <b>' + this.series.name + ', age ' + this.point.category + '</b><br/>' +
                        'Population: ' + Highcharts.numberFormat(Math.abs(this.point.y), 0);
                }
            }
          },

            series: [{
                name: '男性',
                data: [-1812, -1687, -1562, -1851, -1602, -1503, -1403,
                    -1368, -1357, -1313, -1452, -1725, -1348, -1548,
                    -1478, -1820, -1628, -1748, -1890, -1850, -1892,-2029 -2099, -2257, -2456, -2750, -2897, -3232,
                    -3781, -4072, -3657, -2018, -2403, -3882, -3958,
                    -3597, -3472, -3540, -3528, -3855, -4249, -3809,-3513, -4052, -4710, -4479, -4685, -3446, -4128,
                    -4217, -4052, -5754, -4833, -1926, -2929, -2780,
                    -3390, -3505, -4026, -4082, -4884, -4566, -5168,-4223, -3249, -3431, -3419, -3413, -3242, -2764,
                    -2690, -2207, -2243, -2563, -1854, -1629, -1860,
                    -1646, -1787, -1569, -1576, -1824, -1485, -1221,-1275, -1089, -1108, -758, -649, -452, -379,
                    -340, -272, -188, -140, -105, -64, -45,
                    -27, -29, -18]
            }, {
                name: '女性',
                data: [1796, 1688, 1688, 1903, 1599, 1576, 1424, 1317,
                    1472, 1384, 1536, 1735, 1371, 1618, 1643, 1744,
                    1671, 1826, 1937, 1940, 1846,2093, 2194, 2225, 2225, 2523, 2644, 2704, 3314,
                    3565, 3149, 1554, 1878, 3414, 3463, 2290, 3222,
                    3180, 3142, 3101, 3433, 3931,3647, 3213, 3839, 4577, 4303, 4670, 3466, 4210,
                    4192, 4161, 5678, 4734, 2003, 3032, 2918, 3598,
                    3739, 4081, 4200, 5074, 4500,5149, 4084, 3188, 3217, 3044, 3152, 3139, 2671,
                    2498, 2092, 2097, 2355, 1630, 1537, 1755, 1483,
                    1352, 1257, 1189, 1278, 1064,790, 789, 630, 603, 396, 309, 225, 162,
                    128, 89, 71, 46, 37, 17, 10, 7,
                    1]
            }]
    };
    $scope.population_prediction_year={
        options:{
            colors:pieColors,
        chart: {
                type: 'bar'
            },
            title: {
                text: '太仓市2020年常住人口预测结构图'
            },
            legend:{
        
           itemStyle:{
            fontWeight:'normal'
           }
         },
            xAxis: [{
                categories: categories,
                reversed: false,
                labels: {
                    step: 5
                }
            }, { // mirror axis on right side
                opposite: true,
                reversed: false,
                categories: categories,
                linkedTo: 0,
                labels: {
                    step: 5
                }
            }],
            yAxis: {
                title: {
                    text: null
                },
                labels: {
                    formatter: function () {
                        return (Math.abs(this.value) / 1000) + 'K';
                    }
                },
                min: -6000,
                max: 6000
            },
             credits:{
                   enabled:false
            },
            plotOptions: {
                series: {
                    stacking: 'normal'
                }
            },

            tooltip: {
                formatter: function () {
                    return '<b>' + this.series.name + ', age ' + this.point.category + '</b><br/>' +
                        'Population: ' + Highcharts.numberFormat(Math.abs(this.point.y), 0);
                }
            }
          },

            series: [{
                name: '男性',
                data: [-1508, -1483, -1573, -1624, -1674, -1792, -1670,
                    -1548, -1840, -1594, -1498, -1398, -1363, -1352,
                    
                    -1308, -1447, -1720, -1343, -1543, -1473, -1815,
                    -1622, -1741, -1880, -1841, -1882, -2019, -2089,-2247, -2442, -2735, -2881, -3215, -3758, -4048,
                    -3637, -2003, -2386, -3854, -3929, -2463, -3570,-3443, -3818, -4205, -3766, -3469, -3996, -4640,
                    -4410, -4607, -3387, -4052, -4137, -5623, -4715,
                    
                    -1874, -2844, -2690, -3269, -3368, -3854, -3894,
                    -4628, -4299, -4834, -3924, -2998, -3170, -3084,-3045, -2858, -2409, -2299, -1849, -1843, -2064,
                    -1447, -1248, -1385, -1190, -1254, -1070, -1026,-1133, -880, -690, -890, -733, -740, -605,
                    -537, -551, -396, -288, -266, -201, -182,
                    -110, -83, -182]
            }, {
                name: '女性',
                data: [1529, 1555, 1571, 1668, 1785, 1776, 1671, 1654,
                    1892, 1591, 1571, 1419, 1312, 1467, 1379, 1531,
                    1730, 1366, 1613, 1638, 1739,1665, 1819, 1927, 1930, 1836, 2083, 2184, 2215,
                    2215, 2508, 2629, 2689, 3296, 3545, 3129, 1543,
                    1863, 3391, 3439, 2270, 3196,3153, 3114, 3072, 3398, 3888, 3604, 3173, 3788,
                    4512, 4235, 4592, 3407, 4134, 4112, 4073, 5550,
                    4617, 1947, 2946, 2832, 3469,3592, 3906, 4006, 4808, 4237, 4816, 3796, 2942,
                    2935, 2745, 2812, 2768, 2328, 2135, 1752, 1723,
                    1896, 1287, 1177, 1307, 1071,948, 856, 790, 839, 659, 559, 482, 404,
                    385, 283, 186, 163, 116, 98, 56, 39,
                    66]
            }]
    };
$scope.sumpopulation={
    options:{
      //  colors:lineColors,
      chart: {
            zoomType: 'xy'
        },
        title: {
            text: '太仓市2016年到2025年常住人口总量预测趋势图'
        },
        legend:{
        
           itemStyle:{
            fontWeight:'normal'
           }
         },
        xAxis: [{
            categories: ['2016', '2017', '2018', '2019', '2020',
                '2021', '2022', '2023', '2024', '2025'],
            crosshair: true,
            labels: {
                rotation: -45,
                align: 'right',
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
             }
        }],
        yAxis: [{ // Primary yAxis
            labels: {
                format: '{value}%',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            },
            title: {
                text: '人口增长率',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            }
        }, { // Secondary yAxis
            title: {
                text: '人口总量',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            },
            labels: {
                format: '{value} 人',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            },
            opposite: true
        }],
        tooltip: {
            shared: true
        },
        credits:{
            enabled:false
        }
       
      },
        series: [{
            name: '人口总量',
            type: 'column',

            yAxis: 1,
            data: [447046, 450908, 454570, 457963, 461066, 463863, 466970, 469950, 472652, 475038],
            tooltip: {
                valueSuffix: '人'
            }

        }, {
            name: '人口增长率',
            type: 'spline',
            data: [0.38, 0.43, 0.50, 0.57, 0.63, 0.67, 0.60, 0.67, 0.74, 0.81],
            tooltip: {
                valueSuffix: '%'
            }
        }]
      };
});