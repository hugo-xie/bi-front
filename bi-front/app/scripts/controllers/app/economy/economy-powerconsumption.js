'use strict';

app.controller('EconomyPowerConsumptionCtrl', ['$scope','$stateParams', function($scope, $stateParams) {

  $scope.title = $stateParams.title;
  $scope.show;
  $scope.changeChart = function(param){
  	$scope.PowerChart.options.chart.type = param;
  };
  $scope.showTable = function(){
  	$scope.show= !$scope.show;
  }
  $scope.PowerChart={
  	 options:{
  	 	chart: {
            type: $scope.charttype
     	},
  	 },
     title: {
            text: '企业用电量与经济增长关联分析预测',
            x: -20 //center
        },
        subtitle: {
            text: '',
            x: -20
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yAxis: {
            title: {
                text: '增长率 (%)'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: '%'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: '企业用电量同比增长率',
            data: [7.0, 6.9, 6.5, 5.5, 6.2, 7.5, 6.2, 7.5, 6.3, 5.3, 3.9, 4.6]
        }, {
            name: 'GDP同比增长率',
            data: [4.2, 3.8, 3.7, 3.3, 4.0, 5.0, 4.8, 5.1, 4.1, 3.1, 2.6, 2.5]
        }]
  };

  $scope.tabledata=[
  {yearvalue:'年份',gdprate:'GDP同比增长率',powerrate:'企业用电量同比增长率'},
  {yearvalue:'2006',gdprate:'4%',powerrate:'5%'},
  {yearvalue:'2007',gdprate:'4%',powerrate:'5%'},
  {yearvalue:'2008',gdprate:'4%',powerrate:'5%'},
  {yearvalue:'2009',gdprate:'4%',powerrate:'5%'},
  {yearvalue:'2010',gdprate:'4%',powerrate:'5%'},
  {yearvalue:'2011',gdprate:'4%',powerrate:'5%'},
  {yearvalue:'2012',gdprate:'4%',powerrate:'5%'},
  {yearvalue:'2013',gdprate:'4%',powerrate:'5%'},
  {yearvalue:'2014',gdprate:'4%',powerrate:'5%'},
  {yearvalue:'2015',gdprate:'4%',powerrate:'5%'},
  {yearvalue:'2016',gdprate:'4%',powerrate:'5%'},
  ]

}]);












