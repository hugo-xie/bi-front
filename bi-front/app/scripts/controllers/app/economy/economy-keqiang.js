'use strict';

app.controller('EconomyKeqiangCtrl', ['$scope','$stateParams','qService','forecastFactory', function($scope, $stateParams,qService,forecastFactory) {
     var promise = qService.tokenHttpGet(forecastFactory.query,{tableName:'keqiangForecastData'});
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
  $scope.selectedRange=0;
  $scope.loandata=[6.3, 6.6, 6.5, 7.0,7.4,7.5,7.1,6.8,7.5,8.0,8.1,8.6];
  $scope.transdata=[6.3, 6.6, 6.5, 7.0,7.4,7.5,7.1,6.8,7.5,8.0,8.1,8.6];
  $scope.elecdata=[6.3, 6.6, 6.5, 7.0,7.4,7.5,7.1,6.8,7.5,8.0,8.1,8.6];
  $scope.keqiangdata=[6.3, 6.6, 6.5, 7.0];
  $scope.range=function(){
    return $scope.selectedRange;
  };
$scope.range2=function(){
    return $scope.selectedRange2;
  };
  $scope.range3=function(){
    return $scope.selectedRange3;
  };
  var changeloandata=function(newValue,oldValue,scope){
       $scope.loandata[11]=Math.round($scope.loandata[11]*(1+(newValue-oldValue)/100)*100)/100;
       $scope.transdata[11]=Math.round($scope.transdata[11]*(1+(newValue-oldValue)/500)*100)/100;
       $scope.elecdata[11]=Math.round($scope.elecdata[11]*(1+(newValue-oldValue)/250)*100)/100;
       $scope.keqiangdata[3]=Math.round($scope.keqiangdata[3]*(1+(newValue-oldValue)/800)*100)/100;
       $scope.selectedRange2=Math.round(($scope.selectedRange2+($scope.selectedRange*(newValue-oldValue)/200)));
       $scope.selectedRange3=Math.round(($scope.selectedRange3+($scope.selectedRange*(newValue-oldValue)/150)));
  };
  var changeloandata2=function(newValue,oldValue,scope){
       $scope.loandata[11]=Math.round($scope.loandata[11]*(1+(newValue-oldValue)/100)*100)/100;
       $scope.transdata[11]=Math.round($scope.transdata[11]*(1+(newValue-oldValue)/500)*100)/100;
       $scope.elecdata[11]=Math.round($scope.elecdata[11]*(1+(newValue-oldValue)/250)*100)/100;
       $scope.keqiangdata[3]=Math.round($scope.keqiangdata[3]*(1+(newValue-oldValue)/800)*100)/100;
       $scope.selectedRange=Math.round(($scope.selectedRange+($scope.selectedRange2*(newValue-oldValue)/200)));
       $scope.selectedRange3=Math.round(($scope.selectedRange3+($scope.selectedRange2*(newValue-oldValue)/150)));
  };
  var changeloandata3=function(newValue,oldValue,scope){
       $scope.loandata[11]=Math.round($scope.loandata[11]*(1+(newValue-oldValue)/100)*100)/100;
       $scope.transdata[11]=Math.round($scope.transdata[11]*(1+(newValue-oldValue)/500)*100)/100;
       $scope.elecdata[11]=Math.round($scope.elecdata[11]*(1+(newValue-oldValue)/250)*100)/100;
       $scope.keqiangdata[3]=Math.round($scope.keqiangdata[3]*(1+(newValue-oldValue)/800)*100)/100;
       $scope.selectedRange2=Math.round(($scope.selectedRange2+($scope.selectedRange3*(newValue-oldValue)/200)));
       $scope.selectedRange=Math.round(($scope.selectedRange+($scope.selectedRange3*(newValue-oldValue)/150)));
  };
  $scope.reset=function(){
    $scope.selectedRange=0;
    $scope.selectedRange2=0;
    $scope.selectedRange3=0;
    $scope.loandata[11]=8.6;
    $scope.transdata[11]=8.6;
    $scope.elecdata[11]=8.6;
    $scope.keqiangdata[3]=7.0;
  }
  $scope.$watch($scope.range,changeloandata);
  $scope.$watch($scope.range2,changeloandata2);
  $scope.$watch($scope.range3,changeloandata3);
  $scope.keqiangindex={
     options: 
    {
        chart: 
        {
            type:'spline'
        },
    },
    credits:{
        enabled:false,
     },
    title: 
    {
        text: '本年度“克强指数”走势',
        style:{
        fontWeight:'bold'
      }
       
    },
    xAxis: 
    {
        categories: ['一月', '二月', '三月', '四月','五月','六月','七月','八月','九月','十月','十一月','十二月']
    },
    yAxis: 
    { plotLines:[{
            color:'red',
            dashStyle:'solid',
            value:7.9,
            width:2,
            label:{
                text:'本年度GDP增长率预测值',
                align:'right',
                x:10,
                 style: {
                        fontSize: '8px',
                        fontWeight: 200
                    }
            }
            }],
        title: 
        {
            text: '增长率％'
        },
        
        
        },
    tooltip: 
    {
        valueSuffix: ''
    },
    legend: 
    {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        borderWidth: 0
    },
    series:[{
        name: '工业用电量',
        color:"rgb(205,130,61)",
        data: [7.9, 10.1, 9.5, 7.7,12.3,7.4,7.5,7.7,-3.3,9.9,2.4,null]
        },
        {
        name: '新增贷款',
        color:"rgb(51,181,88)",
        data: [8.9, 18.1, -18.1, 18.2,32.3,2.2,28.2,1.7,20.0,7.2,22.3,null]
        },
        {
        name: '货运量',
        color:"rgb(62,160,200)",
        data: [-3.2, -4.3, -8, -0.7,6.7,8.2,7.3,10.5,4.3,4.7,-0.9,null]
        }]
};

$scope.keqiangChart={
    options: 
    {
        chart: 
        {
            type:'spline'
        },
    },
    credits:{
        enabled:false,
     },
    title: 
    {
        text: '“克强指数”拟合GDP增长率',
        style:{
        fontWeight:'bold'
      }

    },
    xAxis: 
    {
        categories: ['一季度', '二季度', '三季度', '四季度'],
         plotBands:[{
            from: 2.5,
            to:4,
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
    {
        title: 
        {
            text: 'GDP增长率（%）'
        },
        plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
        }]
        },
    tooltip: 
    {
        valueSuffix: '°C'
    },
    legend: 
    {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        borderWidth: 0
    },
    series:[{
        name: 'GDP实际增长率',
        data: [7.9, 8.1, 7.5, null]
        }, {
        name: '“克强指数”拟合GDP增长率',
        data: $scope.keqiangdata
    }]
    };

$scope.loanChart = {
    options: {
        chart: {
            type: 'column'
        }
    },
    credits:{
        enabled:false,
     },
    series: [{
        name: '真实值',
        data: [7.9, 8.1, 7.5, 7.7,7.2,7.4,7.6,7.1,7.9,8.2,8.3,null]
    },{
        name: '预测值',
        type:'line',
        data: $scope.loandata
    }],
    title: {
        text: '银行中长期贷款'
    },
    xAxis: {
        categories: ['一月', '二月', '三月', '四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
        
    },
    yAxis: {
        min: 0,
        title: {
            text: '亿元'
        }
    },
    loading: false,

};

$scope.transChart = {
    options: {
        chart: {
            type: 'column'
        }
    },
    credits:{
        enabled:false,
     },
    series: [{
        name: '真实值',
        data: [7.9, 8.1, 7.5, 7.7,7.2,7.4,7.6,7.1,7.9,8.2,8.3,null]
    },{
        name: '预测值',
        type:'line',
        data: $scope.transdata
    }],
    title: {
        text: '货运量'
    },
    xAxis: {
        categories: ['一月', '二月', '三月', '四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
    },
    loading: false,
    yAxis: {
        title: {
            text: '万吨'
        }
    }
};

$scope.elecChart = {
    options: {
        chart: {
            type: 'column'
        }
    },
    credits:{
        enabled:false,
     },
    series: [{
        name: '真实值',
        data: [7.9, 8.1, 7.5, 7.7,7.2,7.4,7.6,7.1,7.9,8.2,8.3,null]
    },{
        name: '预测值',
        type:'line',
        data: $scope.elecdata
    }],
    xAxis: {
        categories: ['一月', '二月', '三月', '四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
    },
    title: {
        text: '工业用电量'
    },
    loading: false,
    yAxis: {
        title: {
            text: '亿千瓦时'
        }
    }

};
});

}]);

