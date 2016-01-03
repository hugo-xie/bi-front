'use strict';

app.controller('EconomyPowerConsumptionCtrl', ['$scope','$stateParams', function($scope, $stateParams) {

  $scope.title = $stateParams.title;

  //企业用电量与经济增长关联分析
  $scope.totaldata = {
  	year: '2016',
  	oneword: '用电量与经济增长密切相关：用电量增减变动趋势与GDP增减变动趋势基本一致，GDP增长时，用电量也增长，增速相似；GDP回落时，用电量增长也回落;预测阶段用电量增速将大于GDP增速。',
  	powergrowthrate: 7.6,
  	gdpgrowthrate: 7.9,
    yearvalue:['2006', '2007', '2008', '2009', '2010', '2011','2012', '2013', '2014', '2015', '2016','2017','2018'],
    gdprate:[2.0, 2.9, 3.5, 5.5, 6.2, 7.5, 9.2, 8.5, 7.3, 6.3, 6.9, 7.9, 8.3],
    powerrate:[2.2, 2.8, 3.7, 4.3, 5.0, 6.0, 7.8, 7.1, 6.1, 5.1, 6.6, 7.9, 8.8],
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
  //
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
                type: 'spline',
                height: 250
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



  /*highchart of 单行业年度图表*/
  $scope.SingleVocationChartByYear={
         options:{
            chart: {
                type: $scope.charttype,
                height: 350
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










//第二图：行业总体比较视图控制器
app.controller('EconomyPowerConsumptionCtrl_Industries', ['$scope','$stateParams', function($scope, $stateParams) {

    $scope.industrydata = {      
        years:[2014,2015],
        title:'各行业用电量增长率与产值增长率对比分析',
        _2018:{
            year:'2018',
            gdpdata: [0.73, 0.30, 0.63, 0.21, 0.19,0.32,0.33,0.63],                                                                             
            powerdata: [0.61, 0.43, 0.72, 0.35, 0.35,0.24,0.64,0.86],  
        },
        _2017:{
            year:'2017',
            gdpdata: [0.76, 0.31, 0.65, 0.23, 0.2,0.34,0.32,0.65],                                                                             
            powerdata: [0.63, 0.41, 0.70, 0.34, 0.32,0.23,0.65,0.87],  
        },
        _2016:{
            year:'2016',
            gdpdata: [0.66, 0.41, 0.55, 0.33, 0.17,0.37,0.35,0.45],                                                                             
            powerdata: [0.53, 0.47, 0.50, 0.34, 0.22,0.43,0.45,0.57],
        },
        _2015:{
            year:'2015',
            gdpdata: [0.76, 0.31, 0.65, 0.23, 0.2,0.34,0.32,0.65],                                                                             
            powerdata: [0.63, 0.41, 0.70, 0.34, 0.32,0.23,0.65,0.87],  
        },
        _2014:{
            year:'2014',
            gdpdata: [0.66, 0.41, 0.55, 0.33, 0.17,0.37,0.35,0.45],                                                                             
            powerdata: [0.53, 0.47, 0.50, 0.34, 0.22,0.43,0.45,0.57],
        },
        _2013:{
            year:'2013',
            gdpdata: [0.73, 0.30, 0.63, 0.21, 0.19,0.32,0.33,0.63],                                                                             
            powerdata: [0.61, 0.43, 0.72, 0.35, 0.35,0.24,0.64,0.86],  
        },
        _2012:{
            year:'2012',
            gdpdata: [0.76, 0.31, 0.65, 0.23, 0.2,0.34,0.32,0.65],                                                                             
            powerdata: [0.63, 0.41, 0.70, 0.34, 0.32,0.23,0.65,0.87],  
        },
        _2011:{
            year:'2011',
            gdpdata: [0.66, 0.41, 0.55, 0.33, 0.17,0.37,0.35,0.45],                                                                             
            powerdata: [0.53, 0.47, 0.50, 0.34, 0.22,0.43,0.45,0.57],
        },
        _2010:{
            year:'2010',
            gdpdata: [0.76, 0.31, 0.65, 0.23, 0.2,0.34,0.32,0.65],                                                                             
            powerdata: [0.63, 0.41, 0.70, 0.34, 0.32,0.23,0.65,0.87],  
        },
        _2009:{
            year:'2009',
            gdpdata: [0.66, 0.41, 0.55, 0.33, 0.17,0.37,0.35,0.45],                                                                             
            powerdata: [0.53, 0.47, 0.50, 0.34, 0.22,0.43,0.45,0.57],
        },
        _2008:{
            year:'2008',
            gdpdata: [0.76, 0.31, 0.65, 0.23, 0.2,0.34,0.32,0.65],                                                                             
            powerdata: [0.63, 0.41, 0.70, 0.34, 0.32,0.23,0.65,0.87],  
        },
        _2007:{
            year:'2007',
            gdpdata: [0.66, 0.41, 0.55, 0.33, 0.17,0.37,0.35,0.45],                                                                             
            powerdata: [0.53, 0.47, 0.50, 0.34, 0.22,0.43,0.45,0.57],
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
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
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
}]);






app.controller('EconomyPowerConsumptionCtrl_IndustryEach', ['$scope','$stateParams', function($scope, $stateParams) {

}]);





