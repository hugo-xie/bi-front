'use strict';

app.controller('EconomyTaxCtrl', ['$scope','$stateParams', function($scope, $stateParams) {
  $scope.title = $stateParams.title;
  $scope.realValues2 = ['2.8%','3.3%','3.0%','3.1%','3.0%','2.3%','2.7%','1.6%','0.8%','2.4%'];
  $scope.items = ['2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019'];
  $scope.realValues = [18.92,27.59,37.26,50.18,58.80,70.00,85.41,90.15,100.13,106.47];
  $scope.predictionValues = [19.32,29.50,39.65,51.64,62.21,72.14,88.83,94.34,103.34,110.24,117.52,122.25,130.95,137.45,143.02];



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
    alert('month')
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
          
  };
  $scope.selectedRange=0;
  $scope.date=[19.32,29.50,39.65,51.64,62.21,72.14,88.83,94.34,103.34,110.24,117.52,122.25,130.95,137.45,143.02];
  $scope.date2=[193214, 230005, 336584, 416214, 523621, 625314, 688743, 743214, 813564, 892314, 965248];
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
  $scope.date[13]=$scope.date[13]+$scope.date[13]*(newValue-oldValue)/200;
  $scope.date[14]=$scope.date[14]+$scope.date[14]*(newValue-oldValue)/200;
};
var changedetail2=function(newValue,oldValue,scope){
  $scope.date[10]=$scope.date[10]+$scope.date[10]*(newValue-oldValue)/200;
  $scope.date[11]=$scope.date[11]+$scope.date[11]*(newValue-oldValue)/200;
  $scope.date[12]=$scope.date[12]+$scope.date[12]*(newValue-oldValue)/200;
  $scope.date[13]=$scope.date[13]+$scope.date[13]*(newValue-oldValue)/200;
  $scope.date[14]=$scope.date[14]+$scope.date[14]*(newValue-oldValue)/200;
};
var changedetail3=function(newValue,oldValue,scope){
  $scope.date[10]=$scope.date[10]+$scope.date[10]*(newValue-oldValue)/200;
  $scope.date[11]=$scope.date[11]+$scope.date[11]*(newValue-oldValue)/200;
  $scope.date[12]=$scope.date[12]+$scope.date[12]*(newValue-oldValue)/200;
  $scope.date[13]=$scope.date[13]+$scope.date[13]*(newValue-oldValue)/200;
  $scope.date[14]=$scope.date[14]+$scope.date[14]*(newValue-oldValue)/200;
};
var changedetail4=function(newValue,oldValue,scope){
  $scope.date[10]=$scope.date[10]+$scope.date[10]*(newValue-oldValue)/200;
  $scope.date[11]=$scope.date[11]+$scope.date[11]*(newValue-oldValue)/200;
  $scope.date[12]=$scope.date[12]+$scope.date[12]*(newValue-oldValue)/200;
  $scope.date[13]=$scope.date[13]+$scope.date[13]*(newValue-oldValue)/200;
  $scope.date[14]=$scope.date[14]+$scope.date[14]*(newValue-oldValue)/200;
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
  $scope.yearArray = ['2005年','2006年','2007年','2008年','2009年','2010年','2011年','2012年','2013年','2014年','2015年','2016年','2017年','2018年','2019年'];
  $scope.monthTaxChart = {
    options: {
      chart: {
        type:'column'
      },
    },
    title: {text:'2015年月度税收收入预测'},

    xAxis: {categories: $scope.monthArray},
    yAxis: 
    {
      min: 0,
      title: {text: '税收收入（万元）'}
    },
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
            data: [181216, 233015, 333858, 404789, 490992, 601972, 651118, 710585, 818419,888181]

        }, {
            name: '预测值',
            data: $scope.date2

        }]   
  };

  $scope.yearTaxChart = {
    options: {
      chart: {
        type:'column'
      },
    },
    title: {text:'2015年-2019年税收收入预测'},

    xAxis: {categories: $scope.yearArray},
    yAxis: 
    {
      min: 0,
      title: {text: '税收收入（亿元）'}
    },
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
            data: [18.92 ,27.59,37.26,50.18,58.80,70.00,85.41,90.15,100.13,106.47]

        }, {
            name: '预测值',
            data: $scope.date

        }]   
  };

    
}]);
