'use strict';

app.controller('EconomyKeqiangCtrl', ['$scope','$stateParams', function($scope, $stateParams) {
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
       $scope.loandata[11]=$scope.loandata[11]+$scope.loandata[11]*(newValue-oldValue)/100;
       $scope.transdata[11]=$scope.transdata[11]+$scope.transdata[11]*(newValue-oldValue)/500;
       $scope.elecdata[11]=$scope.elecdata[11]+$scope.elecdata[11]*(newValue-oldValue)/250;
       $scope.keqiangdata[3]=$scope.keqiangdata[3]+$scope.keqiangdata[3]*(newValue-oldValue)/800;
  };
  var changeloandata2=function(newValue,oldValue,scope){
       $scope.loandata[11]=$scope.loandata[11]+$scope.loandata[11]*(newValue-oldValue)/500;
       $scope.transdata[11]=$scope.transdata[11]+$scope.transdata[11]*(newValue-oldValue)/100;
       $scope.elecdata[11]=$scope.elecdata[11]+$scope.elecdata[11]*(newValue-oldValue)/250;
       $scope.keqiangdata[3]=$scope.keqiangdata[3]+$scope.keqiangdata[3]*(newValue-oldValue)/800;
  };
  var changeloandata3=function(newValue,oldValue,scope){
       $scope.loandata[11]=$scope.loandata[11]+$scope.loandata[11]*(newValue-oldValue)/500;
       $scope.transdata[11]=$scope.transdata[11]+$scope.transdata[11]*(newValue-oldValue)/250;
       $scope.elecdata[11]=$scope.elecdata[11]+$scope.elecdata[11]*(newValue-oldValue)/100;
       $scope.keqiangdata[3]=$scope.keqiangdata[3]+$scope.keqiangdata[3]*(newValue-oldValue)/800;

  };
  $scope.reset=function(){
    $scope.selectedRange=0;
    $scope.selectedRange2=0;
    $scope.selectedRange3=0;
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
    title: 
    {
        text: '“克强指数”拟合GDP增长率',
        x: -20 //center
    },
    xAxis: 
    {
        categories: ['一月', '二月', '三月', '四月','五月','六月','七月','八月','九月','十月','十一月','十二月']
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
        name: '克强指数',
        data: [97.9, 82.1, 93.5, 99.7,100.3,110.4,105.7,103.8,115.9,97.19,126.4,null]
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
    title: 
    {
        text: '“克强指数”拟合GDP增长率',
        x: -20 //center
    },
    xAxis: 
    {
        categories: ['一季度', '二季度', '三季度', '四季度']
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
        name: 'GDP增长率',
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
    series: [{
        name: '银行中长期贷款',
        data: [7.9, 8.1, 7.5, 7.7,7.2,7.4,7.6,7.1,7.9,8.2,8.3,null]
    },{
        name: '预测',
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
    series: [{
        name: '货运量',
        data: [7.9, 8.1, 7.5, 7.7,7.2,7.4,7.6,7.1,7.9,8.2,8.3,null]
    },{
        name: '预测',
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
    series: [{
        name: '工业用电量',
        data: [7.9, 8.1, 7.5, 7.7,7.2,7.4,7.6,7.1,7.9,8.2,8.3,null]
    },{
        name: '预测',
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


}]);

