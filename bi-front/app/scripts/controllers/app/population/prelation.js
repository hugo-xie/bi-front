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
                {source: '第一产业人口', target: '地方生产总值', weight: 0.9,name:'0.9关联'},
                {source: '第一产业人口', target: '第一产业产值', weight: 0.9,name:'0.9关联'},
                {source: '第一产业人口', target: '第二产业产值', weight: 0.9,name:'0.9关联'},
                {source: '第一产业人口', target: '第三产业产值', weight: 0.9,name:'0.9关联'},
                {source: '第一产业人口', target: '人均GDP', weight: 0.9,name:'0.9关联'},
                {source: '第一产业人口', target: '社会消费品零售总额', weight: 0.9,name:'0.9关联'},
                {source: '第二产业人口', target: '地方生产总值', weight: 0.9,name:'0.9关联'},
                {source: '第二产业人口', target: '第一产业产值', weight: 0.9,name:'0.9关联'},
                {source: '第二产业人口', target: '第二产业产值', weight: 0.9,name:'0.9关联'},
                {source: '第二产业人口', target: '第三产业产值', weight: 0.9,name:'0.9关联'},
                {source: '第二产业人口', target: '人均GDP', weight: 0.9,name:'0.9关联'},
                {source: '第二产业人口', target: '社会消费品零售总额', weight: 0.9,name:'0.9关联'},
                {source: '第三产业人口', target: '地方生产总值', weight: 0.9,name:'0.9关联'},
                {source: '第三产业人口', target: '第一产业产值', weight: 0.9,name:'0.9关联'},
                {source: '第三产业人口', target: '第二产业产值', weight: 0.9,name:'0.9关联'},
                {source: '第三产业人口', target: '第三产业产值', weight: 0.9,name:'0.9关联'},
                {source: '第三产业人口', target: '人均GDP', weight: 0.9,name:'0.9关联'},
                {source: '第三产业人口', target: '社会消费品零售总额', weight: 0.9,name:'0.9关联'},

                // Ribbon Type 的和弦图每一对节点之间必须是双向边
                {target: '第一产业人口', source: '地方生产总值', weight: 0.9},
                {target: '第一产业人口', source: '第一产业产值', weight: 0.9},
                {target: '第一产业人口', source: '第二产业产值', weight: 0.9},
                {target: '第一产业人口', source: '第三产业产值', weight: 0.9},
                {target: '第一产业人口', source: '人均GDP', weight: 0.9},
                {target: '第一产业人口', source: '社会消费品零售总额', weight: 0.9},
                {target: '第二产业人口', source: '地方生产总值', weight: 0.9},
                {target: '第二产业人口', source: '第一产业产值', weight: 0.9},
                {target: '第二产业人口', source: '第二产业产值', weight: 0.9},
                {target: '第二产业人口', source: '第三产业产值', weight: 0.9},
                {target: '第二产业人口', source: '人均GDP', weight: 0.9},
                {target: '第二产业人口', source: '社会消费品零售总额', weight: 0.9},
                {target: '第三产业人口', source: '地方生产总值', weight: 0.9},
                {target: '第三产业人口', source: '第一产业产值', weight: 0.9},
                {target: '第三产业人口', source: '第二产业产值', weight: 0.9},
                {target: '第三产业人口', source: '第三产业产值', weight: 0.9},
                {target: '第三产业人口', source: '人均GDP', weight: 0.9},
                {target: '第三产业人口', source: '社会消费品零售总额', weight: 0.9}
            ]
        }
    ]
};
                    
        
                // 为echarts对象加载数据 
                myChart.setOption(option); 
            }
        );

var splinecolors=new Array('#3CB371','#000000','#87CEFA' );
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

$scope.btn_click=function(btn){
   $scope.change(btn);
};
$scope.change=function(btn){
   if(btn.name===2024){
  //  $scope.predictChart.yAxis[1].tickPositions=[0,50,100,150,200,250];
    $scope.predictChart.series=[{
            name: '人口(万人)',
            color: '#4572A7',
            type: 'column',
            yAxis: 1,
            data: popData,
            tooltip: {
                valueSuffix: '万人'
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
   if(btn.name===2034){
    $scope.predictChart.series=[{
            name: '人口(万人)',
            color: '#4572A7',
            type: 'column',
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
   if(btn.name===2044){
    $scope.predictChart.series=[{
            name: '人口(万人)',
            color: '#4572A7',
            type: 'column',
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
   if(btn.name===5){
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
   if(btn.name===10){
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
   if(btn.name===15){
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
   if(btn.name===5){
    alert("111");
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
                {source: '第一产业人口', target: '地方生产总值', weight: 0.9,name:'0.9关联'},
                {source: '第一产业人口', target: '第一产业产值', weight: 0.9,name:'0.9关联'},
                {source: '第一产业人口', target: '第二产业产值', weight: 0.9,name:'0.9关联'},
                {source: '第一产业人口', target: '第三产业产值', weight: 0.9,name:'0.9关联'},
                {source: '第一产业人口', target: '人均GDP', weight: 0.9,name:'0.9关联'},
                {source: '第一产业人口', target: '社会消费品零售总额', weight: 0.9,name:'0.9关联'},
                {source: '第二产业人口', target: '地方生产总值', weight: 0.9,name:'0.9关联'},
                {source: '第二产业人口', target: '第一产业产值', weight: 0.9,name:'0.9关联'},
                {source: '第二产业人口', target: '第二产业产值', weight: 0.9,name:'0.9关联'},
                {source: '第二产业人口', target: '第三产业产值', weight: 0.9,name:'0.9关联'},
                {source: '第二产业人口', target: '人均GDP', weight: 0.9,name:'0.9关联'},
                {source: '第二产业人口', target: '社会消费品零售总额', weight: 0.9,name:'0.9关联'},
                {source: '第三产业人口', target: '地方生产总值', weight: 0.9,name:'0.9关联'},
                {source: '第三产业人口', target: '第一产业产值', weight: 0.9,name:'0.9关联'},
                {source: '第三产业人口', target: '第二产业产值', weight: 0.9,name:'0.9关联'},
                {source: '第三产业人口', target: '第三产业产值', weight: 0.9,name:'0.9关联'},
                {source: '第三产业人口', target: '人均GDP', weight: 0.9,name:'0.9关联'},
                {source: '第三产业人口', target: '社会消费品零售总额', weight: 0.9,name:'0.9关联'},

                // Ribbon Type 的和弦图每一对节点之间必须是双向边
                {target: '第一产业人口', source: '地方生产总值', weight: 0.9},
                {target: '第一产业人口', source: '第一产业产值', weight: 0.9},
                {target: '第一产业人口', source: '第二产业产值', weight: 0.9},
                {target: '第一产业人口', source: '第三产业产值', weight: 0.9},
                {target: '第一产业人口', source: '人均GDP', weight: 0.9},
                {target: '第一产业人口', source: '社会消费品零售总额', weight: 0.9},
                {target: '第二产业人口', source: '地方生产总值', weight: 0.9},
                {target: '第二产业人口', source: '第一产业产值', weight: 0.9},
                {target: '第二产业人口', source: '第二产业产值', weight: 0.9},
                {target: '第二产业人口', source: '第三产业产值', weight: 0.9},
                {target: '第二产业人口', source: '人均GDP', weight: 0.9},
                {target: '第二产业人口', source: '社会消费品零售总额', weight: 0.9},
                {target: '第三产业人口', source: '地方生产总值', weight: 0.9},
                {target: '第三产业人口', source: '第一产业产值', weight: 0.9},
                {target: '第三产业人口', source: '第二产业产值', weight: 0.9},
                {target: '第三产业人口', source: '第三产业产值', weight: 0.9},
                {target: '第三产业人口', source: '人均GDP', weight: 0.9},
                {target: '第三产业人口', source: '社会消费品零售总额', weight: 0.9}
            ]
        }
    ]
};
                    
        
                // 为echarts对象加载数据 
                myChart.setOption(option); 
            }
        );
   }
   if(btn.name===10){
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
                {source: '第一产业人口', target: '地方生产总值', weight: 0.7,name:'0.7关联'},
                {source: '第一产业人口', target: '第一产业产值', weight: 0.7,name:'0.7关联'},
                {source: '第一产业人口', target: '第二产业产值', weight: 0.7,name:'0.7关联'},
                {source: '第一产业人口', target: '第三产业产值', weight: 0.7,name:'0.7关联'},
                {source: '第一产业人口', target: '人均GDP', weight: 0.7,name:'0.7关联'},
                {source: '第一产业人口', target: '社会消费品零售总额', weight: 0.9,name:'0.7关联'},
                {source: '第二产业人口', target: '地方生产总值', weight: 0.7,name:'0.7关联'},
                {source: '第二产业人口', target: '第一产业产值', weight: 0.7,name:'0.7关联'},
                {source: '第二产业人口', target: '第二产业产值', weight: 0.7,name:'0.7关联'},
                {source: '第二产业人口', target: '第三产业产值', weight: 0.7,name:'0.7关联'},
                {source: '第二产业人口', target: '人均GDP', weight: 0.7,name:'0.7关联'},
                {source: '第二产业人口', target: '社会消费品零售总额', weight: 0.7,name:'0.7关联'},
                {source: '第三产业人口', target: '地方生产总值', weight: 0.7,name:'0.7关联'},
                {source: '第三产业人口', target: '第一产业产值', weight: 0.7,name:'0.7关联'},
                {source: '第三产业人口', target: '第二产业产值', weight: 0.7,name:'0.7关联'},
                {source: '第三产业人口', target: '第三产业产值', weight: 0.7,name:'0.7关联'},
                {source: '第三产业人口', target: '人均GDP', weight:0.7,name:'0.7关联'},
                {source: '第三产业人口', target: '社会消费品零售总额', weight: 0.7,name:'0.7关联'},

                // Ribbon Type 的和弦图每一对节点之间必须是双向边
                {target: '第一产业人口', source: '地方生产总值', weight: 0.7},
                {target: '第一产业人口', source: '第一产业产值', weight: 0.7},
                {target: '第一产业人口', source: '第二产业产值', weight: 0.7},
                {target: '第一产业人口', source: '第三产业产值', weight:0.7},
                {target: '第一产业人口', source: '人均GDP', weight: 0.7},
                {target: '第一产业人口', source: '社会消费品零售总额', weight: 0.7},
                {target: '第二产业人口', source: '地方生产总值', weight: 0.7},
                {target: '第二产业人口', source: '第一产业产值', weight: 0.7},
                {target: '第二产业人口', source: '第二产业产值', weight: 0.7},
                {target: '第二产业人口', source: '第三产业产值', weight: 0.7},
                {target: '第二产业人口', source: '人均GDP', weight: 0.7},
                {target: '第二产业人口', source: '社会消费品零售总额', weight: 0.7},
                {target: '第三产业人口', source: '地方生产总值', weight: 0.7},
                {target: '第三产业人口', source: '第一产业产值', weight: 0.7},
                {target: '第三产业人口', source: '第二产业产值', weight: 0.7},
                {target: '第三产业人口', source: '第三产业产值', weight: 0.7},
                {target: '第三产业人口', source: '人均GDP', weight: 0.7},
                {target: '第三产业人口', source: '社会消费品零售总额', weight: 0.7}
            ]
        }
    ]
};
                    
        
                // 为echarts对象加载数据 
                myChart.setOption(option); 
            }
        );
   }
   if(btn.name===15){
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
                {source: '第一产业人口', target: '地方生产总值', weight: 0.8,name:'0.8关联'},
                {source: '第一产业人口', target: '第一产业产值', weight: 0.8,name:'0.8关联'},
                {source: '第一产业人口', target: '第二产业产值', weight: 0.8,name:'0.8关联'},
                {source: '第一产业人口', target: '第三产业产值', weight: 0.8,name:'0.8关联'},
                {source: '第一产业人口', target: '人均GDP', weight: 0.8,name:'0.8关联'},
                {source: '第一产业人口', target: '社会消费品零售总额', weight: 0.8,name:'0.8关联'},
                {source: '第二产业人口', target: '地方生产总值', weight: 0.8,name:'0.8关联'},
                {source: '第二产业人口', target: '第一产业产值', weight: 0.8,name:'0.8关联'},
                {source: '第二产业人口', target: '第二产业产值', weight: 0.8,name:'0.8关联'},
                {source: '第二产业人口', target: '第三产业产值', weight: 0.8,name:'0.8关联'},
                {source: '第二产业人口', target: '人均GDP', weight: 0.8,name:'0.8关联'},
                {source: '第二产业人口', target: '社会消费品零售总额', weight: 0.8,name:'0.8关联'},
                {source: '第三产业人口', target: '地方生产总值', weight: 0.8,name:'0.8关联'},
                {source: '第三产业人口', target: '第一产业产值', weight: 0.8,name:'0.8关联'},
                {source: '第三产业人口', target: '第二产业产值', weight: 0.8,name:'0.8关联'},
                {source: '第三产业人口', target: '第三产业产值', weight: 0.8,name:'0.8关联'},
                {source: '第三产业人口', target: '人均GDP', weight: 0.8,name:'0.8关联'},
                {source: '第三产业人口', target: '社会消费品零售总额', weight: 0.8,name:'0.8关联'},

                // Ribbon Type 的和弦图每一对节点之间必须是双向边
                {target: '第一产业人口', source: '地方生产总值', weight: 0.8},
                {target: '第一产业人口', source: '第一产业产值', weight: 0.8},
                {target: '第一产业人口', source: '第二产业产值', weight: 0.8},
                {target: '第一产业人口', source: '第三产业产值', weight: 0.8},
                {target: '第一产业人口', source: '人均GDP', weight: 0.8},
                {target: '第一产业人口', source: '社会消费品零售总额', weight: 0.8},
                {target: '第二产业人口', source: '地方生产总值', weight: 0.8},
                {target: '第二产业人口', source: '第一产业产值', weight: 0.8},
                {target: '第二产业人口', source: '第二产业产值', weight: 0.8},
                {target: '第二产业人口', source: '第三产业产值', weight: 0.8},
                {target: '第二产业人口', source: '人均GDP', weight: 0.8},
                {target: '第二产业人口', source: '社会消费品零售总额', weight: 0.8},
                {target: '第三产业人口', source: '地方生产总值', weight: 0.8},
                {target: '第三产业人口', source: '第一产业产值', weight: 0.8},
                {target: '第三产业人口', source: '第二产业产值', weight: 0.8},
                {target: '第三产业人口', source: '第三产业产值', weight: 0.8},
                {target: '第三产业人口', source: '人均GDP', weight: 0.8},
                {target: '第三产业人口', source: '社会消费品零售总额', weight: 0.8}
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
    console.log(newValue);
    popData[9]=(newValue*0.03)*50+194.1;
    console.log(popData[9]);
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
            opposite: true,
          tickPositions:[5,10,15,20,25,30,35,40]

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
            },
             tickPositions:[0,50,100,150,200,250,300,350]

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
            name: '人口(万人)',
            color: '#4572A7',
            type: 'column',
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
                                    pointFormat: ' <b>产业人口</b>
:{point.y:1.f}(万人)</b> 
'
                                },
                                plotOptions: {
                                    pie: {
                                        allowPointSelect: true,
                                        cursor: 'pointer',
                                        dataLabels: {
                                            enabled: true,
                                            color: '#000000',
                                            connectorColor: '#000000',
                                            format: ' <b>{point.name}</b>
:{point.percentage:.1f} %'
                                        },
                                        showInLegend: true
                                    }
                                
                                
                            }
                        },
                            series: [{
                                type: 'pie',
                                name: '',
                                data:[
               ['第一产业人口',18],
                ['第二产业人口',44],
                ['第三产业人口',48]
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
                                    pointFormat: '
<b>产业产值</b>
:{point.y:1.f}(亿元)</b> 
'
                                },
                                plotOptions: {
                                    pie: {
                                        allowPointSelect: true,
                                        cursor: 'pointer',
                                        dataLabels: {
                                            enabled: true,
                                            color: '#000000',
                                            connectorColor: '#000000',
                                            format: '
<b>{point.name}</b>
:{point.percentage:.1f} %'
                                        },
                                        showInLegend: true
                                    }
                                
                                
                            }
                        },
                            series: [{
                                type: 'pie',
                                name: '',
                                data:[
               ['第一产业产值',18],
                ['第二产业产值',44],
                ['第三产业产值',48]
            ]
                            }]
                                         

};                  
}]);