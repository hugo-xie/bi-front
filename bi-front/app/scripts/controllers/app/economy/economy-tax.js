'use strict';

app.controller('EconomyTaxCtrl', ['$scope','$stateParams', function($scope, $stateParams) {
  $scope.colorpicker = {
        options: {
            orientation: 'horizontal',
            min: 0,
            max: 100,
            range: 'min'
        }
    };
  $scope.title = $stateParams.title;
  
  $scope.deviation=false;
  $scope.forecast=false;
  $scope.changeViews=function(){
    if( $scope.monthTaxChart.options.chart.type == 'column')
    {
        $scope.monthTaxChart.options.chart.type = 'spline'
    }
    else
        $scope.monthTaxChart.options.chart.type = 'column'
   
  };
  $scope.checkdeviation=function(){
    $scope.deviation=!$scope.deviation;
  };
  $scope.checkforecast=function(){
    $scope.forecast=!$scope.forecast;
  }
  $scope.adjustParameter=function(){
    $scope.monthselectedRange=0;
    $scope.monthselectedRange2=0;
    $scope.monthselectedRange3=0;
    $scope.monthselectedRange4=0;
  }

  $scope.deviationYear=false;
  $scope.forecastYear=false;

  $scope.changeViewsYear=function(){
    if( $scope.yearTaxChart.options.chart.type == 'column')
    {
        $scope.yearTaxChart.options.chart.type = 'spline'
    }
    else
        $scope.yearTaxChart.options.chart.type = 'column'
   
  };
  $scope.checkdeviationYear=function(){
    $scope.deviationYear=!$scope.deviationYear;
  };
  $scope.checkforecastYear=function(){
    $scope.forecastYear=!$scope.forecastYear;
  };
  $scope.adjustParameterYear=function(){
          $scope.selectedRange=0;
          $scope.selectedRange2=0;
          $scope.selectedRange3=0;
          $scope.selectedRange4=0;
  };
  $scope.selectedRange=0;
  $scope.date =[19.32,29.50,39.65,51.64,62.21,65.14,71.83,77.34,83.34,90.24,96.52,103.43,110.02];
  $scope.date2=[19.32,23.00,33.66,41.62,52.36,62.53,68.87,74.32,81.36,89.23,96.52];
$scope.range = function() {
        return $scope.selectedRange;
      };
      $scope.range2=function(){
        return $scope.selectedRange2;
      };
       $scope.range3=function(){
        return $scope.selectedRange3;
      };
       $scope.range4=function(){
        return $scope.selectedRange4;
      };
      $scope.monthrange=function(){
        return $scope.monthselectedRange;
      };
      $scope.monthrange2=function(){
        return $scope.monthselectedRange2;
      };
      $scope.monthrange3=function(){
        return $scope.monthselectedRange3;
      };
      $scope.monthrange4=function(){
        return $scope.monthselectedRange4;
      };
var changedetail=function(newValue,oldValue,scope){
  $scope.date[10]=$scope.date[10]+$scope.date[10]*(newValue-oldValue)/200;
  $scope.date[11]=$scope.date[11]+$scope.date[11]*(newValue-oldValue)/200;
  $scope.date[12]=$scope.date[12]+$scope.date[12]*(newValue-oldValue)/200;
};
var changedetail2=function(newValue,oldValue,scope){
  $scope.date[10]=$scope.date[10]+$scope.date[10]*(newValue-oldValue)/200;
  $scope.date[11]=$scope.date[11]+$scope.date[11]*(newValue-oldValue)/200;
  $scope.date[12]=$scope.date[12]+$scope.date[12]*(newValue-oldValue)/200;
};
var changedetail3=function(newValue,oldValue,scope){
  $scope.date[10]=$scope.date[10]+$scope.date[10]*(newValue-oldValue)/200;
  $scope.date[11]=$scope.date[11]+$scope.date[11]*(newValue-oldValue)/200;
  $scope.date[12]=$scope.date[12]+$scope.date[12]*(newValue-oldValue)/200;
};
var changedetail4=function(newValue,oldValue,scope){
  $scope.date[10]=$scope.date[10]+$scope.date[10]*(newValue-oldValue)/200;
  $scope.date[11]=$scope.date[11]+$scope.date[11]*(newValue-oldValue)/200;
  $scope.date[12]=$scope.date[12]+$scope.date[12]*(newValue-oldValue)/200;
};
var changemonthdetail=function(newValue,oldValue,scope){
  $scope.date2[10]=$scope.date2[10]+$scope.date2[10]*(newValue-oldValue)/200;
  
};
var changemonthdetail2=function(newValue,oldValue,scope){
  $scope.date2[10]=$scope.date2[10]+$scope.date2[10]*(newValue-oldValue)/200;
  
};
var changemonthdetail3=function(newValue,oldValue,scope){
  $scope.date2[10]=$scope.date2[10]+$scope.date2[10]*(newValue-oldValue)/200;
  
};
var changemonthdetail4=function(newValue,oldValue,scope){
  $scope.date2[10]=$scope.date2[10]+$scope.date2[10]*(newValue-oldValue)/200;
  
};
$scope.$watch($scope.range,changedetail);
$scope.$watch($scope.range2,changedetail2);
$scope.$watch($scope.range3,changedetail3);
$scope.$watch($scope.range4,changedetail4);
$scope.$watch($scope.monthrange,changemonthdetail);
$scope.$watch($scope.monthrange2,changemonthdetail2);
$scope.$watch($scope.monthrange3,changemonthdetail3);
$scope.$watch($scope.monthrange4,changemonthdetail4);
  $scope.monthArray = ['2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'];
  $scope.yearArray = ['2005年','2006年','2007年','2008年','2009年','2010年','2011年','2012年','2013年','2014年','2015年','2016年','2017年'];
  $scope.monthTaxChart = {
    options: {
      chart: {
        type:'column'
      },
    },
    title: {
      text:'2015年月度税收收入预测',
      style:{
        fontWeight:'bold'
      }
    },

    xAxis: {
      categories: $scope.monthArray,
        plotBands:[{
            from: 9.5,
            to:12.5,
            color:'rgba(68, 170, 213, .2)',
            label: {
                    text: '预测区',
                    verticalAlign: 'top',
                    style: {
                        fontSize: '12px',
                        fontWeight: 600
                    }
                   
                }
            }]
    },
    yAxis: 
    [{
      min: 0,
      title: {text: '税收收入（亿元）'},
       plotLines:[{
            color:'red',
            dashStyle:'DashDot',
            value:95.62,
            width:2,
            label:{
                text:'本年度税收目标',
                align:'left',
                x:10,
                 style: {
                        fontSize: '8px',
                        fontWeight: 200
                    }
            }
            }]
    },
    {
            title: {
                text: '同比增长率'
            },
            labels: {
                format: '{value} %',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
        },
        opposite:true}],
    tooltip: 
    {
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
            name: '真实值',
            data: [18.12, 23.30, 33.39, 40.48, 49.10, 60.20, 65.11, 71.06, 81.84,88.82]

        }, {
            name: '预测值',
            data: $scope.date2

        },
        {   
            yAxis: 1,
            type:'spline',
            name: '同比增长率',
            data: [6.4, 7.2, 7.5, 7.1, 7.6, 7.5, 7.4, 7.4, 7.1, 7.5, 7.2]
        }]   
  };

  $scope.yearTaxChart = {
    options: {
      chart: {
        type:'column'
      },
    },
    title: {
      text:'年度税收收入预测',
      style:{
        fontWeight:'bold'
      }
    },

    xAxis: {
      categories: $scope.yearArray,
        plotBands:[{
            from: 9.5,
            to:12.5,
            color:'rgba(68, 170, 213, .2)',
            label: {
                    text: '预测区',
                    verticalAlign: 'top',
                    style: {
                        fontSize: '12px',
                        fontWeight: 600
                    }
                   
                }
            }]

    },
    yAxis: 
    [{
      min: 0,
      title: {
        text: '税收收入（亿元）'
      },
       plotLines:[{
            color:'red',
            dashStyle:'DashDot',
            value:95.62,
            width:2,
            label:{
                text:'本年度税收目标',
                align:'left',
                x:10,
                 style: {
                        fontSize: '8px',
                        fontWeight: 200
                    }
            }
            }]

    },
    {
            title: {
                text: '同比增长率'
            },
            labels: {
                format: '{value} %',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
        },
        opposite:true}],
    tooltip: 
    {
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
            name: '真实值',
            data: [18.92 ,27.59,36.26,48.18,58.80,62.00,68.41,75.15,82.12,90.97]

        }, {
            name: '预测值',
            data: $scope.date

        },
         {   
            yAxis: 1,
            type:'spline',
            name: '同比增长率',
            data: [7.4, 7.2, 7.5, 7.4, 7.3, 7.5, 7.4, 7.4, 7.1, 7.3, 7.2, 7.1,7.2]
        }]   
  };

    
}]);
