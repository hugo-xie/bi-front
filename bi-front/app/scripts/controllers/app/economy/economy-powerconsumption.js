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
            name: '工业用电量同比增长率',
            data: [7.0, 6.9, 6.5, 5.5, 6.2, 7.5, 6.2, 7.5, 6.3, 5.3, 3.9]
        }, {
            name: 'GDP同比增长率',
            data: [4.2, 3.8, 3.7, 3.3, 4.0, 5.0, 4.8, 5.1, 4.1, 3.1, 2.6]
        }]
  };

  /*——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————*/
  //第二图数据
  $scope.vocationdata = {
    isshowchartvocation:true,
    isshowsinglechartvocation:false,
    isshowsinglechartvocationbyyear:false,
    total:{
        years:[
            {
                year:2014,

            },
            {
                year:2015,
                
            },
        ],
    },
    yearrange:[{year:'2015'},{year:'2014'}],
    totalshow:{
        title:'各行业用电量增长率与产值增长率关联总图',
        _2015:{
            year:'2015年度',
            data:{
                gdpdata: [0.76, 0.31, 0.65, 0.23, 0.2,0.34,0.32,0.65],                                                                             
                powerdata: [0.63, 0.41, 0.70, 0.34, 0.32,0.23,0.65,0.87],   
            },
        },
        _2014:{
            year:'2014年度',
            data:{
                gdpdata: [0.66, 0.41, 0.55, 0.33, 0.17,0.37,0.35,0.45],                                                                             
                powerdata: [0.53, 0.47, 0.50, 0.34, 0.22,0.43,0.45,0.57],   
            },
        },
    },
    agriculture:{
        title:'农、林、牧、渔业',
        _2015:{
            season:
                {
                    powerdata:[5.4, 6.9, 3.5, 5.5],
                    gdpdata:[4.3, 6.3, 3.2, 4.7],
                },
        },
        _2014:{
            season:
                {
                    powerdata:[6.4, 7.9, 3.5, 5.5],
                    gdpdata:[3.3, 5.3, 3.2, 1.7],
                },
        },
    },
    industry:{
        title:'工业',
        _2015:{
            season:
                {
                    powerdata:[3.4, 3.9, 1.5, 2.5],
                    gdpdata:[6.3, 7.3, 3.2, 2.7],
                },
        },
        _2014:{
            season:
                {
                    powerdata:[6.4, 7.9, 3.5, 5.5],
                    gdpdata:[4.3, 6.3, 4.2, 2.7],
                },
        },
    },
    construction:{
        title:'建筑业',
        _2015:{
            season:
                {
                    powerdata:[1.4, 4.29, 6.5, 5.5],
                    gdpdata:[4.3, 6.3, 3.2, 4.7],
                },
        },
        _2014:{
            season:
                {
                    powerdata:[6.4, 7.9, 3.5, 5.5],
                    gdpdata:[4.3, 6.3, 4.2, 2.7],
                },
        },
    },
    traffic:{
        title:'交通运输、仓储和邮政业',
        _2015:{
            season:
                {
                    powerdata:[1.4, 6.9, 3.5, 5.5],
                    gdpdata:[4.3, 6.3, 3.2, 4.7],
                },
        },
        _2014:{
            season:
                {
                    powerdata:[6.4, 5.9, 3.5, 5.5],
                    gdpdata:[4.3, 6.3, 4.2, 2.7],
                },
        },
    },
    computer:{
        title:'信息传输、计算机服务和软件业',
        _2015:{
            season:
                {
                    powerdata:[5.4, 4.9, 3.5, 5.5],
                    gdpdata:[4.3, 6.3, 3.2, 4.7],
                },
        },
        _2014:{
            season:
                {
                    powerdata:[6.4, 7.9, 6.5, 5.5],
                    gdpdata:[4.3, 6.3, 4.2, 2.7],
                },
        },
    },
    retail:{
        title:'批发和零售、住宿和餐饮业',
        _2015:{
            season:
                {
                    powerdata:[5.4, 6.9, 3.5, 3.5],
                    gdpdata:[4.3, 6.3, 3.2, 4.7],
                },
        },
        _2014:{
            season:
                {
                    powerdata:[2.4, 7.9, 3.5, 5.5],
                    gdpdata:[4.3, 6.3, 4.2, 2.7],
                },
        },
    },
    finance:{
        title:'金融、房地产、商务及居民服务业',
        _2015:{
            season:
                {
                    powerdata:[5.4, 6.9, 6.5, 5.5],
                    gdpdata:[4.3, 6.3, 3.2, 4.7],
                },
        },
        _2014:{
            season:
                {
                    powerdata:[6.4, 4.9, 3.5, 5.5],
                    gdpdata:[4.3, 6.3, 4.2, 2.7],
                },
        },
    },
    service:{
        title:'公共事业及管理组织',
        _2015:{
            season:
                {
                    powerdata:[5.4, 7.9, 3.5, 5.5],
                    gdpdata:[4.3, 6.3, 3.2, 4.7],
                },
        },
        _2014:{
            season:
                {
                    powerdata:[6.4, 4.9, 3.5, 5.5],
                    gdpdata:[4.3, 6.3, 4.2, 2.7],
                },
        },
    },
  };
  /*第二图各种切换函数*/

  //切换到年图
  $scope.changeToSingleVocationChartByyear = function(){
    $scope.vocationdata.isshowchartvocation=false;
    $scope.vocationdata.isshowsinglechartvocation=false;
    $scope.vocationdata.isshowsinglechartvocationbyyear=true;
  };

  /*初始化*/
  $scope.yearmark = '2015';
  $scope.vocationmark = 1;
  //第二图总图切换年份
  $scope.changeTotalYear = function(param){
    $scope.vocationdata.isshowchartvocation=true;
    $scope.vocationdata.isshowsinglechartvocation=false;
    $scope.vocationdata.isshowsinglechartvocationbyyear=false;
    switch(param){
        case 2014:
            $scope.VocationChart.subtitle.text = $scope.vocationdata.totalshow._2014.year;
            $scope.VocationChart.series[0].data = $scope.vocationdata.totalshow._2014.data.powerdata;
            $scope.VocationChart.series[1].data = $scope.vocationdata.totalshow._2014.data.gdpdata;
        break;
        case 2015:
            $scope.VocationChart.subtitle.text = $scope.vocationdata.totalshow._2015.year;
            $scope.VocationChart.series[0].data = $scope.vocationdata.totalshow._2015.data.powerdata;
            $scope.VocationChart.series[1].data = $scope.vocationdata.totalshow._2015.data.gdpdata;
        break;
    }
  }
  //按季度显示 并切换年份
  $scope.changeVocationYear = function(param){
    $scope.vocationdata.isshowchartvocation=false;
    $scope.vocationdata.isshowsinglechartvocation=true;
    $scope.vocationdata.isshowsinglechartvocationbyyear=false;

    $scope.SingleVocationChart.subtitle.text = param+'年度';
    $scope.yearmark = param;
    switch($scope.vocationmark){
        case 1:
             switch($scope.yearmark){
                case '2015':
                    $scope.SingleVocationChart.title.text = $scope.vocationdata.agriculture.title;
                    $scope.SingleVocationChart.series[0].data = $scope.vocationdata.agriculture._2015.season.powerdata;
                    $scope.SingleVocationChart.series[1].data = $scope.vocationdata.agriculture._2015.season.gdpdata;
                break;
                case '2014':
                    $scope.SingleVocationChart.title.text = $scope.vocationdata.agriculture.title;
                    $scope.SingleVocationChart.series[0].data = $scope.vocationdata.agriculture._2014.season.powerdata;
                    $scope.SingleVocationChart.series[1].data = $scope.vocationdata.agriculture._2014.season.gdpdata;
                break;
             }
        break;
        case 2:{
             switch($scope.yearmark){
                case '2015':{
                    $scope.SingleVocationChart.title.text = $scope.vocationdata.industry.title;
                    $scope.SingleVocationChart.series[0].data = $scope.vocationdata.industry._2015.season.powerdata;
                    $scope.SingleVocationChart.series[1].data = $scope.vocationdata.industry._2015.season.gdpdata;
                };
                break;
                case '2014':{
                    $scope.SingleVocationChart.title.text = $scope.vocationdata.industry.title;
                    $scope.SingleVocationChart.series[0].data = $scope.vocationdata.industry._2014.season.powerdata;
                    $scope.SingleVocationChart.series[1].data = $scope.vocationdata.industry._2014.season.gdpdata;
                };
                break;
             };             
        };
        break;
        case 3:{
             switch($scope.yearmark){
                case '2015':{
                    $scope.SingleVocationChart.title.text = $scope.vocationdata.construction.title;
                    $scope.SingleVocationChart.series[0].data = $scope.vocationdata.construction._2015.season.powerdata;
                    $scope.SingleVocationChart.series[1].data = $scope.vocationdata.construction._2015.season.gdpdata;
                };
                break;
                case '2014':{
                    $scope.SingleVocationChart.title.text = $scope.vocationdata.construction.title;
                    $scope.SingleVocationChart.series[0].data = $scope.vocationdata.construction._2014.season.powerdata;
                    $scope.SingleVocationChart.series[1].data = $scope.vocationdata.construction._2014.season.gdpdata;
                };
                break;
             };             
        };
        break;
        case 4:{
             switch($scope.yearmark){
                case '2015':{
                    $scope.SingleVocationChart.title.text = $scope.vocationdata.traffic.title;
                    $scope.SingleVocationChart.series[0].data = $scope.vocationdata.traffic._2015.season.powerdata;
                    $scope.SingleVocationChart.series[1].data = $scope.vocationdata.traffic._2015.season.gdpdata;
                };
                break;
                case '2014':{
                    $scope.SingleVocationChart.title.text = $scope.vocationdata.traffic.title;
                    $scope.SingleVocationChart.series[0].data = $scope.vocationdata.traffic._2014.season.powerdata;
                    $scope.SingleVocationChart.series[1].data = $scope.vocationdata.traffic._2014.season.gdpdata;
                };
                break;
             };             
        };
        break;
        case 5:{
             switch($scope.yearmark){
                case '2015':{
                    $scope.SingleVocationChart.title.text = $scope.vocationdata.computer.title;
                    $scope.SingleVocationChart.series[0].data = $scope.vocationdata.computer._2015.season.powerdata;
                    $scope.SingleVocationChart.series[1].data = $scope.vocationdata.computer._2015.season.gdpdata;
                };
                break;
                case '2014':{
                    $scope.SingleVocationChart.title.text = $scope.vocationdata.computer.title;
                    $scope.SingleVocationChart.series[0].data = $scope.vocationdata.computer._2014.season.powerdata;
                    $scope.SingleVocationChart.series[1].data = $scope.vocationdata.computer._2014.season.gdpdata;
                };
                break;
             };             
        };
        break;
        case 6:{
             switch($scope.yearmark){
                case '2015':{
                    $scope.SingleVocationChart.title.text = $scope.vocationdata.retail.title;
                    $scope.SingleVocationChart.series[0].data = $scope.vocationdata.retail._2015.season.powerdata;
                    $scope.SingleVocationChart.series[1].data = $scope.vocationdata.retail._2015.season.gdpdata;
                };
                break;
                case '2014':{
                    $scope.SingleVocationChart.title.text = $scope.vocationdata.retail.title;
                    $scope.SingleVocationChart.series[0].data = $scope.vocationdata.retail._2014.season.powerdata;
                    $scope.SingleVocationChart.series[1].data = $scope.vocationdata.retail._2014.season.gdpdata;
                };
                break;
             };             
        };
        break;
        case 7:{
             switch($scope.yearmark){
                case '2015':{
                    $scope.SingleVocationChart.title.text = $scope.vocationdata.finance.title;
                    $scope.SingleVocationChart.series[0].data = $scope.vocationdata.finance._2015.season.powerdata;
                    $scope.SingleVocationChart.series[1].data = $scope.vocationdata.finance._2015.season.gdpdata;
                };
                break;
                case '2014':{
                    $scope.SingleVocationChart.title.text = $scope.vocationdata.finance.title;
                    $scope.SingleVocationChart.series[0].data = $scope.vocationdata.finance._2014.season.powerdata;
                    $scope.SingleVocationChart.series[1].data = $scope.vocationdata.finance._2014.season.gdpdata;
                };
                break;
             };             
        };
        break;
        case 8:{
             switch($scope.yearmark){
                case '2015':{
                    $scope.SingleVocationChart.title.text = $scope.vocationdata.service.title;
                    $scope.SingleVocationChart.series[0].data = $scope.vocationdata.service._2015.season.powerdata;
                    $scope.SingleVocationChart.series[1].data = $scope.vocationdata.service._2015.season.gdpdata;
                };
                break;
                case '2014':{
                    $scope.SingleVocationChart.title.text = $scope.vocationdata.service.title;
                    $scope.SingleVocationChart.series[0].data = $scope.vocationdata.service._2014.season.powerdata;
                    $scope.SingleVocationChart.series[1].data = $scope.vocationdata.service._2014.season.gdpdata;
                };
                break;
             };             
        };
        break;
    }
  }

  //切换不同的行业
  $scope.changeVocationType = function(param){
    $scope.vocationdata.isshowchartvocation=false;
    $scope.vocationdata.isshowsinglechartvocation=true;
    $scope.vocationdata.isshowsinglechartvocationbyyear=false;

    $scope.vocationmark = param;
    switch($scope.vocationmark){
        case 1:
             switch($scope.yearmark){
                case '2015':
                    $scope.SingleVocationChart.title.text = $scope.vocationdata.agriculture.title;
                    $scope.SingleVocationChart.series[0].data = $scope.vocationdata.agriculture._2015.season.powerdata;
                    $scope.SingleVocationChart.series[1].data = $scope.vocationdata.agriculture._2015.season.gdpdata;
                break;
                case '2014':
                    $scope.SingleVocationChart.title.text = $scope.vocationdata.agriculture.title;
                    $scope.SingleVocationChart.series[0].data = $scope.vocationdata.agriculture._2014.season.powerdata;
                    $scope.SingleVocationChart.series[1].data = $scope.vocationdata.agriculture._2014.season.gdpdata;
                break;
             }
        break;
        case 2:{
             switch($scope.yearmark){
                case '2015':{
                    $scope.SingleVocationChart.title.text = $scope.vocationdata.industry.title;
                    $scope.SingleVocationChart.series[0].data = $scope.vocationdata.industry._2015.season.powerdata;
                    $scope.SingleVocationChart.series[1].data = $scope.vocationdata.industry._2015.season.gdpdata;
                };
                break;
                case '2014':{
                    $scope.SingleVocationChart.title.text = $scope.vocationdata.industry.title;
                    $scope.SingleVocationChart.series[0].data = $scope.vocationdata.industry._2014.season.powerdata;
                    $scope.SingleVocationChart.series[1].data = $scope.vocationdata.industry._2014.season.gdpdata;
                };
                break;
             };             
        };
        break;
        case 3:{
             switch($scope.yearmark){
                case '2015':{
                    $scope.SingleVocationChart.title.text = $scope.vocationdata.construction.title;
                    $scope.SingleVocationChart.series[0].data = $scope.vocationdata.construction._2015.season.powerdata;
                    $scope.SingleVocationChart.series[1].data = $scope.vocationdata.construction._2015.season.gdpdata;
                };
                break;
                case '2014':{
                    $scope.SingleVocationChart.title.text = $scope.vocationdata.construction.title;
                    $scope.SingleVocationChart.series[0].data = $scope.vocationdata.construction._2014.season.powerdata;
                    $scope.SingleVocationChart.series[1].data = $scope.vocationdata.construction._2014.season.gdpdata;
                };
                break;
             };             
        };
        break;
        case 4:{
             switch($scope.yearmark){
                case '2015':{
                    $scope.SingleVocationChart.title.text = $scope.vocationdata.traffic.title;
                    $scope.SingleVocationChart.series[0].data = $scope.vocationdata.traffic._2015.season.powerdata;
                    $scope.SingleVocationChart.series[1].data = $scope.vocationdata.traffic._2015.season.gdpdata;
                };
                break;
                case '2014':{
                    $scope.SingleVocationChart.title.text = $scope.vocationdata.traffic.title;
                    $scope.SingleVocationChart.series[0].data = $scope.vocationdata.traffic._2014.season.powerdata;
                    $scope.SingleVocationChart.series[1].data = $scope.vocationdata.traffic._2014.season.gdpdata;
                };
                break;
             };             
        };
        break;
        case 5:{
             switch($scope.yearmark){
                case '2015':{
                    $scope.SingleVocationChart.title.text = $scope.vocationdata.computer.title;
                    $scope.SingleVocationChart.series[0].data = $scope.vocationdata.computer._2015.season.powerdata;
                    $scope.SingleVocationChart.series[1].data = $scope.vocationdata.computer._2015.season.gdpdata;
                };
                break;
                case '2014':{
                    $scope.SingleVocationChart.title.text = $scope.vocationdata.computer.title;
                    $scope.SingleVocationChart.series[0].data = $scope.vocationdata.computer._2014.season.powerdata;
                    $scope.SingleVocationChart.series[1].data = $scope.vocationdata.computer._2014.season.gdpdata;
                };
                break;
             };             
        };
        break;
        case 6:{
             switch($scope.yearmark){
                case '2015':{
                    $scope.SingleVocationChart.title.text = $scope.vocationdata.retail.title;
                    $scope.SingleVocationChart.series[0].data = $scope.vocationdata.retail._2015.season.powerdata;
                    $scope.SingleVocationChart.series[1].data = $scope.vocationdata.retail._2015.season.gdpdata;
                };
                break;
                case '2014':{
                    $scope.SingleVocationChart.title.text = $scope.vocationdata.retail.title;
                    $scope.SingleVocationChart.series[0].data = $scope.vocationdata.retail._2014.season.powerdata;
                    $scope.SingleVocationChart.series[1].data = $scope.vocationdata.retail._2014.season.gdpdata;
                };
                break;
             };             
        };
        break;
        case 7:{
             switch($scope.yearmark){
                case '2015':{
                    $scope.SingleVocationChart.title.text = $scope.vocationdata.finance.title;
                    $scope.SingleVocationChart.series[0].data = $scope.vocationdata.finance._2015.season.powerdata;
                    $scope.SingleVocationChart.series[1].data = $scope.vocationdata.finance._2015.season.gdpdata;
                };
                break;
                case '2014':{
                    $scope.SingleVocationChart.title.text = $scope.vocationdata.finance.title;
                    $scope.SingleVocationChart.series[0].data = $scope.vocationdata.finance._2014.season.powerdata;
                    $scope.SingleVocationChart.series[1].data = $scope.vocationdata.finance._2014.season.gdpdata;
                };
                break;
             };             
        };
        break;
        case 8:{
             switch($scope.yearmark){
                case '2015':{
                    $scope.SingleVocationChart.title.text = $scope.vocationdata.service.title;
                    $scope.SingleVocationChart.series[0].data = $scope.vocationdata.service._2015.season.powerdata;
                    $scope.SingleVocationChart.series[1].data = $scope.vocationdata.service._2015.season.gdpdata;
                };
                break;
                case '2014':{
                    $scope.SingleVocationChart.title.text = $scope.vocationdata.service.title;
                    $scope.SingleVocationChart.series[0].data = $scope.vocationdata.service._2014.season.powerdata;
                    $scope.SingleVocationChart.series[1].data = $scope.vocationdata.service._2014.season.gdpdata;
                };
                break;
             };             
        };
        break;
    }
  }
    /*highchart of 单行业分季度图表*/
    $scope.SingleVocationChart={  
         options:{
            chart: {
                type: 'spline'
            },
         },
         title: {
            text: $scope.vocationdata.agriculture.title,
            x: -20 //center
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
            data: $scope.vocationdata.agriculture._2015.season.powerdata,
        }, {
            name: '行业产值增长率',
            data: $scope.vocationdata.agriculture._2015.season.gdpdata,
        }]
  };

  /*行业总览视图*/
  $scope.VocationChart={
  	 	options:{
	  	 	chart: {
	            type: 'bar',
            
	     	},
	  	 },                                                                
        title: {                                                           
            text:  $scope.vocationdata.totalshow.title,                
        },                                                                 
        subtitle: {                                                        
            text: $scope.vocationdata.totalshow._2015.year,                                 
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

  /*highchart of 单行业年度图表*/
  $scope.SingleVocationChartByYear={
         options:{
            chart: {
                type: $scope.charttype
            },
         },
         title: {
            text: '农、林、牧、渔业',
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
            name: '行业用电量同比增长率',
            data: [7.0, 6.5, 6.2, 5.5, 5.2, 5.5, 6.2, 7.5, 6.3, 5.3, 3.9]
        }, {
            name: '行业产值同比增长率',
            data: [5.2, 4.8, 3.7, 3.6, 3.0, 4.0, 4.8, 4.7, 4.1, 3.1, 2.6]
        }]
  };


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
            data: [7.0, 6.5, 6.2, 5.5, 5.2, 5.5, 6.2, 7.5, 6.3, 5.3, 3.9],
        }, {
            name: '企业产值同比增长率',
            data: [5.2, 4.8, 3.7, 3.6, 3.0, 4.0, 4.8, 4.7, 4.1, 3.1, 2.6],
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
  $scope.changeAverageEnterpriseChart = function(param){
    $scope.AverageEnterpriseChartByYear.options.chart.type = param;
  };
  $scope.showAverageEnterpriseTable = function(){
    $scope.averageenterprisetableshow= !$scope.averageenterprisetableshow;
  }

}]);










