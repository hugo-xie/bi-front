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
map.setZoom(11);
map.setCenter([121.10, 31.45]);

 var marker = new AMap.Marker({
        position: [121.10, 31.45],
        map:map
    });

var heatmap;
var points =[
    {"lng":121.10,"lat":31.45,"count":100},
    {"lng":121.046329,"lat":31.471813,"count":50},
    {"lng":121.135737,"lat":31.491485,"count":12},
    {"lng":121.134911,"lat":31.491627,"count":60},
    {"lng":121.276413,"lat":31.515122,"count":14},
    {"lng":121.106514,"lat":31.649675,"count":15},
    {"lng":121.070907,"lat":31.556999,"count":16},
    {"lng":121.118541,"lat":31.592205,"count":16},
    {"lng":121.190549,"lat":31.467665,"count":16}
];
 map.plugin(["AMap.Heatmap"], function() {
        //初始化heatmap对象
        heatmap = new AMap.Heatmap(map, {
            radius: 40, //给定半径
            opacity: [0, 0.8],
            gradient:{
             0.5: 'rgb(0, 255, 0)',

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
            data: [3, 0, 4, 4, 3,3, 0, 4, 4, 3,3],
            stack: 'female'
        }];
        $scope.population_prediction_year.series=[{
                name: 'Male',
                data: [-1000000, -1884428, -2089758, -2222362, -2537431, -2507081, -2443179,
                    -2664537, -3556505, -3680231, -3148062, -2721122, -2229181, -2227768,
                    -2176300, -1329968, -836804, -354784, -90569, -28367, -3878]
            }, {
                name: 'Female',
                data: [1656154, 1787564, 1981671, 2108575, 2403438, 2366003, 2301402, 2519874,
                    3360596, 3493473, 3020775, 2759560, 2304444, 2426504, 2568938, 1785638,
                    1447162, 1005011, 330870, 130632, 21208]
            }]
     }
     if(btn.name===2035){
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
            data: [3, 0, 4, 4, 3,33, 0, 4, 4, 3,3],
            stack: 'female'
        }];
         $scope.population_prediction_year.options.title.text="2035年人口结构图";
        $scope.population_prediction_year.series=[{
                name: 'Male',
                data: [-1008000, -1884428, -2089758, -2222362, -2537431, -2507081, -2443179,
                    -2664537, -3556505, -3680231, -3148062, -2721122, -2229181, -2227768,
                    -2176300, -1329968, -836804, -354784, -90569, -28367, -3878]
            }, {
                name: 'Female',
                data: [1656154, 1787564, 1981671, 2108575, 2403438, 2366003, 2301402, 2519874,
                    3360596, 3493473, 3020775, 2759560, 2304444, 2426504, 2568938, 1785638,
                    1447162, 1005011, 330870, 130632, 21208]
            }]
     }
     if(btn.name===2045){
        $scope.age_ration.options.colors=columnColors;
       // $scope.age_ration.options.title.text="lalalallalal";
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
            data: [2, 15, 6, 2, 1,2, 5, 6, 2, 1,3],
            stack: 'male'
        }, {
            name: '预测女性比例',
            data: [3, 0, 4, 4, 3,33, 0, 4, 4, 3,3],
            stack: 'female'
        }];
        $scope.population_prediction_year.options.title.text="2045年人口结构图";
        $scope.population_prediction_year.series=[{
                name: 'Male',
                data: [-1008000, -1884428, -2089758, -2222362, -2537431, -2507081, -2443179,
                    -2664537, -3556505, -3680231, -3148062, -2721122, -2229181, -2227768,
                    -2176300, -1329968, -836804, -354784, -90569, -28367, -3878]
            }, {
                name: 'Female',
                data: [1000154, 1787564, 1981671, 2108575, 2403438, 2366003, 2301402, 2519874,
                    3360596, 3493473, 3020775, 2759560, 2304444, 2426504, 2568938, 1785638,
                    1447162, 1005011, 330870, 130632, 21208]
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
            data: [490.9, 710.5, 1060.4, 1290.2, 1440.0, 1760.0, 1350.6, 1480.5, 2160.4, 1940.1],
            tooltip: {
                valueSuffix: '万人'
            }

        }, {
            name: '人口增长率',
            type: 'spline',
            data: [6.0, 6.1, 6.0, 6.1, 6.2, 6.1, 6.0, 6.1, 6.0, 6.0],
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
            data: [490.9, 710.5, 1060.4, 1290.2, 1440.0, 1760.0, 1350.6, 1480.5, 2160.4, 1940.1],
            tooltip: {
                valueSuffix: '万人'
            }

        }, {
            name: '人口增长率',
            type: 'spline',
            data: [6.0, 6.1, 6.0, 6.1, 6.2, 6.1, 6.0, 6.1, 6.0, 6.0],
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
            data: [4900.9, 4710.5, 4060.4, 4290.2, 4440.0, 4760.0, 5350.6, 5480.5, 5160.4, 9940.1],
            tooltip: {
                valueSuffix: '万人'
            }

        }, {
            name: '人口增长率',
            type: 'spline',
            data: [6.0, 6.1, 6.0, 6.1, 6.2, 6.1, 6.0, 6.1, 6.0, 6.0],
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
            categories: ['0-5岁', '6-11岁', '12-17岁', '18-23岁', '24-29岁','30-35岁','36-41岁','42-47岁','48-53岁','53-58岁','59岁以上'],
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
            data: [3, 0, 4, 4, 3,3, 0, 4, 4, 3,3],
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
                        return (Math.abs(this.value) / 1000000) + 'M';
                    }
                },
                min: -4000000,
                max: 4000000
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
                data: [-1746181, -1884428, -2089758, -2222362, -2537431, -2507081, -2443179,
                    -2664537, -3556505, -3680231, -3143062, -2721122, -2229181, -2227768,
                    -2176300, -1329968, -836804, -354784, -90569, -28367, -3878]
            }, {
                name: 'Female',
                data: [1656154, 1787564, 1981671, 2108575, 2403438, 2366003, 2301402, 2519874,
                    3360596, 3493473, 3050775, 2759560, 2304444, 2426504, 2568938, 1785638,
                    1447162, 1005011, 330870, 130632, 21208]
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
                        return (Math.abs(this.value) / 1000000) + 'M';
                    }
                },
                min: -4000000,
                max: 4000000
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
                data: [-1746181, -1884428, -2089758, -2222362, -2537431, -2507081, -2443179,
                    -2664537, -3556505, -3680231, -3143062, -2721122, -2229181, -2227768,
                    -2176300, -1329968, -836804, -354784, -90569, -28367, -3878]
            }, {
                name: 'Female',
                data: [1656154, 1787564, 1981671, 2108575, 2403438, 2366003, 2301402, 2519874,
                    3360596, 3493473, 3050775, 2759560, 2304444, 2426504, 2568938, 1785638,
                    1447162, 1005011, 330870, 130632, 21208]
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
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
        }
      },
        series: [{
            name: '人口总量',
            type: 'column',
            yAxis: 1,
            data: [490.9, 710.5, 1060.4, 1290.2, 1440.0, 1760.0, 1350.6, 1480.5, 2160.4, 1940.1],
            tooltip: {
                valueSuffix: '万人'
            }

        }, {
            name: '人口增长率',
            type: 'spline',
            data: [6.0, 6.1, 6.0, 6.1, 6.2, 6.1, 6.0, 6.1, 6.0, 6.0],
            tooltip: {
                valueSuffix: '%'
            }
        }]
      };
});