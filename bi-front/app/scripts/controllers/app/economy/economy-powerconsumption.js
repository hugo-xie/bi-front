'use strict';

app.controller('EconomyPowerConsumptionCtrl', ['$scope','$stateParams', function($scope, $stateParams) {

  $scope.title = $stateParams.title;

  //企业用电量与经济增长关联分析
  $scope.totaldata = {
  	year: '2016',
  	oneword: '根据后台一句话解读根据后台一句话解读根据后台一句话解读根据后台一句话解读根据后台一句话解读根据后台一句话解读根据后台一句话解读根据后台一句话解读根据后台一句话解读根据后台一句话解读根据后台一句话解读',
  	powergrowthrate: '7.55%',
  	gdpgrowthrate: '6.22%',
  	tabledata:
  	[
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
  };

  $scope.changeTotalChart = function(param){
  	$scope.TotalPowerGDPChart.options.chart.type = param;
  };
  $scope.showTotalTable = function(){
  	$scope.show= !$scope.show;
  }

  $scope.TotalPowerGDPChart={
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
            data: [7.0, 6.9, 6.5, 5.5, 6.2, 7.5, 6.2, 7.5, 6.3, 5.3, 3.9]
        }, {
            name: 'GDP同比增长率',
            data: [4.2, 3.8, 3.7, 3.3, 4.0, 5.0, 4.8, 5.1, 4.1, 3.1, 2.6]
        }]
  };

  //用电量增长率与行业产值增长率分析预测
  $scope.vocationdata = {
  	isshowchart: 'true'

  }
  $scope.changeVocationChart = function(){
  	$scope.vocationdata.isshowchart = !$scope.vocationdata.isshowchart;
  }
  $scope.VocationChart={
  	 	options:{
	  	 	chart: {
	            type: 'bar'
	     	},
	  	 },                                                                
        title: {                                                           
            text: '用电量增长率与行业产值增长率分析'                    
        },                                                                 
        subtitle: {                                                        
            text: '2015年第一季度'                                  
        },                                                                 
        xAxis: {                                                        
            categories: ['农、林、牧、渔业', '工业', '建筑业', '交通运输、仓储和邮政业', '信息传输、计算机服务和软件业','批发和零售、住宿和餐饮业','金融、房地产、商务及居民服务业','公共事业及管理组织'],
            title: {                                                       
                text: null                                                 
            }                                                              
        },                                                                 
        yAxis: {                                                           
            min: 0,                                                        
            title: {                                                       
                text: '增长率',                             
                align: 'high'                                              
            },                                                             
            labels: {                                                      
                overflow: 'justify'                                        
            }                                                              
        },                                                                 
        tooltip: {                                                         
            valueSuffix: '%'                                       
        },                                                                 
        plotOptions: {                                                     
            bar: {                                                         
                dataLabels: {                                              
                    enabled: true                                          
                }                                                          
            }                                                              
        },                                                                 
        legend: {                                                          
            layout: 'vertical',                                            
            align: 'right',                                                
            verticalAlign: 'top',                                          
            x: -40,                                                        
            y: 100,                                                        
            floating: true,                                                
            borderWidth: 1,                                                
            backgroundColor: '#FFFFFF',                                    
            shadow: true                                                   
        },                                                                 
        credits: {                                                         
            enabled: false                                                 
        },                                                                 
        series: [{                                                         
            name: '用电量增长率',                                             
            data: [0.76, 0.31, 0.65, 0.23, 0.2,0.34,0.32,0.65]                                   
        }, {                                                               
            name: '行业产值增长率',                                             
            data: [0.63, 0.41, 0.70, 0.34, 0.32,0.23,0.65,0.87]                                  
        }]                
  };

    $scope.SingleVocationChart={
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
            data: [7.0, 6.9, 6.5, 5.5, 6.2, 7.5, 6.2, 7.5, 6.3, 5.3, 3.9]
        }, {
            name: 'GDP同比增长率',
            data: [4.2, 3.8, 3.7, 3.3, 4.0, 5.0, 4.8, 5.1, 4.1, 3.1, 2.6]
        }]
  };

}]);












