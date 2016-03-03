'use strict';

app.controller('EconomyPowerConsumptionCtrl', 
    ['$scope','$stateParams','qService','forecastFactory_Power', function($scope, $stateParams,qService,forecastFactory_Power) {


var promise = qService.tokenHttpGet(forecastFactory_Power.query,{tableName:'powerGdpCorrelationData'});

promise.then(function(result) {

  $scope.getData = result.data;

  $scope.title = $stateParams.title;

  //企业用电量与经济增长关联分析
  $scope.totaldata = {
  	year: '2016',
  	oneword: '工业用电量与GDP增长率关联分析时所采用的是格兰杰因果检验模型和误差修正模型的组合模型，通过该模型分析预测得出：用电量增减变动趋势与GDP增减变动趋势基本一致，GDP增长时，用电量也增长，增速相似；GDP回落时，用电量增长也回落;预测阶段用电量增速将大于GDP增速。',
  	powergrowthrate: $scope.getData[2][10],
  	gdpgrowthrate: $scope.getData[1][10],
    yearvalue:$scope.getData[0],
    gdprate:$scope.getData[1],
    powerrate:$scope.getData[2],
  };

  //init
  $scope.charttype = 'spline';
  //切换第一图表现视图
  $scope.changeTotalChart = function(param){
  	$scope.TotalPowerGDPChart.options.chart.type = param;
  };
  //控制第一图详细数据列表的显示
  $scope.showTotalTable = function(){
  	$scope.totalshow= !$scope.totalshow;
  }
  //第一图hightchart
  $scope.TotalPowerGDPChart={
        credits:{
            enabled:false // 禁用版权信息
        },
	  	options:{
	  	 	chart: {
	            type: $scope.charttype
	     	},
	  	 },
	    title: {
            text: '工业用电量与GDP增长率关联分析预测',
            x: -20 //center
        },
        subtitle: {
            text: '',
            x: -20
        },
        xAxis: {
            categories: $scope.totaldata.yearvalue,
            plotBands: [{
                from: 9.5,
                to: 12.5,
                label: { 
                    text:"预测区",
                    style: {
                        color: 'grey',
                    },
                },
                color: 'rgba(68, 170, 213, .2)'
            }],
        },
        
        plotOptions: {
            
            series: {
                allowPointSelect: true,
                point: {
                    events: {
                        click: function () {
                            alert('Category: ');
                        }
                    }
                }
            }
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
            valueSuffix: '%',
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: '工业用电量同比增长率',
            data: $scope.totaldata.powerrate,
        }, {
            name: 'GDP同比增长率',
            data: $scope.totaldata.gdprate,
        }]
  };

  /*——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————*/
  

  });

}]);




app.controller('EconomyPowerConsumptionOfEnterpriseTotalCtrl', 
    ['$scope','$stateParams','qService','forecastFactory_Power', function($scope, $stateParams,qService,forecastFactory_Power) {

  $scope.AverageEnterpriseChartByYear={
         options:{
            chart: {
                type: $scope.charttype
            },
         },
         title: {
            text: '规模以上企业（综合）用电量与经济增长关联分析',
            x: -20 //center
        },
        subtitle: {
            text: '',
            x: -20
        },
        xAxis: {
            categories: ['2006', '2007', '2008', '2009', '2010', '2011','2012', '2013', '2014', '2015', '2016','2017','2018'],
            plotBands: [{
                from: 9.5,
                to: 12.5,
                label: { 
                    text:"预测区",
                    style: {
                        color: 'grey',
                    },
                },
                color: 'rgba(68, 170, 213, .2)'
            }],
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
            data: [7.0, 6.5, 6.2, 5.5, 5.2, 5.5, 6.2, 7.5, 6.3, 5.3, 3.9,4.3,5.5],
        }, {
            name: '企业产值同比增长率',
            data: [5.2, 4.8, 3.7, 3.6, 3.0, 4.0, 4.8, 4.7, 4.1, 3.1, 2.6,5.5,6.7],
        }]
  };
    


  
  //规模以上企业综合数据
  $scope.averageenterprisedata = {
    year: '2016',
    oneword: '根据后台一句话解读根据后台一句话解读根据后台一句话解读根据后台一句话解读根据后台一句话解读根据后台一句话解读根据后台一句话解读根据后台一句话解读根据后台一句话解读根据后台一句话解读根据后台一句话解读',
    powergrowthrate: '7.55%',
    gdpgrowthrate: '6.22%',
    tabledata:
    [
      {yearvalue:'年份',gdprate:'企业产值同比增长率',powerrate:'企业用电量同比增长率'},
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
  //changeAverageEnterpriseChart
  $scope.averageenterprisetableshow = false;

  $scope.changeAverageEnterpriseChart = function(param){
    $scope.AverageEnterpriseChartByYear.options.chart.type = param;
  };
  $scope.showAverageEnterpriseTable = function(){
    $scope.averageenterprisetableshow= !$scope.averageenterprisetableshow;
  }

}]);

//第二图：行业总体比较视图控制器————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————》》》》》》
app.controller('EconomyPowerConsumptionCtrl_Industries', ['$scope','$stateParams', 'qService','forecastFactory_Power',function($scope, $stateParams,qService,forecastFactory_Power) {


var promise = qService.tokenHttpGet(forecastFactory_Power.query,{tableName:'powerGdpCorrelationIndustryData'});

promise.then(function(result) {

    $scope.getData = result.data;


    $scope.industrydata = {

        years:[2014,2015],

        title:'各行业用电量增长率与产值增长率对比分析',
        _2018:{
            year:'2018',
            gdpdata: $scope.getData[2018][0],                                                                             
            powerdata: $scope.getData[2018][1],  
        },
        _2017:{
            year:'2017',
            gdpdata: $scope.getData[2017][0],                                                                             
            powerdata: $scope.getData[2017][1],  
        },
        _2016:{
            year:'2016',
            gdpdata: $scope.getData[2016][0],                                                                             
            powerdata: $scope.getData[2016][1],
        },
        _2015:{
            year:'2015',
            gdpdata: $scope.getData[2015][0],                                                                             
            powerdata: $scope.getData[2015][1],  
        },
        _2014:{
            year:'2014',
             gdpdata: $scope.getData[2014][0],                                                                             
            powerdata: $scope.getData[2014][1],
        },
        _2013:{
            year:'2013',
             gdpdata: $scope.getData[2013][0],                                                                             
            powerdata: $scope.getData[2013][1],  
        },
        _2012:{
            year:'2012',
             gdpdata: $scope.getData[2012][0],                                                                             
            powerdata: $scope.getData[2012][1],  
        },
        _2011:{
            year:'2011',
             gdpdata: $scope.getData[2011][0],                                                                             
            powerdata: $scope.getData[2011][1],
        },
        _2010:{
            year:'2010',
             gdpdata: $scope.getData[2010][0],                                                                             
            powerdata: $scope.getData[2010][1],  
        },
        _2009:{
            year:'2009',
             gdpdata: $scope.getData[2009][0],                                                                             
            powerdata: $scope.getData[2009][1],
        },
        _2008:{
            year:'2008',
             gdpdata: $scope.getData[2008][0],                                                                             
            powerdata: $scope.getData[2008][1], 
        },
        _2007:{
            year:'2007',
             gdpdata: $scope.getData[2007][0],                                                                             
            powerdata: $scope.getData[2007][1],
        },
    };

    $scope.tempvalue = {
        gdp:$scope.industrydata._2015.gdpdata,
        power:$scope.industrydata._2015.powerdata,
        yearmark:$scope.industrydata._2015.year,
    };
    $scope.changeYear = function(param){
        switch(param){
            case 2018:{
                $scope.tempvalue.gdp = $scope.industrydata._2018.gdpdata;
                $scope.tempvalue.power = $scope.industrydata._2018.powerdata;
                $scope.tempvalue.yearmark = $scope.industrydata._2018.year;
                $scope.VocationChartPiePower.series[0].data[0][1] = $scope.industrydata._2018.powerdata[0];
                $scope.VocationChartPiePower.series[0].data[1][1] = $scope.industrydata._2018.powerdata[1];
                $scope.VocationChartPiePower.series[0].data[2][1] = $scope.industrydata._2018.powerdata[2];
                $scope.VocationChartPiePower.series[0].data[3][1] = $scope.industrydata._2018.powerdata[3];
                $scope.VocationChartPiePower.series[0].data[4][1] = $scope.industrydata._2018.powerdata[4];
                $scope.VocationChartPiePower.series[0].data[5][1] = $scope.industrydata._2018.powerdata[5];
                $scope.VocationChartPiePower.series[0].data[6][1] = $scope.industrydata._2018.powerdata[6];
                $scope.VocationChartPiePower.series[0].data[7][1] = $scope.industrydata._2018.powerdata[7];
                $scope.VocationChartPiePower.subtitle.text = $scope.industrydata._2018.year+'年度 预测值';
                $scope.VocationChartPieGdp.series[0].data[0][1] = $scope.industrydata._2018.gdpdata[0];
                $scope.VocationChartPieGdp.series[0].data[1][1] = $scope.industrydata._2018.gdpdata[1];
                $scope.VocationChartPieGdp.series[0].data[2][1] = $scope.industrydata._2018.gdpdata[2];
                $scope.VocationChartPieGdp.series[0].data[3][1] = $scope.industrydata._2018.gdpdata[3];
                $scope.VocationChartPieGdp.series[0].data[4][1] = $scope.industrydata._2018.gdpdata[4];
                $scope.VocationChartPieGdp.series[0].data[5][1] = $scope.industrydata._2018.gdpdata[5];
                $scope.VocationChartPieGdp.series[0].data[6][1] = $scope.industrydata._2018.gdpdata[6];
                $scope.VocationChartPieGdp.series[0].data[7][1] = $scope.industrydata._2018.gdpdata[7];
                $scope.VocationChartPieGdp.subtitle.text = $scope.industrydata._2018.year+'年度 预测值';
            };break;
            case 2017:{
                $scope.tempvalue.gdp = $scope.industrydata._2017.gdpdata;
                $scope.tempvalue.power = $scope.industrydata._2017.powerdata;
                $scope.tempvalue.yearmark = $scope.industrydata._2017.year;
                $scope.VocationChartPiePower.series[0].data[0][1] = $scope.industrydata._2017.powerdata[0];
                $scope.VocationChartPiePower.series[0].data[1][1] = $scope.industrydata._2017.powerdata[1];
                $scope.VocationChartPiePower.series[0].data[2][1] = $scope.industrydata._2017.powerdata[2];
                $scope.VocationChartPiePower.series[0].data[3][1] = $scope.industrydata._2017.powerdata[3];
                $scope.VocationChartPiePower.series[0].data[4][1] = $scope.industrydata._2017.powerdata[4];
                $scope.VocationChartPiePower.series[0].data[5][1] = $scope.industrydata._2017.powerdata[5];
                $scope.VocationChartPiePower.series[0].data[6][1] = $scope.industrydata._2017.powerdata[6];
                $scope.VocationChartPiePower.series[0].data[7][1] = $scope.industrydata._2017.powerdata[7];
                $scope.VocationChartPiePower.subtitle.text = $scope.industrydata._2017.year+'年度 预测值';
                $scope.VocationChartPieGdp.series[0].data[0][1] = $scope.industrydata._2017.gdpdata[0];
                $scope.VocationChartPieGdp.series[0].data[1][1] = $scope.industrydata._2017.gdpdata[1];
                $scope.VocationChartPieGdp.series[0].data[2][1] = $scope.industrydata._2017.gdpdata[2];
                $scope.VocationChartPieGdp.series[0].data[3][1] = $scope.industrydata._2017.gdpdata[3];
                $scope.VocationChartPieGdp.series[0].data[4][1] = $scope.industrydata._2017.gdpdata[4];
                $scope.VocationChartPieGdp.series[0].data[5][1] = $scope.industrydata._2017.gdpdata[5];
                $scope.VocationChartPieGdp.series[0].data[6][1] = $scope.industrydata._2017.gdpdata[6];
                $scope.VocationChartPieGdp.series[0].data[7][1] = $scope.industrydata._2017.gdpdata[7];
                $scope.VocationChartPieGdp.subtitle.text = $scope.industrydata._2017.year+'年度 预测值';
            };break;
            case 2016:{
                $scope.tempvalue.gdp = $scope.industrydata._2016.gdpdata;
                $scope.tempvalue.power = $scope.industrydata._2016.powerdata;
                $scope.tempvalue.yearmark = $scope.industrydata._2016.year;
                $scope.VocationChartPiePower.series[0].data[0][1] = $scope.industrydata._2016.powerdata[0];
                $scope.VocationChartPiePower.series[0].data[1][1] = $scope.industrydata._2016.powerdata[1];
                $scope.VocationChartPiePower.series[0].data[2][1] = $scope.industrydata._2016.powerdata[2];
                $scope.VocationChartPiePower.series[0].data[3][1] = $scope.industrydata._2016.powerdata[3];
                $scope.VocationChartPiePower.series[0].data[4][1] = $scope.industrydata._2016.powerdata[4];
                $scope.VocationChartPiePower.series[0].data[5][1] = $scope.industrydata._2016.powerdata[5];
                $scope.VocationChartPiePower.series[0].data[6][1] = $scope.industrydata._2016.powerdata[6];
                $scope.VocationChartPiePower.series[0].data[7][1] = $scope.industrydata._2016.powerdata[7];
                $scope.VocationChartPiePower.subtitle.text = $scope.industrydata._2016.year+'年度 预测值';
                $scope.VocationChartPieGdp.series[0].data[0][1] = $scope.industrydata._2016.gdpdata[0];
                $scope.VocationChartPieGdp.series[0].data[1][1] = $scope.industrydata._2016.gdpdata[1];
                $scope.VocationChartPieGdp.series[0].data[2][1] = $scope.industrydata._2016.gdpdata[2];
                $scope.VocationChartPieGdp.series[0].data[3][1] = $scope.industrydata._2016.gdpdata[3];
                $scope.VocationChartPieGdp.series[0].data[4][1] = $scope.industrydata._2016.gdpdata[4];
                $scope.VocationChartPieGdp.series[0].data[5][1] = $scope.industrydata._2016.gdpdata[5];
                $scope.VocationChartPieGdp.series[0].data[6][1] = $scope.industrydata._2016.gdpdata[6];
                $scope.VocationChartPieGdp.series[0].data[7][1] = $scope.industrydata._2016.gdpdata[7];
                $scope.VocationChartPieGdp.subtitle.text = $scope.industrydata._2016.year+'年度 预测值';
            };break;
            case 2015:{
                $scope.tempvalue.gdp = $scope.industrydata._2015.gdpdata;
                $scope.tempvalue.power = $scope.industrydata._2015.powerdata;
                $scope.tempvalue.yearmark = $scope.industrydata._2015.year;
                $scope.VocationChartPiePower.series[0].data[0][1] = $scope.industrydata._2015.powerdata[0];
                $scope.VocationChartPiePower.series[0].data[1][1] = $scope.industrydata._2015.powerdata[1];
                $scope.VocationChartPiePower.series[0].data[2][1] = $scope.industrydata._2015.powerdata[2];
                $scope.VocationChartPiePower.series[0].data[3][1] = $scope.industrydata._2015.powerdata[3];
                $scope.VocationChartPiePower.series[0].data[4][1] = $scope.industrydata._2015.powerdata[4];
                $scope.VocationChartPiePower.series[0].data[5][1] = $scope.industrydata._2015.powerdata[5];
                $scope.VocationChartPiePower.series[0].data[6][1] = $scope.industrydata._2015.powerdata[6];
                $scope.VocationChartPiePower.series[0].data[7][1] = $scope.industrydata._2015.powerdata[7];
                $scope.VocationChartPiePower.subtitle.text = $scope.industrydata._2015.year+'年度';
                $scope.VocationChartPieGdp.series[0].data[0][1] = $scope.industrydata._2015.gdpdata[0];
                $scope.VocationChartPieGdp.series[0].data[1][1] = $scope.industrydata._2015.gdpdata[1];
                $scope.VocationChartPieGdp.series[0].data[2][1] = $scope.industrydata._2015.gdpdata[2];
                $scope.VocationChartPieGdp.series[0].data[3][1] = $scope.industrydata._2015.gdpdata[3];
                $scope.VocationChartPieGdp.series[0].data[4][1] = $scope.industrydata._2015.gdpdata[4];
                $scope.VocationChartPieGdp.series[0].data[5][1] = $scope.industrydata._2015.gdpdata[5];
                $scope.VocationChartPieGdp.series[0].data[6][1] = $scope.industrydata._2015.gdpdata[6];
                $scope.VocationChartPieGdp.series[0].data[7][1] = $scope.industrydata._2015.gdpdata[7];
                $scope.VocationChartPieGdp.subtitle.text = $scope.industrydata._2015.year+'年度';
            };break;
            case 2014:{
                $scope.tempvalue.gdp = $scope.industrydata._2014.gdpdata;
                $scope.tempvalue.power = $scope.industrydata._2014.powerdata;
                $scope.tempvalue.yearmark = $scope.industrydata._2014.year;
                $scope.VocationChartPiePower.series[0].data[0][1] = $scope.industrydata._2014.powerdata[0];
                $scope.VocationChartPiePower.series[0].data[1][1] = $scope.industrydata._2014.powerdata[1];
                $scope.VocationChartPiePower.series[0].data[2][1] = $scope.industrydata._2014.powerdata[2];
                $scope.VocationChartPiePower.series[0].data[3][1] = $scope.industrydata._2014.powerdata[3];
                $scope.VocationChartPiePower.series[0].data[4][1] = $scope.industrydata._2014.powerdata[4];
                $scope.VocationChartPiePower.series[0].data[5][1] = $scope.industrydata._2014.powerdata[5];
                $scope.VocationChartPiePower.series[0].data[6][1] = $scope.industrydata._2014.powerdata[6];
                $scope.VocationChartPiePower.series[0].data[7][1] = $scope.industrydata._2014.powerdata[7];
                $scope.VocationChartPiePower.subtitle.text = $scope.industrydata._2014.year+'年度';
                $scope.VocationChartPieGdp.series[0].data[0][1] = $scope.industrydata._2014.gdpdata[0];
                $scope.VocationChartPieGdp.series[0].data[1][1] = $scope.industrydata._2014.gdpdata[1];
                $scope.VocationChartPieGdp.series[0].data[2][1] = $scope.industrydata._2014.gdpdata[2];
                $scope.VocationChartPieGdp.series[0].data[3][1] = $scope.industrydata._2014.gdpdata[3];
                $scope.VocationChartPieGdp.series[0].data[4][1] = $scope.industrydata._2014.gdpdata[4];
                $scope.VocationChartPieGdp.series[0].data[5][1] = $scope.industrydata._2014.gdpdata[5];
                $scope.VocationChartPieGdp.series[0].data[6][1] = $scope.industrydata._2014.gdpdata[6];
                $scope.VocationChartPieGdp.series[0].data[7][1] = $scope.industrydata._2014.gdpdata[7];
                $scope.VocationChartPieGdp.subtitle.text = $scope.industrydata._2014.year+'年度';
            };break;
            case 2013:{
                $scope.tempvalue.gdp = $scope.industrydata._2013.gdpdata;
                $scope.tempvalue.power = $scope.industrydata._2013.powerdata;
                $scope.tempvalue.yearmark = $scope.industrydata._2013.year;
                $scope.VocationChartPiePower.series[0].data[0][1] = $scope.industrydata._2013.powerdata[0];
                $scope.VocationChartPiePower.series[0].data[1][1] = $scope.industrydata._2013.powerdata[1];
                $scope.VocationChartPiePower.series[0].data[2][1] = $scope.industrydata._2013.powerdata[2];
                $scope.VocationChartPiePower.series[0].data[3][1] = $scope.industrydata._2013.powerdata[3];
                $scope.VocationChartPiePower.series[0].data[4][1] = $scope.industrydata._2013.powerdata[4];
                $scope.VocationChartPiePower.series[0].data[5][1] = $scope.industrydata._2013.powerdata[5];
                $scope.VocationChartPiePower.series[0].data[6][1] = $scope.industrydata._2013.powerdata[6];
                $scope.VocationChartPiePower.series[0].data[7][1] = $scope.industrydata._2013.powerdata[7];
                $scope.VocationChartPiePower.subtitle.text = $scope.industrydata._2013.year+'年度';
                $scope.VocationChartPieGdp.series[0].data[0][1] = $scope.industrydata._2013.gdpdata[0];
                $scope.VocationChartPieGdp.series[0].data[1][1] = $scope.industrydata._2013.gdpdata[1];
                $scope.VocationChartPieGdp.series[0].data[2][1] = $scope.industrydata._2013.gdpdata[2];
                $scope.VocationChartPieGdp.series[0].data[3][1] = $scope.industrydata._2013.gdpdata[3];
                $scope.VocationChartPieGdp.series[0].data[4][1] = $scope.industrydata._2013.gdpdata[4];
                $scope.VocationChartPieGdp.series[0].data[5][1] = $scope.industrydata._2013.gdpdata[5];
                $scope.VocationChartPieGdp.series[0].data[6][1] = $scope.industrydata._2013.gdpdata[6];
                $scope.VocationChartPieGdp.series[0].data[7][1] = $scope.industrydata._2013.gdpdata[7];
                $scope.VocationChartPieGdp.subtitle.text = $scope.industrydata._2013.year+'年度';
            };break;
            case 2012:{
                $scope.tempvalue.gdp = $scope.industrydata._2012.gdpdata;
                $scope.tempvalue.power = $scope.industrydata._2012.powerdata;
                $scope.tempvalue.yearmark = $scope.industrydata._2012.year;
                $scope.VocationChartPiePower.series[0].data[0][1] = $scope.industrydata._2012.powerdata[0];
                $scope.VocationChartPiePower.series[0].data[1][1] = $scope.industrydata._2012.powerdata[1];
                $scope.VocationChartPiePower.series[0].data[2][1] = $scope.industrydata._2012.powerdata[2];
                $scope.VocationChartPiePower.series[0].data[3][1] = $scope.industrydata._2012.powerdata[3];
                $scope.VocationChartPiePower.series[0].data[4][1] = $scope.industrydata._2012.powerdata[4];
                $scope.VocationChartPiePower.series[0].data[5][1] = $scope.industrydata._2012.powerdata[5];
                $scope.VocationChartPiePower.series[0].data[6][1] = $scope.industrydata._2012.powerdata[6];
                $scope.VocationChartPiePower.series[0].data[7][1] = $scope.industrydata._2012.powerdata[7];
                $scope.VocationChartPiePower.subtitle.text = $scope.industrydata._2012.year+'年度';
                $scope.VocationChartPieGdp.series[0].data[0][1] = $scope.industrydata._2012.gdpdata[0];
                $scope.VocationChartPieGdp.series[0].data[1][1] = $scope.industrydata._2012.gdpdata[1];
                $scope.VocationChartPieGdp.series[0].data[2][1] = $scope.industrydata._2012.gdpdata[2];
                $scope.VocationChartPieGdp.series[0].data[3][1] = $scope.industrydata._2012.gdpdata[3];
                $scope.VocationChartPieGdp.series[0].data[4][1] = $scope.industrydata._2012.gdpdata[4];
                $scope.VocationChartPieGdp.series[0].data[5][1] = $scope.industrydata._2012.gdpdata[5];
                $scope.VocationChartPieGdp.series[0].data[6][1] = $scope.industrydata._2012.gdpdata[6];
                $scope.VocationChartPieGdp.series[0].data[7][1] = $scope.industrydata._2012.gdpdata[7];
                $scope.VocationChartPieGdp.subtitle.text = $scope.industrydata._2012.year+'年度';
            };break;
            case 2011:{
                $scope.tempvalue.gdp = $scope.industrydata._2011.gdpdata;
                $scope.tempvalue.power = $scope.industrydata._2011.powerdata;
                $scope.tempvalue.yearmark = $scope.industrydata._2011.year;
                $scope.VocationChartPiePower.series[0].data[0][1] = $scope.industrydata._2011.powerdata[0];
                $scope.VocationChartPiePower.series[0].data[1][1] = $scope.industrydata._2011.powerdata[1];
                $scope.VocationChartPiePower.series[0].data[2][1] = $scope.industrydata._2011.powerdata[2];
                $scope.VocationChartPiePower.series[0].data[3][1] = $scope.industrydata._2011.powerdata[3];
                $scope.VocationChartPiePower.series[0].data[4][1] = $scope.industrydata._2011.powerdata[4];
                $scope.VocationChartPiePower.series[0].data[5][1] = $scope.industrydata._2011.powerdata[5];
                $scope.VocationChartPiePower.series[0].data[6][1] = $scope.industrydata._2011.powerdata[6];
                $scope.VocationChartPiePower.series[0].data[7][1] = $scope.industrydata._2011.powerdata[7];
                $scope.VocationChartPiePower.subtitle.text = $scope.industrydata._2011.year+'年度';
                $scope.VocationChartPieGdp.series[0].data[0][1] = $scope.industrydata._2011.gdpdata[0];
                $scope.VocationChartPieGdp.series[0].data[1][1] = $scope.industrydata._2011.gdpdata[1];
                $scope.VocationChartPieGdp.series[0].data[2][1] = $scope.industrydata._2011.gdpdata[2];
                $scope.VocationChartPieGdp.series[0].data[3][1] = $scope.industrydata._2011.gdpdata[3];
                $scope.VocationChartPieGdp.series[0].data[4][1] = $scope.industrydata._2011.gdpdata[4];
                $scope.VocationChartPieGdp.series[0].data[5][1] = $scope.industrydata._2011.gdpdata[5];
                $scope.VocationChartPieGdp.series[0].data[6][1] = $scope.industrydata._2011.gdpdata[6];
                $scope.VocationChartPieGdp.series[0].data[7][1] = $scope.industrydata._2011.gdpdata[7];
                $scope.VocationChartPieGdp.subtitle.text = $scope.industrydata._2011.year+'年度';
            };break;
            case 2010:{
                $scope.tempvalue.gdp = $scope.industrydata._2010.gdpdata;
                $scope.tempvalue.power = $scope.industrydata._2010.powerdata;
                $scope.tempvalue.yearmark = $scope.industrydata._2010.year;
                $scope.VocationChartPiePower.series[0].data[0][1] = $scope.industrydata._2010.powerdata[0];
                $scope.VocationChartPiePower.series[0].data[1][1] = $scope.industrydata._2010.powerdata[1];
                $scope.VocationChartPiePower.series[0].data[2][1] = $scope.industrydata._2010.powerdata[2];
                $scope.VocationChartPiePower.series[0].data[3][1] = $scope.industrydata._2010.powerdata[3];
                $scope.VocationChartPiePower.series[0].data[4][1] = $scope.industrydata._2010.powerdata[4];
                $scope.VocationChartPiePower.series[0].data[5][1] = $scope.industrydata._2010.powerdata[5];
                $scope.VocationChartPiePower.series[0].data[6][1] = $scope.industrydata._2010.powerdata[6];
                $scope.VocationChartPiePower.series[0].data[7][1] = $scope.industrydata._2010.powerdata[7];
                $scope.VocationChartPiePower.subtitle.text = $scope.industrydata._2010.year+'年度';
                $scope.VocationChartPieGdp.series[0].data[0][1] = $scope.industrydata._2010.gdpdata[0];
                $scope.VocationChartPieGdp.series[0].data[1][1] = $scope.industrydata._2010.gdpdata[1];
                $scope.VocationChartPieGdp.series[0].data[2][1] = $scope.industrydata._2010.gdpdata[2];
                $scope.VocationChartPieGdp.series[0].data[3][1] = $scope.industrydata._2010.gdpdata[3];
                $scope.VocationChartPieGdp.series[0].data[4][1] = $scope.industrydata._2010.gdpdata[4];
                $scope.VocationChartPieGdp.series[0].data[5][1] = $scope.industrydata._2010.gdpdata[5];
                $scope.VocationChartPieGdp.series[0].data[6][1] = $scope.industrydata._2010.gdpdata[6];
                $scope.VocationChartPieGdp.series[0].data[7][1] = $scope.industrydata._2010.gdpdata[7];
                $scope.VocationChartPieGdp.subtitle.text = $scope.industrydata._2010.year+'年度';
            };break;
            case 2009:{
                $scope.tempvalue.gdp = $scope.industrydata._2009.gdpdata;
                $scope.tempvalue.power = $scope.industrydata._2009.powerdata;
                $scope.tempvalue.yearmark = $scope.industrydata._2009.year;
                $scope.VocationChartPiePower.series[0].data[0][1] = $scope.industrydata._2009.powerdata[0];
                $scope.VocationChartPiePower.series[0].data[1][1] = $scope.industrydata._2009.powerdata[1];
                $scope.VocationChartPiePower.series[0].data[2][1] = $scope.industrydata._2009.powerdata[2];
                $scope.VocationChartPiePower.series[0].data[3][1] = $scope.industrydata._2009.powerdata[3];
                $scope.VocationChartPiePower.series[0].data[4][1] = $scope.industrydata._2009.powerdata[4];
                $scope.VocationChartPiePower.series[0].data[5][1] = $scope.industrydata._2009.powerdata[5];
                $scope.VocationChartPiePower.series[0].data[6][1] = $scope.industrydata._2009.powerdata[6];
                $scope.VocationChartPiePower.series[0].data[7][1] = $scope.industrydata._2009.powerdata[7];
                $scope.VocationChartPiePower.subtitle.text = $scope.industrydata._2009.year+'年度';
                $scope.VocationChartPieGdp.series[0].data[0][1] = $scope.industrydata._2009.gdpdata[0];
                $scope.VocationChartPieGdp.series[0].data[1][1] = $scope.industrydata._2009.gdpdata[1];
                $scope.VocationChartPieGdp.series[0].data[2][1] = $scope.industrydata._2009.gdpdata[2];
                $scope.VocationChartPieGdp.series[0].data[3][1] = $scope.industrydata._2009.gdpdata[3];
                $scope.VocationChartPieGdp.series[0].data[4][1] = $scope.industrydata._2009.gdpdata[4];
                $scope.VocationChartPieGdp.series[0].data[5][1] = $scope.industrydata._2009.gdpdata[5];
                $scope.VocationChartPieGdp.series[0].data[6][1] = $scope.industrydata._2009.gdpdata[6];
                $scope.VocationChartPieGdp.series[0].data[7][1] = $scope.industrydata._2009.gdpdata[7];
                $scope.VocationChartPieGdp.subtitle.text = $scope.industrydata._2009.year+'年度';
            };break;
            case 2008:{
                $scope.tempvalue.gdp = $scope.industrydata._2008.gdpdata;
                $scope.tempvalue.power = $scope.industrydata._2008.powerdata;
                $scope.tempvalue.yearmark = $scope.industrydata._2008.year;
                $scope.VocationChartPiePower.series[0].data[0][1] = $scope.industrydata._2008.powerdata[0];
                $scope.VocationChartPiePower.series[0].data[1][1] = $scope.industrydata._2008.powerdata[1];
                $scope.VocationChartPiePower.series[0].data[2][1] = $scope.industrydata._2008.powerdata[2];
                $scope.VocationChartPiePower.series[0].data[3][1] = $scope.industrydata._2008.powerdata[3];
                $scope.VocationChartPiePower.series[0].data[4][1] = $scope.industrydata._2008.powerdata[4];
                $scope.VocationChartPiePower.series[0].data[5][1] = $scope.industrydata._2008.powerdata[5];
                $scope.VocationChartPiePower.series[0].data[6][1] = $scope.industrydata._2008.powerdata[6];
                $scope.VocationChartPiePower.series[0].data[7][1] = $scope.industrydata._2008.powerdata[7];
                $scope.VocationChartPiePower.subtitle.text = $scope.industrydata._2008.year+'年度';
                $scope.VocationChartPieGdp.series[0].data[0][1] = $scope.industrydata._2008.gdpdata[0];
                $scope.VocationChartPieGdp.series[0].data[1][1] = $scope.industrydata._2008.gdpdata[1];
                $scope.VocationChartPieGdp.series[0].data[2][1] = $scope.industrydata._2008.gdpdata[2];
                $scope.VocationChartPieGdp.series[0].data[3][1] = $scope.industrydata._2008.gdpdata[3];
                $scope.VocationChartPieGdp.series[0].data[4][1] = $scope.industrydata._2008.gdpdata[4];
                $scope.VocationChartPieGdp.series[0].data[5][1] = $scope.industrydata._2008.gdpdata[5];
                $scope.VocationChartPieGdp.series[0].data[6][1] = $scope.industrydata._2008.gdpdata[6];
                $scope.VocationChartPieGdp.series[0].data[7][1] = $scope.industrydata._2008.gdpdata[7];
                $scope.VocationChartPieGdp.subtitle.text = $scope.industrydata._2008.year+'年度';
            };break;
            case 2007:{
                $scope.tempvalue.gdp = $scope.industrydata._2007.gdpdata;
                $scope.tempvalue.power = $scope.industrydata._2007.powerdata;
                $scope.tempvalue.yearmark = $scope.industrydata._2007.year;
                $scope.VocationChartPiePower.series[0].data[0][1] = $scope.industrydata._2007.powerdata[0];
                $scope.VocationChartPiePower.series[0].data[1][1] = $scope.industrydata._2007.powerdata[1];
                $scope.VocationChartPiePower.series[0].data[2][1] = $scope.industrydata._2007.powerdata[2];
                $scope.VocationChartPiePower.series[0].data[3][1] = $scope.industrydata._2007.powerdata[3];
                $scope.VocationChartPiePower.series[0].data[4][1] = $scope.industrydata._2007.powerdata[4];
                $scope.VocationChartPiePower.series[0].data[5][1] = $scope.industrydata._2007.powerdata[5];
                $scope.VocationChartPiePower.series[0].data[6][1] = $scope.industrydata._2007.powerdata[6];
                $scope.VocationChartPiePower.series[0].data[7][1] = $scope.industrydata._2007.powerdata[7];
                $scope.VocationChartPiePower.subtitle.text = $scope.industrydata._2007.year+'年度';
                $scope.VocationChartPieGdp.series[0].data[0][1] = $scope.industrydata._2007.gdpdata[0];
                $scope.VocationChartPieGdp.series[0].data[1][1] = $scope.industrydata._2007.gdpdata[1];
                $scope.VocationChartPieGdp.series[0].data[2][1] = $scope.industrydata._2007.gdpdata[2];
                $scope.VocationChartPieGdp.series[0].data[3][1] = $scope.industrydata._2007.gdpdata[3];
                $scope.VocationChartPieGdp.series[0].data[4][1] = $scope.industrydata._2007.gdpdata[4];
                $scope.VocationChartPieGdp.series[0].data[5][1] = $scope.industrydata._2007.gdpdata[5];
                $scope.VocationChartPieGdp.series[0].data[6][1] = $scope.industrydata._2007.gdpdata[6];
                $scope.VocationChartPieGdp.series[0].data[7][1] = $scope.industrydata._2007.gdpdata[7];
                $scope.VocationChartPieGdp.subtitle.text = $scope.industrydata._2007.year+'年度';
            };break;
        }
    }
    $scope.VocationChartPiePower = {
        credits:{
            enabled:false // 禁用版权信息
        },
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: '行业用电量增速对比'
        },
        subtitle: {
            text: '2015年度',
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    color: '#000000',
                    connectorColor: '#000000',
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                }
            }
        },
        series: [{
            type: 'pie',
            name: '同比增长率',
            data: [
                ['农、林、牧、渔业',   $scope.industrydata._2015.powerdata[0]],
                ['工业',   $scope.industrydata._2015.powerdata[1]],
                ['建筑业',   $scope.industrydata._2015.powerdata[2]],
                ['交通运输、仓储和邮政业',   $scope.industrydata._2015.powerdata[3]],
                ['信息传输、计算机服务和软件业',   $scope.industrydata._2015.powerdata[4]],
                ['批发和零售、住宿和餐饮业',   $scope.industrydata._2015.powerdata[5]],
                ['金融、房地产、商务及居民服务业',   $scope.industrydata._2015.powerdata[6]],
                ['公共事业及管理组织',   $scope.industrydata._2015.powerdata[7]],
            ]
        }]
    };
    $scope.VocationChartPieGdp = {
        credits:{
            enabled:false // 禁用版权信息
        },
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: '行业产值增速对比'
        },
        subtitle: {
            text: '2015年度',
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    color: '#000000',
                    connectorColor: '#000000',
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                }
            }
        },
        series: [{
            type: 'pie',
            name: '同比增长率',
            data: [
                ['农、林、牧、渔业',   $scope.industrydata._2015.gdpdata[0]],
                ['工业',   $scope.industrydata._2015.gdpdata[1]],
                ['建筑业',   $scope.industrydata._2015.gdpdata[2]],
                ['交通运输、仓储和邮政业',   $scope.industrydata._2015.gdpdata[3]],
                ['信息传输、计算机服务和软件业',   $scope.industrydata._2015.gdpdata[4]],
                ['批发和零售、住宿和餐饮业',   $scope.industrydata._2015.gdpdata[5]],
                ['金融、房地产、商务及居民服务业',   $scope.industrydata._2015.gdpdata[6]],
                ['公共事业及管理组织',   $scope.industrydata._2015.gdpdata[7]],
            ]
        }]
    };

});
}]);






app.controller('EconomyPowerConsumptionCtrl_IndustryEach', ['$scope','$stateParams', 'qService','forecastFactory_Power',function($scope, $stateParams,qService,forecastFactory_Power) {

var promise = qService.tokenHttpGet(forecastFactory_Power.query,{tableName:'powerGdpCorrelationIndustrySoloData'});

$scope.totalYears = [2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018];

promise.then(function(result) {

  $scope.getData = result.data;


  $scope.industriesdata = {
    total:{
        years:[2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018],
    },    

    agriculture:{
        title:'农、林、牧、渔业',
        yeardata:{
          gdpdata: $scope.getData[3001][0],                                                                             
          powerdata: $scope.getData[3001][1],
        },
        _2018:{
            season:
                {
                    gdpdata: $scope.getData[3001][2][2018][0],                                                                             
                    powerdata: $scope.getData[3001][2][2018][1],
                },
        },
        _2017:{
            season:
                {
                    gdpdata: $scope.getData[3001][2][2017][0],                                                                             
                    powerdata: $scope.getData[3001][2][2017][1],
                },
        },
        _2016:{
            season:
                {
                    gdpdata: $scope.getData[3001][2][2016][0],                                                                             
                    powerdata: $scope.getData[3001][2][2016][1],
                },
        },
        _2015:{
            season:
                {
                    gdpdata: $scope.getData[3001][2][2015][0],                                                                             
                    powerdata: $scope.getData[3001][2][2015][1],
                },
        },
        _2014:{
            season:
                {
                    gdpdata: $scope.getData[3001][2][2014][0],                                                                             
                    powerdata: $scope.getData[3001][2][2014][1],
                },
        },
        _2013:{
            season:
                {
                    gdpdata: $scope.getData[3001][2][2013][0],                                                                             
                    powerdata: $scope.getData[3001][2][2013][1],
                },
        },
        _2012:{
            season:
                {
                    gdpdata: $scope.getData[3001][2][2012][0],                                                                             
                    powerdata: $scope.getData[3001][2][2012][1],
                },
        },
        _2011:{
            season:
                {
                    gdpdata: $scope.getData[3001][2][2011][0],                                                                             
                    powerdata: $scope.getData[3001][2][2011][1],
                },
        },
        _2010:{
            season:
                {
                    gdpdata: $scope.getData[3001][2][2010][0],                                                                             
                    powerdata: $scope.getData[3001][2][2010][1],
                },
        },
        _2009:{
            season:
                {
                    gdpdata: $scope.getData[3001][2][2009][0],                                                                             
                    powerdata: $scope.getData[3001][2][2009][1],
                },
        },
        _2008:{
            season:
                {
                    gdpdata: $scope.getData[3001][2][2008][0],                                                                             
                    powerdata: $scope.getData[3001][2][2008][1],
                },
        },
        _2007:{
            season:
                {
                    gdpdata: $scope.getData[3001][2][2007][0],                                                                             
                    powerdata: $scope.getData[3001][2][2007][1],
                },
        },
        _2006:{
            season:
                {
                    gdpdata: $scope.getData[3001][2][2006][0],                                                                             
                    powerdata: $scope.getData[3001][2][2006][1],
                },
        },
    },
    industry:{
        title:'工业',
        yeardata:{
          gdpdata: $scope.getData[3002][0],                                                                             
          powerdata: $scope.getData[3002][1],
        },
        _2018:{
            season:
                {
                    gdpdata: $scope.getData[3002][2][2018][0],                                                                             
                    powerdata: $scope.getData[3002][2][2018][1],
                },
        },
        _2017:{
            season:
                {
                    gdpdata: $scope.getData[3002][2][2017][0],                                                                             
                    powerdata: $scope.getData[3002][2][2017][1],
                },
        },
        _2016:{
            season:
                {
                    gdpdata: $scope.getData[3002][2][2016][0],                                                                             
                    powerdata: $scope.getData[3002][2][2016][1],
                },
        },
        _2015:{
            season:
                {
                    gdpdata: $scope.getData[3002][2][2015][0],                                                                             
                    powerdata: $scope.getData[3002][2][2015][1],
                },
        },
        _2014:{
            season:
                {
                    gdpdata: $scope.getData[3002][2][2014][0],                                                                             
                    powerdata: $scope.getData[3002][2][2014][1],
                },
        },
        _2013:{
            season:
                {
                    gdpdata: $scope.getData[3002][2][2013][0],                                                                             
                    powerdata: $scope.getData[3002][2][2013][1],
                },
        },
        _2012:{
            season:
                {
                    gdpdata: $scope.getData[3002][2][2012][0],                                                                             
                    powerdata: $scope.getData[3002][2][2012][1],
                },
        },
        _2011:{
            season:
                {
                    gdpdata: $scope.getData[3002][2][2011][0],                                                                             
                    powerdata: $scope.getData[3002][2][2011][1],
                },
        },
        _2010:{
            season:
                {
                    gdpdata: $scope.getData[3002][2][2010][0],                                                                             
                    powerdata: $scope.getData[3002][2][2010][1],
                },
        },
        _2009:{
            season:
                {
                    gdpdata: $scope.getData[3002][2][2009][0],                                                                             
                    powerdata: $scope.getData[3002][2][2009][1],
                },
        },
        _2008:{
            season:
                {
                    gdpdata: $scope.getData[3002][2][2008][0],                                                                             
                    powerdata: $scope.getData[3002][2][2008][1],
                },
        },
        _2007:{
            season:
                {
                    gdpdata: $scope.getData[3002][2][2007][0],                                                                             
                    powerdata: $scope.getData[3002][2][2007][1],
                },
        },
        _2006:{
            season:
                {
                    gdpdata: $scope.getData[3002][2][2006][0],                                                                             
                    powerdata: $scope.getData[3002][2][2006][1],
                },
        },
    },
    construction:{
        title:'建筑业',
        yeardata:{
          gdpdata: $scope.getData[3003][0],                                                                             
          powerdata: $scope.getData[3003][1],
        },
        _2018:{
            season:
                {
                    gdpdata: $scope.getData[3003][2][2018][0],                                                                             
                    powerdata: $scope.getData[3003][2][2018][1],
                },
        },
        _2017:{
            season:
                {
                    gdpdata: $scope.getData[3003][2][2017][0],                                                                             
                    powerdata: $scope.getData[3003][2][2017][1],
                },
        },
        _2016:{
            season:
                {
                    gdpdata: $scope.getData[3003][2][2016][0],                                                                             
                    powerdata: $scope.getData[3003][2][2016][1],
                },
        },
        _2015:{
            season:
                {
                    gdpdata: $scope.getData[3003][2][2015][0],                                                                             
                    powerdata: $scope.getData[3003][2][2015][1],
                },
        },
        _2014:{
            season:
                {
                    gdpdata: $scope.getData[3003][2][2014][0],                                                                             
                    powerdata: $scope.getData[3003][2][2014][1],
                },
        },
        _2013:{
            season:
                {
                    gdpdata: $scope.getData[3003][2][2013][0],                                                                             
                    powerdata: $scope.getData[3003][2][2013][1],
                },
        },
        _2012:{
            season:
                {
                    gdpdata: $scope.getData[3003][2][2012][0],                                                                             
                    powerdata: $scope.getData[3003][2][2012][1],
                },
        },
        _2011:{
            season:
                {
                    gdpdata: $scope.getData[3003][2][2011][0],                                                                             
                    powerdata: $scope.getData[3003][2][2011][1],
                },
        },
        _2010:{
            season:
                {
                    gdpdata: $scope.getData[3003][2][2010][0],                                                                             
                    powerdata: $scope.getData[3003][2][2010][1],
                },
        },
        _2009:{
            season:
                {
                    gdpdata: $scope.getData[3003][2][2009][0],                                                                             
                    powerdata: $scope.getData[3003][2][2009][1],
                },
        },
        _2008:{
            season:
                {
                    gdpdata: $scope.getData[3003][2][2008][0],                                                                             
                    powerdata: $scope.getData[3003][2][2008][1],
                },
        },
        _2007:{
            season:
                {
                    gdpdata: $scope.getData[3003][2][2007][0],                                                                             
                    powerdata: $scope.getData[3003][2][2007][1],
                },
        },
        _2006:{
            season:
                {
                    gdpdata: $scope.getData[3003][2][2006][0],                                                                             
                    powerdata: $scope.getData[3003][2][2006][1],
                },
        },
    },
    traffic:{
        title:'交通运输、仓储和邮政业',
        yeardata:{
          gdpdata: $scope.getData[3004][0],                                                                             
          powerdata: $scope.getData[3004][1], 
          //年数据应该是有季度数据按公式计算得到的
        },
        _2018:{
            season:
                {
                    gdpdata: $scope.getData[3004][2][2018][0],                                                                             
                    powerdata: $scope.getData[3004][2][2018][1],
                },
        },
        _2017:{
            season:
                {
                    gdpdata: $scope.getData[3004][2][2017][0],                                                                             
                    powerdata: $scope.getData[3004][2][2017][1],
                },
        },
        _2016:{
            season:
                {
                    gdpdata: $scope.getData[3004][2][2016][0],                                                                             
                    powerdata: $scope.getData[3004][2][2016][1],
                },
        },
        _2015:{
            season:
                {
                    gdpdata: $scope.getData[3004][2][2015][0],                                                                             
                    powerdata: $scope.getData[3004][2][2015][1],
                },
        },
        _2014:{
            season:
                {
                    gdpdata: $scope.getData[3004][2][2014][0],                                                                             
                    powerdata: $scope.getData[3004][2][2014][1],
                },
        },
        _2013:{
            season:
                {
                    gdpdata: $scope.getData[3004][2][2013][0],                                                                             
                    powerdata: $scope.getData[3004][2][2013][1],
                },
        },
        _2012:{
            season:
                {
                    gdpdata: $scope.getData[3004][2][2012][0],                                                                             
                    powerdata: $scope.getData[3004][2][2012][1],
                },
        },
        _2011:{
            season:
                {
                    gdpdata: $scope.getData[3004][2][2011][0],                                                                             
                    powerdata: $scope.getData[3004][2][2011][1],
                },
        },
        _2010:{
            season:
                {
                    gdpdata: $scope.getData[3004][2][2010][0],                                                                             
                    powerdata: $scope.getData[3004][2][2010][1],
                },
        },
        _2009:{
            season:
                {
                    gdpdata: $scope.getData[3004][2][2009][0],                                                                             
                    powerdata: $scope.getData[3004][2][2009][1],
                },
        },
        _2008:{
            season:
                {
                    gdpdata: $scope.getData[3004][2][2008][0],                                                                             
                    powerdata: $scope.getData[3004][2][2008][1],
                },
        },
        _2007:{
            season:
                {
                    gdpdata: $scope.getData[3004][2][2007][0],                                                                             
                    powerdata: $scope.getData[3004][2][2007][1],
                },
        },
        _2006:{
            season:
                {
                    gdpdata: $scope.getData[3004][2][2006][0],                                                                             
                    powerdata: $scope.getData[3004][2][2006][1],
                },
        },
    },
    computer:{
        title:'信息传输、计算机服务和软件业',
        yeardata:{
          gdpdata: $scope.getData[3005][0],                                                                             
          powerdata: $scope.getData[3005][1],
        },
        _2018:{
            season:
                {
                    gdpdata: $scope.getData[3005][2][2018][0],                                                                             
                    powerdata: $scope.getData[3005][2][2018][1],
                },
        },
        _2017:{
            season:
                {
                    gdpdata: $scope.getData[3005][2][2017][0],                                                                             
                    powerdata: $scope.getData[3005][2][2017][1],
                },
        },
        _2016:{
            season:
                {
                    gdpdata: $scope.getData[3005][2][2016][0],                                                                             
                    powerdata: $scope.getData[3005][2][2016][1],
                },
        },
        _2015:{
            season:
                {
                    gdpdata: $scope.getData[3005][2][2015][0],                                                                             
                    powerdata: $scope.getData[3005][2][2015][1],
                },
        },
        _2014:{
            season:
                {
                    gdpdata: $scope.getData[3005][2][2014][0],                                                                             
                    powerdata: $scope.getData[3005][2][2014][1],
                },
        },
        _2013:{
            season:
                {
                    gdpdata: $scope.getData[3005][2][2013][0],                                                                             
                    powerdata: $scope.getData[3005][2][2013][1],
                },
        },
        _2012:{
            season:
                {
                    gdpdata: $scope.getData[3005][2][2012][0],                                                                             
                    powerdata: $scope.getData[3005][2][2012][1],
                },
        },
        _2011:{
            season:
                {
                    gdpdata: $scope.getData[3005][2][2011][0],                                                                             
                    powerdata: $scope.getData[3005][2][2011][1],
                },
        },
        _2010:{
            season:
                {
                    gdpdata: $scope.getData[3005][2][2010][0],                                                                             
                    powerdata: $scope.getData[3005][2][2010][1],
                },
        },
        _2009:{
            season:
                {
                    gdpdata: $scope.getData[3005][2][2009][0],                                                                             
                    powerdata: $scope.getData[3005][2][2009][1],
                },
        },
        _2008:{
            season:
                {
                    gdpdata: $scope.getData[3005][2][2008][0],                                                                             
                    powerdata: $scope.getData[3005][2][2008][1],
                },
        },
        _2007:{
            season:
                {
                    gdpdata: $scope.getData[3005][2][2007][0],                                                                             
                    powerdata: $scope.getData[3005][2][2007][1],
                },
        },
        _2006:{
            season:
                {
                    gdpdata: $scope.getData[3005][2][2006][0],                                                                             
                    powerdata: $scope.getData[3005][2][2006][1],
                },
        },
    },
    retail:{
        title:'批发和零售、住宿和餐饮业',
        yeardata:{
          gdpdata: $scope.getData[3006][0],                                                                             
          powerdata: $scope.getData[3006][1],
        },
        _2018:{
            season:
                {
                    gdpdata: $scope.getData[3006][2][2018][0],                                                                             
                    powerdata: $scope.getData[3006][2][2018][1],
                },
        },
        _2017:{
            season:
                {
                    gdpdata: $scope.getData[3006][2][2017][0],                                                                             
                    powerdata: $scope.getData[3006][2][2017][1],
                },
        },
        _2016:{
            season:
                {
                    gdpdata: $scope.getData[3006][2][2016][0],                                                                             
                    powerdata: $scope.getData[3006][2][2016][1],
                },
        },
        _2015:{
            season:
                {
                    gdpdata: $scope.getData[3006][2][2015][0],                                                                             
                    powerdata: $scope.getData[3006][2][2015][1],
                },
        },
        _2014:{
            season:
                {
                    gdpdata: $scope.getData[3006][2][2014][0],                                                                             
                    powerdata: $scope.getData[3006][2][2014][1],
                },
        },
        _2013:{
            season:
                {
                    gdpdata: $scope.getData[3006][2][2013][0],                                                                             
                    powerdata: $scope.getData[3006][2][2013][1],
                },
        },
        _2012:{
            season:
                {
                    gdpdata: $scope.getData[3006][2][2012][0],                                                                             
                    powerdata: $scope.getData[3006][2][2012][1],
                },
        },
        _2011:{
            season:
                {
                    gdpdata: $scope.getData[3006][2][2011][0],                                                                             
                    powerdata: $scope.getData[3006][2][2011][1],
                },
        },
        _2010:{
            season:
                {
                    gdpdata: $scope.getData[3006][2][2010][0],                                                                             
                    powerdata: $scope.getData[3006][2][2010][1],
                },
        },
        _2009:{
            season:
                {
                    gdpdata: $scope.getData[3006][2][2009][0],                                                                             
                    powerdata: $scope.getData[3006][2][2009][1],
                },
        },
        _2008:{
            season:
                {
                    gdpdata: $scope.getData[3006][2][2008][0],                                                                             
                    powerdata: $scope.getData[3006][2][2008][1],
                },
        },
        _2007:{
            season:
                {
                    gdpdata: $scope.getData[3006][2][2007][0],                                                                             
                    powerdata: $scope.getData[3006][2][2007][1],
                },
        },
        _2006:{
            season:
                {
                    gdpdata: $scope.getData[3006][2][2006][0],                                                                             
                    powerdata: $scope.getData[3006][2][2006][1],
                },
        },
    },
    finance:{
        title:'金融房地产、商务及居民服务业',
        yeardata:{
          gdpdata: $scope.getData[3007][0],                                                                             
          powerdata: $scope.getData[3007][1],
        },
        _2018:{
            season:
                {
                    gdpdata: $scope.getData[3007][2][2018][0],                                                                             
                    powerdata: $scope.getData[3007][2][2018][1],
                },
        },
        _2017:{
            season:
                {
                    gdpdata: $scope.getData[3007][2][2017][0],                                                                             
                    powerdata: $scope.getData[3007][2][2017][1],
                },
        },
        _2016:{
            season:
                {
                    gdpdata: $scope.getData[3007][2][2016][0],                                                                             
                    powerdata: $scope.getData[3007][2][2016][1],
                },
        },
        _2015:{
            season:
                {
                    gdpdata: $scope.getData[3007][2][2015][0],                                                                             
                    powerdata: $scope.getData[3007][2][2015][1],
                },
        },
        _2014:{
            season:
                {
                    gdpdata: $scope.getData[3007][2][2014][0],                                                                             
                    powerdata: $scope.getData[3007][2][2014][1],
                },
        },
        _2013:{
            season:
                {
                    gdpdata: $scope.getData[3007][2][2013][0],                                                                             
                    powerdata: $scope.getData[3007][2][2013][1],
                },
        },
        _2012:{
            season:
                {
                    gdpdata: $scope.getData[3007][2][2012][0],                                                                             
                    powerdata: $scope.getData[3007][2][2012][1],
                },
        },
        _2011:{
            season:
                {
                    gdpdata: $scope.getData[3007][2][2011][0],                                                                             
                    powerdata: $scope.getData[3007][2][2011][1],
                },
        },
        _2010:{
            season:
                {
                    gdpdata: $scope.getData[3007][2][2010][0],                                                                             
                    powerdata: $scope.getData[3007][2][2010][1],
                },
        },
        _2009:{
            season:
                {
                    gdpdata: $scope.getData[3007][2][2009][0],                                                                             
                    powerdata: $scope.getData[3007][2][2009][1],
                },
        },
        _2008:{
            season:
                {
                    gdpdata: $scope.getData[3007][2][2008][0],                                                                             
                    powerdata: $scope.getData[3007][2][2008][1],
                },
        },
        _2007:{
            season:
                {
                    gdpdata: $scope.getData[3007][2][2007][0],                                                                             
                    powerdata: $scope.getData[3007][2][2007][1],
                },
        },
        _2006:{
            season:
                {
                    gdpdata: $scope.getData[3007][2][2006][0],                                                                             
                    powerdata: $scope.getData[3007][2][2006][1],
                },
        },
    },
    service:{
        title:'公共事业及管理组织',
        yeardata:{
          gdpdata: $scope.getData[3008][0],                                                                             
          powerdata: $scope.getData[3008][1],
        },
       _2018:{
            season:
                {
                    gdpdata: $scope.getData[3008][2][2018][0],                                                                             
                    powerdata: $scope.getData[3008][2][2018][1],
                },
        },
        _2017:{
            season:
                {
                    gdpdata: $scope.getData[3008][2][2017][0],                                                                             
                    powerdata: $scope.getData[3008][2][2017][1],
                },
        },
        _2016:{
            season:
                {
                    gdpdata: $scope.getData[3008][2][2016][0],                                                                             
                    powerdata: $scope.getData[3008][2][2016][1],
                },
        },
        _2015:{
            season:
                {
                    gdpdata: $scope.getData[3008][2][2015][0],                                                                             
                    powerdata: $scope.getData[3008][2][2015][1],
                },
        },
        _2014:{
            season:
                {
                    gdpdata: $scope.getData[3008][2][2014][0],                                                                             
                    powerdata: $scope.getData[3008][2][2014][1],
                },
        },
        _2013:{
            season:
                {
                    gdpdata: $scope.getData[3008][2][2013][0],                                                                             
                    powerdata: $scope.getData[3008][2][2013][1],
                },
        },
        _2012:{
            season:
                {
                    gdpdata: $scope.getData[3008][2][2012][0],                                                                             
                    powerdata: $scope.getData[3008][2][2012][1],
                },
        },
        _2011:{
            season:
                {
                    gdpdata: $scope.getData[3008][2][2011][0],                                                                             
                    powerdata: $scope.getData[3008][2][2011][1],
                },
        },
        _2010:{
            season:
                {
                    gdpdata: $scope.getData[3008][2][2010][0],                                                                             
                    powerdata: $scope.getData[3008][2][2010][1],
                },
        },
        _2009:{
            season:
                {
                    gdpdata: $scope.getData[3008][2][2009][0],                                                                             
                    powerdata: $scope.getData[3008][2][2009][1],
                },
        },
        _2008:{
            season:
                {
                    gdpdata: $scope.getData[3008][2][2008][0],                                                                             
                    powerdata: $scope.getData[3008][2][2008][1],
                },
        },
        _2007:{
            season:
                {
                    gdpdata: $scope.getData[3008][2][2007][0],                                                                             
                    powerdata: $scope.getData[3008][2][2007][1],
                },
        },
        _2006:{
            season:
                {
                    gdpdata: $scope.getData[3008][2][2006][0],                                                                             
                    powerdata: $scope.getData[3008][2][2006][1],
                },
        },
    },
  };
  $scope.temptable = {
    selectedyear:'2015',
    selectedindustry:$scope.industriesdata.agriculture.title,
    year:{
      gdp:$scope.industriesdata.agriculture.yeardata.gdpdata,
      power:$scope.industriesdata.agriculture.yeardata.powerdata,
    },
    season:{
      gdp:$scope.industriesdata.agriculture._2015.season.gdpdata,
      power:$scope.industriesdata.agriculture._2015.season.powerdata,
    }
  }
  $scope.isshow = {
    isShowYearTable:false,
  }
  //标记当前选择的行业
  $scope.industrymark = 0;

  $scope.changeStyle = function(param){
    switch(param){
      case 1:{
        $scope.SingleVocationChartByYear.options.chart.type = 'spline';
      };break;
      case 2:{
        $scope.SingleVocationChartByYear.options.chart.type = 'column';
      };break;
      case 3:{
        $scope.SingleVocationChartByYear.options.chart.type = 'area';
      };break;
    }
  }
  $scope.showTables = function(){
    $scope.isshow.isShowYearTable = !$scope.isshow.isShowYearTable;
  }
  $scope.changeYear = function(param){
    switch($scope.industrymark){
      case 0:{
        switch(param){
          case 6:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.agriculture._2006.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.agriculture._2006.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.agriculture._2006.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.agriculture._2006.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.agriculture._2006.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.agriculture._2006.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.agriculture._2006.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.agriculture._2006.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.agriculture._2006.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.agriculture._2006.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.agriculture._2006.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.agriculture._2006.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2006年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2006年度';
              $scope.SingleVocationChart.subtitle.text = '2006年度';
              $scope.temptable.selectedyear = '2006';
          };break;
          case 7:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.agriculture._2007.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.agriculture._2007.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.agriculture._2007.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.agriculture._2007.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.agriculture._2007.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.agriculture._2007.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.agriculture._2007.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.agriculture._2007.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.agriculture._2007.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.agriculture._2007.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.agriculture._2007.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.agriculture._2007.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2007年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2007年度';
              $scope.SingleVocationChart.subtitle.text = '2007年度';
              $scope.temptable.selectedyear = '2007';
          };break;
          case 8:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.agriculture._2008.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.agriculture._2008.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.agriculture._2008.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.agriculture._2008.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.agriculture._2008.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.agriculture._2008.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.agriculture._2008.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.agriculture._2008.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.agriculture._2008.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.agriculture._2008.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.agriculture._2008.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.agriculture._2008.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2008年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2008年度';
              $scope.SingleVocationChart.subtitle.text = '2008年度';
              $scope.temptable.selectedyear = '2008';
          };break;
          case 9:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.agriculture._2009.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.agriculture._2009.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.agriculture._2009.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.agriculture._2009.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.agriculture._2009.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.agriculture._2009.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.agriculture._2009.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.agriculture._2009.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.agriculture._2009.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.agriculture._2009.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.agriculture._2009.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.agriculture._2009.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2009年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2009年度';
              $scope.SingleVocationChart.subtitle.text = '2009年度';
              $scope.temptable.selectedyear = '2009';
            
          };break;
          case 10:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.agriculture._2010.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.agriculture._2010.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.agriculture._2010.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.agriculture._2010.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.agriculture._2010.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.agriculture._2010.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.agriculture._2010.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.agriculture._2010.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.agriculture._2010.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.agriculture._2010.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.agriculture._2010.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.agriculture._2010.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2010年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2010年度';
              $scope.SingleVocationChart.subtitle.text = '2010年度';
              $scope.temptable.selectedyear = '2010';
            
          };break;
          case 11:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.agriculture._2011.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.agriculture._2011.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.agriculture._2011.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.agriculture._2011.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.agriculture._2011.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.agriculture._2011.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.agriculture._2011.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.agriculture._2011.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.agriculture._2011.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.agriculture._2011.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.agriculture._2011.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.agriculture._2011.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2011年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2011年度';
              $scope.SingleVocationChart.subtitle.text = '2011年度';
              $scope.temptable.selectedyear = '2011';
          };break;
          case 12:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.agriculture._2012.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.agriculture._2012.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.agriculture._2012.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.agriculture._2012.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.agriculture._2012.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.agriculture._2012.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.agriculture._2012.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.agriculture._2012.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.agriculture._2012.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.agriculture._2012.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.agriculture._2012.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.agriculture._2012.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2012年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2012年度';
              $scope.SingleVocationChart.subtitle.text = '2012年度';
              $scope.temptable.selectedyear = '2012';
            
          };break;
          case 13:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.agriculture._2013.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.agriculture._2013.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.agriculture._2013.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.agriculture._2013.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.agriculture._2013.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.agriculture._2013.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.agriculture._2013.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.agriculture._2013.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.agriculture._2013.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.agriculture._2013.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.agriculture._2013.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.agriculture._2013.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2013年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2013年度';
              $scope.SingleVocationChart.subtitle.text = '2013年度';
              $scope.temptable.selectedyear = '2013';
            
          };break;
          case 14:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.agriculture._2014.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.agriculture._2014.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.agriculture._2014.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.agriculture._2014.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.agriculture._2014.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.agriculture._2014.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.agriculture._2014.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.agriculture._2014.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.agriculture._2014.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.agriculture._2014.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.agriculture._2014.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.agriculture._2014.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2014年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2014年度';
              $scope.SingleVocationChart.subtitle.text = '2014年度';
              $scope.temptable.selectedyear = '2014';
          };break;
          case 15:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.agriculture._2015.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.agriculture._2015.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.agriculture._2015.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.agriculture._2015.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.agriculture._2015.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.agriculture._2015.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.agriculture._2015.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.agriculture._2015.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.agriculture._2015.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.agriculture._2015.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.agriculture._2015.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.agriculture._2015.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2015年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2015年度';
              $scope.SingleVocationChart.subtitle.text = '2015年度';
              $scope.temptable.selectedyear = '2015';
          };break;
          case 16:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.agriculture._2016.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.agriculture._2016.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.agriculture._2016.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.agriculture._2016.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.agriculture._2016.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.agriculture._2016.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.agriculture._2016.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.agriculture._2016.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.agriculture._2016.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.agriculture._2016.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.agriculture._2016.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.agriculture._2016.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2016年度 预测值';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2016年度 预测值';
              $scope.SingleVocationChart.subtitle.text = '2016年度 预测值';
              $scope.temptable.selectedyear = '2016';
          };break;
          case 17:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.agriculture._2017.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.agriculture._2017.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.agriculture._2017.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.agriculture._2017.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.agriculture._2017.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.agriculture._2017.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.agriculture._2017.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.agriculture._2017.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.agriculture._2017.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.agriculture._2017.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.agriculture._2017.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.agriculture._2017.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2017年度 预测值';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2017年度 预测值';
              $scope.SingleVocationChart.subtitle.text = '2017年度 预测值';
              $scope.temptable.selectedyear = '2017';
          };break;
          case 18:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.agriculture._2018.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.agriculture._2018.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.agriculture._2018.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.agriculture._2018.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.agriculture._2018.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.agriculture._2018.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.agriculture._2018.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.agriculture._2018.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.agriculture._2018.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.agriculture._2018.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.agriculture._2018.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.agriculture._2018.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2018年度 预测值';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2018年度 预测值';
              $scope.SingleVocationChart.subtitle.text = '2018年度 预测值';
              $scope.temptable.selectedyear = '2018';
          };break;
        }
      }break;
      case 1:{
        switch(param){
          case 6:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.industry._2006.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.industry._2006.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.industry._2006.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.industry._2006.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.industry._2006.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.industry._2006.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.industry._2006.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.industry._2006.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.industry._2006.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.industry._2006.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.industry._2006.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.industry._2006.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2006年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2006年度';
              $scope.SingleVocationChart.subtitle.text = '2006年度';
              $scope.temptable.selectedyear = '2006';
          };break;
          case 7:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.industry._2007.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.industry._2007.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.industry._2007.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.industry._2007.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.industry._2007.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.industry._2007.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.industry._2007.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.industry._2007.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.industry._2007.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.industry._2007.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.industry._2007.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.industry._2007.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2007年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2007年度';
              $scope.SingleVocationChart.subtitle.text = '2007年度';
              $scope.temptable.selectedyear = '2007';
          };break;
          case 8:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.industry._2008.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.industry._2008.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.industry._2008.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.industry._2008.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.industry._2008.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.industry._2008.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.industry._2008.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.industry._2008.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.industry._2008.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.industry._2008.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.industry._2008.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.industry._2008.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2008年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2008年度';
              $scope.SingleVocationChart.subtitle.text = '2008年度';
              $scope.temptable.selectedyear = '2008';
          };break;
          case 9:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.industry._2009.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.industry._2009.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.industry._2009.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.industry._2009.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.industry._2009.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.industry._2009.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.industry._2009.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.industry._2009.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.industry._2009.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.industry._2009.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.industry._2009.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.industry._2009.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2009年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2009年度';
              $scope.SingleVocationChart.subtitle.text = '2009年度';
              $scope.temptable.selectedyear = '2009';
            
          };break;
          case 10:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.industry._2010.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.industry._2010.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.industry._2010.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.industry._2010.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.industry._2010.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.industry._2010.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.industry._2010.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.industry._2010.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.industry._2010.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.industry._2010.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.industry._2010.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.industry._2010.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2010年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2010年度';
              $scope.SingleVocationChart.subtitle.text = '2010年度';
              $scope.temptable.selectedyear = '2010';
            
          };break;
          case 11:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.industry._2011.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.industry._2011.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.industry._2011.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.industry._2011.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.industry._2011.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.industry._2011.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.industry._2011.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.industry._2011.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.industry._2011.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.industry._2011.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.industry._2011.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.industry._2011.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2011年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2011年度';
              $scope.SingleVocationChart.subtitle.text = '2011年度';
              $scope.temptable.selectedyear = '2011';
          };break;
          case 12:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.industry._2012.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.industry._2012.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.industry._2012.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.industry._2012.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.industry._2012.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.industry._2012.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.industry._2012.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.industry._2012.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.industry._2012.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.industry._2012.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.industry._2012.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.industry._2012.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2012年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2012年度';
              $scope.SingleVocationChart.subtitle.text = '2012年度';
              $scope.temptable.selectedyear = '2012';
            
          };break;
          case 13:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.industry._2013.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.industry._2013.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.industry._2013.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.industry._2013.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.industry._2013.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.industry._2013.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.industry._2013.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.industry._2013.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.industry._2013.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.industry._2013.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.industry._2013.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.industry._2013.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2013年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2013年度';
              $scope.SingleVocationChart.subtitle.text = '2013年度';
              $scope.temptable.selectedyear = '2013';
            
          };break;
          case 14:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.industry._2014.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.industry._2014.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.industry._2014.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.industry._2014.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.industry._2014.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.industry._2014.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.industry._2014.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.industry._2014.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.industry._2014.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.industry._2014.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.industry._2014.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.industry._2014.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2014年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2014年度';
              $scope.SingleVocationChart.subtitle.text = '2014年度';
              $scope.temptable.selectedyear = '2014';
          };break;
          case 15:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.industry._2015.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.industry._2015.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.industry._2015.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.industry._2015.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.industry._2015.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.industry._2015.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.industry._2015.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.industry._2015.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.industry._2015.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.industry._2015.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.industry._2015.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.industry._2015.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2015年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2015年度';
              $scope.SingleVocationChart.subtitle.text = '2015年度';
              $scope.temptable.selectedyear = '2015';
          };break;
          case 16:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.industry._2016.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.industry._2016.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.industry._2016.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.industry._2016.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.industry._2016.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.industry._2016.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.industry._2016.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.industry._2016.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.industry._2016.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.industry._2016.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.industry._2016.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.industry._2016.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2016年度 预测值';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2016年度 预测值';
              $scope.SingleVocationChart.subtitle.text = '2016年度 预测值';
              $scope.temptable.selectedyear = '2016';
          };break;
          case 17:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.industry._2017.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.industry._2017.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.industry._2017.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.industry._2017.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.industry._2017.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.industry._2017.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.industry._2017.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.industry._2017.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.industry._2017.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.industry._2017.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.industry._2017.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.industry._2017.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2017年度 预测值';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2017年度 预测值';
              $scope.SingleVocationChart.subtitle.text = '2017年度 预测值';
              $scope.temptable.selectedyear = '2017';
          };break;
          case 18:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.industry._2018.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.industry._2018.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.industry._2018.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.industry._2018.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.industry._2018.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.industry._2018.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.industry._2018.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.industry._2018.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.industry._2018.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.industry._2018.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.industry._2018.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.industry._2018.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2018年度 预测值';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2018年度 预测值';
              $scope.SingleVocationChart.subtitle.text = '2018年度 预测值';
              $scope.temptable.selectedyear = '2018';
          };break;
        }
      }break;
      case 2:{
        switch(param){
          case 6:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.construction._2006.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.construction._2006.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.construction._2006.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.construction._2006.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.construction._2006.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.construction._2006.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.construction._2006.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.construction._2006.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.construction._2006.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.construction._2006.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.construction._2006.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.construction._2006.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2006年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2006年度';
              $scope.SingleVocationChart.subtitle.text = '2006年度';
              $scope.temptable.selectedyear = '2006';
          };break;
          case 7:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.construction._2007.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.construction._2007.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.construction._2007.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.construction._2007.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.construction._2007.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.construction._2007.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.construction._2007.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.construction._2007.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.construction._2007.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.construction._2007.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.construction._2007.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.construction._2007.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2007年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2007年度';
              $scope.SingleVocationChart.subtitle.text = '2007年度';
              $scope.temptable.selectedyear = '2007';
          };break;
          case 8:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.construction._2008.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.construction._2008.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.construction._2008.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.construction._2008.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.construction._2008.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.construction._2008.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.construction._2008.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.construction._2008.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.construction._2008.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.construction._2008.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.construction._2008.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.construction._2008.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2008年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2008年度';
              $scope.SingleVocationChart.subtitle.text = '2008年度';
              $scope.temptable.selectedyear = '2008';
          };break;
          case 9:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.construction._2009.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.construction._2009.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.construction._2009.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.construction._2009.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.construction._2009.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.construction._2009.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.construction._2009.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.construction._2009.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.construction._2009.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.construction._2009.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.construction._2009.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.construction._2009.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2009年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2009年度';
              $scope.SingleVocationChart.subtitle.text = '2009年度';
              $scope.temptable.selectedyear = '2009';
            
          };break;
          case 10:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.construction._2010.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.construction._2010.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.construction._2010.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.construction._2010.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.construction._2010.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.construction._2010.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.construction._2010.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.construction._2010.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.construction._2010.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.construction._2010.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.construction._2010.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.construction._2010.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2010年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2010年度';
              $scope.SingleVocationChart.subtitle.text = '2010年度';
              $scope.temptable.selectedyear = '2010';
            
          };break;
          case 11:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.construction._2011.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.construction._2011.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.construction._2011.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.construction._2011.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.construction._2011.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.construction._2011.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.construction._2011.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.construction._2011.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.construction._2011.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.construction._2011.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.construction._2011.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.construction._2011.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2011年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2011年度';
              $scope.SingleVocationChart.subtitle.text = '2011年度';
              $scope.temptable.selectedyear = '2011';
          };break;
          case 12:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.construction._2012.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.construction._2012.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.construction._2012.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.construction._2012.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.construction._2012.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.construction._2012.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.construction._2012.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.construction._2012.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.construction._2012.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.construction._2012.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.construction._2012.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.construction._2012.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2012年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2012年度';
              $scope.SingleVocationChart.subtitle.text = '2012年度';
              $scope.temptable.selectedyear = '2012';
            
          };break;
          case 13:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.construction._2013.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.construction._2013.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.construction._2013.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.construction._2013.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.construction._2013.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.construction._2013.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.construction._2013.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.construction._2013.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.construction._2013.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.construction._2013.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.construction._2013.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.construction._2013.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2013年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2013年度';
              $scope.SingleVocationChart.subtitle.text = '2013年度';
              $scope.temptable.selectedyear = '2013';
            
          };break;
          case 14:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.construction._2014.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.construction._2014.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.construction._2014.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.construction._2014.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.construction._2014.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.construction._2014.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.construction._2014.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.construction._2014.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.construction._2014.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.construction._2014.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.construction._2014.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.construction._2014.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2014年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2014年度';
              $scope.SingleVocationChart.subtitle.text = '2014年度';
              $scope.temptable.selectedyear = '2014';
          };break;
          case 15:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.construction._2015.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.construction._2015.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.construction._2015.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.construction._2015.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.construction._2015.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.construction._2015.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.construction._2015.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.construction._2015.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.construction._2015.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.construction._2015.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.construction._2015.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.construction._2015.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2015年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2015年度';
              $scope.SingleVocationChart.subtitle.text = '2015年度';
              $scope.temptable.selectedyear = '2015';
          };break;
          case 16:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.construction._2016.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.construction._2016.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.construction._2016.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.construction._2016.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.construction._2016.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.construction._2016.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.construction._2016.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.construction._2016.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.construction._2016.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.construction._2016.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.construction._2016.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.construction._2016.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2016年度 预测值';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2016年度 预测值';
              $scope.SingleVocationChart.subtitle.text = '2016年度 预测值';
              $scope.temptable.selectedyear = '2016';
          };break;
          case 17:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.construction._2017.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.construction._2017.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.construction._2017.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.construction._2017.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.construction._2017.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.construction._2017.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.construction._2017.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.construction._2017.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.construction._2017.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.construction._2017.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.construction._2017.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.construction._2017.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2017年度 预测值';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2017年度 预测值';
              $scope.SingleVocationChart.subtitle.text = '2017年度 预测值';
              $scope.temptable.selectedyear = '2017';
          };break;
          case 18:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.construction._2018.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.construction._2018.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.construction._2018.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.construction._2018.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.construction._2018.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.construction._2018.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.construction._2018.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.construction._2018.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.construction._2018.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.construction._2018.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.construction._2018.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.construction._2018.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2018年度 预测值';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2018年度 预测值';
              $scope.SingleVocationChart.subtitle.text = '2018年度 预测值';
              $scope.temptable.selectedyear = '2018';
          };break;
        }
      }break;
      case 3:{
        switch(param){
          case 6:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.traffic._2006.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.traffic._2006.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.traffic._2006.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.traffic._2006.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.traffic._2006.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.traffic._2006.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.traffic._2006.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.traffic._2006.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.traffic._2006.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.traffic._2006.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.traffic._2006.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.traffic._2006.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2006年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2006年度';
              $scope.SingleVocationChart.subtitle.text = '2006年度';
              $scope.temptable.selectedyear = '2006';
          };break;
          case 7:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.traffic._2007.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.traffic._2007.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.traffic._2007.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.traffic._2007.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.traffic._2007.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.traffic._2007.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.traffic._2007.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.traffic._2007.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.traffic._2007.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.traffic._2007.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.traffic._2007.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.traffic._2007.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2007年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2007年度';
              $scope.SingleVocationChart.subtitle.text = '2007年度';
              $scope.temptable.selectedyear = '2007';
          };break;
          case 8:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.traffic._2008.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.traffic._2008.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.traffic._2008.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.traffic._2008.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.traffic._2008.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.traffic._2008.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.traffic._2008.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.traffic._2008.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.traffic._2008.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.traffic._2008.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.traffic._2008.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.traffic._2008.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2008年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2008年度';
              $scope.SingleVocationChart.subtitle.text = '2008年度';
              $scope.temptable.selectedyear = '2008';
          };break;
          case 9:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.traffic._2009.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.traffic._2009.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.traffic._2009.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.traffic._2009.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.traffic._2009.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.traffic._2009.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.traffic._2009.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.traffic._2009.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.traffic._2009.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.traffic._2009.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.traffic._2009.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.traffic._2009.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2009年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2009年度';
              $scope.SingleVocationChart.subtitle.text = '2009年度';
              $scope.temptable.selectedyear = '2009';
            
          };break;
          case 10:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.traffic._2010.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.traffic._2010.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.traffic._2010.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.traffic._2010.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.traffic._2010.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.traffic._2010.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.traffic._2010.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.traffic._2010.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.traffic._2010.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.traffic._2010.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.traffic._2010.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.traffic._2010.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2010年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2010年度';
              $scope.SingleVocationChart.subtitle.text = '2010年度';
              $scope.temptable.selectedyear = '2010';
            
          };break;
          case 11:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.traffic._2011.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.traffic._2011.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.traffic._2011.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.traffic._2011.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.traffic._2011.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.traffic._2011.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.traffic._2011.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.traffic._2011.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.traffic._2011.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.traffic._2011.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.traffic._2011.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.traffic._2011.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2011年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2011年度';
              $scope.SingleVocationChart.subtitle.text = '2011年度';
              $scope.temptable.selectedyear = '2011';
          };break;
          case 12:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.traffic._2012.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.traffic._2012.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.traffic._2012.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.traffic._2012.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.traffic._2012.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.traffic._2012.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.traffic._2012.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.traffic._2012.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.traffic._2012.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.traffic._2012.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.traffic._2012.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.traffic._2012.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2012年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2012年度';
              $scope.SingleVocationChart.subtitle.text = '2012年度';
              $scope.temptable.selectedyear = '2012';
            
          };break;
          case 13:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.traffic._2013.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.traffic._2013.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.traffic._2013.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.traffic._2013.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.traffic._2013.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.traffic._2013.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.traffic._2013.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.traffic._2013.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.traffic._2013.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.traffic._2013.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.traffic._2013.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.traffic._2013.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2013年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2013年度';
              $scope.SingleVocationChart.subtitle.text = '2013年度';
              $scope.temptable.selectedyear = '2013';
            
          };break;
          case 14:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.traffic._2014.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.traffic._2014.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.traffic._2014.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.traffic._2014.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.traffic._2014.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.traffic._2014.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.traffic._2014.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.traffic._2014.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.traffic._2014.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.traffic._2014.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.traffic._2014.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.traffic._2014.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2014年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2014年度';
              $scope.SingleVocationChart.subtitle.text = '2014年度';
              $scope.temptable.selectedyear = '2014';
          };break;
          case 15:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.traffic._2015.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.traffic._2015.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.traffic._2015.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.traffic._2015.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.traffic._2015.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.traffic._2015.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.traffic._2015.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.traffic._2015.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.traffic._2015.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.traffic._2015.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.traffic._2015.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.traffic._2015.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2015年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2015年度';
              $scope.SingleVocationChart.subtitle.text = '2015年度';
              $scope.temptable.selectedyear = '2015';
          };break;
          case 16:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.traffic._2016.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.traffic._2016.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.traffic._2016.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.traffic._2016.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.traffic._2016.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.traffic._2016.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.traffic._2016.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.traffic._2016.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.traffic._2016.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.traffic._2016.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.traffic._2016.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.traffic._2016.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2016年度 预测值';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2016年度 预测值';
              $scope.SingleVocationChart.subtitle.text = '2016年度 预测值';
              $scope.temptable.selectedyear = '2016';
          };break;
          case 17:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.traffic._2017.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.traffic._2017.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.traffic._2017.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.traffic._2017.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.traffic._2017.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.traffic._2017.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.traffic._2017.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.traffic._2017.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.traffic._2017.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.traffic._2017.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.traffic._2017.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.traffic._2017.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2017年度 预测值';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2017年度 预测值';
              $scope.SingleVocationChart.subtitle.text = '2017年度 预测值';
              $scope.temptable.selectedyear = '2017';
          };break;
          case 18:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.traffic._2018.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.traffic._2018.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.traffic._2018.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.traffic._2018.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.traffic._2018.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.traffic._2018.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.traffic._2018.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.traffic._2018.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.traffic._2018.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.traffic._2018.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.traffic._2018.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.traffic._2018.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2018年度 预测值';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2018年度 预测值';
              $scope.SingleVocationChart.subtitle.text = '2018年度 预测值';
              $scope.temptable.selectedyear = '2018';
          };break;
        }
      }break;
      case 4:{
        switch(param){
          case 6:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.computer._2006.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.computer._2006.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.computer._2006.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.computer._2006.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.computer._2006.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.computer._2006.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.computer._2006.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.computer._2006.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.computer._2006.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.computer._2006.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.computer._2006.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.computer._2006.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2006年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2006年度';
              $scope.SingleVocationChart.subtitle.text = '2006年度';
              $scope.temptable.selectedyear = '2006';
          };break;
          case 7:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.computer._2007.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.computer._2007.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.computer._2007.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.computer._2007.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.computer._2007.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.computer._2007.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.computer._2007.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.computer._2007.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.computer._2007.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.computer._2007.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.computer._2007.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.computer._2007.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2007年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2007年度';
              $scope.SingleVocationChart.subtitle.text = '2007年度';
              $scope.temptable.selectedyear = '2007';
          };break;
          case 8:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.computer._2008.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.computer._2008.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.computer._2008.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.computer._2008.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.computer._2008.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.computer._2008.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.computer._2008.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.computer._2008.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.computer._2008.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.computer._2008.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.computer._2008.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.computer._2008.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2008年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2008年度';
              $scope.SingleVocationChart.subtitle.text = '2008年度';
              $scope.temptable.selectedyear = '2008';
          };break;
          case 9:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.computer._2009.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.computer._2009.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.computer._2009.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.computer._2009.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.computer._2009.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.computer._2009.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.computer._2009.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.computer._2009.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.computer._2009.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.computer._2009.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.computer._2009.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.computer._2009.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2009年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2009年度';
              $scope.SingleVocationChart.subtitle.text = '2009年度';
              $scope.temptable.selectedyear = '2009';
            
          };break;
          case 10:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.computer._2010.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.computer._2010.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.computer._2010.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.computer._2010.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.computer._2010.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.computer._2010.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.computer._2010.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.computer._2010.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.computer._2010.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.computer._2010.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.computer._2010.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.computer._2010.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2010年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2010年度';
              $scope.SingleVocationChart.subtitle.text = '2010年度';
              $scope.temptable.selectedyear = '2010';
            
          };break;
          case 11:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.computer._2011.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.computer._2011.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.computer._2011.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.computer._2011.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.computer._2011.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.computer._2011.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.computer._2011.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.computer._2011.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.computer._2011.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.computer._2011.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.computer._2011.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.computer._2011.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2011年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2011年度';
              $scope.SingleVocationChart.subtitle.text = '2011年度';
              $scope.temptable.selectedyear = '2011';
          };break;
          case 12:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.computer._2012.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.computer._2012.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.computer._2012.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.computer._2012.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.computer._2012.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.computer._2012.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.computer._2012.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.computer._2012.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.computer._2012.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.computer._2012.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.computer._2012.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.computer._2012.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2012年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2012年度';
              $scope.SingleVocationChart.subtitle.text = '2012年度';
              $scope.temptable.selectedyear = '2012';
            
          };break;
          case 13:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.computer._2013.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.computer._2013.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.computer._2013.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.computer._2013.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.computer._2013.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.computer._2013.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.computer._2013.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.computer._2013.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.computer._2013.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.computer._2013.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.computer._2013.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.computer._2013.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2013年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2013年度';
              $scope.SingleVocationChart.subtitle.text = '2013年度';
              $scope.temptable.selectedyear = '2013';
            
          };break;
          case 14:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.computer._2014.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.computer._2014.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.computer._2014.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.computer._2014.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.computer._2014.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.computer._2014.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.computer._2014.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.computer._2014.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.computer._2014.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.computer._2014.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.computer._2014.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.computer._2014.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2014年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2014年度';
              $scope.SingleVocationChart.subtitle.text = '2014年度';
              $scope.temptable.selectedyear = '2014';
          };break;
          case 15:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.computer._2015.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.computer._2015.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.computer._2015.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.computer._2015.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.computer._2015.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.computer._2015.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.computer._2015.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.computer._2015.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.computer._2015.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.computer._2015.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.computer._2015.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.computer._2015.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2015年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2015年度';
              $scope.SingleVocationChart.subtitle.text = '2015年度';
              $scope.temptable.selectedyear = '2015';
          };break;
          case 16:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.computer._2016.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.computer._2016.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.computer._2016.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.computer._2016.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.computer._2016.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.computer._2016.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.computer._2016.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.computer._2016.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.computer._2016.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.computer._2016.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.computer._2016.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.computer._2016.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2016年度 预测值';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2016年度 预测值';
              $scope.SingleVocationChart.subtitle.text = '2016年度 预测值';
              $scope.temptable.selectedyear = '2016';
          };break;
          case 17:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.computer._2017.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.computer._2017.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.computer._2017.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.computer._2017.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.computer._2017.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.computer._2017.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.computer._2017.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.computer._2017.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.computer._2017.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.computer._2017.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.computer._2017.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.computer._2017.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2017年度 预测值';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2017年度 预测值';
              $scope.SingleVocationChart.subtitle.text = '2017年度 预测值';
              $scope.temptable.selectedyear = '2017';
          };break;
          case 18:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.computer._2018.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.computer._2018.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.computer._2018.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.computer._2018.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.computer._2018.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.computer._2018.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.computer._2018.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.computer._2018.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.computer._2018.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.computer._2018.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.computer._2018.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.computer._2018.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2018年度 预测值';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2018年度 预测值';
              $scope.SingleVocationChart.subtitle.text = '2018年度 预测值';
              $scope.temptable.selectedyear = '2018';
          };break;
        }
      }break;
      case 5:{
        switch(param){
          case 6:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.retail._2006.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.retail._2006.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.retail._2006.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.retail._2006.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.retail._2006.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.retail._2006.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.retail._2006.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.retail._2006.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.retail._2006.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.retail._2006.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.retail._2006.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.retail._2006.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2006年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2006年度';
              $scope.SingleVocationChart.subtitle.text = '2006年度';
              $scope.temptable.selectedyear = '2006';
          };break;
          case 7:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.retail._2007.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.retail._2007.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.retail._2007.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.retail._2007.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.retail._2007.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.retail._2007.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.retail._2007.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.retail._2007.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.retail._2007.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.retail._2007.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.retail._2007.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.retail._2007.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2007年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2007年度';
              $scope.SingleVocationChart.subtitle.text = '2007年度';
              $scope.temptable.selectedyear = '2007';
          };break;
          case 8:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.retail._2008.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.retail._2008.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.retail._2008.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.retail._2008.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.retail._2008.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.retail._2008.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.retail._2008.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.retail._2008.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.retail._2008.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.retail._2008.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.retail._2008.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.retail._2008.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2008年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2008年度';
              $scope.SingleVocationChart.subtitle.text = '2008年度';
              $scope.temptable.selectedyear = '2008';
          };break;
          case 9:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.retail._2009.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.retail._2009.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.retail._2009.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.retail._2009.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.retail._2009.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.retail._2009.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.retail._2009.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.retail._2009.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.retail._2009.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.retail._2009.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.retail._2009.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.retail._2009.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2009年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2009年度';
              $scope.SingleVocationChart.subtitle.text = '2009年度';
              $scope.temptable.selectedyear = '2009';
            
          };break;
          case 10:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.retail._2010.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.retail._2010.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.retail._2010.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.retail._2010.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.retail._2010.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.retail._2010.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.retail._2010.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.retail._2010.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.retail._2010.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.retail._2010.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.retail._2010.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.retail._2010.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2010年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2010年度';
              $scope.SingleVocationChart.subtitle.text = '2010年度';
              $scope.temptable.selectedyear = '2010';
            
          };break;
          case 11:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.retail._2011.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.retail._2011.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.retail._2011.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.retail._2011.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.retail._2011.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.retail._2011.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.retail._2011.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.retail._2011.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.retail._2011.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.retail._2011.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.retail._2011.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.retail._2011.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2011年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2011年度';
              $scope.SingleVocationChart.subtitle.text = '2011年度';
              $scope.temptable.selectedyear = '2011';
          };break;
          case 12:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.retail._2012.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.retail._2012.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.retail._2012.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.retail._2012.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.retail._2012.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.retail._2012.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.retail._2012.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.retail._2012.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.retail._2012.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.retail._2012.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.retail._2012.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.retail._2012.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2012年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2012年度';
              $scope.SingleVocationChart.subtitle.text = '2012年度';
              $scope.temptable.selectedyear = '2012';
            
          };break;
          case 13:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.retail._2013.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.retail._2013.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.retail._2013.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.retail._2013.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.retail._2013.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.retail._2013.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.retail._2013.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.retail._2013.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.retail._2013.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.retail._2013.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.retail._2013.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.retail._2013.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2013年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2013年度';
              $scope.SingleVocationChart.subtitle.text = '2013年度';
              $scope.temptable.selectedyear = '2013';
            
          };break;
          case 14:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.retail._2014.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.retail._2014.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.retail._2014.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.retail._2014.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.retail._2014.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.retail._2014.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.retail._2014.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.retail._2014.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.retail._2014.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.retail._2014.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.retail._2014.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.retail._2014.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2014年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2014年度';
              $scope.SingleVocationChart.subtitle.text = '2014年度';
              $scope.temptable.selectedyear = '2014';
          };break;
          case 15:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.retail._2015.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.retail._2015.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.retail._2015.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.retail._2015.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.retail._2015.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.retail._2015.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.retail._2015.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.retail._2015.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.retail._2015.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.retail._2015.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.retail._2015.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.retail._2015.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2015年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2015年度';
              $scope.SingleVocationChart.subtitle.text = '2015年度';
              $scope.temptable.selectedyear = '2015';
          };break;
          case 16:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.retail._2016.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.retail._2016.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.retail._2016.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.retail._2016.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.retail._2016.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.retail._2016.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.retail._2016.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.retail._2016.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.retail._2016.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.retail._2016.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.retail._2016.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.retail._2016.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2016年度 预测值';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2016年度 预测值';
              $scope.SingleVocationChart.subtitle.text = '2016年度 预测值';
              $scope.temptable.selectedyear = '2016';
          };break;
          case 17:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.retail._2017.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.retail._2017.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.retail._2017.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.retail._2017.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.retail._2017.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.retail._2017.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.retail._2017.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.retail._2017.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.retail._2017.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.retail._2017.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.retail._2017.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.retail._2017.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2017年度 预测值';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2017年度 预测值';
              $scope.SingleVocationChart.subtitle.text = '2017年度 预测值';
              $scope.temptable.selectedyear = '2017';
          };break;
          case 18:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.retail._2018.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.retail._2018.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.retail._2018.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.retail._2018.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.retail._2018.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.retail._2018.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.retail._2018.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.retail._2018.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.retail._2018.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.retail._2018.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.retail._2018.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.retail._2018.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2018年度 预测值';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2018年度 预测值';
              $scope.SingleVocationChart.subtitle.text = '2018年度 预测值';
              $scope.temptable.selectedyear = '2018';
          };break;
        }
      }break;
      case 6:{
        switch(param){
          case 6:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.finance._2006.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.finance._2006.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.finance._2006.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.finance._2006.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.finance._2006.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.finance._2006.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.finance._2006.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.finance._2006.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.finance._2006.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.finance._2006.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.finance._2006.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.finance._2006.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2006年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2006年度';
              $scope.SingleVocationChart.subtitle.text = '2006年度';
              $scope.temptable.selectedyear = '2006';
          };break;
          case 7:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.finance._2007.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.finance._2007.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.finance._2007.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.finance._2007.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.finance._2007.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.finance._2007.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.finance._2007.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.finance._2007.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.finance._2007.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.finance._2007.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.finance._2007.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.finance._2007.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2007年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2007年度';
              $scope.SingleVocationChart.subtitle.text = '2007年度';
              $scope.temptable.selectedyear = '2007';
          };break;
          case 8:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.finance._2008.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.finance._2008.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.finance._2008.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.finance._2008.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.finance._2008.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.finance._2008.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.finance._2008.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.finance._2008.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.finance._2008.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.finance._2008.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.finance._2008.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.finance._2008.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2008年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2008年度';
              $scope.SingleVocationChart.subtitle.text = '2008年度';
              $scope.temptable.selectedyear = '2008';
          };break;
          case 9:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.finance._2009.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.finance._2009.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.finance._2009.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.finance._2009.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.finance._2009.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.finance._2009.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.finance._2009.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.finance._2009.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.finance._2009.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.finance._2009.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.finance._2009.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.finance._2009.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2009年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2009年度';
              $scope.SingleVocationChart.subtitle.text = '2009年度';
              $scope.temptable.selectedyear = '2009';
            
          };break;
          case 10:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.finance._2010.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.finance._2010.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.finance._2010.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.finance._2010.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.finance._2010.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.finance._2010.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.finance._2010.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.finance._2010.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.finance._2010.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.finance._2010.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.finance._2010.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.finance._2010.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2010年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2010年度';
              $scope.SingleVocationChart.subtitle.text = '2010年度';
              $scope.temptable.selectedyear = '2010';
            
          };break;
          case 11:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.finance._2011.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.finance._2011.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.finance._2011.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.finance._2011.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.finance._2011.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.finance._2011.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.finance._2011.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.finance._2011.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.finance._2011.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.finance._2011.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.finance._2011.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.finance._2011.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2011年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2011年度';
              $scope.SingleVocationChart.subtitle.text = '2011年度';
              $scope.temptable.selectedyear = '2011';
          };break;
          case 12:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.finance._2012.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.finance._2012.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.finance._2012.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.finance._2012.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.finance._2012.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.finance._2012.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.finance._2012.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.finance._2012.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.finance._2012.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.finance._2012.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.finance._2012.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.finance._2012.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2012年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2012年度';
              $scope.SingleVocationChart.subtitle.text = '2012年度';
              $scope.temptable.selectedyear = '2012';
            
          };break;
          case 13:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.finance._2013.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.finance._2013.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.finance._2013.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.finance._2013.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.finance._2013.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.finance._2013.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.finance._2013.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.finance._2013.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.finance._2013.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.finance._2013.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.finance._2013.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.finance._2013.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2013年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2013年度';
              $scope.SingleVocationChart.subtitle.text = '2013年度';
              $scope.temptable.selectedyear = '2013';
            
          };break;
          case 14:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.finance._2014.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.finance._2014.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.finance._2014.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.finance._2014.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.finance._2014.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.finance._2014.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.finance._2014.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.finance._2014.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.finance._2014.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.finance._2014.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.finance._2014.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.finance._2014.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2014年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2014年度';
              $scope.SingleVocationChart.subtitle.text = '2014年度';
              $scope.temptable.selectedyear = '2014';
          };break;
          case 15:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.finance._2015.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.finance._2015.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.finance._2015.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.finance._2015.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.finance._2015.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.finance._2015.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.finance._2015.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.finance._2015.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.finance._2015.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.finance._2015.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.finance._2015.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.finance._2015.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2015年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2015年度';
              $scope.SingleVocationChart.subtitle.text = '2015年度';
              $scope.temptable.selectedyear = '2015';
          };break;
          case 16:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.finance._2016.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.finance._2016.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.finance._2016.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.finance._2016.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.finance._2016.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.finance._2016.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.finance._2016.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.finance._2016.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.finance._2016.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.finance._2016.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.finance._2016.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.finance._2016.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2016年度 预测值';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2016年度 预测值';
              $scope.SingleVocationChart.subtitle.text = '2016年度 预测值';
              $scope.temptable.selectedyear = '2016';
          };break;
          case 17:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.finance._2017.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.finance._2017.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.finance._2017.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.finance._2017.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.finance._2017.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.finance._2017.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.finance._2017.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.finance._2017.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.finance._2017.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.finance._2017.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.finance._2017.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.finance._2017.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2017年度 预测值';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2017年度 预测值';
              $scope.SingleVocationChart.subtitle.text = '2017年度 预测值';
              $scope.temptable.selectedyear = '2017';
          };break;
          case 18:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.finance._2018.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.finance._2018.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.finance._2018.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.finance._2018.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.finance._2018.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.finance._2018.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.finance._2018.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.finance._2018.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.finance._2018.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.finance._2018.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.finance._2018.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.finance._2018.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2018年度 预测值';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2018年度 预测值';
              $scope.SingleVocationChart.subtitle.text = '2018年度 预测值';
              $scope.temptable.selectedyear = '2018';
          };break;
        }
      }break;
      case 7:{
        switch(param){
          case 6:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.service._2006.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.service._2006.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.service._2006.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.service._2006.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.service._2006.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.service._2006.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.service._2006.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.service._2006.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.service._2006.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.service._2006.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.service._2006.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.service._2006.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2006年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2006年度';
              $scope.SingleVocationChart.subtitle.text = '2006年度';
              $scope.temptable.selectedyear = '2006';
          };break;
          case 7:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.service._2007.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.service._2007.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.service._2007.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.service._2007.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.service._2007.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.service._2007.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.service._2007.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.service._2007.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.service._2007.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.service._2007.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.service._2007.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.service._2007.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2007年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2007年度';
              $scope.SingleVocationChart.subtitle.text = '2007年度';
              $scope.temptable.selectedyear = '2007';
          };break;
          case 8:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.service._2008.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.service._2008.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.service._2008.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.service._2008.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.service._2008.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.service._2008.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.service._2008.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.service._2008.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.service._2008.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.service._2008.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.service._2008.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.service._2008.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2008年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2008年度';
              $scope.SingleVocationChart.subtitle.text = '2008年度';
              $scope.temptable.selectedyear = '2008';
          };break;
          case 9:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.service._2009.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.service._2009.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.service._2009.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.service._2009.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.service._2009.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.service._2009.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.service._2009.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.service._2009.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.service._2009.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.service._2009.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.service._2009.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.service._2009.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2009年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2009年度';
              $scope.SingleVocationChart.subtitle.text = '2009年度';
              $scope.temptable.selectedyear = '2009';
            
          };break;
          case 10:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.service._2010.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.service._2010.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.service._2010.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.service._2010.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.service._2010.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.service._2010.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.service._2010.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.service._2010.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.service._2010.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.service._2010.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.service._2010.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.service._2010.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2010年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2010年度';
              $scope.SingleVocationChart.subtitle.text = '2010年度';
              $scope.temptable.selectedyear = '2010';
            
          };break;
          case 11:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.service._2011.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.service._2011.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.service._2011.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.service._2011.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.service._2011.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.service._2011.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.service._2011.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.service._2011.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.service._2011.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.service._2011.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.service._2011.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.service._2011.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2011年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2011年度';
              $scope.SingleVocationChart.subtitle.text = '2011年度';
              $scope.temptable.selectedyear = '2011';
          };break;
          case 12:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.service._2012.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.service._2012.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.service._2012.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.service._2012.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.service._2012.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.service._2012.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.service._2012.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.service._2012.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.service._2012.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.service._2012.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.service._2012.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.service._2012.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2012年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2012年度';
              $scope.SingleVocationChart.subtitle.text = '2012年度';
              $scope.temptable.selectedyear = '2012';
            
          };break;
          case 13:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.service._2013.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.service._2013.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.service._2013.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.service._2013.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.service._2013.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.service._2013.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.service._2013.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.service._2013.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.service._2013.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.service._2013.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.service._2013.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.service._2013.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2013年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2013年度';
              $scope.SingleVocationChart.subtitle.text = '2013年度';
              $scope.temptable.selectedyear = '2013';
            
          };break;
          case 14:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.service._2014.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.service._2014.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.service._2014.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.service._2014.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.service._2014.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.service._2014.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.service._2014.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.service._2014.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.service._2014.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.service._2014.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.service._2014.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.service._2014.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2014年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2014年度';
              $scope.SingleVocationChart.subtitle.text = '2014年度';
              $scope.temptable.selectedyear = '2014';
          };break;
          case 15:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.service._2015.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.service._2015.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.service._2015.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.service._2015.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.service._2015.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.service._2015.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.service._2015.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.service._2015.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.service._2015.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.service._2015.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.service._2015.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.service._2015.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2015年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2015年度';
              $scope.SingleVocationChart.subtitle.text = '2015年度';
              $scope.temptable.selectedyear = '2015';
          };break;
          case 16:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.service._2016.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.service._2016.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.service._2016.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.service._2016.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.service._2016.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.service._2016.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.service._2016.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.service._2016.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.service._2016.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.service._2016.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.service._2016.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.service._2016.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2016年度 预测值';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2016年度 预测值';
              $scope.SingleVocationChart.subtitle.text = '2016年度 预测值';
              $scope.temptable.selectedyear = '2016';
          };break;
          case 17:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.service._2017.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.service._2017.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.service._2017.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.service._2017.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.service._2017.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.service._2017.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.service._2017.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.service._2017.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.service._2017.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.service._2017.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.service._2017.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.service._2017.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2017年度 预测值';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2017年度 预测值';
              $scope.SingleVocationChart.subtitle.text = '2017年度 预测值';
              $scope.temptable.selectedyear = '2017';
          };break;
          case 18:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata.service._2018.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata.service._2018.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.service._2018.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.service._2018.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.service._2018.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.service._2018.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.service._2018.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.service._2018.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.service._2018.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.service._2018.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata.service._2018.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata.service._2018.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2018年度 预测值';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2018年度 预测值';
              $scope.SingleVocationChart.subtitle.text = '2018年度 预测值';
              $scope.temptable.selectedyear = '2018';
          };break;
        }
      }break;
    }   
  }
  $scope.changeIndustry = function(param){
    switch(param){
      case 0:{
        $scope.SingleVocationChartByYear.title.text = $scope.industriesdata.agriculture.title;
        $scope.SingleVocationChartByYear.series[0].data = $scope.industriesdata.agriculture.yeardata.powerdata;
        $scope.SingleVocationChartByYear.series[1].data = $scope.industriesdata.agriculture.yeardata.gdpdata;
        $scope.SingleVocationChart.title.text = $scope.industriesdata.agriculture.title;
        $scope.SingleVocationChart.series[0].data = $scope.industriesdata.agriculture._2015.season.powerdata;
        $scope.SingleVocationChart.series[1].data = $scope.industriesdata.agriculture._2015.season.gdpdata;
        $scope.IndustryGdpChartBySeasonPie.title.text = $scope.industriesdata.agriculture.title+'产值同比增速对比';
        $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.agriculture._2015.season.gdpdata[0];
        $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.agriculture._2015.season.gdpdata[1];
        $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.agriculture._2015.season.gdpdata[2];
        $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.agriculture._2015.season.gdpdata[3];
        $scope.IndustryPowerChartBySeasonPie.title.text = $scope.industriesdata.agriculture.title+'用电量同比增速对比';
        $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.agriculture._2015.season.powerdata[0];
        $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.agriculture._2015.season.powerdata[1];
        $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.agriculture._2015.season.powerdata[2];
        $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.agriculture._2015.season.powerdata[3];
        $scope.temptable.year.gdp = $scope.industriesdata.agriculture.yeardata.gdpdata;
        $scope.temptable.year.power = $scope.industriesdata.agriculture.yeardata.powerdata;
        $scope.temptable.season.gdp = $scope.industriesdata.agriculture._2015.season.gdpdata;
        $scope.temptable.season.power = $scope.industriesdata.agriculture._2015.season.powerdata;
        $scope.temptable.selectedindustry = $scope.industriesdata.agriculture.title;
        $scope.industrymark = param;
      };break;
      case 1:{
        $scope.SingleVocationChartByYear.title.text = $scope.industriesdata.industry.title;
        $scope.SingleVocationChartByYear.series[0].data = $scope.industriesdata.industry.yeardata.powerdata;
        $scope.SingleVocationChartByYear.series[1].data = $scope.industriesdata.industry.yeardata.gdpdata;
        $scope.SingleVocationChart.title.text = $scope.industriesdata.industry.title;
        $scope.SingleVocationChart.series[0].data = $scope.industriesdata.industry._2015.season.powerdata;
        $scope.SingleVocationChart.series[1].data = $scope.industriesdata.industry._2015.season.gdpdata;
        $scope.IndustryGdpChartBySeasonPie.title.text = $scope.industriesdata.industry.title+'产值同比增速对比';
        $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.industry._2015.season.gdpdata[0];
        $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.industry._2015.season.gdpdata[1];
        $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.industry._2015.season.gdpdata[2];
        $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.industry._2015.season.gdpdata[3];
        $scope.IndustryPowerChartBySeasonPie.title.text = $scope.industriesdata.industry.title+'用电量同比增速对比';
        $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.industry._2015.season.powerdata[0];
        $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.industry._2015.season.powerdata[1];
        $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.industry._2015.season.powerdata[2];
        $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.industry._2015.season.powerdata[3];
        $scope.temptable.year.gdp = $scope.industriesdata.industry.yeardata.gdpdata;
        $scope.temptable.year.power = $scope.industriesdata.industry.yeardata.powerdata;
        $scope.temptable.season.gdp = $scope.industriesdata.industry._2015.season.gdpdata;
        $scope.temptable.season.power = $scope.industriesdata.industry._2015.season.powerdata;
        $scope.temptable.selectedindustry = $scope.industriesdata.industry.title;
        $scope.industrymark = param;
      };break;
      case 2:{
        $scope.SingleVocationChartByYear.title.text = $scope.industriesdata.construction.title;
        $scope.SingleVocationChartByYear.series[0].data = $scope.industriesdata.construction.yeardata.powerdata;
        $scope.SingleVocationChartByYear.series[1].data = $scope.industriesdata.construction.yeardata.gdpdata;
        $scope.SingleVocationChart.title.text = $scope.industriesdata.construction.title;
        $scope.SingleVocationChart.series[0].data = $scope.industriesdata.construction._2015.season.powerdata;
        $scope.SingleVocationChart.series[1].data = $scope.industriesdata.construction._2015.season.gdpdata;
        $scope.IndustryGdpChartBySeasonPie.title.text = $scope.industriesdata.construction.title+'产值同比增速对比';
        $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.construction._2015.season.gdpdata[0];
        $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.construction._2015.season.gdpdata[1];
        $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.construction._2015.season.gdpdata[2];
        $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.construction._2015.season.gdpdata[3];
        $scope.IndustryPowerChartBySeasonPie.title.text = $scope.industriesdata.construction.title+'用电量同比增速对比';
        $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.construction._2015.season.powerdata[0];
        $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.construction._2015.season.powerdata[1];
        $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.construction._2015.season.powerdata[2];
        $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.construction._2015.season.powerdata[3];
        $scope.temptable.year.gdp = $scope.industriesdata.construction.yeardata.gdpdata;
        $scope.temptable.year.power = $scope.industriesdata.construction.yeardata.powerdata;
        $scope.temptable.season.gdp = $scope.industriesdata.construction._2015.season.gdpdata;
        $scope.temptable.season.power = $scope.industriesdata.construction._2015.season.powerdata;
        $scope.temptable.selectedindustry = $scope.industriesdata.construction.title;
        $scope.industrymark = param;
      };break;
      case 3:{
        $scope.SingleVocationChartByYear.title.text = $scope.industriesdata.traffic.title;
        $scope.SingleVocationChartByYear.series[0].data = $scope.industriesdata.traffic.yeardata.powerdata;
        $scope.SingleVocationChartByYear.series[1].data = $scope.industriesdata.traffic.yeardata.gdpdata;
        $scope.SingleVocationChart.title.text = $scope.industriesdata.traffic.title;
        $scope.SingleVocationChart.series[0].data = $scope.industriesdata.traffic._2015.season.powerdata;
        $scope.SingleVocationChart.series[1].data = $scope.industriesdata.traffic._2015.season.gdpdata;
        $scope.IndustryGdpChartBySeasonPie.title.text = $scope.industriesdata.traffic.title+'产值同比增速对比';
        $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.traffic._2015.season.gdpdata[0];
        $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.traffic._2015.season.gdpdata[1];
        $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.traffic._2015.season.gdpdata[2];
        $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.traffic._2015.season.gdpdata[3];
        $scope.IndustryPowerChartBySeasonPie.title.text = $scope.industriesdata.traffic.title+'用电量同比增速对比';
        $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.traffic._2015.season.powerdata[0];
        $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.traffic._2015.season.powerdata[1];
        $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.traffic._2015.season.powerdata[2];
        $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.traffic._2015.season.powerdata[3];
        $scope.temptable.year.gdp = $scope.industriesdata.traffic.yeardata.gdpdata;
        $scope.temptable.year.power = $scope.industriesdata.traffic.yeardata.powerdata;
        $scope.temptable.season.gdp = $scope.industriesdata.traffic._2015.season.gdpdata;
        $scope.temptable.season.power = $scope.industriesdata.traffic._2015.season.powerdata;
        $scope.temptable.selectedindustry = $scope.industriesdata.traffic.title;
        $scope.industrymark = param;
      };break;
      case 4:{
        $scope.SingleVocationChartByYear.title.text = $scope.industriesdata.computer.title;
        $scope.SingleVocationChartByYear.series[0].data = $scope.industriesdata.computer.yeardata.powerdata;
        $scope.SingleVocationChartByYear.series[1].data = $scope.industriesdata.computer.yeardata.gdpdata;
        $scope.SingleVocationChart.title.text = $scope.industriesdata.computer.title;
        $scope.SingleVocationChart.series[0].data = $scope.industriesdata.computer._2015.season.powerdata;
        $scope.SingleVocationChart.series[1].data = $scope.industriesdata.computer._2015.season.gdpdata;
        $scope.IndustryGdpChartBySeasonPie.title.text = $scope.industriesdata.computer.title+'产值同比增速对比';
        $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.computer._2015.season.gdpdata[0];
        $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.computer._2015.season.gdpdata[1];
        $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.computer._2015.season.gdpdata[2];
        $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.computer._2015.season.gdpdata[3];
        $scope.IndustryPowerChartBySeasonPie.title.text = $scope.industriesdata.computer.title+'用电量同比增速对比';
        $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.computer._2015.season.powerdata[0];
        $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.computer._2015.season.powerdata[1];
        $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.computer._2015.season.powerdata[2];
        $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.computer._2015.season.powerdata[3];
        $scope.temptable.year.gdp = $scope.industriesdata.computer.yeardata.gdpdata;
        $scope.temptable.year.power = $scope.industriesdata.computer.yeardata.powerdata;
        $scope.temptable.season.gdp = $scope.industriesdata.computer._2015.season.gdpdata;
        $scope.temptable.season.power = $scope.industriesdata.computer._2015.season.powerdata;
        $scope.temptable.selectedindustry = $scope.industriesdata.computer.title;
        $scope.industrymark = param;
      };break;
      case 5:{
        $scope.SingleVocationChartByYear.title.text = $scope.industriesdata.retail.title;
        $scope.SingleVocationChartByYear.series[0].data = $scope.industriesdata.retail.yeardata.powerdata;
        $scope.SingleVocationChartByYear.series[1].data = $scope.industriesdata.retail.yeardata.gdpdata;
        $scope.SingleVocationChart.title.text = $scope.industriesdata.retail.title;
        $scope.SingleVocationChart.series[0].data = $scope.industriesdata.retail._2015.season.powerdata;
        $scope.SingleVocationChart.series[1].data = $scope.industriesdata.retail._2015.season.gdpdata;
        $scope.IndustryGdpChartBySeasonPie.title.text = $scope.industriesdata.retail.title+'产值同比增速对比';
        $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.retail._2015.season.gdpdata[0];
        $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.retail._2015.season.gdpdata[1];
        $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.retail._2015.season.gdpdata[2];
        $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.retail._2015.season.gdpdata[3];
        $scope.IndustryPowerChartBySeasonPie.title.text = $scope.industriesdata.retail.title+'用电量同比增速对比';
        $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.retail._2015.season.powerdata[0];
        $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.retail._2015.season.powerdata[1];
        $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.retail._2015.season.powerdata[2];
        $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.retail._2015.season.powerdata[3];
        $scope.temptable.year.gdp = $scope.industriesdata.retail.yeardata.gdpdata;
        $scope.temptable.year.power = $scope.industriesdata.retail.yeardata.powerdata;
        $scope.temptable.season.gdp = $scope.industriesdata.retail._2015.season.gdpdata;
        $scope.temptable.season.power = $scope.industriesdata.retail._2015.season.powerdata;
        $scope.temptable.selectedindustry = $scope.industriesdata.retail.title;
        $scope.industrymark = param;
      };break;
      case 6:{
        $scope.SingleVocationChartByYear.title.text = $scope.industriesdata.finance.title;
        $scope.SingleVocationChartByYear.series[0].data = $scope.industriesdata.finance.yeardata.powerdata;
        $scope.SingleVocationChartByYear.series[1].data = $scope.industriesdata.finance.yeardata.gdpdata;
        $scope.SingleVocationChart.title.text = $scope.industriesdata.finance.title;
        $scope.SingleVocationChart.series[0].data = $scope.industriesdata.finance._2015.season.powerdata;
        $scope.SingleVocationChart.series[1].data = $scope.industriesdata.finance._2015.season.gdpdata;
        $scope.IndustryGdpChartBySeasonPie.title.text = $scope.industriesdata.finance.title+'产值同比增速对比';
        $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.finance._2015.season.gdpdata[0];
        $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.finance._2015.season.gdpdata[1];
        $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.finance._2015.season.gdpdata[2];
        $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.finance._2015.season.gdpdata[3];
        $scope.IndustryPowerChartBySeasonPie.title.text = $scope.industriesdata.finance.title+'用电量同比增速对比';
        $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.finance._2015.season.powerdata[0];
        $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.finance._2015.season.powerdata[1];
        $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.finance._2015.season.powerdata[2];
        $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.finance._2015.season.powerdata[3];
        $scope.temptable.year.gdp = $scope.industriesdata.finance.yeardata.gdpdata;
        $scope.temptable.year.power = $scope.industriesdata.finance.yeardata.powerdata;
        $scope.temptable.season.gdp = $scope.industriesdata.finance._2015.season.gdpdata;
        $scope.temptable.season.power = $scope.industriesdata.finance._2015.season.powerdata;
        $scope.temptable.selectedindustry = $scope.industriesdata.finance.title;
        $scope.industrymark = param;
      };break;
      case 7:{
        $scope.SingleVocationChartByYear.title.text = $scope.industriesdata.service.title;
        $scope.SingleVocationChartByYear.series[0].data = $scope.industriesdata.service.yeardata.powerdata;
        $scope.SingleVocationChartByYear.series[1].data = $scope.industriesdata.service.yeardata.gdpdata;
        $scope.SingleVocationChart.title.text = $scope.industriesdata.service.title;
        $scope.SingleVocationChart.series[0].data = $scope.industriesdata.service._2015.season.powerdata;
        $scope.SingleVocationChart.series[1].data = $scope.industriesdata.service._2015.season.gdpdata;
        $scope.IndustryGdpChartBySeasonPie.title.text = $scope.industriesdata.service.title+'产值同比增速对比';
        $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.service._2015.season.gdpdata[0];
        $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.service._2015.season.gdpdata[1];
        $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.service._2015.season.gdpdata[2];
        $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.service._2015.season.gdpdata[3];
        $scope.IndustryPowerChartBySeasonPie.title.text = $scope.industriesdata.service.title+'用电量同比增速对比';
        $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata.service._2015.season.powerdata[0];
        $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata.service._2015.season.powerdata[1];
        $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata.service._2015.season.powerdata[2];
        $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata.service._2015.season.powerdata[3];
        $scope.temptable.year.gdp = $scope.industriesdata.service.yeardata.gdpdata;
        $scope.temptable.year.power = $scope.industriesdata.service.yeardata.powerdata;
        $scope.temptable.season.gdp = $scope.industriesdata.service._2015.season.gdpdata;
        $scope.temptable.season.power = $scope.industriesdata.service._2015.season.powerdata;
        $scope.temptable.selectedindustry = $scope.industriesdata.service.title;
        $scope.industrymark = param;
      };break;
    }
  }
  /*上———第一图*/
  $scope.SingleVocationChartByYear={
         options:{
            chart: {
                type: 'spline',
                height: 400
            },
         },
         title: {
            text: $scope.industriesdata.agriculture.title,
            x: -20 //center
        },
        subtitle: {
            text: '',
            x: -20
        },
        xAxis: {
            categories: ['2006', '2007', '2008', '2009', '2010', '2011','2012', '2013', '2014', '2015', '2016', '2017', '2018'],
            plotBands: [{
                from: 9.5,
                to: 12.5,
                label: { 
                    text:"预测区",
                    style: {
                        color: 'grey',
                    },
                },
                color: 'rgba(68, 170, 213, .2)'
            }],
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
            name: '行业用电量同比增长率',
            data: $scope.industriesdata.agriculture.yeardata.powerdata,
        }, {
            name: '行业产值同比增长率',
            data: $scope.industriesdata.agriculture.yeardata.gdpdata,
        }]
  };

  /*下——第一图*/
  $scope.SingleVocationChart={  
       options:{
          chart: {
              type: 'spline',
              height:400,
          },
       },
       title: {
          text: $scope.industriesdata.agriculture.title,
          x: -20, //center
          style: {
                fontSize: '14px'
            }
      },
      subtitle: {
          text: '2015年度',
          x: -20
      },
      xAxis: {
          categories: ['第一季度', '第二季度', '第三季度', '第四季度'],
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
          name: '行业用电量同比增长率',
          data: $scope.industriesdata.agriculture._2015.season.powerdata,
      }, {
          name: '行业产值增长率',
          data: $scope.industriesdata.agriculture._2015.season.gdpdata,
      }]
  };
  /*下——第二图*/
  $scope.IndustryGdpChartBySeasonPie={
    chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            height:400,
        },
        title: {
            text: $scope.industriesdata.agriculture.title+'产值同比增速对比',
            style: {
                fontSize: '14px'
            }
        },
        subtitle: {
          text: '2015年度',
          x: -20
      },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                startAngle: -90,
                endAngle:90,  
                center: ['50%', '70%']
            }
        },
        series: [{
            type: 'pie',
            name: '增长率',
            data: [
                ['第一季度',   $scope.industriesdata.agriculture._2015.season.gdpdata[0]],
                ['第二季度',   $scope.industriesdata.agriculture._2015.season.gdpdata[1]],
                ['第三季度',   $scope.industriesdata.agriculture._2015.season.gdpdata[2]],
                ['第四季度',   $scope.industriesdata.agriculture._2015.season.gdpdata[3]],
                
            ]
        }]
  };
  /*下——第三图*/
  $scope.IndustryPowerChartBySeasonPie={
    chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            height:400,
        },
        title: {
            text: $scope.industriesdata.agriculture.title+'用电量同比增速对比',
            style: {
                fontSize: '14px'
            }
        },
        subtitle: {
          text: '2015年度',
          x: -20
      },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
          
        },
        series: [{
            type: 'pie',
            name: '增长率',
            data: [
                ['第一季度',   $scope.industriesdata.agriculture._2015.season.powerdata[0]],
                ['第二季度',   $scope.industriesdata.agriculture._2015.season.powerdata[1]],
                ['第三季度',   $scope.industriesdata.agriculture._2015.season.powerdata[2]],
                ['第四季度',   $scope.industriesdata.agriculture._2015.season.powerdata[3]],
            ]
        }]
  };
  //各行业数据
  });

}]);





