'use strict';

app.controller('EconomyPowerConsumptionOfEnterprisesCtrl', ['$scope','$stateParams', function($scope, $stateParams) {
  	$scope.title = $stateParams.title;

    //new地图对象
  	$scope.map = new AMap.Map('consumptionbyenterprise',{
          zoom: 12,
          center: [121.127511,31.598285],
          resizeEnable: true,
      });
    //调节侧栏

    $scope.map.setMapStyle('fresh');

  	AMap.plugin(['AMap.ToolBar','AMap.Scale'],function(){
  	    var toolBar = new AMap.ToolBar();
  	    var scale = new AMap.Scale();
  	    $scope.map.addControl(toolBar);
  	    $scope.map.addControl(scale);
  	});
    

     $scope.industriesdata = {
    total:{
        years:[2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018],
    },    

    agriculture:{
        title:'太仓振辉化纤有限公司',
        yeardata:{
          gdpdata: [0.66, 0.41, 0.55, 0.33, 0.17,0.37,0.35,0.45,0.66, 0.41, 0.55, 0.33, 0.17],                                                                             
          powerdata: [0.53, 0.47, 0.50, 0.34, 0.22,0.43,0.45,0.57,0.53, 0.47, 0.50, 0.34, 0.22],
        },
        _2015:{
            season:
                {
                    powerdata:[6.4, 6.9, 6.5, 7.5],
                    gdpdata:[6.3, 6.3, 6.2, 6.7],
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
        title:'申久化纤有限公司',
        yeardata:{
          gdpdata: [0.76, 0.31, 0.65, 0.23, 0.2,0.34,0.32,0.65,0.76, 0.31, 0.65, 0.23, 0.2],                                                                             
          powerdata: [0.63, 0.41, 0.70, 0.34, 0.32,0.23,0.65,0.87,0.63, 0.41, 0.70, 0.34, 0.32],
        },
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
        title:'太仓协鑫光伏科技有限公司',
        yeardata:{
          gdpdata: [0.66, 0.41, 0.55, 0.33, 0.17,0.37,0.35,0.45,0.66, 0.41, 0.55, 0.33, 0.17],                                                                             
          powerdata: [0.53, 0.47, 0.50, 0.34, 0.22,0.43,0.45,0.57,0.53, 0.47, 0.50, 0.34, 0.22],
        },
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
        title:'苏州达诺铸造有限公司',
        yeardata:{
          gdpdata: [0.76, 0.31, 0.65, 0.23, 0.2,0.34,0.32,0.65,0.76, 0.31, 0.65, 0.23, 0.2],                                                                             
          powerdata: [0.63, 0.41, 0.70, 0.34, 0.32,0.23,0.65,0.87,0.63, 0.41, 0.70, 0.34, 0.32], 
          //年数据应该是有季度数据加起来得到的
        },
        _2018:{
            season:
                {
                    powerdata:[6.4, 6.9, 6.5, 6.5],
                    gdpdata:[6.3, 6.3, 6.2, 6.7],
                },
        },
        _2017:{
            season:
                {
                    powerdata:[7.4, 6.9, 7.5, 8.5],
                    gdpdata:[7.3, 6.3, 7.2, 8.7],
                },
        },
        _2016:{
            season:
                {
                    powerdata:[5.4, 6.9, 5.5, 6.5],
                    gdpdata:[5.3, 7.3, 5.2, 6.7],
                },
        },
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
        _2013:{
            season:
                {
                    powerdata:[6.4, 6.9, 6.5, 6.5],
                    gdpdata:[6.3, 6.3, 6.2, 6.7],
                },
        },
        _2012:{
            season:
                {
                    powerdata:[7.4, 6.9, 7.5, 8.5],
                    gdpdata:[7.3, 6.3, 7.2, 8.7],
                },
        },
        _2012:{
            season:
                {
                    powerdata:[5.4, 6.9, 5.5, 6.5],
                    gdpdata:[5.3, 7.3, 5.2, 6.7],
                },
        },
        _2011:{
            season:
                {
                    powerdata:[1.4, 6.9, 3.5, 5.5],
                    gdpdata:[4.3, 6.3, 3.2, 4.7],
                },
        },
        _2010:{
            season:
                {
                    powerdata:[6.4, 5.9, 3.5, 5.5],
                    gdpdata:[4.3, 6.3, 4.2, 2.7],
                },
        },
        _2009:{
            season:
                {
                    powerdata:[7.4, 6.9, 7.5, 8.5],
                    gdpdata:[7.3, 6.3, 7.2, 8.7],
                },
        },
        _2008:{
            season:
                {
                    powerdata:[5.4, 6.9, 5.5, 6.5],
                    gdpdata:[5.3, 7.3, 5.2, 6.7],
                },
        },
        _2007:{
            season:
                {
                    powerdata:[1.4, 6.9, 3.5, 5.5],
                    gdpdata:[4.3, 6.3, 3.2, 4.7],
                },
        },
        _2006:{
            season:
                {
                    powerdata:[6.4, 5.9, 3.5, 5.5],
                    gdpdata:[4.3, 6.3, 4.2, 2.7],
                },
        },
    },
    computer:{
        title:'舍弗勒(中国)有限公司',
        yeardata:{
          gdpdata: [0.66, 0.41, 0.55, 0.33, 0.17,0.37,0.35,0.45,0.66, 0.41, 0.55, 0.33, 0.17],                                                                             
          powerdata: [0.53, 0.47, 0.50, 0.34, 0.22,0.43,0.45,0.57,0.53, 0.47, 0.50, 0.34, 0.22],
        },
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
        title:'太仓中化环保化工有限公司',
        yeardata:{
          gdpdata: [0.76, 0.31, 0.65, 0.23, 0.2,0.34,0.32,0.65,0.76, 0.31, 0.65, 0.23, 0.2],                                                                             
          powerdata: [0.63, 0.41, 0.70, 0.34, 0.32,0.23,0.65,0.87,0.63, 0.41, 0.70, 0.34, 0.32], 
        },
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
        title:'江苏长乐纤维科技有限公司',
        yeardata:{
          gdpdata: [0.73, 0.30, 0.63, 0.21, 0.19,0.32,0.33,0.63,0.73, 0.30, 0.63, 0.21, 0.19],                                                                             
          powerdata: [0.61, 0.43, 0.72, 0.35, 0.35,0.24,0.64,0.86,0.61, 0.43, 0.72, 0.35, 0.35],
        },
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
        title:'太仓海螺水泥有限公司',
        yeardata:{
          gdpdata: [0.66, 0.41, 0.55, 0.33, 0.17,0.37,0.35,0.45,0.66, 0.41, 0.55, 0.33, 0.17],                                                                             
          powerdata: [0.53, 0.47, 0.50, 0.34, 0.22,0.43,0.45,0.57,0.53, 0.47, 0.50, 0.34, 0.22],
        },
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
        };break;
        case 8:{
          
        };break;
        case 9:{
          
        };break;
        case 10:{
          
        };break;
        case 11:{
          
        };break;
        case 12:{
          
        };break;
        case 13:{
          
        };break;
        case 14:{
          
        };break;
        case 15:{
          
        };break;
        case 16:{
          
        };break;
        case 17:{
          
        };break;
        case 18:{
          
        };break;
      };
    
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
  $scope.changeYear = function(param){
    switch(param){

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
            name: '企业用电量同比增长率',
            data: $scope.industriesdata.agriculture.yeardata.powerdata,
        }, {
            name: '企业产值同比增长率',
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
          name: '企业用电量同比增长率',
          data: $scope.industriesdata.agriculture._2015.season.powerdata,
      }, {
          name: '企业产值增长率',
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

  $scope.enterpriselist = [
      {
          name : '太仓振辉化纤有限公司',
          code : 0,
          position:[121.100277,31.603982],
      },
      {
          name : '申久化纤有限公司',
          code : 1,
          position:[121.097839,31.69338],
      },
      {
          name : '太仓协鑫光伏科技有限公司',
          code : 2,
          position:[121.19411,31.620342],
      },
      {
          name : '苏州达诺铸造有限公司',
          code : 3,
          position:[121.182226,31.609841],
      },
      {
          name : '舍弗勒(中国)有限公司',
          code : 4,
          position:[121.118329,31.478157],
      },
      {
          name : '太仓中化环保化工有限公司',
          code : 5,
          position:[121.271566,31.58156],
      },
      {
          name : '江苏长乐纤维科技有限公司',
          code : 6,
          position:[121.108497,31.68122],
      },
      {
          name : '太仓海螺水泥有限公司',
          code : 7,
          position:[121.127511,31.598285],
      },
      {
          name : '江苏仓环铜业股份有限公司',
          code : 8,
          position:[121.091417,31.443898],
      },
      {
          name : '奥特斯维能源(太仓)有限公司',
          code : 9,
          position:[121.19704,31.622541],
      },
  ];
  //设置地图标记点
    var marker0 = new AMap.Marker({
        icon : 'images/marker_sprite.png',
        position: $scope.enterpriselist[0].position,
        map:$scope.map,
        clickable:true,
    });

    marker0.setLabel({//label默认蓝框白底左上角显示，样式className为：amap-marker-label
        offset: new AMap.Pixel(20, -2),
        content: $scope.enterpriselist[0].name,
        clickable:true,
    });

    var marker1 = new AMap.Marker({
        icon : 'images/marker_sprite.png',
        position: $scope.enterpriselist[1].position,
        map:$scope.map,
        clickable:true,
    });

    marker1.setLabel({//label默认蓝框白底左上角显示，样式className为：amap-marker-label
        offset: new AMap.Pixel(20, -2),
        content: $scope.enterpriselist[1].name,
        clickable:true,
    });

    var marker2 = new AMap.Marker({
        icon : 'images/marker_sprite.png',
        position: $scope.enterpriselist[2].position,
        map:$scope.map,
        clickable:true,
    });

    marker2.setLabel({//label默认蓝框白底左上角显示，样式className为：amap-marker-label
        offset: new AMap.Pixel(20, -2),
        content: $scope.enterpriselist[2].name,
        clickable:true,
    });

    var marker3 = new AMap.Marker({
        icon : 'images/marker_sprite.png',
        position: $scope.enterpriselist[3].position,
        map:$scope.map,
        clickable:true,
    });

    marker3.setLabel({//label默认蓝框白底左上角显示，样式className为：amap-marker-label
        offset: new AMap.Pixel(20, -2),
        content: $scope.enterpriselist[3].name,
        clickable:true,
    });

    var marker4 = new AMap.Marker({
        icon : 'images/marker_sprite.png',
        position: $scope.enterpriselist[4].position,
        map:$scope.map,
        clickable:true,
    });

    marker4.setLabel({//label默认蓝框白底左上角显示，样式className为：amap-marker-label
        offset: new AMap.Pixel(20, -2),
        content: $scope.enterpriselist[4].name,
        clickable:true,
    });

    var marker5 = new AMap.Marker({
        icon : 'images/marker_sprite.png',
        position: $scope.enterpriselist[5].position,
        map:$scope.map,
        clickable:true,
    });

    marker5.setLabel({//label默认蓝框白底左上角显示，样式className为：amap-marker-label
        offset: new AMap.Pixel(20, -2),
        content: $scope.enterpriselist[5].name,
        clickable:true,
    });

    var marker6 = new AMap.Marker({
        icon : 'images/marker_sprite.png',
        position: $scope.enterpriselist[6].position,
        map:$scope.map,
        clickable:true,
    });

    marker6.setLabel({//label默认蓝框白底左上角显示，样式className为：amap-marker-label
        offset: new AMap.Pixel(20, -2),
        content: $scope.enterpriselist[6].name,
        clickable:true,
    });

    var marker7 = new AMap.Marker({
        icon : 'images/marker_sprite.png',
        position: $scope.enterpriselist[7].position,
        map:$scope.map,
        clickable:true,
    });

    marker7.setLabel({//label默认蓝框白底左上角显示，样式className为：amap-marker-label
        offset: new AMap.Pixel(20, -2),
        content: $scope.enterpriselist[7].name,
        clickable:true,
    });

    var marker8 = new AMap.Marker({
        icon : 'images/marker_sprite.png',
        position: $scope.enterpriselist[8].position,
        map:$scope.map,
        clickable:true,
    });

    marker8.setLabel({//label默认蓝框白底左上角显示，样式className为：amap-marker-label
        offset: new AMap.Pixel(20, -2),
        content: $scope.enterpriselist[8].name,
        clickable:true,
    });

    var marker9 = new AMap.Marker({
        icon : 'images/marker_sprite.png',
        position: $scope.enterpriselist[9].position,
        map:$scope.map,
        clickable:true,
    });

    marker9.setLabel({//label默认蓝框白底左上角显示，样式className为：amap-marker-label
        offset: new AMap.Pixel(20, -2),
        content: $scope.enterpriselist[9].name,
        clickable:true,
    });
    //地图标记--企业数据详情
    var marker0OnClick = function(){
        
    };
    var marker1OnClick = function(){
        
    };
    //将上述函数添加到监听事件
 
    AMap.event.addListener(marker0, 'click', marker0OnClick);
    AMap.event.addListener(marker1, 'click', marker1OnClick);
    $scope.chooseEnterprise = function(param){
      switch(param){
        case 0:{
          $scope.map.setZoomAndCenter(16, $scope.enterpriselist[0].position);
        };break;
        case 1:{
          $scope.map.setZoomAndCenter(16, $scope.enterpriselist[1].position);
        };break;
        case 2:{
          $scope.map.setZoomAndCenter(16, $scope.enterpriselist[2].position);
        };break;
        case 3:{
          $scope.map.setZoomAndCenter(16, $scope.enterpriselist[3].position);
        };break;
        case 4:{
          $scope.map.setZoomAndCenter(16, $scope.enterpriselist[4].position);
        };break;
        case 5:{
          $scope.map.setZoomAndCenter(16, $scope.enterpriselist[5].position);
        };break;
        case 6:{
          $scope.map.setZoomAndCenter(16, $scope.enterpriselist[6].position);
        };break;
        case 7:{
          $scope.map.setZoomAndCenter(16, $scope.enterpriselist[7].position);
        };break;
        case 8:{
          $scope.map.setZoomAndCenter(16, $scope.enterpriselist[8].position);
        };break;
        case 9:{
          $scope.map.setZoomAndCenter(16, $scope.enterpriselist[9].position);
        };break;
      }

    }
  	
}]);