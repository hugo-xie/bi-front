'use strict';

app.controller('PopulationStructureCtrl', function($scope) {
  var columnColors = new Array( '#3CB371','#000000','#87CEFA', '#0787C8');
  var pieColors = new Array('#0787C8', '#1FC22B');
  var lineColors = new Array('#0787C8', '#1FC22B');
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
 





 var marker1 = new AMap.Marker({
        position: [121.046329, 31.471813],   //新湖镇
        map:map
    });
 var marker5 = new AMap.Marker({
        position: [121.070907, 31.556999],   //沙溪镇
        map:map
    });
 var marker4 = new AMap.Marker({            //板桥镇
        position: [121.134911, 31.491627],
        map:map
    });
  var marker2 = new AMap.Marker({
        position: [121.276413, 31.515122], //浏河镇
        map:map
    });
   var marker3 = new AMap.Marker({
        position: [121.10, 31.45],  //太仓市
        map:map
    });
   var marker6 = new AMap.Marker({
        position: [121.190549, 31.467665],  //陆渡镇
        map:map
    });
   var marker7 = new AMap.Marker({
        position: [121.106514, 31.649675],  //璜泾镇
        map:map
    });
//显示信息窗体(可单击位置显示隐藏的信息窗体)
var info1=[];
   info1.push("<h4><strong>新湖镇人口自然增长率</strong></h4>");
    info1.push("<table class='table table-bordered table-striped'>");
    info1.push("<tr><td style='font-size:15px;width:150px'>出生率</td><td>6.31‰</td></tr>");
    info1.push("<tr><td style='font-size:15px'>死亡率</td><td>6.34‰</td></tr>");
    info1.push("<tr><td style='font-size:15px'>人口自然增长率</td><td>-0.03‰</td></tr>");
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
   info2.push("<h4><strong>浏河镇人口自然增长率</strong></h4>");
    info2.push("<table class='table table-bordered table-striped'>");
    info2.push("<tr><td style='font-size:15px;width:150px'>出生率</td><td>8.05‰</td></tr>");
    info2.push("<tr><td style='font-size:15px'>死亡率</td><td>7.95‰</td></tr>");
    info2.push("<tr><td style='font-size:15px'>人口自然增长率</td><td>0.1‰</td></tr>");
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
   info3.push("<h4><strong>太仓市人口自然增长率</strong></h4>");
    info3.push("<table class='table table-bordered table-striped'>");
    info3.push("<tr><td style='font-size:15px;width:150px'>出生率</td><td>8.34‰</td></tr>");
    info3.push("<tr><td style='font-size:15px'>死亡率</td><td>8.12‰</td></tr>");
    info3.push("<tr><td style='font-size:15px'>人口自然增长率</td><td>0.22‰</td></tr>");
    info3.push("</table>");
var infowindow3 = new AMap.InfoWindow({
     content: info3.join(''),
     offset: new AMap.Pixel(0, -30),
     size:new AMap.Size(250,0)
})
infowindow3.open(map, marker3.getPosition());
var clickHandle3 = AMap.event.addListener(marker3, 'click', function() {
    infowindow3.open(map, marker3.getPosition())
})

var info4=[];
   info4.push("<h4><strong>板桥镇人口自然增长率</strong></h4>");
    info4.push("<table class='table table-bordered table-striped'>");
    info4.push("<tr><td style='font-size:15px;width:150px'>出生率</td><td>7.54‰</td></tr>");
    info4.push("<tr><td style='font-size:15px'>死亡率</td><td>7.85‰</td></tr>");
    info4.push("<tr><td style='font-size:15px'>人口自然增长率</td><td>-0.31‰</td></tr>");
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
   info5.push("<h4><strong>沙溪镇人口自然增长率</strong></h4>");
    info5.push("<table class='table table-bordered table-striped'>");
    info5.push("<tr><td style='font-size:15px;width:150px'>出生率</td><td>8.11‰</td></tr>");
    info5.push("<tr><td style='font-size:15px'>死亡率</td><td>7.98‰</td></tr>");
    info5.push("<tr><td style='font-size:15px'>人口自然增长率</td><td>0.13‰</td></tr>");
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
   info6.push("<h4><strong>陆渡镇人口自然增长率</strong></h4>");
    info6.push("<table class='table table-bordered table-striped'>");
    info6.push("<tr><td style='font-size:15px;width:150px'>出生率</td><td>8.54‰</td></tr>");
    info6.push("<tr><td style='font-size:15px'>死亡率</td><td>8.24‰</td></tr>");
    info6.push("<tr><td style='font-size:15px'>人口自然增长率</td><td>0.3‰</td></tr>");
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
   info7.push("<h4><strong>璜泾镇人口自然增长率</strong></h4>");
    info7.push("<table class='table table-bordered table-striped'>");
    info7.push("<tr><td style='font-size:15px;width:150px'>出生率</td><td>8.34‰</td></tr>");
    info7.push("<tr><td style='font-size:15px'>死亡率</td><td>8.54‰</td></tr>");
    info7.push("<tr><td style='font-size:15px'>人口自然增长率</td><td>-0.2‰</td></tr>");
    info7.push("</table>");
var infowindow7 = new AMap.InfoWindow({
     content: info7.join(''),
     offset: new AMap.Pixel(0, -30),
     size:new AMap.Size(250,0)
})
var clickHandle7 = AMap.event.addListener(marker7, 'click', function() {
    infowindow7.open(map, marker7.getPosition())
})
var heatmap;
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
 map.plugin(["AMap.Heatmap"], function() {
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

 



 
  $scope.buttonMap = [{
        name: 2025,
        label: 2025 + "年人口结构预测",
        radio: "Left"
      }, {
        name: 2035,
        label: 2035 + "年人口结构预测",
        radio: "Middle"
      }, {
        name: 2045,
        label: 2045 + "年人口结构预测",
        radio: "Right"
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
    if(btn.name===2025){
        $("#abc").innerHtml='lalalalalalalalalalala';
        $scope.age_ration.options.colors=columnColors;
        $scope.age_ration.series=[{
            name: '当前男性比例',
            data: [5, 3, 4, 7, 2,5,6,3,3,7,2],
            stack: 'male'
        }, {
            name: '当前女性比例',
            data: [3, 4, 4, 2, 5,3, 4, 4, 2, 5,4],
            stack: 'female'
        }, {
            name: '预测男性比例',
            data: [2, 5, 6, 2, 1,2, 5, 6, 2, 1,3],
            stack: 'male'
        }, {
            name: '预测女性比例',
            data: [3, 2, 4, 4, 3,3, 2, 4, 4, 3,3],
            stack: 'female'
        }];
        $scope.population_prediction_year.options.title.text="2025年人口结构图";
        $scope.population_prediction_year.series=[{
                name: 'Male',
                data: [-8008, -9766, -9211, -8680, -10317, -13339, -19407,
                    -19463, -21962, -24600, -22422, -20319, -19793, -11408,
                    -5704, -2643, -2368, -2475, -2056, -2836, -1878]
            }, {
                name: 'Female',
                data: [8227, 9976, 9406, 9052, 10659, 12966, 16711, 17149,
                    19969, 24180, 22504, 21166, 19099, 10785, 5116, 1903,
                    1805, 1005, 1870, 1632, 1208]
            }]
     }
     if(btn.name===2035){
        $("#abc").innerHtml="lalalalalalalalalalala";
        $scope.age_ration.options.colors=columnColors;
        $scope.age_ration.series=[{
            name: '当前男性比例',
            data: [5, 3, 4, 7, 2,5,6,3,3,7,2],
            stack: 'male'
        }, {
            name: '当前女性比例',
            data: [3, 4, 4, 2, 5,3, 4, 4, 2, 5,4],
            stack: 'female'
        }, {
            name: '预测男性比例',
            data: [2, 4, 5, 2, 1,2, 5, 3, 3, 3,3],
            stack: 'male'
        }, {
            name: '预测女性比例',
            data: [2, 3, 3, 4, 3,3, 3, 2, 4, 3,3],
            stack: 'female'
        }];
         $scope.population_prediction_year.options.title.text="2035年人口结构图";
        $scope.population_prediction_year.series=[{
                name: 'Male',
                data: [-5825, -6752, -8528, -10049, -8423, -9199, -10784,
                    -15259, -19121, -19580, -20963, -21952, -17413, -16803,
                    -8628, -2960, -1804, -1784, -1569, -1367, -878]
            }, {
                name: 'Female',
                data: [5968, 6973, 8738, 10347, 8646, 9468, 11053, 14124,
                    16280, 17496, 19775, 19560, 14444, 11504, 8938, 5638,
                    4162, 3011, 1870, 1632, 808]
            }]
     }
     if(btn.name===2045){

        $scope.age_ration.options.colors=columnColors;
        $scope.age_ration.series=[{
            name: '当前男性比例',
            data: [5, 3, 4, 7, 2,5,6,3,3,7,2],
            stack: 'male'
        }, {
            name: '当前女性比例',
            data: [3, 4, 4, 2, 5,3, 4, 4, 2, 5,4],
            stack: 'female'
        }, {
            name: '预测男性比例',
            data: [2, 5, 6, 2, 1,2, 5, 6, 2, 5,3],
            stack: 'male'
        }, {
            name: '预测女性比例',
            data: [3, 0, 4, 4, 3,3, 4, 4, 4, 5,5],
            stack: 'female'
        }];
        $scope.population_prediction_year.options.title.text="2045年人口结构图";
        $scope.population_prediction_year.series=[{
                name: 'Male',
                data: [-6005, -5760, -5193, -7176, -9153, -9752, -8370,
                    -9223, -11487, -18077, -16905, -12112, -11181, -12768,
                    -16300, -9968, -1804, -1784, -1569, -1367, -878]
            }, {
                name: 'Female',
                data: [5134, 5601, 6130, 7505, 7340, 7955, 8617, 9518,
                    9696, 16003, 12015, 15560, 14444, 14504, 13938, 12638,
                    2162, 1011, 870, 632, 208]
            }]
     }
  };
   $scope.btn_click1=function(btn){
    $scope.change1(btn);
  };
  $scope.change1=function(btn){
    if(btn.name===2025){
    $scope.sumpopulation.options.xAxis[0].categories=['2016','2017','2018','2019','2020','2021','2022','2023','2024','2025'];
    $scope.sumpopulation.series=[{
            name: '人口总量',
            type: 'column',
            yAxis: 1,
            data: [475038, 472652, 469950, 466970, 463863, 461066, 457963, 454570, 450908, 447046],
            tooltip: {
                valueSuffix: '万人'
            }

        }, {
            name: '人口增长率',
            type: 'spline',
            data: [-0.38, -0.43, -0.50, -0.57, -0.63, -0.67, -0.60, -0.67, -0.74, -0.81],
            marker:{
                symbol:"circle"
            },
            tooltip: {
                valueSuffix: '%'
            }
        }];
     }
     if(btn.name===2035){
        $scope.sumpopulation.options.xAxis[0].categories=['2026','2027','2028','2029','2030','2031','2032','2033','2034','2035'];
        $scope.sumpopulation.options.title.text="太仓市2026年到2035年常住人口人口总量预测趋势图";
    $scope.sumpopulation.series=[{
            name: '人口总量',
            type: 'column',
            yAxis: 1,
            data: [443482, 439655, 435567, 431251, 426754, 422475, 418001, 413319, 408465, 403463],
            tooltip: {
                valueSuffix: '万人'
            }

        }, {
            name: '人口增长率',
            type: 'spline',
            data: [-0.86, -0.80, -0.86, -0.93, -0.99, -1.04, -1.00, -1.06, -1.12, -1.17],
            marker:{
                symbol:"circle"
            },
            tooltip: {
                valueSuffix: '%'
            }
        }];
     }
     if(btn.name===2045){
     $scope.sumpopulation.options.xAxis[0].categories=['2036','2037','2038','2039','2040','2041','2042','2043','2044','2045'];
        $scope.sumpopulation.options.title.text="太仓市2036年到2045年常住人口人口总量预测趋势图";
    $scope.sumpopulation.series=[{
            name: '人口总量',
            type: 'column',
            yAxis: 1,
            data: [398577, 393579, 388418, 383104, 377676, 372420, 367106, 361654, 356081, 350441],
            tooltip: {
                valueSuffix: '万人'
            }

        }, {
            name: '人口增长率',
            type: 'spline',
            data: [-1.22, -1.21, -1.25, -1.31, -1.37, -1.42, -1.39, -1.43, -1.49, -1.54],
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
            text: '太仓市人口结构比例图',
            floationg: 'true'
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
                    'Total: '+ this.point.stackTotal+'%';
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
            data: [5, 3, 4, 7, 2,5,6,3,3,7,2],
            stack: 'male'
        }, {
            name: '当前女性比例',
            data: [3, 4, 4, 2, 5,3, 4, 4, 2, 5,4],
            stack: 'female'
        }, {
            name: '预测男性比例',
            data: [2, 5, 6, 2, 1,2, 5, 6, 2, 1,3],
            stack: 'male'
        }, {
            name: '预测女性比例',
            data: [3, 2, 4, 4, 3,3, 2, 4, 4, 3,3],
            stack: 'female'
        }]

      };
    var categories = ['0-4', '5-9', '10-14', '15-19',
            '20-24', '25-29', '30-34', '35-39', '40-44',
            '45-49', '50-54', '55-59', '60-64', '65-69',
            '70-74', '75-79', '80-84', '85-89', '90-94',
            '95-99', '100 + '];
$scope.population_year={
        options:{
            colors:pieColors,
        chart: {
                type: 'bar'
            },
            title: {
                text: '2015年人口结构图'
            },
            xAxis: [{
                categories: categories,
                reversed: false,
                labels: {
                    step: 1
                }
            }, { // mirror axis on right side
                opposite: true,
                reversed: false,
                categories: categories,
                linkedTo: 0,
                labels: {
                    step: 1
                }
            }],
            yAxis: {
                title: {
                    text: null
                },
                labels: {
                    formatter: function () {
                        return (Math.abs(this.value) / 10000) + 'W';
                    }
                },
                min: -40000,
                max: 40000
            },

            plotOptions: {
                series: {
                    stacking: 'normal'
                }
            },

            tooltip: {
                formatter: function () {
                    return ' <b>' + this.series.name + ', age ' + this.point.category + '</b><br/>' +
                        'Population: ' + Highcharts.numberFormat(Math.abs(this.point.y), 0);
                }
            }
          },

            series: [{
                name: 'Male',
                data: [-10017, -8618, -9570, -12017, -19188, -18401, -22241,
                    -25248, -26430, -18556, -26172, -18959, -12336, -9887,
                    -6300, -5968, -6804, -4784, -569, -367, -278]
            }, {
                name: 'Female',
                data: [10230, 8868, 9873, 12235, 16975, 15748, 20009, 24249,
                    19371, 26195, 17721, 11466, 7623, 6504, 5938, 5638,
                    4162, 3011, 870, 532, 208]
            }]
    };
    $scope.population_prediction_year={
        options:{
            colors:pieColors,
        chart: {
                type: 'bar'
            },
            title: {
                text: '2025年人口结构图'
            },
            xAxis: [{
                categories: categories,
                reversed: false,
                labels: {
                    step: 1
                }
            }, { // mirror axis on right side
                opposite: true,
                reversed: false,
                categories: categories,
                linkedTo: 0,
                labels: {
                    step: 1
                }
            }],
            yAxis: {
                title: {
                    text: null
                },
                labels: {
                    formatter: function () {
                        return (Math.abs(this.value) / 10000) + 'W';
                    }
                },
                min: -40000,
                max: 40000
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
                name: 'Male',
                data: [-8008, -9766, -9211, -8680, -10317, -13339, -19407,
                    -19463, -21962, -24600, -22422, -20319, -19793, -11408,
                    -5704, -2643, -2368, -2475, -2056, -2836, -1878]
            }, {
                name: 'Female',
                data: [8227, 9976, 9406, 9052, 10659, 12966, 16711, 17149,
                    19969, 24180, 22504, 21166, 19099, 10785, 5116, 1903,
                    1805, 1005, 1870, 1632, 1208]
            }]
    };
$scope.sumpopulation={
    options:{
        colors:lineColors,
      chart: {
            zoomType: 'xy'
        },
        title: {
            text: '太仓市2016年到2025年常住人口人口总量预测趋势图'
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
                format: '{value} 万人',
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
            backgroundColor:  '#FFFFFF'
        }
      },
        series: [{
            name: '人口总量',
            type: 'column',
            yAxis: 1,
            data: [475038, 472652, 469950, 466970, 463863, 461066, 457963, 454570, 450908, 447046],
            tooltip: {
                valueSuffix: '万人'
            }

        }, {
            name: '人口增长率',
            type: 'spline',
            data: [-0.38, -0.43, -0.50, -0.57, -0.63, -0.67, -0.60, -0.67, -0.74, -0.81],
            tooltip: {
                valueSuffix: '%'
            }
        }]
      };
});