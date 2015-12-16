'use strict';

app.controller('EconomyPowerConsumptionOfEnterprisesCtrl', ['$scope','$stateParams', function($scope, $stateParams) {
	$scope.title = $stateParams.title;
	$scope.zoom = 12;
	var map ;
	$scope.zoomlager = function(){
		$scope.zoom = $scope.zoom*1.02;
		map = new AMap.Map('consumptionbyenterprise',{
        zoom: $scope.zoom,
        center: [121.122455,31.464511]
    });
	};
	$scope.zoomsmaller = function(){
		$scope.zoom = $scope.zoom/1.02;
		map = new AMap.Map('consumptionbyenterprise',{
        zoom: $scope.zoom,
        center: [121.122455,31.464511]
    });
	};
	map = new AMap.Map('consumptionbyenterprise',{
        zoom: $scope.zoom,
        center: [121.122455,31.464511],
        resizeEnable: true,
    });

    $scope.EnterpriseChart={
         options:{
            chart: {
                type: 'spline'
            },
         },
         title: {
            text: '太仓市xx企业',
            x: -20 //center
        },
        subtitle: {
            text: '',
            x: -20
        },
        xAxis: {
            categories: ['2006', '2007', '2008', '2009', '2010', '2011','2012', '2013', '2014', '2015', '2016']
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
            data: [7.0, 6.5, 6.2, 5.5, 5.2, 5.5, 6.2, 7.5, 6.3, 5.3, 3.9]
        }, {
            name: '企业产值同比增长率',
            data: [5.2, 4.8, 3.7, 3.6, 3.0, 4.0, 4.8, 4.7, 4.1, 3.1, 2.6]
        }]
  };

  $scope.totaldata1 = {
  	year: '2016',
  	oneword: '根据后台一句话解读根据后台一句话解读根据后台一句话解读根据后台一句话解读根据后台一句话解读根据后台一句话解读根据后台一句话解读根据后台一句话解读根据后台一句话解读根据后台一句话解读根据后台一句话解读',
  	powergrowthrate: '7.55%',
  	gdpgrowthrate: '6.22%',
  	tabledata:
  	[
	  {yearvalue:'年份',gdprate:'GDP同比增长率',powerrate:'工业用电量同比增长率'},
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
  };
  	
}]);