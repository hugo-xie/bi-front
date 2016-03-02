'use strict';

app.controller('PrelationCtrl', ['$scope','$stateParams','qService','forecastFactory',function($scope, $stateParams,qService,forecastFactory) {

    $scope.data = null;
    var popData;
    var promise = qService.tokenHttpGet(forecastFactory.query,{tableName:'laborGdpRelationPreData'});
    promise.then(function(rc) {

    console.log(rc.data);
    var popData1=[100000,100000,100000,100000,100000,100000,100000,100000,100000,100000];
    var popData2=[100000,100000,100000,100000,100000,100000,100000,100000,100000,100000];
    var popData3=[100000,100000,100000,100000,100000,100000,100000,100000,100000,100000];

     popData=rc.data;
     for(var i=0;i<popData1.length;i++){
       popData1[i] = popData[i].preLaborPopulation;
     }
     for(var i=0;i<popData2.length;i++){
       popData2[i] = popData[i+10].preLaborPopulation;
     }
     for(var i=0;i<popData3.length;i++){
       popData3[i] = popData[i+20].preLaborPopulation;
     }
     $scope.showTotalTable = function(){
     $scope.totalshow= !$scope.totalshow;
}


// app.controller('PrelationCtrl', ['$scope', function($scope) {
//
//    $scope.showTotalTable = function(){
//     $scope.totalshow= !$scope.totalshow;
//   };

 $scope.totaldata = {

    tabledata:
    [
      {yearvalue:'指标', Fp:'第一产业人口',Sp:'第二产业人口',Tp:'第三产业人口'},
      {yearvalue:'第一产业产值', Fp:'0.9542',Sp:'0.4293',Tp:'0.3116'},
      {yearvalue:'第二产业产值', Fp:'0.4101',Sp:'0.9724',Tp:'0.6647'},
      {yearvalue:'第三产业产值', Fp:'0.7624',Sp:'0.4624',Tp:'0.9588'},
      {yearvalue:'人均GDP', Fp:'0.7484',Sp:'0.7483',Tp:'0.8396'},
      {yearvalue:'地方生产总值', Fp:'0.5469',Sp:'0.7483',Tp:'0.8589'},
      {yearvalue:'社会消费品零售总额', Fp:'0.3598',Sp:'0.6597',Tp:'0.8531'}

    ]
  };



var piecolor=new Array('#7CB5EC','#929dce','#90ED7D');
     $scope.colorpicker = {
        options: {
            orientation: 'horizontal',
            min: 0,
            max: 100,
            range: 'min'
        }
    };
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
        text: '太仓市2020年劳动力人口与各项经济指标关联度分析预测',
         textStyle:{

            fontWeight:'normal',
            fontFamily:'Lucida Sans Unicode',
            fontSize:'18',
            color:"#000000"
        },
        x:'center',
        y:'top'
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
        },

            x:"right",
            y:"top",

    },

    legend: {
        x: 'center',
        data:['第一产业人口', '第二产业人口', '第三产业人口'],
        y:'bottom',
        itemGap:20,
        textStyle:{
            fontWeight:'normal'

        }

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
                        rotate : false
                    }
                }
            },
            textStyle:{
            fontWeight:'nomal'
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
                {source: '第一产业人口', target: '地方生产总值', weight: 0.5469,name:'0.5469关联'},
                {source: '第一产业人口', target: '第一产业产值', weight: 0.9542,name:'0.9542关联'},
                {source: '第一产业人口', target: '第二产业产值', weight: 0.4101,name:'0.4101关联'},
                {source: '第一产业人口', target: '第三产业产值', weight: 0.7624,name:'0.7624关联'},
                {source: '第一产业人口', target: '人均GDP', weight: 0.7484,name:'0.7484关联'},
                {source: '第一产业人口', target: '社会消费品零售总额', weight: 0.3598,name:'0.3598关联'},
                {source: '第二产业人口', target: '地方生产总值', weight: 0.7483,name:'0.7483关联'},
                {source: '第二产业人口', target: '第一产业产值', weight: 0.4293,name:'0.4293关联'},
                {source: '第二产业人口', target: '第二产业产值', weight: 0.9724,name:'0.9724关联'},
                {source: '第二产业人口', target: '第三产业产值', weight: 0.4624,name:'0.4624关联'},
                {source: '第二产业人口', target: '人均GDP', weight: 0.7483,name:'0.7483关联'},
                {source: '第二产业人口', target: '社会消费品零售总额', weight: 0.6597,name:'0.6597关联'},
                {source: '第三产业人口', target: '地方生产总值', weight: 0.8589,name:'0.8589关联'},
                {source: '第三产业人口', target: '第一产业产值', weight: 0.3116,name:'0.3116关联'},
                {source: '第三产业人口', target: '第二产业产值', weight: 0.6647,name:'0.6647关联'},
                {source: '第三产业人口', target: '第三产业产值', weight: 0.9588,name:'0.9588关联'},
                {source: '第三产业人口', target: '人均GDP', weight: 0.8396,name:'0.8396关联'},
                {source: '第三产业人口', target: '社会消费品零售总额', weight: 0.8531,name:'0.8531关联'},

                // Ribbon Type 的和弦图每一对节点之间必须是双向边
                {target: '第一产业人口', source: '地方生产总值', weight: 0.5469},
                {target: '第一产业人口', source: '第一产业产值', weight: 0.9542},
                {target: '第一产业人口', source: '第二产业产值', weight: 0.4101},
                {target: '第一产业人口', source: '第三产业产值', weight: 0.7624},
                {target: '第一产业人口', source: '人均GDP', weight: 0.7484},
                {target: '第一产业人口', source: '社会消费品零售总额', weight: 0.3598},
                {target: '第二产业人口', source: '地方生产总值', weight: 0.7483},
                {target: '第二产业人口', source: '第一产业产值', weight: 0.4293},
                {target: '第二产业人口', source: '第二产业产值', weight: 0.9724},
                {target: '第二产业人口', source: '第三产业产值', weight: 0.4624},
                {target: '第二产业人口', source: '人均GDP', weight: 0.7483},
                {target: '第二产业人口', source: '社会消费品零售总额', weight: 0.6597},
                {target: '第三产业人口', source: '地方生产总值', weight: 0.8589},
                {target: '第三产业人口', source: '第一产业产值', weight: 0.3116},
                {target: '第三产业人口', source: '第二产业产值', weight: 0.6647},
                {target: '第三产业人口', source: '第三产业产值', weight: 0.9588},
                {target: '第三产业人口', source: '人均GDP', weight: 0.8396},
                {target: '第三产业人口', source: '社会消费品零售总额', weight: 0.8531}
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
        label: 2025 + "年关联度分析预测",

      }, {
        name: 2035,
        label: 2035 + "年关联度分析预测",

      },{
        name: 2045,
        label: 2045 + "年关联度分析预测",

      }];

       $scope.buttonMap3 = [{
        name: 2020,
        label: 2020 + "年关联度分析预测",
        radio: "Left"
      }, {
        name: 2025,
        label: 2025 + "年关联度分析预测",
        radio: "Middle"
      },
      {
        name: 2030,
        label: 2030 + "年关联度分析预测",
        radio: "Middle"
      },
      {
        name: 2035,
        label: 2035 + "年关联度分析预测",
        radio: "Middle"
      },
      {
        name: 2040,
        label: 2040 + "年关联度分析预测",
        radio: "Middle"
      },{
        name: 2045,
        label: 2045 + "年关联度分析预测",
        radio: "Right"
      }];




       $scope.buttonMap4 = [{
        name: 2020,
        label: 2020 + "年比重分析预测",
        radio: "Left"
      }, {
        name: 2025,
        label: 2025 + "年比重分析预测",
        radio: "Middle"
      },
      {
        name: 2030,
        label: 2030 + "年比重分析预测",
        radio: "Middle"
      },
      {
        name: 2035,
        label: 2035 + "年比重分析预测",
        radio: "Middle"
      },
      {
        name: 2040,
        label: 2040 + "年比重分析预测",
        radio: "Middle"
      },{
        name: 2045,
        label: 2045 + "年比重分析预测",
        radio: "Right"
      }];

$scope.btn_click=function(btn){
   $scope.change(btn);
};
$scope.change=function(btn){
   if(btn.name===2025){
$scope.populationChart.xAxis.categories=[2016,2017,2018,2019,2020,2021,2022,2023,2024,2025];
$scope.populationChart.title.text="太仓市2016至2025年劳动力总人口预测值";
     $scope.GDPChart.xAxis.categories=[2016,2017,2018,2019,2020,2021,2022,2023,2024,2025];
     $scope.GDPChart.series[0].data=gdp;
      $scope.GDPChart.title.text="太仓市2016至2025年GDP总量预测值";
    $scope.populationChart.series[0].data=popData1;
    $scope.predictChart.options.title.text="太仓市2016至2025年劳动力人口与经济关联分析预测";
     $scope.predictChart.options.xAxis.categories=[2016,2017,2018,2019,2020,2021,2022,2023,2024,2025];
  //  $scope.predictChart.yAxis[1].tickPositions=[0,50,100,150,200,250];
    $scope.predictChart.series=[{
            name: '人口(人)',
            color: '#7CB5EC',
            type: 'column',
            yAxis: 1,
            data: popData1,
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
     $scope.predictChart.options.title.text="太仓市2026至2035年劳动力人口与经济关联分析预测";
     $scope.populationChart.xAxis.categories=[2026,2027,2028,2029,2030,2031,2032,2033,2034,2035];
     $scope.populationChart.title.text="太仓市2026至2035年劳动力总人口预测值";
     $scope.GDPChart.xAxis.categories=[2026,2027,2028,2029,2030,2031,2032,2033,2034,2035];
     $scope.GDPChart.series[0].data=gdp1;
      $scope.GDPChart.title.text="太仓市2026至2035年GDP总量预测值";
     $scope.populationChart.series[0].data=popData2;
    $scope.predictChart.options.xAxis.categories=[2026,2027,2028,2029,2030,2031,2032,2033,2034,2035];
    $scope.predictChart.series=[{
            name: '人口(人)',
            color: '#7CB5EC',
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
            data: gdp1,
            marker:{
               symbol:"square"
           },
            tooltip: {
                valueSuffix: '亿元'
            }
        }];
   }
   if(btn.name===2045){
    $scope.predictChart.options.title.text="太仓市2036至2045年劳动力人口与经济关联分析预测";
     $scope.populationChart.xAxis.categories=[2036,2037,2038,2039,2040,2041,2042,2043,2044,2045];
     $scope.populationChart.title.text="太仓市2036至2045年劳动力总人口预测值";
     $scope.GDPChart.xAxis.categories=[2036,2037,2038,2039,2040,2041,2042,2043,2044,2045];
     $scope.GDPChart.series[0].data=gdp2;
     $scope.GDPChart.title.text="太仓市2036至2045年GDP总量预测值";
    $scope.populationChart.series[0].data=popData3;
    $scope.predictChart.options.xAxis.categories=[2036,2037,2038,2039,2040,2041,2042,2043,2044,2045];
    $scope.predictChart.series=[{
            name: '人口(人)',
            color: '#7CB5EC',
            type: 'column',
            yAxis: 1,
            data: popData3,
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
            data: gdp2,
            marker:{
                symbol:"square"
            },
            tooltip: {
                valueSuffix: '亿元'
            }
        }];
   }
};
$scope.btn_click3=function(btn){
   $scope.change3(btn);
};
$scope.change3=function(btn){
   if(btn.name===2020){
    document.getElementById("b").innerHTML="&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp结合两者的平均比重，即第一、二、三产业就业人口比重分别为31.4%、32.2%和36.4%，产值比重分别是5%、48%和47%。一般情况下，随着经济发展和人均国民收入提高，第二、三产业人口将提高，第三产业人口将占绝对优势。";
    $scope.populationPie.options.title.text="太仓市2020年产业就业人口比重分析预测";
    $scope.industryPie.options.title.text="太仓市2020年产业产值比重分析预测";
    $scope.populationPie.series=[{
            type: 'pie',
            data: [
            ['第一产业人口',23.5],
                ['第二产业人口',24.1],
                ['第三产业人口',27.2]

                ]
        }];
    $scope.industryPie.series=[{
            type: 'pie',
            name: '',
            data: [
               ['第一产业产值',72.094],
                ['第二产业产值',692.1345],//692.1345
                ['第三产业产值',677.6836]
            ]
        }];
   }
   if(btn.name===2025){
    document.getElementById("b").innerHTML="&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp结合两者的平均比重，即第一、二、三产业就业人口比重分别为29.4%、32.0%和38.6%，产值比重分别是4.2%、46.8%和49.1%，相比往年，可见产业结构、产值结构有所变化。一般情况下，随着经济发展和人均国民收入提高，第二、三产业人口将提高，第三产业人口将占绝对优势。";
    $scope.populationPie.options.title.text="太仓市2025年产业就业人口比重分析预测";
    $scope.industryPie.options.title.text="太仓市2025年产业产值比重分析预测";
    $scope.populationPie.series=[{
            type: 'pie',
            data: [
             ['第一产业人口',22.8],//
                ['第二产业人口',24.8],
                ['第三产业人口',29.9]
                ]
        }];
    $scope.industryPie.series=[{
            type: 'pie',
            name: '',
            data: [
               ['第一产业产值',84.43],
                ['第二产业产值',945.83],
                ['第三产业产值',992.05]//1092.05
            ]
        }];
   }
   if(btn.name===2030){
    document.getElementById("b").innerHTML="&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp结合两者的平均比重，即第一、二、三产业就业人口比重分别为22.6%、34.9%和42.5%，产值比重分别是3.8%、44.3%和52.0%，相比往年，可见产业结构、产值结构有所变化。一般情况下，随着经济发展和人均国民收入提高，第二、三产业人口将提高，第三产业人口将占绝对优势。";
    $scope.populationPie.options.title.text="太仓市2030年产业就业人口比重分析预测";
    $scope.industryPie.options.title.text="太仓市2030年产业产值比重分析预测";
    $scope.populationPie.series=[{
            type: 'pie',
            data: [
                ['第一产业人口',18.63],
                ['第二产业人口',28.72],
                ['第三产业人口',34.95]
                ]
        }];
    $scope.industryPie.series=[{
            type: 'pie',
            name: '',
            data: [
               ['第一产业产值',106.65],
                ['第二产业产值',1256.2],
                ['第三产业产值',1473.54]//
            ]
        }];
   }
   if(btn.name===2040){
    document.getElementById("b").innerHTML="&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp结合两者的平均比重，即第一、二、三产业就业人口比重分别为12.8%、32.2%和55.0%，产值比重分别是3.5%、40.5%和56.0%，相比往年，可见产业结构、产值结构有所变化。一般情况下，随着经济发展和人均国民收入提高，第二、三产业人口将提高，第三产业人口将占绝对优势。";
    $scope.populationPie.options.title.text="太仓市2040年产业就业人口比重分析预测";
    $scope.industryPie.options.title.text="太仓市2040年产业产值比重分析预测";
    $scope.populationPie.series=[{
            type: 'pie',
            data: [
                ['第一产业人口',11.15],
                ['第二产业人口',28.05],
                ['第三产业人口',48]
                ]
        }];
    $scope.industryPie.series=[{
            type: 'pie',
            name: '',
            data: [
               ['第一产业产值',208.96],
                ['第二产业产值',2417.92],
                ['第三产业产值',3343.3]
            ]
        }];
   }
   if(btn.name===2035){
    document.getElementById("b").innerHTML="&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp结合两者的平均比重，即第一、二、三产业就业人口比重分别为17.3%、33.2%和49.5%，产值比重分别是3.6%、41.0%和55.4%，相比往年，可见产业结构、产值结构有所变化。一般情况下，随着经济发展和人均国民收入提高，第二、三产业人口将提高，第三产业人口将占绝对优势。";
    $scope.populationPie.options.title.text="太仓市2035年产业就业人口比重分析预测";
    $scope.industryPie.options.title.text="太仓市2035年产业产值比重分析预测";
    $scope.populationPie.series=[{
            type: 'pie',
            data: [
                ['第一产业人口',14.6],
                ['第二产业人口',27.97],
                ['第三产业人口',41.73]
                ]
        }];
    $scope.industryPie.series=[{
            type: 'pie',
            name: '',
            data: [
               ['第一产业产值',153.24],
                ['第二产业产值',1745.23],
                ['第三产业产值',2358.18]
            ]
        }];
   }
   if(btn.name===2045){
    document.getElementById("b").innerHTML="&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp结合两者的平均比重，即第一、二、三产业就业人口比重分别为5.7%、31.5%和62.8%，产值比重分别是3.1%、46.2%和50.8%，相比往年，可见产业结构、产值结构有所变化。一般情况下，随着经济发展和人均国民收入提高，第二、三产业人口将提高，第三产业人口将占绝对优势。";
    $scope.populationPie.options.title.text="太仓市2045年产业就业人口比重分析预测";
    $scope.industryPie.options.title.text="太仓市2045年产业产值比重分析预测";
    $scope.populationPie.series=[{
            type: 'pie',
            data: [
                ['第一产业人口',5.1],
                ['第二产业人口',28.43],
                ['第三产业人口',56.67]
                ]
        }];
    $scope.industryPie.series=[{
            type: 'pie',
            name: '',
            data: [
               ['第一产业产值',4],
                ['第二产业产值',60],
                ['第三产业产值',66]
            ]
        }];
   }
};
$scope.btn_click2=function(btn){
   $scope.change2(btn);
};
$scope.change2=function(btn){
   if(btn.name===2020){
    $scope.totaldata = {

    tabledata:
     [
     {yearvalue:'指标', Fp:'第一产业人口',Sp:'第二产业人口',Tp:'第三产业人口'},
      {yearvalue:'第一产业产值', Fp:'0.9542',Sp:'0.4293',Tp:'0.3116'},
      {yearvalue:'第二产业产值', Fp:'0.4101',Sp:'0.9724',Tp:'0.6647'},
      {yearvalue:'第三产业产值', Fp:'0.7624',Sp:'0.4624',Tp:'0.9588'},
      {yearvalue:'人均GDP', Fp:'0.7484',Sp:'0.7483',Tp:'0.8396'},
      {yearvalue:'地方生产总值', Fp:'0.5469',Sp:'0.7483',Tp:'0.8589'},
      {yearvalue:'社会消费品零售总额', Fp:'0.3598',Sp:'0.6597',Tp:'0.8531'}

    ]
  };
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
        text: '太仓市2020年劳动力人口与各项经济指标关联度分析预测',
         textStyle:{
            fontWeight:'normal',
            fontFamily:'Lucida Sans Unicode',
            fontSize:'18',
            color:"#000000"
        },
        x:'center',
        y:'top'
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
        x: 'center',
        y: 'bottom',
        itemGap:20,
        data:['第一产业人口', '第二产业人口', '第三产业人口'],
        textStyle:{
            fontWeight:'normal'
        }
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
                        rotate : false
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
                 {source: '第一产业人口', target: '地方生产总值', weight: 0.5469,name:'0.5469关联'},
                {source: '第一产业人口', target: '第一产业产值', weight: 0.9542,name:'0.9542关联'},
                {source: '第一产业人口', target: '第二产业产值', weight: 0.4101,name:'0.4101关联'},
                {source: '第一产业人口', target: '第三产业产值', weight: 0.7624,name:'0.7624关联'},
                {source: '第一产业人口', target: '人均GDP', weight: 0.7484,name:'0.7484关联'},
                {source: '第一产业人口', target: '社会消费品零售总额', weight: 0.3598,name:'0.3598关联'},
                {source: '第二产业人口', target: '地方生产总值', weight: 0.7483,name:'0.7483关联'},
                {source: '第二产业人口', target: '第一产业产值', weight: 0.4293,name:'0.4293关联'},
                {source: '第二产业人口', target: '第二产业产值', weight: 0.9724,name:'0.9724关联'},
                {source: '第二产业人口', target: '第三产业产值', weight: 0.4624,name:'0.4624关联'},
                {source: '第二产业人口', target: '人均GDP', weight: 0.7483,name:'0.7483关联'},
                {source: '第二产业人口', target: '社会消费品零售总额', weight: 0.6597,name:'0.6597关联'},
                {source: '第三产业人口', target: '地方生产总值', weight: 0.8589,name:'0.8589关联'},
                {source: '第三产业人口', target: '第一产业产值', weight: 0.3116,name:'0.3116关联'},
                {source: '第三产业人口', target: '第二产业产值', weight: 0.6647,name:'0.6647关联'},
                {source: '第三产业人口', target: '第三产业产值', weight: 0.9588,name:'0.9588关联'},
                {source: '第三产业人口', target: '人均GDP', weight: 0.8396,name:'0.8396关联'},
                {source: '第三产业人口', target: '社会消费品零售总额', weight: 0.8531,name:'0.8531关联'},

                // Ribbon Type 的和弦图每一对节点之间必须是双向边
                {target: '第一产业人口', source: '地方生产总值', weight: 0.5469},
                {target: '第一产业人口', source: '第一产业产值', weight: 0.9542},
                {target: '第一产业人口', source: '第二产业产值', weight: 0.4101},
                {target: '第一产业人口', source: '第三产业产值', weight: 0.7624},
                {target: '第一产业人口', source: '人均GDP', weight: 0.7484},
                {target: '第一产业人口', source: '社会消费品零售总额', weight: 0.3598},
                {target: '第二产业人口', source: '地方生产总值', weight: 0.7483},
                {target: '第二产业人口', source: '第一产业产值', weight: 0.4293},
                {target: '第二产业人口', source: '第二产业产值', weight: 0.9724},
                {target: '第二产业人口', source: '第三产业产值', weight: 0.4624},
                {target: '第二产业人口', source: '人均GDP', weight: 0.7483},
                {target: '第二产业人口', source: '社会消费品零售总额', weight: 0.6597},
                {target: '第三产业人口', source: '地方生产总值', weight: 0.8589},
                {target: '第三产业人口', source: '第一产业产值', weight: 0.3116},
                {target: '第三产业人口', source: '第二产业产值', weight: 0.6647},
                {target: '第三产业人口', source: '第三产业产值', weight: 0.9588},
                {target: '第三产业人口', source: '人均GDP', weight: 0.8396},
                {target: '第三产业人口', source: '社会消费品零售总额', weight: 0.8531}
            ]
        }
    ]
};


                // 为echarts对象加载数据
                myChart.setOption(option);
            }
        );
   }
   if(btn.name===2025){
     $scope.totaldata = {

    tabledata:
    [
      {yearvalue:'指标', Fp:'第一产业人口',Sp:'第二产业人口',Tp:'第三产业人口'},
      {yearvalue:'第一产业产值', Fp:'0.9569',Sp:'0.3145',Tp:'0.2185'},
      {yearvalue:'第二产业产值', Fp:'0.2185',Sp:'0.9582',Tp:'0.4156'},
      {yearvalue:'第三产业产值', Fp:'0.2456',Sp:'0.5214',Tp:'0.9102'},
      {yearvalue:'人均GDP', Fp:'0.9245',Sp:'0.8241',Tp:'0.8851'},
      {yearvalue:'地方生产总值', Fp:'0.6125',Sp:'0.8521',Tp:'0.7589'},
      {yearvalue:'社会消费品零售总额', Fp:'0.6125',Sp:'0.7797',Tp:'0.8531'}

    ]
  };
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
        text: '太仓市2025年劳动力人口与各项经济指标关联度分析预测',
         textStyle:{
            fontWeight:'normal',
            fontFamily:'Lucida Sans Unicode',
            fontSize:'18',
            color:"#000000"
        },
        x:'center',
        y:'top'
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
        x: 'center',
        y: 'bottom',
        itemGap:20,
        data:['第一产业人口', '第二产业人口', '第三产业人口'],
        textStyle:{
            fontWeight:'normal'
        }
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
                        rotate : false
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
                {source: '第一产业人口', target: '地方生产总值', weight: 0.8469,name:'0.8469关联'},
                {source: '第一产业人口', target: '第一产业产值', weight: 0.9569,name:'0.9569关联'},
                {source: '第一产业人口', target: '第二产业产值', weight: 0.3145,name:'0.3145关联'},
                {source: '第一产业人口', target: '第三产业产值', weight: 0.2185,name:'0.2185关联'},
                {source: '第一产业人口', target: '人均GDP', weight: 0.9245,name:'0.9245关联'},
                {source: '第一产业人口', target: '社会消费品零售总额', weight: 0.6125,name:'0.6125关联'},
                {source: '第二产业人口', target: '地方生产总值', weight: 0.8521,name:'0.8521关联'},
                {source: '第二产业人口', target: '第一产业产值', weight: 0.2185,name:'0.2185关联'},
                {source: '第二产业人口', target: '第二产业产值', weight: 0.9582,name:'0.9582关联'},
                {source: '第二产业人口', target: '第三产业产值', weight: 0.4156,name:'0.4156关联'},
                {source: '第二产业人口', target: '人均GDP', weight: 0.8241,name:'0.8241关联'},
                {source: '第二产业人口', target: '社会消费品零售总额', weight: 0.7797,name:'0.7797关联'},
                {source: '第三产业人口', target: '地方生产总值', weight: 0.7589,name:'0.7589关联'},
                {source: '第三产业人口', target: '第一产业产值', weight: 0.2456,name:'0.2456关联'},
                {source: '第三产业人口', target: '第二产业产值', weight: 0.5214,name:'0.5214关联'},
                {source: '第三产业人口', target: '第三产业产值', weight: 0.9102,name:'0.9102关联'},
                {source: '第三产业人口', target: '人均GDP', weight: 0.8851,name:'0.8851关联'},
                {source: '第三产业人口', target: '社会消费品零售总额', weight: 0.8531,name:'0.8531关联'},

                // Ribbon Type 的和弦图每一对节点之间必须是双向边
                {target: '第一产业人口', source: '地方生产总值', weight: 0.8469},
                {target: '第一产业人口', source: '第一产业产值', weight: 0.9569},
                {target: '第一产业人口', source: '第二产业产值', weight: 0.3145},
                {target: '第一产业人口', source: '第三产业产值', weight: 0.2185},
                {target: '第一产业人口', source: '人均GDP', weight: 0.9245},
                {target: '第一产业人口', source: '社会消费品零售总额', weight: 0.6125},
                {target: '第二产业人口', source: '地方生产总值', weight: 0.8521},
                {target: '第二产业人口', source: '第一产业产值', weight: 0.2185},
                {target: '第二产业人口', source: '第二产业产值', weight: 0.9582},
                {target: '第二产业人口', source: '第三产业产值', weight: 0.4156},
                {target: '第二产业人口', source: '人均GDP', weight: 0.8241},
                {target: '第二产业人口', source: '社会消费品零售总额', weight: 0.7797},
                {target: '第三产业人口', source: '地方生产总值', weight: 0.7589},
                {target: '第三产业人口', source: '第一产业产值', weight: 0.2456},
                {target: '第三产业人口', source: '第二产业产值', weight: 0.5214},
                {target: '第三产业人口', source: '第三产业产值', weight: 0.9102},
                {target: '第三产业人口', source: '人均GDP', weight: 0.8851},
                {target: '第三产业人口', source: '社会消费品零售总额', weight: 0.8531}
            ]
        }
    ]
};


                // 为echarts对象加载数据
                myChart.setOption(option);
            }
        );
   }
   if(btn.name===2030){
     $scope.totaldata = {

    tabledata:
    [
      {yearvalue:'指标', Fp:'第一产业人口',Sp:'第二产业人口',Tp:'第三产业人口'},
      {yearvalue:'第一产业产值', Fp:'0.9021',Sp:'0.3698',Tp:'0.2541'},
      {yearvalue:'第二产业产值', Fp:'0.3561',Sp:'0.9521',Tp:'0.6214'},
      {yearvalue:'第三产业产值', Fp:'0.2256',Sp:'0.6245',Tp:'0.9561'},
      {yearvalue:'人均GDP', Fp:'0.6214',Sp:'0.7183',Tp:'0.8196'},
      {yearvalue:'地方生产总值', Fp:'0.8269',Sp:'0.7349',Tp:'0.7189'},
      {yearvalue:'社会消费品零售总额', Fp:'0.8898',Sp:'0.8097',Tp:'0.7631'}

    ]
  };
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
        text: '太仓市2030年劳动力人口与各项经济指标关联度分析预测',
         textStyle:{
            fontWeight:'normal',
            fontFamily:'Lucida Sans Unicode',
            fontSize:'18',
            color:"#000000"
        },
        x:'center',
        y:'top'
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
        x: 'center',
        y: 'bottom',
        itemGap:20,
        data:['第一产业人口', '第二产业人口', '第三产业人口'],
        textStyle:{
            fontWeight:'normal'
        }
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
                        rotate : false
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
                {source: '第一产业人口', target: '地方生产总值', weight: 0.8269,name:'0.8269关联'},
                {source: '第一产业人口', target: '第一产业产值', weight: 0.9021,name:'0.9021关联'},
                {source: '第一产业人口', target: '第二产业产值', weight: 0.3698,name:'0.3698关联'},
                {source: '第一产业人口', target: '第三产业产值', weight: 0.2541,name:'0.2541关联'},
                {source: '第一产业人口', target: '人均GDP', weight: 0.6214,name:'0.6214关联'},
                {source: '第一产业人口', target: '社会消费品零售总额', weight: 0.8898,name:'0.8898关联'},
                {source: '第二产业人口', target: '地方生产总值', weight: 0.7349,name:'0.7349关联'},
                {source: '第二产业人口', target: '第一产业产值', weight: 0.3561,name:'0.3561关联'},
                {source: '第二产业人口', target: '第二产业产值', weight: 0.9521,name:'0.9521关联'},
                {source: '第二产业人口', target: '第三产业产值', weight: 0.6214,name:'0.6214关联'},
                {source: '第二产业人口', target: '人均GDP', weight: 0.7183,name:'0.7183关联'},
                {source: '第二产业人口', target: '社会消费品零售总额', weight: 0.8097,name:'0.8097关联'},
                {source: '第三产业人口', target: '地方生产总值', weight: 0.7189,name:'0.7189关联'},
                {source: '第三产业人口', target: '第一产业产值', weight: 0.2256,name:'0.2256关联'},
                {source: '第三产业人口', target: '第二产业产值', weight: 0.6245,name:'0.6245关联'},
                {source: '第三产业人口', target: '第三产业产值', weight: 0.9561,name:'0.9561关联'},
                {source: '第三产业人口', target: '人均GDP', weight: 0.8196,name:'0.8196关联'},
                {source: '第三产业人口', target: '社会消费品零售总额', weight: 0.7631,name:'0.7631关联'},

                // Ribbon Type 的和弦图每一对节点之间必须是双向边
                {target: '第一产业人口', source: '地方生产总值', weight: 0.8269},
                {target: '第一产业人口', source: '第一产业产值', weight: 0.9021},
                {target: '第一产业人口', source: '第二产业产值', weight: 0.3698},
                {target: '第一产业人口', source: '第三产业产值', weight: 0.2541},
                {target: '第一产业人口', source: '人均GDP', weight: 0.6214},
                {target: '第一产业人口', source: '社会消费品零售总额', weight: 0.8898},
                {target: '第二产业人口', source: '地方生产总值', weight: 0.7349},
                {target: '第二产业人口', source: '第一产业产值', weight: 0.3561},
                {target: '第二产业人口', source: '第二产业产值', weight: 0.9521},
                {target: '第二产业人口', source: '第三产业产值', weight: 0.6214},
                {target: '第二产业人口', source: '人均GDP', weight: 0.7183},
                {target: '第二产业人口', source: '社会消费品零售总额', weight: 0.8097},
                {target: '第三产业人口', source: '地方生产总值', weight: 0.7189},
                {target: '第三产业人口', source: '第一产业产值', weight: 0.2256},
                {target: '第三产业人口', source: '第二产业产值', weight: 0.6245},
                {target: '第三产业人口', source: '第三产业产值', weight: 0.9561},
                {target: '第三产业人口', source: '人均GDP', weight: 0.8196},
                {target: '第三产业人口', source: '社会消费品零售总额', weight: 0.7631}
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
     $scope.totaldata = {

    tabledata:
    [
      {yearvalue:'指标', Fp:'第一产业人口',Sp:'第二产业人口',Tp:'第三产业人口'},

      {yearvalue:'第一产业产值', Fp:'0.9395',Sp:'0.4193',Tp:'0.4116'},
      {yearvalue:'第二产业产值', Fp:'0.4425',Sp:'0.9724',Tp:'0.5947'},
      {yearvalue:'第三产业产值', Fp:'0.4924',Sp:'0.5824',Tp:'0.9488'},
      {yearvalue:'人均GDP', Fp:'0.4184',Sp:'0.6583',Tp:'0.7196'},
      {yearvalue:'地方生产总值', Fp:'0.4569',Sp:'0.6249',Tp:'0.7589'},
      {yearvalue:'社会消费品零售总额', Fp:'0.4498',Sp:'0.6997',Tp:'0.7631'}



    ]
  };
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
        text: '太仓市2045年劳动力人口与各项经济指标关联度分析预测',
         textStyle:{
            fontWeight:'normal',
            fontFamily:'Lucida Sans Unicode',
            fontSize:'18',
            color:"#000000"
        },
        x:'center',
        y:'top'
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
        x: 'center',
        y: 'bottom',
        itemGap:20,
        data:['第一产业人口', '第二产业人口', '第三产业人口'],
        textStyle:{
            fontWeight:'normal'
        }
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
                        rotate : false
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

                {source: '第一产业人口', target: '地方生产总值', weight: 0.4569,name:'0.4569关联'},
                {source: '第一产业人口', target: '第一产业产值', weight: 0.9395,name:'0.9395关联'},
                {source: '第一产业人口', target: '第二产业产值', weight: 0.4425,name:'0.4425关联'},
                {source: '第一产业人口', target: '第三产业产值', weight: 0.4924,name:'0.4924关联'},
                {source: '第一产业人口', target: '人均GDP', weight: 0.4184,name:'0.4184关联'},
                {source: '第一产业人口', target: '社会消费品零售总额', weight: 0.4498,name:'0.4498关联'},
                {source: '第二产业人口', target: '地方生产总值', weight: 0.6249,name:'0.6249关联'},
                {source: '第二产业人口', target: '第一产业产值', weight: 0.4193,name:'0.4193关联'},
                {source: '第二产业人口', target: '第二产业产值', weight: 0.9724,name:'0.9724关联'},
                {source: '第二产业人口', target: '第三产业产值', weight: 0.5824,name:'0.5824关联'},
                {source: '第二产业人口', target: '人均GDP', weight: 0.6583,name:'0.6583关联'},
                {source: '第二产业人口', target: '社会消费品零售总额', weight: 0.6997,name:'0.6997关联'},
                {source: '第三产业人口', target: '地方生产总值', weight: 0.7589,name:'0.7589关联'},
                {source: '第三产业人口', target: '第一产业产值', weight: 0.4116,name:'0.4116关联'},
                {source: '第三产业人口', target: '第二产业产值', weight: 0.5947,name:'0.5947关联'},
                {source: '第三产业人口', target: '第三产业产值', weight: 0.9488,name:'0.9488关联'},
                {source: '第三产业人口', target: '人均GDP', weight: 0.7196,name:'0.7196关联'},
                {source: '第三产业人口', target: '社会消费品零售总额', weight: 0.7631,name:'0.7631关联'},

                // Ribbon Type 的和弦图每一对节点之间必须是双向边
                {target: '第一产业人口', source: '地方生产总值', weight: 0.4569},
                {target: '第一产业人口', source: '第一产业产值', weight: 0.9395},
                {target: '第一产业人口', source: '第二产业产值', weight: 0.4425},
                {target: '第一产业人口', source: '第三产业产值', weight: 0.4924},
                {target: '第一产业人口', source: '人均GDP', weight: 0.4184},
                {target: '第一产业人口', source: '社会消费品零售总额', weight: 0.4498},
                {target: '第二产业人口', source: '地方生产总值', weight: 0.6249},
                {target: '第二产业人口', source: '第一产业产值', weight: 0.4193},
                {target: '第二产业人口', source: '第二产业产值', weight: 0.9724},
                {target: '第二产业人口', source: '第三产业产值', weight: 0.5824},
                {target: '第二产业人口', source: '人均GDP', weight: 0.6583},
                {target: '第二产业人口', source: '社会消费品零售总额', weight: 0.6997},
                {target: '第三产业人口', source: '地方生产总值', weight: 0.7589},
                {target: '第三产业人口', source: '第一产业产值', weight: 0.4116},
                {target: '第三产业人口', source: '第二产业产值', weight: 0.5947},
                {target: '第三产业人口', source: '第三产业产值', weight: 0.9488},
                {target: '第三产业人口', source: '人均GDP', weight: 0.7196},
                {target: '第三产业人口', source: '社会消费品零售总额', weight: 0.7631}


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
     $scope.totaldata = {

    tabledata:
    [
      {yearvalue:'指标', Fp:'第一产业人口',Sp:'第二产业人口',Tp:'第三产业人口'},
      {yearvalue:'第一产业产值', Fp:'0.9180',Sp:'0.2173',Tp:'0.7234'},
      {yearvalue:'第二产业产值', Fp:'0.2145',Sp:'0.9214',Tp:'0.5624'},
      {yearvalue:'第三产业产值', Fp:'0.2154',Sp:'0.6214',Tp:'0.9012'},
      {yearvalue:'人均GDP', Fp:'0.7378',Sp:'0.7425',Tp:'0.7457'},
      {yearvalue:'地方生产总值', Fp:'0.7610',Sp:'0.7631',Tp:'0.7631'},
      {yearvalue:'社会消费品零售总额', Fp:'0.7517',Sp:'0.7554',Tp:'0.7577'}

    ]
  };
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
        text: '太仓市2035年劳动力人口与各项经济指标关联度分析预测',
         textStyle:{
            fontWeight:'normal',
            fontFamily:'Lucida Sans Unicode',
            fontSize:'18',
            color:"#000000"
        },
        x:'center',
        y:'top'
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
        x: 'center',
        y: 'bottom',
        itemGap:20,
        data:['第一产业人口', '第二产业人口', '第三产业人口'],
        textStyle:{
            fontWeight:'normal'
        }
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
                        rotate : false
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
                {source: '第一产业人口', target: '第一产业产值', weight: 0.9180,name:'0.9180关联'},
                {source: '第一产业人口', target: '第二产业产值', weight: 0.2173,name:'0.2173关联'},
                {source: '第一产业人口', target: '第三产业产值', weight: 0.7234,name:'0.7234关联'},
                {source: '第一产业人口', target: '人均GDP', weight: 0.7378,name:'0.7378关联'},
                {source: '第一产业人口', target: '社会消费品零售总额', weight: 0.7517,name:'0.7517关联'},
                {source: '第二产业人口', target: '地方生产总值', weight: 0.7610,name:'0.7610关联'},
                {source: '第二产业人口', target: '第一产业产值', weight: 0.2145,name:'0.2145关联'},
                {source: '第二产业人口', target: '第二产业产值', weight: 0.9214,name:'0.9214关联'},
                {source: '第二产业人口', target: '第三产业产值', weight: 0.5624,name:'0.5624关联'},
                {source: '第二产业人口', target: '人均GDP', weight: 0.7425,name:'0.7425关联'},
                {source: '第二产业人口', target: '社会消费品零售总额', weight: 0.7554,name:'0.7554关联'},
                {source: '第三产业人口', target: '地方生产总值', weight: 0.7631,name:'0.7631关联'},
                {source: '第三产业人口', target: '第一产业产值', weight: 0.2154,name:'0.2154关联'},
                {source: '第三产业人口', target: '第二产业产值', weight: 0.6214,name:'0.6214关联'},
                {source: '第三产业人口', target: '第三产业产值', weight: 0.9012,name:'0.9012关联'},
                {source: '第三产业人口', target: '人均GDP', weight:0.7457,name:'0.7457关联'},
                {source: '第三产业人口', target: '社会消费品零售总额', weight: 0.7577,name:'0.7577关联'},

                // Ribbon Type 的和弦图每一对节点之间必须是双向边
                {target: '第一产业人口', source: '地方生产总值', weight: 0.7546},
                {target: '第一产业人口', source: '第一产业产值', weight: 0.9180},
                {target: '第一产业人口', source: '第二产业产值', weight: 0.2173},
                {target: '第一产业人口', source: '第三产业产值', weight:0.7234},
                {target: '第一产业人口', source: '人均GDP', weight: 0.7378},
                {target: '第一产业人口', source: '社会消费品零售总额', weight: 0.7517},
                {target: '第二产业人口', source: '地方生产总值', weight: 0.7610},
                {target: '第二产业人口', source: '第一产业产值', weight: 0.2154},
                {target: '第二产业人口', source: '第二产业产值', weight: 0.9214},
                {target: '第二产业人口', source: '第三产业产值', weight: 0.5624},
                {target: '第二产业人口', source: '人均GDP', weight: 0.7425},
                {target: '第二产业人口', source: '社会消费品零售总额', weight: 0.7554},
                {target: '第三产业人口', source: '地方生产总值', weight: 0.7631},
                {target: '第三产业人口', source: '第一产业产值', weight: 0.2154},
                {target: '第三产业人口', source: '第二产业产值', weight: 0.6214},
                {target: '第三产业人口', source: '第三产业产值', weight: 0.9012},
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
   if(btn.name===2040){
     $scope.totaldata = {

    tabledata:
     [
      {yearvalue:'指标', Fp:'第一产业人口',Sp:'第二产业人口',Tp:'第三产业人口'},
      {yearvalue:'第一产业产值', Fp:'0.9245',Sp:'0.2154',Tp:'0.3116'},
      {yearvalue:'第二产业产值', Fp:'0.2425',Sp:'0.9524',Tp:'0.3547'},
      {yearvalue:'第三产业产值', Fp:'0.2124',Sp:'0.3824',Tp:'0.9488'},
      {yearvalue:'人均GDP', Fp:'0.7184',Sp:'0.7583',Tp:'0.8196'},
      {yearvalue:'地方生产总值', Fp:'0.8569',Sp:'0.7249',Tp:'0.8589'},
      {yearvalue:'社会消费品零售总额', Fp:'0.7498',Sp:'0.7997',Tp:'0.7631'}

    ]

  };
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
        text: '太仓市2040年劳动力人口与各项经济指标关联度分析预测',
        textStyle:{
            fontWeight:'normal',
            fontFamily:'Lucida Sans Unicode',
            fontSize:'18',
            color:"#000000"
        },
        x:'center',
        y:'top'
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
        x: 'center',
        y: 'bottom',
        itemGap:20,
        data:['第一产业人口', '第二产业人口', '第三产业人口'],
        textStyle:{
            fontWeight:'normal'
        }
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
                        rotate : false
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
                {source: '第一产业人口', target: '地方生产总值', weight: 0.6125,name:'0.6125关联'},
                {source: '第一产业人口', target: '第一产业产值', weight: 0.9245,name:'0.9245关联'},
                {source: '第一产业人口', target: '第二产业产值', weight: 0.2154,name:'0.2154关联'},
                {source: '第一产业人口', target: '第三产业产值', weight: 0.3116,name:'0.3116关联'},
                {source: '第一产业人口', target: '人均GDP', weight: 0.9245,name:'0.9245关联'},
                {source: '第一产业人口', target: '社会消费品零售总额', weight: 0.6125,name:'0.6125关联'},
                {source: '第二产业人口', target: '地方生产总值', weight: 0.8521,name:'0.8521关联'},
                {source: '第二产业人口', target: '第一产业产值', weight: 0.2425,name:'0.2425关联'},
                {source: '第二产业人口', target: '第二产业产值', weight: 0.9524,name:'0.9524关联'},
                {source: '第二产业人口', target: '第三产业产值', weight: 0.3547,name:'0.3547关联'},
                {source: '第二产业人口', target: '人均GDP', weight: 0.8241,name:'0.8241关联'},
                {source: '第二产业人口', target: '社会消费品零售总额', weight: 0.7797,name:'0.7997关联'},
                {source: '第三产业人口', target: '地方生产总值', weight: 0.7598,name:'0.7598关联'},
                {source: '第三产业人口', target: '第一产业产值', weight: 0.2124,name:'0.2124关联'},
                {source: '第三产业人口', target: '第二产业产值', weight: 0.3824,name:'0.3824关联'},
                {source: '第三产业人口', target: '第三产业产值', weight: 0.9488,name:'0.9488关联'},
                {source: '第三产业人口', target: '人均GDP', weight: 0.8851,name:'0.8851关联'},
                {source: '第三产业人口', target: '社会消费品零售总额', weight: 0.8531,name:'0.8531关联'},

                // Ribbon Type 的和弦图每一对节点之间必须是双向边
                {target: '第一产业人口', source: '地方生产总值', weight: 0.6125},
                {target: '第一产业人口', source: '第一产业产值', weight: 0.9569},
                {target: '第一产业人口', source: '第二产业产值', weight: 0.2185},
                {target: '第一产业人口', source: '第三产业产值', weight: 0.2456},
                {target: '第一产业人口', source: '人均GDP', weight: 0.9245},
                {target: '第一产业人口', source: '社会消费品零售总额', weight: 0.6125},
                {target: '第二产业人口', source: '地方生产总值', weight: 0.8521},
                {target: '第二产业人口', source: '第一产业产值', weight: 0.3145},
                {target: '第二产业人口', source: '第二产业产值', weight: 0.9582},
                {target: '第二产业人口', source: '第三产业产值', weight: 0.5214},
                {target: '第二产业人口', source: '人均GDP', weight: 0.8241},
                {target: '第二产业人口', source: '社会消费品零售总额', weight: 0.7797},
                {target: '第三产业人口', source: '地方生产总值', weight: 0.7598},
                {target: '第三产业人口', source: '第一产业产值', weight: 0.2185},
                {target: '第三产业人口', source: '第二产业产值', weight: 0.4156},
                {target: '第三产业人口', source: '第三产业产值', weight: 0.9102},
                {target: '第三产业人口', source: '人均GDP', weight: 0.8851},
                {target: '第三产业人口', source: '社会消费品零售总额', weight: 0.8531}
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
  //  popData1[9]=Math.round((newValue*0.03)*50+775038);
//    popData2[9]=Math.round((newValue*0.03)*50+843482);
  //  popData3[9]=Math.round((newValue*0.03)*50+898577);
   //console.log(popData[9]);
  // $scope.selectedRange1=Math.round(($scope.selectedRange1+($scope.selectedRange*(newValue-oldValue)/200))*100)/100;
    //$scope.selectedRange1=Math.round((($scope.selectedRange*0.2)));
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
    // $scope.selectedRange=Math.round(($scope.selectedRange+($scope.selectedRange1*(newValue-oldValue)/200))*100)/100;
  //  popData1[9]=Math.round((newValue*0.03)*50+775038);
//    popData2[9]=Math.round((newValue*0.03)*50+843482);
  //  popData3[9]=Math.round((newValue*0.03)*50+898577);
    gdp[9]=(newValue*0.03)*50+2022.31;
    gdp1[9]=(newValue*0.03)*50+4256.65;
    gdp2[9]=(newValue*0.03)*50+8373.48;
}
$scope.$watch($scope.rr,hh);

    //var popData1=[747046, 750908, 754570, 757963, 761066, 763863, 766970, 769950, 772652, 775038];
    var gdp=[1100, 1177, 1259.39, 1347.55, 1441.88,1542.81,1650.80, 1766.36, 1890.00, 2022.31];
  //  var popData2=[803463, 808465, 813319, 818001, 822475, 826754, 831251, 835567, 839655, 843482];
    var gdp1=[2163.87, 2315.34, 2477.41, 2650.83,2836.39, 3034.93, 3247.38, 3474.7,3717.93, 4256.65];
  //  var popData3=[850441, 856081, 861654, 867106, 872420, 877676, 883104, 888418, 893579, 898577];
    var gdp2=[4554.62, 4873.44, 5214.58,5579.60,5970.18, 6388.09,6835.25, 7313.72,7825.68, 8373.48];
         $scope.predictChart ={
options:{ chart: {
            zoomType: 'xy'
        },
        title: {
            text: '太仓市2016至2025年劳动力总人口与GDP关联分析预测'
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
                    color: '#7CB5EC'
                }
            },
            labels: {
                formatter: function() {
                    return this.value +'人';
                },
                style: {
                    color: '#7CB5EC'
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

            align: 'center',

            verticalAlign: 'bottom',
             itemStyle:{
                    fontWeight:'normal'
                    }
        }
    },
        series: [{
            name: '人口(人)',
            color: '#7CB5EC',
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
                    },
                  legend:{
                    itemStyle:{
                        fontWeight:'normal'
                    }
                }
                },

                series: [{
                    name: '劳动力总人口',

                    data: popData1
                }],
                title: {
                    text: '太仓市2016至2025年劳动力总人口预测值'
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
                    },
                    legend:{
                    itemStyle:{
                        fontWeight:'normal'
                    }
                }
                },
                series: [{
                    name: 'GDP总量',
                    data: gdp
                }],
                title: {
                    text: '太仓市2016至2025年GDP总量预测值'
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
            itemStyle:{
                fontWeight:'normal'
            }
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
                              colors:piecolor,
                                chart: {
                                    plotBackgroundColor: null,
                                    plotBorderWidth: null,
                                    plotShadow: false
                                },
                                credits:{
                                    enabled:false
                                    },
                                title: {
                                    text: "太仓市2020年产业就业人口比重分析预测"
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
                                            format: ' {point.name}:{point.percentage:.1f} %',

                                        },
                                        showInLegend: true
                                    }


                            },
                            legend:{
                                itemStyle:{
                                    fontWeight:'normal'
                                    }
                               }
                        },
                            series: [{
                                type: 'pie',
                                name: '',
                                data:[
             ['第一产业人口',23.5],
                ['第二产业人口',24.1],
                ['第三产业人口',27.2]
            ]
                            }]

};
$scope.industryPie={
options: {
                                colors:piecolor,
                                chart: {
                                    plotBackgroundColor: null,
                                    plotBorderWidth: null,
                                    plotShadow: false
                                },
                                credits:{
                                    enabled:false
                                    },
                                title: {
                                    text: "太仓市2020年产业产值比重分析预测"
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
                                            format: '{point.name}:{point.percentage:.1f} %'
                                        },
                                        showInLegend: true
                                    }


                            },
                            legend:{
                                itemStyle:{
                                    fontWeight:'normal'
                                }
                            }
                        },
                            series: [{
                                type: 'pie',
                                name: '',
                                data:[
              ['第一产业产值',72.094],
                ['第二产业产值',692.1345],//692.1345
                ['第三产业产值',677.6836]
            ]
                            }]


};
});
}]);
