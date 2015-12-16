//controller: 'EconomyGdpCtrl'
'use strict';

app.controller('EconomyGdpCtrl', ['$scope','$stateParams', function($scope, $stateParams) {
   $scope.deviation=false;
   $scope.forecast=false;
   $scope.industrydetail=false;
  $scope.title = $stateParams.title;
  $scope.checkdeviation=function(){
    $scope.deviation=!$scope.deviation;
  };
  $scope.checkforecast=function(){
    $scope.forecast=!$scope.forecast;
  };
  $scope.exchange=function(param){
    $scope.yearGDPChart.series[0].type=param;
    $scope.yearGDPChart.series[1].type=param;
  };
  $scope.monthexchange=function(param){
    $scope.monthGDPChart.series[0].type=param;
    $scope.monthGDPChart.series[1].type=param;
  };
  $scope.monthcheckdeviation=function(){
    $scope.monthdeviation=!$scope.monthdeviation;
  };
  $scope.monthcheckforecast=function(){
    $scope.monthforecast=!$scope.monthforecast;
  };
  $scope.industrycheckdetail=function(){
    $scope.industrydetail=!$scope.industrydetail;
  };
  $scope.industryexchange=function(param){
     $scope.industryyearGDPChart.options.chart.type=param;
  };
  $scope.yearGDPChart={
    chart: {
            
        },
        title: {
            text: '太仓市经济数据'
        },
        subtitle: {
            text: '年度GDP分析'
        },
        xAxis: {
            categories: [
                '2006',
                '2007',
                '2008',
                '2009',
                '2010',
                '2011',
                '2012',
                '2013',
                '2014',
                '2015',
                '2016',
                '2017'
                
            ]
        },
        yAxis: [{
            min: 0,
            title: {
                text: '年度GDP总值（亿元）'
            }
        },{
            title: {
                text: '同比增长率'
            },
            labels: {
                format: '{value} %',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
        },
        opposite:true
        }],
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            type: 'column',
            name: '真实数据',
            data: [366.63, 440.27, 528.02, 612.01, 730.32, 867.53, 955.12, 1002.28, 1065.33, null, null, null]

        }, {
            type: 'column',
            name: '预测数据',
            data: [328.24, 453.61, 547.18, 602.58, 758.69, 890.37, 991.74, 1025.56, 1098.33, 1152.67, 1218.98, 1298.03]

        },
        {   
            yAxis: 1,
            type:'spline',
            name: '同比增长率',
            data: [6.4, 7.2, 7.5, 6.7, 7.6, 7.5, 7.4, 7.4, 7.1, 7.5, 7.2, 7.7]
        }]
  };
  $scope.monthGDPChart={
    chart: {
            
        },
        title: {
            text: '太仓市经济数据'
        },
        subtitle: {
            text: '年度GDP分析'
        },
        xAxis: {
            categories: [
                '第一季度',
                '第二季度',
                '第三季度',
                '第四季度'
                
            ]
        },
        yAxis: [{
            min: 0,
            title: {
                text: '季度GDP总值（亿元）'
            }
        },{
            title: {
                text: '同比增长率'
            },
            labels: {
                format: '{value} %',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
        },
        opposite:true
        }],
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            type: 'column',
            name: '真实数据',
            data: [ 225.51, 555.72, 849.66, null ]

        }, {
            type: 'column',
            name: '预测数据',
            data: [248.77, 541.86, 867.74,1152.67]

        },
        {   
            yAxis: 1,
            type:'spline',
            name: '同比增长率',
            data: [6.1, 6.2, 6.4, 6.7]
        }]
  };
  $scope.industryyearGDPChart={
    options: {
      chart: {
        type:'column'
      },
    },
        title: {
            text: '太仓市经济数据'
        },
        subtitle: {
            text: '各产业按年份GDP分析'
        },
        xAxis: {
            categories: [
                '2006',
                '2007',
                '2008',
                '2009',
                '2010',
                '2011',
                '2012',
                '2013',
                '2014',
                '2015',
                '2016',
                '2017'
                
            ]
        },
        yAxis: {
            min: 0,
            title: {
                text: '年度GDP总值（亿元）'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            
            name: '第一产业',
            data: [15.63,16.80,23.03,24.66,26.98,30.88,33.61,33.56,35.24, null, null, null]

        }, {
          
            name: '第二产业',
            data: [223.05,265.51,310.19,355.35,418.96,485.72,520.36,532.46,556.65, null,null,null]

        },
        {   
            name: '第三产业',
            data: [127.95,157.96,194.80,232.00,284.38,350.93,401.15,436.26,473.44,null,null,null]
        }]
  };
  $scope.primaryGDPChart={
    chart: {
            
        },
        title: {
            text: '太仓市经济数据'
        },
        subtitle: {
            text: '第一产业本年度GDP分析'
        },
        xAxis: {
            categories: [
                '第一季度',
                '第二季度',
                '第三季度',
                '第四季度'
                
            ]
        },
        yAxis: [{
            min: 0,
            title: {
                text: '第一产业季度GDP总值（亿元）'
            }
        },{
            title: {
                text: '同比增长率'
            },
            labels: {
                format: '{value} %',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
        },
        opposite:true
        }],
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            type: 'column',
            name: '真实数据',
            data: [ 4.48, 13.32, 23.57, null ]

        }, {
            type: 'column',
            name: '预测数据',
            data: [4.85, 12.64, 22.78,36.77 ]

        },
        {   
            yAxis: 1,
            type:'spline',
            name: '同比增长率',
            data: [4.4, 5.2, 5.5, 6.7]
        }]
  
  };
  $scope.secondGDPChart={
    chart: {
            
        },
        title: {
            text: '太仓市经济数据'
        },
        subtitle: {
            text: '第二产业本年度GDP分析'
        },
        xAxis: {
            categories: [
                '第一季度',
                '第二季度',
                '第三季度',
                '第四季度'
                
            ]
        },
        yAxis: [{
            min: 0,
            title: {
                text: '第二产业季度GDP总值（亿元）'
            }
        },{
            title: {
                text: '同比增长率'
            },
            labels: {
                format: '{value} %',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
        },
        opposite:true
        }],
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            type: 'column',
            name: '真实数据',
            data: [ 120.46, 293.99, 444.01, null ]

        }, {
            type: 'column',
            name: '预测数据',
            data: [117.68, 303.45, 468.21,586.45]

        },
        {   
            yAxis: 1,
            type:'spline',
            name: '同比增长率',
            data: [6.0, 5.7, 6.0, 6.7]
        }]
  
  };
  $scope.thirdGDPChart={
    chart: {
            
        },
        title: {
            text: '太仓市经济数据'
        },
        subtitle: {
            text: '第三产业本年度GDP分析'
        },
        xAxis: {
            categories: [
                '第一季度',
                '第二季度',
                '第三季度',
                '第四季度'
                
            ]
        },
        yAxis: [{
            min: 0,
            title: {
                text: '第三产业季度GDP总值（亿元）'
            }
        },{
            title: {
                text: '同比增长率'
            },
            labels: {
                format: '{value} %',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
        },
        opposite:true
        }],
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            type: 'column',
            name: '真实数据',
            data: [ 100.57, 248.41, 382.08, null ]

        }, {
            type: 'column',
            name: '预测数据',
            data: [107.87, 269.68, 404.18,507.54 ]

        },
        {   
            yAxis: 1,
            type:'spline',
            name: '同比增长率',
            data: [6.4, 7.0, 7.1, 7.3]
        }]
  
  };
   
}]);
