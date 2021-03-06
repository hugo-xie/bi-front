'use strict';

app.controller('EconomyTaxCtrl', ['$scope','$stateParams','qService','forecastFactory',function($scope, $stateParams,qService,forecastFactory) {
  var promise = qService.tokenHttpGet(forecastFactory.query,{tableName:'taxForecastData'});
    promise.then(function(rc) {

    console.log(rc.data);
    //alert(rc.data);
    //$scope.forecastvalue=rc.data[0].gdpForecastValue;
    
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
    $scope.monthselectedRange = 0;
    $scope.monthselectedRange2 = 0;
    $scope.monthselectedRange3 = 0;
    $scope.monthselectedRange4 = 0;
    $scope.date2[10]=96.52;
    $scope.ratedate1[10]=7.2;
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
    $scope.date[10] = 96.52;
    $scope.ratedate[10] = 7.2;
    $scope.date[11] = 103.43;
    $scope.ratedate[11] = 7.0;
    $scope.date[12] = 110.02;
    $scope.ratedate[12] = 7.2;
    $scope.selectedRange=0;
    $scope.selectedRange2=0;
    $scope.selectedRange3=0;
    $scope.selectedRange4=0;
  };
  $scope.selectedRange=0;
  
  $scope.taxthisyearrealvalue=rc.data[0];
  $scope.date=rc.data[1];
  $scope.ratedate=rc.data[2];
  $scope.taxrealvalue=rc.data[3]
  $scope.date2=rc.data[4];
  $scope.ratedate1=rc.data[5];
  $scope.thisyearforecastvalue=rc.data[1][10];
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

  $scope.date[10]=Math.round($scope.date[10]*(1+(newValue-oldValue)/200)*100)/100;
  $scope.date[11]=Math.round($scope.date[11]*(1+(newValue-oldValue)/200)*100)/100;
  $scope.date[12]=Math.round($scope.date[12]*(1+(newValue-oldValue)/200)*100)/100;
  $scope.ratedate[10]=Math.round($scope.ratedate[10]*(1+(newValue-oldValue)/200)*100)/100;
  $scope.ratedate[11]=Math.round($scope.ratedate[11]*(1+(newValue-oldValue)/200)*100)/100;
  $scope.ratedate[12]=Math.round($scope.ratedate[12]*(1+(newValue-oldValue)/200)*100)/100;
 
};
var changedetail2=function(newValue,oldValue,scope){
  $scope.date[10]=Math.round($scope.date[10]*(1+(newValue-oldValue)/200)*100)/100;
  $scope.date[11]=Math.round($scope.date[11]*(1+(newValue-oldValue)/200)*100)/100;
  $scope.date[12]=Math.round($scope.date[12]*(1+(newValue-oldValue)/200)*100)/100;
  $scope.ratedate[10]=Math.round($scope.ratedate[10]*(1+(newValue-oldValue)/200)*100)/100;
  $scope.ratedate[11]=Math.round($scope.ratedate[11]*(1+(newValue-oldValue)/200)*100)/100;
  $scope.ratedate[12]=Math.round($scope.ratedate[12]*(1+(newValue-oldValue)/200)*100)/100;
  
};
var changedetail3=function(newValue,oldValue,scope){
  $scope.date[10]=Math.round($scope.date[10]*(1+(newValue-oldValue)/200)*100)/100;
  $scope.date[11]=Math.round($scope.date[11]*(1+(newValue-oldValue)/200)*100)/100;
  $scope.date[12]=Math.round($scope.date[12]*(1+(newValue-oldValue)/200)*100)/100;
  $scope.ratedate[10]=Math.round($scope.ratedate[10]*(1+(newValue-oldValue)/200)*100)/100;
  $scope.ratedate[11]=Math.round($scope.ratedate[11]*(1+(newValue-oldValue)/200)*100)/100;
  $scope.ratedate[12]=Math.round($scope.ratedate[12]*(1+(newValue-oldValue)/200)*100)/100;
 

};
var changedetail4=function(newValue,oldValue,scope){
  $scope.date[10]=Math.round($scope.date[10]*(1+(newValue-oldValue)/200)*100)/100;
  $scope.date[11]=Math.round($scope.date[11]*(1+(newValue-oldValue)/200)*100)/100;
  $scope.date[12]=Math.round($scope.date[12]*(1+(newValue-oldValue)/200)*100)/100;
  $scope.ratedate[10]=Math.round($scope.ratedate[10]*(1+(newValue-oldValue)/200)*100)/100;
  $scope.ratedate[11]=Math.round($scope.ratedate[11]*(1+(newValue-oldValue)/200)*100)/100;
  $scope.ratedate[12]=Math.round($scope.ratedate[12]*(1+(newValue-oldValue)/200)*100)/100;
 
};
var changemonthdetail=function(newValue,oldValue,scope){
  $scope.date2[10]=Math.round($scope.date2[10]*(1+(newValue-oldValue)/200)*100)/100;
  $scope.ratedate1[10]=Math.round($scope.ratedate1[10]*(1+(newValue-oldValue)/200)*100)/100;
 

};
var changemonthdetail2=function(newValue,oldValue,scope){
  $scope.date2[10]=Math.round($scope.date2[10]*(1+(newValue-oldValue)/200)*100)/100;
  $scope.ratedate1[10]=Math.round($scope.ratedate1[10]*(1+(newValue-oldValue)/200)*100)/100;

  

};
var changemonthdetail3=function(newValue,oldValue,scope){
  $scope.date2[10]=Math.round($scope.date2[10]*(1+(newValue-oldValue)/200)*100)/100;
  $scope.ratedate1[10]=Math.round($scope.ratedate1[10]*(1+(newValue-oldValue)/200)*100)/100;
 
};
var changemonthdetail4=function(newValue,oldValue,scope){
  $scope.date2[10]=Math.round($scope.date2[10]*(1+(newValue-oldValue)/200)*100)/100;
  $scope.ratedate1[10]=Math.round($scope.ratedate1[10]*(1+(newValue-oldValue)/200)*100)/100;
 
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
  $scope.yearArray = ['2006年','2007年','2008年','2009年','2010年','2011年','2012年','2013年','2014年','2015年','2016年','2017年','2018年'];
  $scope.monthTaxChart = {
    options: {
      chart: {
        type:'column'
      },
    },
    credits:{
        enabled:false,
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
            to:10.5,
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
            data: $scope.taxrealvalue

        }, {
            name: '预测值',
            data: $scope.date2

        },
        {   
            yAxis: 1,
            type:'spline',
            name: '同比增长率',
            data: $scope.ratedate1
        }]   
  };

  $scope.yearTaxChart = {
    options: {
      chart: {
        type:'column'
      },
    },
    credits:{
        enabled:false,
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
            data: $scope.taxthisyearrealvalue

        }, {
            name: '预测值',
            data: $scope.date

        },
         {   
            yAxis: 1,
            type:'spline',
            name: '同比增长率',
            data: $scope.ratedate
        }]   
  };

    });
}]);
