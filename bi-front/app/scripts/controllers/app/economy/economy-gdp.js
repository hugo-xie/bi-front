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
            data: [48.9, 38.8, 60.9, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, null, null, null]

        }, {
            type: 'column',
            name: '预测数据',
            data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 39.7, 46.7, 53.2, 47.7]

        },
        {   
            yAxis: 1,
            type:'spline',
            name: '同比增长率',
            data: [6.4, 7.2, 7.5, 6.7, 7.6, 7.5, 7.4, 7.4, 5.7, 7.7, 6.2, 7.7]
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
            data: [ 59.0, 59.6, 52.4, null ]

        }, {
            type: 'column',
            name: '预测数据',
            data: [42.4, 33.2, 34.5,39.7 ]

        },
        {   
            yAxis: 1,
            type:'spline',
            name: '同比增长率',
            data: [6.4, 7.2, 7.5, 6.7]
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
            data: [48.9, 38.8, 60.9, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, null, null, null]

        }, {
          
            name: '第二产业',
            data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 39.7, null,null,null]

        },
        {   
            name: '第三产业',
            data: [62.4, 73.2, 74.5, 69.7, 72.6, 75.5, 77.4, 70.4, 59.7,  null,null,null]
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
            data: [ 34.0, 38.6, 39.4, null ]

        }, {
            type: 'column',
            name: '预测数据',
            data: [36.4, 37.2, 38.5,39.7 ]

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
            data: [ 31.0, 30.6, 36.4, null ]

        }, {
            type: 'column',
            name: '预测数据',
            data: [33.4, 31.2, 34.5,39.7 ]

        },
        {   
            yAxis: 1,
            type:'spline',
            name: '同比增长率',
            data: [5.4, 6.2, 6.5, 6.7]
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
            data: [ 32.0, 40.6, 41.4, null ]

        }, {
            type: 'column',
            name: '预测数据',
            data: [33.4, 36.2, 39.5,42.7 ]

        },
        {   
            yAxis: 1,
            type:'spline',
            name: '同比增长率',
            data: [5.4, 6.2, 7.5, 6.3]
        }]
  
  };
}]);
