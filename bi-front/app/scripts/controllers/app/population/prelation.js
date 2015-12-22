'use strict';

app.controller('PrelationCtrl', ['$scope', function($scope) {

 
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
                'echarts/chart/chord',
                'echarts/chart/force' // 使用柱状图就加载bar模块，按需加载
            ],
            function (ec) {
                // 基于准备好的dom，初始化echarts图表
                var myChart = ec.init(document.getElementById('main')); 
                
                var option = {
    title : {
        text: '劳动力人口与GDP关联度分析预测',
        x:'right',
        y:'bottom'
    },
    tooltip : {
        trigger: 'item',
        formatter: function (params) {
            if (params.indicator2) {    // is edge
                return params.indicator2 + ' ' + params.name + ' ' + params.indicator;
            } else {    // is node
                return params.name
            }
        }
    },
    toolbox: {
        show : true,
        feature : {
            restore : {show: true},
            magicType: {show: true, type: ['force', 'chord']},
            saveAsImage : {show: true}
        }
    },
    legend: {
        x: 'left',
        data:['第一产业人口', '第二产业人口', '第三产业人口']
    },
    series : [
        {
            type:'chord',
            sort : 'ascending',
            sortSub : 'descending',
            showScale : false,
            itemStyle : {
                normal : {
                    label : {
                        rotate : true
                    }
                }
            },
            // 使用 nodes links 表达和弦图
            nodes: [
                {name:'总人口'},
                {name:'人口密度'},
                {name:'人口出生率'},
                {name:'人口自然增长率'},
                {name:'人口死亡率'},
                {name:'第一产业人口'},
                {name:'第二产业人口'},
                {name:'第三产业人口'},
                {name:'城镇人口'},
                {name:'乡村人口'},
                {name:'地方生产总值'},
                {name:'第一产业产值'},
                {name:'第二产业产值'},
                {name:'第三产业产值'},
                {name:'人均GDP'},
                {name:'社会消费品零售总额'}
               
            ],
            links: [
                {source: '第一产业人口', target: '地方生产总值', weight: 0.7469,name:'0.7469关联'},
                {source: '第一产业人口', target: '第一产业产值', weight: 0.7295,name:'0.7295关联'},
                {source: '第一产业人口', target: '第二产业产值', weight: 0.7725,name:'0.7725关联'},
                {source: '第一产业人口', target: '第三产业产值', weight: 0.7624,name:'0.7624关联'},
                {source: '第一产业人口', target: '人均GDP', weight: 0.7484,name:'0.7484关联'},
                {source: '第一产业人口', target: '社会消费品零售总额', weight: 0.7598,name:'0.7598关联'},
                {source: '第二产业人口', target: '地方生产总值', weight: 0.7649,name:'0.7649关联'},
                {source: '第二产业人口', target: '第一产业产值', weight: 0.7293,name:'0.7293关联'},
                {source: '第二产业人口', target: '第二产业产值', weight: 0.7724,name:'0.7724关联'},
                {source: '第二产业人口', target: '第三产业产值', weight: 0.7624,name:'0.7624关联'},
                {source: '第二产业人口', target: '人均GDP', weight: 0.7483,name:'0.7483关联'},
                {source: '第二产业人口', target: '社会消费品零售总额', weight: 0.7597,name:'0.7597关联'},
                {source: '第三产业人口', target: '地方生产总值', weight: 0.7589,name:'0.7589关联'},
                {source: '第三产业人口', target: '第一产业产值', weight: 0.7116,name:'0.7116关联'},
                {source: '第三产业人口', target: '第二产业产值', weight: 0.7647,name:'0.7647关联'},
                {source: '第三产业人口', target: '第三产业产值', weight: 0.7588,name:'0.7588关联'},
                {source: '第三产业人口', target: '人均GDP', weight: 0.7396,name:'0.7396关联'},
                {source: '第三产业人口', target: '社会消费品零售总额', weight: 0.7531,name:'0.7531关联'},

                // Ribbon Type 的和弦图每一对节点之间必须是双向边
                {target: '第一产业人口', source: '地方生产总值', weight: 0.7469},
                {target: '第一产业人口', source: '第一产业产值', weight: 0.7295},
                {target: '第一产业人口', source: '第二产业产值', weight: 0.7725},
                {target: '第一产业人口', source: '第三产业产值', weight: 0.7624},
                {target: '第一产业人口', source: '人均GDP', weight: 0.7484},
                {target: '第一产业人口', source: '社会消费品零售总额', weight: 0.7598},
                {target: '第二产业人口', source: '地方生产总值', weight: 0.7649},
                {target: '第二产业人口', source: '第一产业产值', weight: 0.7293},
                {target: '第二产业人口', source: '第二产业产值', weight: 0.7724},
                {target: '第二产业人口', source: '第三产业产值', weight: 0.7624},
                {target: '第二产业人口', source: '人均GDP', weight: 0.7483},
                {target: '第二产业人口', source: '社会消费品零售总额', weight: 0.7597},
                {target: '第三产业人口', source: '地方生产总值', weight: 0.7589},
                {target: '第三产业人口', source: '第一产业产值', weight: 0.7116},
                {target: '第三产业人口', source: '第二产业产值', weight: 0.7647},
                {target: '第三产业人口', source: '第三产业产值', weight: 0.7588},
                {target: '第三产业人口', source: '人均GDP', weight: 0.7396},
                {target: '第三产业人口', source: '社会消费品零售总额', weight: 0.7531}
            ]
                // Ribbon Type 的和弦图每一对节点之间必须是双向边
        }
    ]
};
                    
        
                // 为echarts对象加载数据 
                myChart.setOption(option); 
            }
        );

var splinecolors=new Array('#3CB371','#000000','#87CEFA' );
    $scope.buttonMap2 = [{
        name: 2025,
        label: 2025 + "年分析预测",
        radio: "Left"
      }, {
        name: 2035,
        label: 2035 + "年分析预测",
        radio: "Middle"
      }, {
        name: 2045,
        label: 2045 + "年分析预测",
        radio: "Right"
      }];
       $scope.buttonMap3 = [{
        name: 2025,
        label: 2025 + "年分析预测",
        radio: "Left"
      }, {
        name: 2035,
        label: 2035 + "年分析预测",
        radio: "Middle"
      }, {
        name: 2045,
        label: 2045 + "年分析预测",
        radio: "Right"
      }];

$scope.btn_click=function(btn){
   $scope.change(btn);
};
$scope.change=function(btn){
   if(btn.name===2025){
$scope.populationChart.xAxis.categories=[2016,2017,2018,2019,2020,2021,2022,2023,2024,2025];
     $scope.GDPChart.xAxis.categories=[2016,2017,2018,2019,2020,2021,2022,2023,2024,2025];
     $scope.GDPChart.series[0].data=gdp;
    $scope.populationChart.series[0].data=popData;
  //  $scope.predictChart.yAxis[1].tickPositions=[0,50,100,150,200,250];
    $scope.predictChart.series=[{
            name: '人口(人)',
            color: '#4572A7',
            type: 'column',
            yAxis: 1,
            data: popData,
            tooltip: {
                valueSuffix: '人'
            },
            tickPositions:[0,50,100,150,200,250]
        }, {
            name: '关联度',
            type: 'spline',
            color: '#AA4643',
            yAxis: 2,
            data: [0.895, 0.842, 0.7524,0.7891, 0.8512, 0.7125, 0.7951, 0.8125, 0.7415, 0.7956],
            marker: {
                enabled: true,
                symbol:"circle"
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
            marker:{
               symbol:"square" 
           },
            tooltip: {
                valueSuffix: '亿元'
            }
        }];
   }
   if(btn.name===2035){
     $scope.populationChart.xAxis.categories=[2026,2027,2028,2029,2030,2031,2032,2033,2034,2035];
     $scope.GDPChart.xAxis.categories=[2026,2027,2028,2029,2030,2031,2032,2033,2034,2035];
     $scope.GDPChart.series[0].data=gdp1;
     $scope.populationChart.series[0].data=popData1;
    $scope.predictChart.xAxis.categories=[2026,2027,2028,2029,2030,2031,2032,2033,2034,2035];
    $scope.predictChart.series=[{
            name: '人口(人)',
            color: '#4572A7',
            type: 'column',
            yAxis: 1,
            data: popData1,
            tooltip: {
                valueSuffix: '人'
            }

        }, {
            name: '关联度',
            type: 'spline',
            color: '#AA4643',
            yAxis: 2,
            data: [0.895, 0.842, 0.7524,0.7891, 0.8512, 0.7135, 0.7951, 0.8125, 0.7415, 0.7956],
            marker: {
                enabled: true,
                symbol:"circle"
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
            marker:{
               symbol:"square" 
           },
            tooltip: {
                valueSuffix: '亿元'
            }
        }];
   }
   if(btn.name===2045){
     $scope.populationChart.xAxis.categories=[2036,2037,2038,2039,2040,2041,2042,2043,2044,2045];
     $scope.GDPChart.xAxis.categories=[2036,2037,2038,2039,2040,2041,2042,2043,2044,2045];
     $scope.GDPChart.series[0].data=gdp2;
    $scope.populationChart.series[0].data=popData2;
    $scope.predictChart.xAxis.categories=[2036,2037,2038,2039,2040,2041,2042,2043,2044,2045];
    $scope.predictChart.series=[{
            name: '人口(人)',
            color: '#4572A7',
            type: 'column',
            yAxis: 1,
            data: popData2,
            tooltip: {
                valueSuffix: '人'
            }

        }, {
            name: '关联度',
            type: 'spline',
            color: '#AA4643',
            yAxis: 2,
            data: [0.895, 0.842, 0.8524,0.7891, 0.8512, 0.7125, 0.7951, 0.8125, 0.7415, 0.7956],
            marker: {
                enabled: true,
                symbol:"circle"
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
            marker:{
                symbol:"square"
            },
            tooltip: {
                valueSuffix: '亿元'
            }
        }];
   }
};
$scope.btn_click1=function(btn){
   $scope.change1(btn);
};
$scope.change1=function(btn){
   if(btn.name===2025){
    $scope.populationPie.series=[{
            type: 'pie',
            data: [
                ['第一产业人口',37],
                ['第二产业人口',30],
                ['第三产业人口',33]
                ]
        }];
    $scope.industryPie.series=[{
            type: 'pie',
            name: '',
            data: [
               ['第一产业产值',8],
                ['第二产业产值',44],
                ['第三产业产值',48]
            ]
        }];
   }
   if(btn.name===2035){
    $scope.populationPie.series=[{
            type: 'pie',
            data: [
                ['第一产业人口',27],
                ['第二产业人口',35],
                ['第三产业人口',38]
                ]
        }];
    $scope.industryPie.series=[{
            type: 'pie',
            name: '',
            data: [
               ['第一产业产值',6],
                ['第二产业产值',34],
                ['第三产业产值',60]
            ]
        }];
   }
   if(btn.name===2045){
    $scope.populationPie.series=[{
            type: 'pie',
            data: [
                ['第一产业人口',17],
                ['第二产业人口',40],
                ['第三产业人口',43]
                ]
        }];
    $scope.industryPie.series=[{
            type: 'pie',
            name: '',
            data: [
               ['第一产业产值',4],
                ['第二产业产值',30],
                ['第三产业产值',66]
            ]
        }];
   }
};
$scope.btn_click2=function(btn){
   $scope.change2(btn);
};
$scope.change2=function(btn){
   if(btn.name===2025){
    require(
            [
                'echarts',
                'echarts/chart/chord',
                'echarts/chart/force' // 使用柱状图就加载bar模块，按需加载
            ],
            function (ec) {
                // 基于准备好的dom，初始化echarts图表
                var myChart = ec.init(document.getElementById('main')); 
                
                var option = {
    title : {
        text: '劳动力人口与GDP关联度分析预测',
        x:'right',
        y:'bottom'
    },
    tooltip : {
        trigger: 'item',
        formatter: function (params) {
            if (params.indicator2) {    // is edge
                return params.indicator2 + ' ' + params.name + ' ' + params.indicator;
            } else {    // is node
                return params.name
            }
        }
    },
    toolbox: {
        show : true,
        feature : {
            restore : {show: true},
            magicType: {show: true, type: ['force', 'chord']},
            saveAsImage : {show: true}
        }
    },
    legend: {
        x: 'left',
        data:['第一产业人口', '第二产业人口', '第三产业人口']
    },
    series : [
        {
            type:'chord',
            sort : 'ascending',
            sortSub : 'descending',
            showScale : false,
            itemStyle : {
                normal : {
                    label : {
                        rotate : true
                    }
                }
            },
            // 使用 nodes links 表达和弦图
            nodes: [
                {name:'总人口'},
                {name:'人口密度'},
                {name:'人口出生率'},
                {name:'人口自然增长率'},
                {name:'人口死亡率'},
                {name:'第一产业人口'},
                {name:'第二产业人口'},
                {name:'第三产业人口'},
                {name:'城镇人口'},
                {name:'乡村人口'},
                {name:'地方生产总值'},
                {name:'第一产业产值'},
                {name:'第二产业产值'},
                {name:'第三产业产值'},
                {name:'人均GDP'},
                {name:'社会消费品零售总额'}
               
            ],
            links: [
                {source: '第一产业人口', target: '地方生产总值', weight: 0.7469,name:'0.7469关联'},
                {source: '第一产业人口', target: '第一产业产值', weight: 0.7295,name:'0.7295关联'},
                {source: '第一产业人口', target: '第二产业产值', weight: 0.7725,name:'0.7725关联'},
                {source: '第一产业人口', target: '第三产业产值', weight: 0.7624,name:'0.7624关联'},
                {source: '第一产业人口', target: '人均GDP', weight: 0.7484,name:'0.7484关联'},
                {source: '第一产业人口', target: '社会消费品零售总额', weight: 0.7598,name:'0.7598关联'},
                {source: '第二产业人口', target: '地方生产总值', weight: 0.7649,name:'0.7649关联'},
                {source: '第二产业人口', target: '第一产业产值', weight: 0.7293,name:'0.7293关联'},
                {source: '第二产业人口', target: '第二产业产值', weight: 0.7724,name:'0.7724关联'},
                {source: '第二产业人口', target: '第三产业产值', weight: 0.7624,name:'0.7624关联'},
                {source: '第二产业人口', target: '人均GDP', weight: 0.7483,name:'0.7483关联'},
                {source: '第二产业人口', target: '社会消费品零售总额', weight: 0.7597,name:'0.7597关联'},
                {source: '第三产业人口', target: '地方生产总值', weight: 0.7589,name:'0.7589关联'},
                {source: '第三产业人口', target: '第一产业产值', weight: 0.7116,name:'0.7116关联'},
                {source: '第三产业人口', target: '第二产业产值', weight: 0.7647,name:'0.7647关联'},
                {source: '第三产业人口', target: '第三产业产值', weight: 0.7588,name:'0.7588关联'},
                {source: '第三产业人口', target: '人均GDP', weight: 0.7396,name:'0.7396关联'},
                {source: '第三产业人口', target: '社会消费品零售总额', weight: 0.7531,name:'0.7531关联'},

                // Ribbon Type 的和弦图每一对节点之间必须是双向边
                {target: '第一产业人口', source: '地方生产总值', weight: 0.7469},
                {target: '第一产业人口', source: '第一产业产值', weight: 0.7295},
                {target: '第一产业人口', source: '第二产业产值', weight: 0.7725},
                {target: '第一产业人口', source: '第三产业产值', weight: 0.7624},
                {target: '第一产业人口', source: '人均GDP', weight: 0.7484},
                {target: '第一产业人口', source: '社会消费品零售总额', weight: 0.7598},
                {target: '第二产业人口', source: '地方生产总值', weight: 0.7649},
                {target: '第二产业人口', source: '第一产业产值', weight: 0.7293},
                {target: '第二产业人口', source: '第二产业产值', weight: 0.7724},
                {target: '第二产业人口', source: '第三产业产值', weight: 0.7624},
                {target: '第二产业人口', source: '人均GDP', weight: 0.7483},
                {target: '第二产业人口', source: '社会消费品零售总额', weight: 0.7597},
                {target: '第三产业人口', source: '地方生产总值', weight: 0.7589},
                {target: '第三产业人口', source: '第一产业产值', weight: 0.7116},
                {target: '第三产业人口', source: '第二产业产值', weight: 0.7647},
                {target: '第三产业人口', source: '第三产业产值', weight: 0.7588},
                {target: '第三产业人口', source: '人均GDP', weight: 0.7396},
                {target: '第三产业人口', source: '社会消费品零售总额', weight: 0.7531}
            ]
        }
    ]
};
                    
        
                // 为echarts对象加载数据 
                myChart.setOption(option); 
            }
        );
   }
   if(btn.name===2035){
    require(
            [
                'echarts',
                'echarts/chart/chord',
                'echarts/chart/force' // 使用柱状图就加载bar模块，按需加载
            ],
            function (ec) {
                // 基于准备好的dom，初始化echarts图表
                var myChart = ec.init(document.getElementById('main')); 
                
                var option = {
    title : {
        text: '劳动力人口与GDP关联度分析预测',
        x:'right',
        y:'bottom'
    },
    tooltip : {
        trigger: 'item',
        formatter: function (params) {
            if (params.indicator2) {    // is edge
                return params.indicator2 + ' ' + params.name + ' ' + params.indicator;
            } else {    // is node
                return params.name
            }
        }
    },
    toolbox: {
        show : true,
        feature : {
            restore : {show: true},
            magicType: {show: true, type: ['force', 'chord']},
            saveAsImage : {show: true}
        }
    },
    legend: {
        x: 'left',
        data:['第一产业人口', '第二产业人口', '第三产业人口']
    },
    series : [
        {
            type:'chord',
            sort : 'ascending',
            sortSub : 'descending',
            showScale : false,
            itemStyle : {
                normal : {
                    label : {
                        rotate : true
                    }
                }
            },
            // 使用 nodes links 表达和弦图
            nodes: [
                {name:'总人口'},
                {name:'人口密度'},
                {name:'人口出生率'},
                {name:'人口自然增长率'},
                {name:'人口死亡率'},
                {name:'第一产业人口'},
                {name:'第二产业人口'},
                {name:'第三产业人口'},
                {name:'城镇人口'},
                {name:'乡村人口'},
                {name:'地方生产总值'},
                {name:'第一产业产值'},
                {name:'第二产业产值'},
                {name:'第三产业产值'},
                {name:'人均GDP'},
                {name:'社会消费品零售总额'}
               
            ],
            links: [
                {source: '第一产业人口', target: '地方生产总值', weight: 0.7546,name:'0.7546关联'},
                {source: '第一产业人口', target: '第一产业产值', weight: 0.7080,name:'0.7080关联'},
                {source: '第一产业人口', target: '第二产业产值', weight: 0.7631,name:'0.7631关联'},
                {source: '第一产业人口', target: '第三产业产值', weight: 0.7582,name:'0.7582关联'},
                {source: '第一产业人口', target: '人均GDP', weight: 0.7378,name:'0.7378关联'},
                {source: '第一产业人口', target: '社会消费品零售总额', weight: 0.7517,name:'0.7517关联'},
                {source: '第二产业人口', target: '地方生产总值', weight: 0.7610,name:'0.7610关联'},
                {source: '第二产业人口', target: '第一产业产值', weight: 0.7173,name:'0.7173关联'},
                {source: '第二产业人口', target: '第二产业产值', weight: 0.7674,name:'0.7674关联'},
                {source: '第二产业人口', target: '第三产业产值', weight: 0.7600,name:'0.7600关联'},
                {source: '第二产业人口', target: '人均GDP', weight: 0.7425,name:'0.7425关联'},
                {source: '第二产业人口', target: '社会消费品零售总额', weight: 0.7554,name:'0.7554关联'},
                {source: '第三产业人口', target: '地方生产总值', weight: 0.7631,name:'0.7631关联'},
                {source: '第三产业人口', target: '第一产业产值', weight: 0.7234,name:'0.7234关联'},
                {source: '第三产业人口', target: '第二产业产值', weight: 0.7701,name:'0.7701关联'},
                {source: '第三产业人口', target: '第三产业产值', weight: 0.7613,name:'0.7613关联'},
                {source: '第三产业人口', target: '人均GDP', weight:0.7457,name:'0.7457关联'},
                {source: '第三产业人口', target: '社会消费品零售总额', weight: 0.7577,name:'0.7577关联'},

                // Ribbon Type 的和弦图每一对节点之间必须是双向边
                {target: '第一产业人口', source: '地方生产总值', weight: 0.7546},
                {target: '第一产业人口', source: '第一产业产值', weight: 0.7080},
                {target: '第一产业人口', source: '第二产业产值', weight: 0.7631},
                {target: '第一产业人口', source: '第三产业产值', weight:0.7582},
                {target: '第一产业人口', source: '人均GDP', weight: 0.7378},
                {target: '第一产业人口', source: '社会消费品零售总额', weight: 0.7517},
                {target: '第二产业人口', source: '地方生产总值', weight: 0.7610},
                {target: '第二产业人口', source: '第一产业产值', weight: 0.7173},
                {target: '第二产业人口', source: '第二产业产值', weight: 0.7674},
                {target: '第二产业人口', source: '第三产业产值', weight: 0.7600},
                {target: '第二产业人口', source: '人均GDP', weight: 0.7425},
                {target: '第二产业人口', source: '社会消费品零售总额', weight: 0.7554},
                {target: '第三产业人口', source: '地方生产总值', weight: 0.7631},
                {target: '第三产业人口', source: '第一产业产值', weight: 0.7234},
                {target: '第三产业人口', source: '第二产业产值', weight: 0.7701},
                {target: '第三产业人口', source: '第三产业产值', weight: 0.7613},
                {target: '第三产业人口', source: '人均GDP', weight: 0.7457},
                {target: '第三产业人口', source: '社会消费品零售总额', weight: 0.7577}
            ]
        }
    ]
};
                    
        
                // 为echarts对象加载数据 
                myChart.setOption(option); 
            }
        );
   }
   if(btn.name===2045){
    require(
            [
                'echarts',
                'echarts/chart/chord',
                'echarts/chart/force' // 使用柱状图就加载bar模块，按需加载
            ],
            function (ec) {
                // 基于准备好的dom，初始化echarts图表
                var myChart = ec.init(document.getElementById('main')); 
                
                var option = {
    title : {
        text: '劳动力人口与GDP关联度分析预测',
        x:'right',
        y:'bottom'
    },
    tooltip : {
        trigger: 'item',
        formatter: function (params) {
            if (params.indicator2) {    // is edge
                return params.indicator2 + ' ' + params.name + ' ' + params.indicator;
            } else {    // is node
                return params.name
            }
        }
    },
    toolbox: {
        show : true,
        feature : {
            restore : {show: true},
            magicType: {show: true, type: ['force', 'chord']},
            saveAsImage : {show: true}
        }
    },
    legend: {
        x: 'left',
        data:['第一产业人口', '第二产业人口', '第三产业人口']
    },
    series : [
        {
            type:'chord',
            sort : 'ascending',
            sortSub : 'descending',
            showScale : false,
            itemStyle : {
                normal : {
                    label : {
                        rotate : true
                    }
                }
            },
            // 使用 nodes links 表达和弦图
            nodes: [
                {name:'总人口'},
                {name:'人口密度'},
                {name:'人口出生率'},
                {name:'人口自然增长率'},
                {name:'人口死亡率'},
                {name:'第一产业人口'},
                {name:'第二产业人口'},
                {name:'第三产业人口'},
                {name:'城镇人口'},
                {name:'乡村人口'},
                {name:'地方生产总值'},
                {name:'第一产业产值'},
                {name:'第二产业产值'},
                {name:'第三产业产值'},
                {name:'人均GDP'},
                {name:'社会消费品零售总额'}
               
            ],
            links: [
                {source: '第一产业人口', target: '地方生产总值', weight: 0.7660,name:'0.7660关联'},
                {source: '第一产业人口', target: '第一产业产值', weight: 0.7327,name:'0.7327关联'},
                {source: '第一产业人口', target: '第二产业产值', weight: 0.7737,name:'0.7737关联'},
                {source: '第一产业人口', target: '第三产业产值', weight: 0.7630,name:'0.7630关联'},
                {source: '第一产业人口', target: '人均GDP', weight: 0.7500,name:'0.7500关联'},
                {source: '第一产业人口', target: '社会消费品零售总额', weight: 0.7610,name:'0.7610关联'},
                {source: '第二产业人口', target: '地方生产总值', weight: 0.7764,name:'0.7764关联'},
                {source: '第二产业人口', target: '第一产业产值', weight: 0.7670,name:'0.7670关联'},
                {source: '第二产业人口', target: '第二产业产值', weight: 0.7870,name:'0.7870关联'},
                {source: '第二产业人口', target: '第三产业产值', weight: 0.7691,name:'0.7691关联'},
                {source: '第二产业人口', target: '人均GDP', weight: 0.7654,name:'0.7654关联'},
                {source: '第二产业人口', target: '社会消费品零售总额', weight: 0.7725,name:'0.7725关联'},
                {source: '第三产业人口', target: '地方生产总值', weight: 0.7677,name:'0.7677关联'},
                {source: '第三产业人口', target: '第一产业产值', weight: 0.7378,name:'0.7378关联'},
                {source: '第三产业人口', target: '第二产业产值', weight: 0.7759,name:'0.7759关联'},
                {source: '第三产业人口', target: '第三产业产值', weight: 0.7640,name:'0.7640关联'},
                {source: '第三产业人口', target: '人均GDP', weight: 0.7525,name:'0.7525关联'},
                {source: '第三产业人口', target: '社会消费品零售总额', weight: 0.7628,name:'0.7628关联'},

                // Ribbon Type 的和弦图每一对节点之间必须是双向边
                {target: '第一产业人口', source: '地方生产总值', weight: 0.7660},
                {target: '第一产业人口', source: '第一产业产值', weight: 0.7327},
                {target: '第一产业人口', source: '第二产业产值', weight: 0.7737},
                {target: '第一产业人口', source: '第三产业产值', weight: 0.7630},
                {target: '第一产业人口', source: '人均GDP', weight: 0.7500},
                {target: '第一产业人口', source: '社会消费品零售总额', weight: 0.7610},
                {target: '第二产业人口', source: '地方生产总值', weight: 0.7764},
                {target: '第二产业人口', source: '第一产业产值', weight: 0.7670},
                {target: '第二产业人口', source: '第二产业产值', weight: 0.7870},
                {target: '第二产业人口', source: '第三产业产值', weight: 0.7691},
                {target: '第二产业人口', source: '人均GDP', weight: 0.7654},
                {target: '第二产业人口', source: '社会消费品零售总额', weight: 0.7725},
                {target: '第三产业人口', source: '地方生产总值', weight: 0.7677},
                {target: '第三产业人口', source: '第一产业产值', weight: 0.7378},
                {target: '第三产业人口', source: '第二产业产值', weight: 0.7759},
                {target: '第三产业人口', source: '第三产业产值', weight: 0.7640},
                {target: '第三产业人口', source: '人均GDP', weight: 0.7525},
                {target: '第三产业人口', source: '社会消费品零售总额', weight: 0.7628}
            ]
        }
    ]
};
                    
        
                // 为echarts对象加载数据 
                myChart.setOption(option); 
            }
        );
   }
};


$scope.selectedRange=0;
$scope.selectedRange1=0;
$scope.r=function(){
    return $scope.selectedRange;
};
function h(newValue,oldValue,scope){
    //console.log(newValue);
    popData[9]=(newValue*0.03)*50+475038;
    popData1[9]=(newValue*0.03)*50+543482;
    popData2[9]=(newValue*0.03)*50+598577;
   //console.log(popData[9]);
    gdp[9]=(newValue*0.03)*50+2022.31;
    gdp1[9]=(newValue*0.03)*50+4256.65;
    gdp2[9]=(newValue*0.03)*50+8373.48;
}
$scope.$watch($scope.r,h);

$scope.rr=function(){

    return $scope.selectedRange1;
};
function hh(newValue,oldValue,scope){
    console.log(newValue);
    popData[9]=(newValue*0.03)*50+475038;
    popData1[9]=(newValue*0.03)*50+543482;
    popData2[9]=(newValue*0.03)*50+598577;
    gdp[9]=(newValue*0.03)*50+2022.31;
    gdp1[9]=(newValue*0.03)*50+4256.65;
    gdp2[9]=(newValue*0.03)*50+8373.48;
}
$scope.$watch($scope.rr,hh);

    var popData=[447046, 450908, 454570, 457963, 461066, 463863, 466970, 469950, 472652, 475038];
    var gdp=[1100, 1177, 1259.39, 1347.55, 1441.88,1542.81,1650.80, 1766.36, 1890.00, 2022.31];
    var popData1=[503463, 508465, 513319, 518001, 522475, 526754, 531251, 535567, 539655, 543482];
    var gdp1=[2163.87, 2315.34, 2477.41, 2650.83,2836.39, 3034.93, 3247.38, 3474.7,3717.93,3978.18, 4256.65];
    var popData2=[550441, 556081, 561654, 567106, 572420, 577676, 583104, 588418, 593579, 598577];
    var gdp2=[4554.62, 4873.44, 5214.58,5579.60,5970.18, 6388.09,6835.25, 7313.72,7825.68, 8373.48];
         $scope.predictChart ={
 chart: {
            zoomType: 'xy'
        },
        title: {
            text: '劳动力人口与经济关联分析预测'
        },
        xAxis: {
            categories: ['2016', '2017', '2018', '2019', '2020', '2021',
                '2022', '2023', '2024', '2025']
        },
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
            opposite: true,
         

        }, { // Secondary yAxis
            gridLineWidth: 0,
            title: {
                text: '人口(人)',
                style: {
                    color: '#4572A7'
                }
            },
            labels: {
                formatter: function() {
                    return this.value +'人';
                },
                style: {
                    color: '#4572A7'
                }
            },
             

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
            opposite: true,
            tickPositions:[0.7,0.75,0.8,0.85,0.9]
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
            name: '人口(人)',
            color: '#4572A7',
            type: 'column',
            yAxis: 1,
            data: popData,
            tooltip: {
                valueSuffix: '人'
            }

        }, {
            name: '关联度',
            type: 'spline',
            color: '#AA4643',
            yAxis: 2,
            data: [0.895, 0.842, 0.7524,0.7891, 0.8512, 0.7125, 0.7951, 0.8125, 0.7415, 0.7956],
            marker: {
                enabled: true,
                symbol:"circle"
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
            marker:{
                symbol:"square"
            },
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
                        text: '人'
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
    colors:splinecolors,
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
            valueSuffix: ''
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
            data: [0.7421, 0.6998,0.7845, 0.7412, 0.7861, 0.8165,0.8152],
             marker: {
                symbol:"diamond"
            }
        }, {
            name: '第二产业GDP',
            data: [0.7952,0.8412, 0.7984,0.7842,0.8125,0.7965, 0.6845],
             marker: {
                symbol:"circle"
            }
        }, {
            name: '第三产业GDP',
            data: [0.8452, 0.8412, 0.8112,0.7952, 0.8123, 0.7584,0.7682],
             marker: {
                symbol:"square"
            }
        }]
};
$scope.populationPie={
options: {
                              
                                chart: {
                                    plotBackgroundColor: null,
                                    plotBorderWidth: null,
                                    plotShadow: false
                                },
                                credits:{
                                    enabled:false
                                    },
                                title: {
                                    text: "产业就业人口比重分析预测"
                                },
                                tooltip: {
                                    pointFormat: ' <b>产业人口</b>:{point.y:1.f}(万人)</b> '
                                },
                                plotOptions: {
                                    pie: {
                                        allowPointSelect: true,
                                        cursor: 'pointer',
                                        dataLabels: {
                                            enabled: true,
                                            color: '#000000',
                                            connectorColor: '#000000',
                                            format: ' <b>{point.name}</b>:{point.percentage:.1f} %'
                                        },
                                        showInLegend: true
                                    }
                                
                                
                            }
                        },
                            series: [{
                                type: 'pie',
                                name: '',
                                data:[
               ['第一产业人口',37],
                ['第二产业人口',30],
                ['第三产业人口',33]
            ]
                            }]
                                            
};
$scope.industryPie={
options: {
                              
                                chart: {
                                    plotBackgroundColor: null,
                                    plotBorderWidth: null,
                                    plotShadow: false
                                },
                                credits:{
                                    enabled:false
                                    },
                                title: {
                                    text: "产业产值比重分析预测"
                                },
                                tooltip: {
                                    pointFormat: '<b>产业产值</b>:{point.y:1.f}(亿元)</b> '
                                },
                                plotOptions: {
                                    pie: {
                                        allowPointSelect: true,
                                        cursor: 'pointer',
                                        dataLabels: {
                                            enabled: true,
                                            color: '#000000',
                                            connectorColor: '#000000',
                                            format: '<b>{point.name}</b>:{point.percentage:.1f} %'
                                        },
                                        showInLegend: true
                                    }
                                
                                
                            }
                        },
                            series: [{
                                type: 'pie',
                                name: '',
                                data:[
              ['第一产业产值',8],
                ['第二产业产值',44],
                ['第三产业产值',48]
            ]
                            }]
                                         

};                  
}]);