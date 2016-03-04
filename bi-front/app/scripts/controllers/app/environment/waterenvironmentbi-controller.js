'use strict';
/**
 * @ngdoc function
 * @name iocUiApp.controller:AboutCtrl
 * @description # AboutCtrl Controller of the iocUiApp
 */
app.controller('WaterEnvironmentBICtrl', ['$scope', '$timeout','$http', 'qService','rawFactory' ,function($scope, $timeout,$http,qService,rawFactory) {
    $scope.data = null;
    var promise = qService.tokenHttpGet(rawFactory.query,{tableName:'waterConditionData'});
    promise.then(function(rc1) {

        console.log(rc1.data);

    });

    var promise1 = qService.tokenHttpGet(rawFactory.query,{tableName:'waterIndustryData'});
    promise1.then(function(rc2) {

        console.log(rc2.data);

    });

    var promise3 = qService.tokenHttpGet(rawFactory.query,{tableName:'waterQualityData'});
    promise3.then(function(rc4) {

        console.log(rc4.data);

    });

    
    //第二个框highcharts废水排放分析部分

    var promise2 = qService.tokenHttpGet(rawFactory.query,{tableName:'waterPollutionData'});
    promise2.then(function(rc3) {

      console.log(rc3.data);
      $scope.list1=rc3.data[0];
      $scope.list2=rc3.data[1];
      $scope.list3=rc3.data[2];
      $scope.list4=rc3.data[3];
      $scope.list5=rc3.data[4];
      $scope.list6=rc3.data[5];
      $scope.list7=rc3.data[6];
      $scope.list8=rc3.data[7];
      $scope.list9=rc3.data[8];
      $scope.list10=rc3.data[9];
      $scope.date=rc3.data[0];
      $scope.changePollutionType1 = !$scope.changePollutionType1

    $scope.changePollutionType1=function(){
        //区域图  
       $scope.discharge={
        options:{
            chart: {
                type: 'column'
            },
            title: {
                text: '太仓市主要污水处理厂废水排放分析'
            },
            xAxis: {
                categories: $scope.date
            },
            yAxis: {
                min: 0,
                title: {
                    text: '吨'
                },
                stackLabels: {
                    enabled: true,
                    style: {
                        fontWeight: 'bold',
                        color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                    }
                }
            },
            legend: {
                align: 'center',
                x: 33,
                verticalAlign: 'bottom',
                y: 0,
                backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
                borderColor: '#CCC',
                borderWidth: 1,
                shadow: true
            },
            tooltip: {
                formatter: function () {
                    return '<b>' + this.x + '</b><br/>' +
                        this.series.name + ': ' + this.y + '<br/>' +
                        'Total: ' + this.point.stackTotal;
                }
            },
            plotOptions: {
                column: {
                    stacking: 'normal',
                    dataLabels: {
                        enabled: false,
                        color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                        style: {
                            textShadow: '0 0 3px black'
                        }
                    }
                }
            }},
            series: [{
                name: '太仓市城区污水处理厂',
                color:'#69afcd',
                data: $scope.list2
            }, {
                name: '太仓江城城市污水处理有限公司',
                color:'#57d160',
                data: $scope.list5
            }, {
                name: '浏河镇污水处理厂',
                color:'#c7e74f',
                data: $scope.list3
            }, {
                name: '港城组团污水处理厂',
                color:'#f8d940',
                data: $scope.list4
            }, {
                name: '玖龙纸业有限公司',
                color:'#ffb143',
                data: $scope.list1
            }]
        };
        };
      //溶解氧浓度
      $scope.changePollutionType2=function(){
        $scope.discharge={
            options:{
            chart: {
                    type: 'column'
                },
                legend: {
                    itemStyle:{
                    fontWeight:'normal'
                       }
                },
                credits: {
                    enabled:false
                },
                title: {
                    text: '溶解氧排放浓度',
                    style: {
                        fontWeight:'bold',
                    }
                },
                subtitle: {
                    text: '2016年1月8日9时',
                    style: {
                        fontWeight: 'normal',
                        fontSize: 'larger',
                        fontStyle: '宋体'
                    }
                },
                xAxis: {
                    categories: [
                        '太仓市城区污水处理厂',
                        '太仓江城城市污水处理有限公司',
                        '浏河镇污水处理厂',
                        '港城组团污水处理厂',
                        '玖龙纸业有限公司'
                    ]
                    
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'mg/L'
                    }
                },
                
                tooltip: {
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
                }
                },
                series: [{
                    name: '溶解氧浓度',
                    color: "#7cb5ec",
                    data: [$scope.list6[0], $scope.list7[0], $scope.list8[0], $scope.list9[0], $scope.list10[0]]

                }]
        };
      };
      //氨氮浓度
   $scope.changePollutionType3=function(){
        $scope.discharge={
            options:{
            chart: {
                    type: 'column'
                },
            legend: {
                    itemStyle:{
                    fontWeight:'normal'
                    }
                },
                credits: {
                    enabled:false
                },
                title: {
                    text: '氨氮排放浓度',
                    style: {
                        fontWeight:'bold',
                    }
                },
                subtitle: {
                    text: '2016年1月8日9时',
                    style: {
                        fontWeight: 'normal',
                        fontSize: 'larger',
                        fontStyle: '宋体'
                    }
                },
                xAxis: {
                    categories: [
                        '太仓市城区污水处理厂',
                        '太仓江城城市污水处理有限公司',
                        '浏河镇污水处理厂',
                        '港城组团污水处理厂',
                        '玖龙纸业有限公司'
                    ]
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'mg/L'
                    }
                },
                tooltip: {
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
                }
                },
                series: [{
                    name: '氨氮浓度',
                    color: "#7cb5ec",
                    data: [0.18, 0.59, 1.04, 0.11, 0.85]

                }]
        };
      };
      //总磷浓度
        $scope.changePollutionType4=function(){
        $scope.discharge={
            options:{
            chart: {
                    type: 'column'
                },
            legend: {
                    itemStyle:{
                    fontWeight:'normal'
                    }
                },
                credits: {
                    enabled:false
                },
                title: {
                    text: '总磷排放浓度',
                    style: {
                        fontWeight:'bold',
                    }
                },
                subtitle: {
                    text: '2016年1月8日9时',
                    style: {
                        fontWeight: 'normal',
                        fontSize: 'larger',
                        fontStyle: '宋体'
                    }
                },
                xAxis: {
                    categories: [
                        '太仓市城区污水处理厂',
                        '太仓江城城市污水处理有限公司',
                        '浏河镇污水处理厂',
                        '港城组团污水处理厂',
                        '玖龙纸业有限公司'
                    ]
                   
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'mg/L'
                    }
                },
                tooltip: {
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
                }},
                series: [{
                    name: '总磷浓度',
                    color: "#7cb5ec",
                    data: [0.09, 0.18, 0.1, 0.06, 0.16]

                }]
        };
      };

        //高锰酸钾浓度
        $scope.changePollutionType5=function(){
        $scope.discharge={
                options:{
                    chart: {
                        type: 'column'
                    },
                    credits: {
                        enabled:false
                    },
                    legend: {
                    itemStyle:{
                        fontWeight:'normal'
                       }
                }
                ,
                title: {
                    text: '高锰酸钾排放浓度',
                    style: {
                        fontWeight:'bold',
                    }
                },
                subtitle: {
                    text: '2016年1月8日9时',
                      style: {
                        fontWeight: 'normal',
                        fontSize: 'larger',
                        fontStyle: '宋体'
                    }
                },
                xAxis: {
                    categories: [
                        '太仓市城区污水处理厂',
                        '太仓江城城市污水处理有限公司',
                        '浏河镇污水处理厂',
                        '港城组团污水处理厂',
                        '玖龙纸业有限公司'
                    ]
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'mg/L'
                    }
                },
                tooltip: {
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
                }
                },
                series: [{
                    name: '高锰酸钾浓度',
                    color: "#7cb5ec",
                    data: [4.02, 3.83, 3.91, 4.12, 3.89]

                }]
        };
    }; 
    $scope.discharge={
        options:{
            chart: {
                type: 'column'
            },
            title: {
                text: '太仓市主要污水处理厂废水排放分析'
            },
            xAxis: {
                categories: $scope.date
            },
            yAxis: {
                min: 0,
                title: {
                    text: '吨'
                },
                stackLabels: {
                    enabled: true,
                    style: {
                        fontWeight: 'bold',
                        color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                    }
                }
            },
            legend: {
                align: 'center',
                x: 33,
                verticalAlign: 'bottom',
                y: 0,
                backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
                borderColor: '#CCC',
                borderWidth: 1,
                shadow: true
            },
            tooltip: {
                formatter: function () {
                    return '<b>' + this.x + '</b><br/>' +
                        this.series.name + ': ' + this.y + '<br/>' +
                        'Total: ' + this.point.stackTotal;
                }
            },
            plotOptions: {
                column: {
                    stacking: 'normal',
                    dataLabels: {
                        enabled: false,
                        color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                        style: {
                            textShadow: '0 0 3px black'
                        }
                    }
                }
            }},
            series: [{
                name: '太仓市城区污水处理厂',
                color:'#69afcd',
                data: $scope.list2
            }, {
                name: '太仓江城城市污水处理有限公司',
                color:'#57d160',
                data: $scope.list5
            }, {
                name: '浏河镇污水处理厂',
                color:'#c7e74f',
                data: $scope.list3
            }, {
                name: '港城组团污水处理厂',
                color:'#f8d940',
                data: $scope.list4
            }, {
                name: '玖龙纸业有限公司',
                color:'#ffb143',
                data: $scope.list1
            }]
        };
    });
     
    
    
    //第三个框highchart

$scope.factory={
    options:{
        chart: {
            type: 'column'
        },
        title: {
            text: '工厂废水排放'
        },
        subtitle: {
            text: '来源：太仓市环保局'
        },
        xAxis: {
            categories: [
                '3月5日',
                '3月6日',
                '3月7日',
                '3月8日',
                '3月9日',
                '3月10日',
                '3与11日',
              
            ]
        },
        yAxis: {
            min: 0,
            title: {
                text: '吨'
            }
        },
        tooltip: {
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
        }},
        series: [{
            name: '玖龙纸业有限公司',
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6]

        }, {
            name: '太仓振辉化纤有限公司',
            data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0]

        }, {
            name: '申久化纤有限公司',
            data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0]

        }, {
            name: '舍弗勒(中共)有限公司',
            data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4]

        }, {
            name: '太仓协鑫光伏科技有限公司',
            data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4]

        }]
    };            

    //列表展示
    $scope.showindustry= function(){
    $scope.industryshow= !$scope.industryshow;
    };
    $scope.totaldata = { 
    tabledata:
    [
      {yearvalue:'日期',JLfactory:'玖龙纸业有限公司' ,Afactory:'工厂A',Bfactory:'工厂B',Cfactory:'工厂C',Dfactory:'工厂D'},
      {yearvalue:'1月9日',JLfactory:'49.9',Afactory:'83.6',Bfactory:'48.9',Cfactory:'42.4',Dfactory:'42.4'},
      {yearvalue:'1月10日',JLfactory:'71.5', Afactory:'78.8',Bfactory:'38.8',Cfactory:'33.2',Dfactory:'33.2'},
      {yearvalue:'1月11日', JLfactory:'106.4',Afactory:'98.5',Bfactory:'39.3',Cfactory:'34.5',Dfactory:'54.8'},
      {yearvalue:'1月12日', JLfactory:'129.2',Afactory:'93.4',Bfactory:'41.4',Cfactory:'39.7',Dfactory:'106.5'},
      {yearvalue:'1月13日', JLfactory:'144.0',Afactory:'106.0',Bfactory:'47.0',Cfactory:'52.6',Dfactory:'78.2'},
      {yearvalue:'1月14日', JLfactory:'176.0',Afactory:'84.5',Bfactory:'48.3',Cfactory:'75.5',Dfactory:'68.5'},
      {yearvalue:'1月15日', JLfactory:'135.6',Afactory:'105.0',Bfactory:'59.0',Cfactory:'57.4',Dfactory:'112.5'}
    ]
  };

    // 牛哥代码
    // app.controller('WaterEnvironmentBICtrl', function($scope, $http, $timeout) {
    $scope.colorpicker = {
        options: {
            orientation: 'horizontal',
            min: 0,
            max: 100,
            range: 'min'
        }
    };
    /**
     * 变量区
     *
     */
    //水质监测点和废水排放点关系图(暂时写死)
    // var waterQualityPredict = [4004,4003,4034];
    var waterQualityPredict = [4003,4004,4005,4032,4033,4034,4044];
    var relationMonitorId = [{
        waterQuality: 4003,
        wasteWaterList: [4011, 4017, 4019]
    }, {
        waterQuality: 4004,
        wasteWaterList: [4015]
    }, {
        waterQuality: 4005,
        wasteWaterList: [4012, 4016]
    }, {
        waterQuality: 4032,
        wasteWaterList: [4012]
    }, {
        waterQuality: 4033,
        wasteWaterList: [4012]
    }, {
        waterQuality: 4034,
        wasteWaterList: [4012]
    }, {
        waterQuality: 4044,
        wasteWaterList: [4013]
    }];
    //关系echart
    var relationChart;
    //变色范围
    var waterQualityO2Scan = {
        scan: [3, 2],
        type: 'desc'
    };
    $scope.waterQualityO2Scan = waterQualityO2Scan;
    var waterQualityKmno4Scan = {
        scan: [10, 15],
        type: 'asc'
    };
    $scope.waterQualityKmno4Scan = waterQualityKmno4Scan;
    var waterQualityNh4nScan = {
        scan: [1.5, 2.0],
        type: 'asc'
    };
    $scope.waterQualityNh4nScan = waterQualityNh4nScan;
    var waterQualityPScan = {
        scan: [0.3, 0.4],
        type: 'asc'
    };
    $scope.waterQualityPScan = waterQualityPScan;
    var waterQualityTnScan = {
        scan: [1.5, 2.0],
        type: 'asc'
    };
    $scope.waterQualityTnScan = waterQualityTnScan;
    var waterPollutionDischargeScan = {
        scan: [0.2, 0.4],
        type: 'asc'
    };
    $scope.waterPollutionDischargeScan = waterPollutionDischargeScan;
    var waterPollutionCodScan = {
        scan: [60, 60],
        type: 'asc'
    };
    $scope.waterPollutionCodScan = waterPollutionCodScan;
    var waterPollutionNh4nScan = {
        scan: [5, 5],
        type: 'asc'
    };
    $scope.waterPollutionNh4nScan = waterPollutionNh4nScan;
    var waterPollutionPScan = {
        scan: [0.5, 0.5],
        type: 'asc'
    };
    $scope.waterPollutionPScan = waterPollutionPScan;
    var waterConditionScan = {
        upLevel: 5,
        downLevel: 5
    };
    $scope.waterConditionScan = waterConditionScan;
    var mapObj;
    //最新整时水质监测点集
    var waterQualityMarkerArr;
    //最新整时超标水质监测点集
    var waterQualityMarkerArr2;
    //最近24小时水质监测点集
    var waterQualityCurrentArr;
    //当前被分析的监测点
    $scope.waterQualityAnalysisMarker = {};
    //当前预测分析后的监测点
    $scope.waterQualityAnalysisMarkerResult = {};
    //当前被分析的废水排放点
    $scope.wasteWaterAnalysisMarker = [];
    //当前被分析的废水拖动条模型列表
    $scope.wasteModelList = [];
    //最近六天废水排放点集
    var wasteWaterMarkerCurrentAllArr;
    //最近一天废水排放点集
    var wasteWaterMarkerArrAll;
    $scope.tableStatus = {
        allWaterQualityArr: true,
        allWaterQualityFailArr: false,
        allWaterQualityFailArrNav: false,
        allWaterQualityElementsArr: false,
        predictionZone: false
    };
    //废水处理总费用
    $scope.feed_sum = 0;
    /**
     * 函数区
     *
     **/
    // 创建和初始化地图函数：
    function initMap() {
        mapInit(); // 创建地图
        addMarker(waterQualityMarkerArr, '/images/environment/marker_sprite.png', 'waterQuality');
        mapObj.setFitView();
    }
    // 初始化地图对象，加载地图
    function mapInit() {
        mapObj = new AMap.Map("map_canvas_BI", { // 二维地图显示视口
            view: new AMap.View2D({
                center: new AMap.LngLat(121.106661, 31.579533), // 地图中心点
                zoom: 11
                    // 地图显示的缩放级别
            })
        });
    }
    // 实例化点标记
    function addMarker(markerInfoArr, imgSrc, type) {
        for (var i = 0; i < markerInfoArr.length; i++) {
            (function(k) {
                addMarkerOne(markerInfoArr[k], imgSrc, type);
            })(i);
        }
    };

    function addMarkerOne(markerInfoOne, imgSrc, type) {
        var p0 = markerInfoOne.point.split("|")[0];
        var p1 = markerInfoOne.point.split("|")[1];
        //自定义点标记内容
        var markerContent = document.createElement("div");
        markerContent.className = "markerContentStyle";
        markerContent.style.color = markerInfoOne.color;
        //点标记中的图标
        var markerImg = document.createElement("img");
        markerImg.src = imgSrc;
        markerContent.appendChild(markerImg);
        //点标记中的文本
        var markerSpan = document.createElement("span");
        markerSpan.innerHTML = markerInfoOne.monitor;
        markerSpan.style.borderRadius = "7px";
        markerSpan.style.borderWidth = 1;
        markerSpan.style.padding = "4px";
        markerContent.appendChild(markerSpan);
        var marker = new AMap.Marker({
            content: markerContent,
            topWhenClick: true,
            topWhenMouseOver: true,
            position: new AMap.LngLat(p0, p1)
        });
        (function(markerTemp) {
            //构建信息窗体中显示的内容
            var info = [];
            info.push("<div><b>" + markerInfoOne.monitor + "(实时数据)" + "</b>");
            if (type == 'waterQuality') {
                info.push("<div style=\"margin-top:10px; font-size:14px\"><table class=\"table table-bordered\">")
                info.push("<tr><td>溶解氧</td><td><span class=\"label " + getLabelCss(getStatusDesc(markerInfoOne.index_o2, waterQualityO2Scan.scan, '溶解氧').status) + "\">" + markerInfoOne.index_o2 + "mg/L</span></td></tr>");
                info.push("<tr><td>高锰酸钾浓度</td><td><span class=\"label " + getLabelCss(getStatusAsc(markerInfoOne.index_kmno4, waterQualityKmno4Scan.scan, '高锰酸钾').status) + "\">" + markerInfoOne.index_kmno4 + "mg/L</span></td></tr>");
                info.push("<tr><td>氨氮浓度</td><td><span class=\"label " + getLabelCss(getStatusAsc(markerInfoOne.index_nh4n, waterQualityNh4nScan.scan, '氨氮').status) + "\">" + markerInfoOne.index_nh4n + "mg/L</span></td></tr>");
                info.push("<tr><td>总磷浓度</td><td><span class=\"label " + getLabelCss(getStatusAsc(markerInfoOne.index_p, waterQualityPScan.scan, '总磷').status) + "\">" + markerInfoOne.index_p + "mg/L</span></td></tr>");
                info.push("<tr><td>水质状态</td><td><span class=\"label " + getLabelCss(markerInfoOne.monitor_status) + "\">" + getChineseStatus(markerInfoOne.monitor_status) + "</span></td></tr>");
                info.push("</table></div></div>");
            } else if (type == 'waterCondition') {
                info.push("<div style=\"margin-top:10px; font-size:14px\"><table class=\"table table-bordered\">")
                info.push("<tr><td>闸上水位</td><td><span class=\"label " + getLabelCss(WaterConditionStatusUpLevel(markerInfoOne.index_levelUp).status) + "\">" + markerInfoOne.index_levelUp + "m</span></td></tr>");
                info.push("<tr><td>闸下水位</td><td><span class=\"label " + getLabelCss(WaterConditionStatusDownLevel(markerInfoOne.index_levelDown).status) + "\">" + markerInfoOne.index_levelDown + "m</span></td></tr>");
                info.push("<tr><td>水质状态</td><td><span class=\"label " + getLabelCss(markerInfoOne.monitor_status) + "\">" + getChineseStatus(markerInfoOne.monitor_status) + "</span></td></tr>");
                info.push("</table></div></div>");
            } else if (type == 'waterPollution') {
                info.push("<div style=\"margin-top:10px; font-size:14px\"><table class=\"table table-bordered\">")
                info.push("<tr><td>排放量</td><td><span class=\"label " + getLabelCss(WasteWaterStatusDischarge(markerInfoOne.index_discharge).status) + "\">" + (markerInfoOne.index_discharge[1]).toFixed(2) + "吨</span></td></tr>");
                info.push("<tr><td>COD浓度</td><td><span class=\"label " + getLabelCss(getStatusAsc(markerInfoOne.index_cod, waterPollutionCodScan.scan, 'COD浓度').status) + "\">" + (markerInfoOne.index_cod).toFixed(2) + "mg/L</span></td></tr>");
                info.push("<tr><td>氨氮浓度</td><td><span class=\"label " + getLabelCss(getStatusAsc(markerInfoOne.index_nh4n, waterPollutionNh4nScan.scan, '氨氮浓度').status) + "\">" + (markerInfoOne.index_nh4n).toFixed(2) + "mg/L</span></td></tr>");
                info.push("<tr><td>总磷浓度</td><td><span class=\"label " + getLabelCss(getStatusAsc(markerInfoOne.index_p, waterPollutionPScan.scan, '总磷浓度').status) + "\">" + (markerInfoOne.index_p).toFixed(2) + "mg/L</span></td></tr>");
                info.push("<tr><td>水质状态</td><td><span class=\"label " + getLabelCss(markerInfoOne.monitor_status) + "\">" + getChineseStatus(markerInfoOne.monitor_status) + "</span></td></tr>");
                info.push("</table></div></div>");
            }
            var infoWindow = new AMap.InfoWindow({
                content: info.join(""), //使用默认信息窗体框样式，显示信息内容
                offset: new AMap.Pixel(16, -45)
            });
            AMap.event.addListener(markerTemp, 'click', function() { //鼠标点击marker弹出自定义的信息窗体
                infoWindow.open(mapObj, markerTemp.getPosition());
            });
        })(marker);
        marker.setMap(mapObj); // 在地图上添加点
    };

    function addMarkerOneAnalysis(markerInfoOne, imgSrc, type) {
        var p0 = markerInfoOne.point.split("|")[0];
        var p1 = markerInfoOne.point.split("|")[1];
        //自定义点标记内容
        var markerContent = document.createElement("div");
        markerContent.className = "markerContentStyle";
        markerContent.style.color = markerInfoOne.color;
        //点标记中的图标
        var markerImg = document.createElement("img");
        markerImg.src = imgSrc;
        markerContent.appendChild(markerImg);
        //点标记中的文本
        var markerSpan = document.createElement("span");
        markerSpan.innerHTML = markerInfoOne.monitor.slice(0, 5);
        markerSpan.style.borderRadius = "7px";
        markerSpan.style.borderWidth = 1;
        markerSpan.style.padding = "4px";
        markerContent.appendChild(markerSpan);
        var marker = new AMap.Marker({
            content: markerContent,
            topWhenClick: true,
            topWhenMouseOver: true,
            position: new AMap.LngLat(p0, p1)
        });
        (function(markerTemp) {
            //构建信息窗体中显示的内容
            var info = [];
            info.push("<div><b>" + markerInfoOne.monitor + "(实时数据)" + "</b>");
            if (type == 'waterQuality') {
                info.push("<div style=\"margin-top:10px; font-size:14px\"><table class=\"table table-bordered\">")
                info.push("<tr><td>溶解氧</td><td><span class=\"label " + getLabelCss(getStatusDesc(markerInfoOne.index_o2, waterQualityO2Scan.scan, '溶解氧').status) + "\">" + markerInfoOne.index_o2 + "mg/L</span></td></tr>");
                info.push("<tr><td>高锰酸钾浓度</td><td><span class=\"label " + getLabelCss(getStatusAsc(markerInfoOne.index_kmno4, waterQualityKmno4Scan.scan, '高锰酸钾').status) + "\">" + markerInfoOne.index_kmno4 + "mg/L</span></td></tr>");
                info.push("<tr><td>氨氮浓度</td><td><span class=\"label " + getLabelCss(getStatusAsc(markerInfoOne.index_nh4n, waterQualityNh4nScan.scan, '氨氮').status) + "\">" + markerInfoOne.index_nh4n + "mg/L</span></td></tr>");
                info.push("<tr><td>总磷浓度</td><td><span class=\"label " + getLabelCss(getStatusAsc(markerInfoOne.index_p, waterQualityPScan.scan, '总磷').status) + "\">" + markerInfoOne.index_p + "mg/L</span></td></tr>");
                info.push("<tr><td>水质状态</td><td><span class=\"label " + getLabelCss(markerInfoOne.monitor_status) + "\">" + getChineseStatus(markerInfoOne.monitor_status) + "</span></td></tr>");
                info.push("</table></div></div>");
            } else if (type == 'waterCondition') {
                info.push("<div style=\"margin-top:10px; font-size:14px\"><table class=\"table table-bordered\">")
                info.push("<tr><td>闸上水位</td><td><span class=\"label " + getLabelCss(WaterConditionStatusUpLevel(markerInfoOne.index_levelUp).status) + "\">" + markerInfoOne.index_levelUp + "m</span></td></tr>");
                info.push("<tr><td>闸下水位</td><td><span class=\"label " + getLabelCss(WaterConditionStatusDownLevel(markerInfoOne.index_levelDown).status) + "\">" + markerInfoOne.index_levelDown + "m</span></td></tr>");
                info.push("<tr><td>水质状态</td><td><span class=\"label " + getLabelCss(markerInfoOne.monitor_status) + "\">" + getChineseStatus(markerInfoOne.monitor_status) + "</span></td></tr>");
                info.push("</table></div></div>");
            } else if (type == 'waterPollution') {
                info.push("<div style=\"margin-top:10px; font-size:14px\"><table class=\"table table-bordered\">")
                info.push("<tr><td>排放量</td><td><span class=\"label " + getLabelCss(WasteWaterStatusDischarge(markerInfoOne.index_discharge).status) + "\">" + (markerInfoOne.index_discharge[1]).toFixed(2) + "吨</span></td></tr>");
                info.push("<tr><td>COD浓度</td><td><span class=\"label " + getLabelCss(getStatusAsc(markerInfoOne.index_cod, waterPollutionCodScan.scan, 'COD浓度').status) + "\">" + (markerInfoOne.index_cod).toFixed(2) + "mg/L</span></td></tr>");
                info.push("<tr><td>氨氮浓度</td><td><span class=\"label " + getLabelCss(getStatusAsc(markerInfoOne.index_nh4n, waterPollutionNh4nScan.scan, '氨氮浓度').status) + "\">" + (markerInfoOne.index_nh4n).toFixed(2) + "mg/L</span></td></tr>");
                info.push("<tr><td>总磷浓度</td><td><span class=\"label " + getLabelCss(getStatusAsc(markerInfoOne.index_p, waterPollutionPScan.scan, '总磷浓度').status) + "\">" + (markerInfoOne.index_p).toFixed(2) + "mg/L</span></td></tr>");
                info.push("<tr><td>水质状态</td><td><span class=\"label " + getLabelCss(markerInfoOne.monitor_status) + "\">" + getChineseStatus(markerInfoOne.monitor_status) + "</span></td></tr>");
                info.push("</table></div></div>");
            }
            var infoWindow = new AMap.InfoWindow({
                content: info.join(""), //使用默认信息窗体框样式，显示信息内容
                offset: new AMap.Pixel(16, -45)
            });
            infoWindow.open(mapObj, markerTemp.getPosition());
            AMap.event.addListener(markerTemp, 'click', function() { //鼠标点击marker弹出自定义的信息窗体
                infoWindow.open(mapObj, markerTemp.getPosition());
            });
        })(marker);
        marker.setMap(mapObj); // 在地图上添加点
    };

    function removeMarker() {
        mapObj.clearMap();
    };
    //水质量 http请求后处理过程（即http.success(function(data))中的function)
    var waterQualityCurrentSuccess = function(data) {
        //地图初始化，无法在函数外初始化（暂时没搞懂）
        if (data.data.length == 0) return null;
        waterQualityCurrentArr = [];
        waterQualityMarkerArr = [];
       // console.log(data.data);
        var hourOne = data.data[0].hour;
        //取每四小时的最大值
        for (var i = 0; i < data.data.length / 24; i++) {//天
            var index_o2List = [];
            var index_kmno4List = [];
            var index_nh4nList = [];
            var index_pList = [];
            for (var j = 0; j < 6; j++) {
                var index_o2Max4 = 0;
                var index_kmon4Max4 = 0;
                var index_nh4nMax4 = 0;
                var index_pMax4 = 0;
                for (var k = 0; k < 4; k++) {
                    if (parseFloat(data.data[i * 24 + j * 4 + k].o2) > index_o2Max4) index_o2Max4 = parseFloat(data.data[i * 24 + j * 4 + k].o2);
                    if (parseFloat(data.data[i * 24 + j * 4 + k].kmno4) > index_kmon4Max4) index_kmon4Max4 = parseFloat(data.data[i * 24 + j * 4 + k].kmno4);
                    if (parseFloat(data.data[i * 24 + j * 4 + k].nh4n) > index_nh4nMax4) index_nh4nMax4 = parseFloat(data.data[i * 24 + j * 4 + k].nh4n);
                    if (parseFloat(data.data[i * 24 + j * 4 + k].p) > index_pMax4) index_pMax4 = parseFloat(data.data[i * 24 + j * 4 + k].p);
                }
                index_o2List.push(index_o2Max4);
                index_kmno4List.push(index_kmon4Max4);
                index_nh4nList.push(index_nh4nMax4);
                index_pList.push(index_pMax4);
            }
            waterQualityCurrentArr.push({
                monitor: data.data[i * 24].waterMonitor.name,
                point: data.data[i * 24].waterMonitor.description,
                abbr: data.data[i * 24].waterMonitor.abbr,
                dictid: data.data[i * 24].waterMonitor.id,
                index_o2List: index_o2List,
                index_kmno4List: index_kmno4List,
                index_nh4nList: index_nh4nList,
                index_pList: index_pList,
            });
        }
        for (var i = 0; i < waterQualityCurrentArr.length; i++) {
            var waterQualityTempOne = {
                o2: waterQualityCurrentArr[i].index_o2List[5],
                kmno4: waterQualityCurrentArr[i].index_kmno4List[5],
                nh4n: waterQualityCurrentArr[i].index_nh4nList[5],
                p: waterQualityCurrentArr[i].index_pList[5],
            };
            if(waterQualityFilter(waterQualityCurrentArr[i].dictid))
            waterQualityMarkerArr.push({
                monitor: waterQualityCurrentArr[i].monitor,
                point: waterQualityCurrentArr[i].point,
                abbr: waterQualityCurrentArr[i].abbr,
                dictid: waterQualityCurrentArr[i].dictid,
                color: getStatusColor(getWaterQualityMonitorStatus(waterQualityTempOne)),
                index_o2: waterQualityTempOne.o2,
                index_kmno4: waterQualityTempOne.kmno4,
                index_nh4n: waterQualityTempOne.nh4n,
                index_p: waterQualityTempOne.p,
                monitor_status: getWaterQualityMonitorStatus(waterQualityTempOne)
            });
        }
        //水质量表格列表数据
        $scope.waterQualityMarkerList = waterQualityMarkerArr;
        //水质量超标数据以及列表数据
        waterQualityMarkerArr2 = getWaterQualityFailArr(waterQualityMarkerArr);
        $scope.waterQualityMarkerList2 = waterQualityMarkerArr2;
        //超标水质监测点个数统计
        $scope.waterQualityMonitorStatusCount = getWaterQualityMonitorStatusCount(waterQualityMarkerArr);
    };
    //获取水质监测点异常个数
    function getWaterQualityMonitorStatusCount(waterQualityMarker) {
        var countResult = {
            accept: 0,
            caution: 0,
            take_action: 0,
            invalid: 0
        }
        for (var i = 0; i < waterQualityMarker.length; i++) {
            if (waterQualityMarker[i].monitor_status == 'caution') countResult.caution += 1;
            else if (waterQualityMarker[i].monitor_status == 'take_action') countResult.take_action += 1;
            else if (waterQualityMarker[i].monitor_status == 'accept') countResult.accept += 1;
            else countResult.invalid += 1;
        }
        var result = {
            accept: countResult.accept,
            fail: (countResult.caution + countResult.take_action),
            invalid: countResult.invalid
        };
        return result;
    };
    //获取水质监测点超标列表
    function getWaterQualityFailArr(waterQualityMarkerArr) {
        var result = [];
        for (var i = 0; i < waterQualityMarkerArr.length; i++) {
            // if (waterQualityMarkerArr[i].monitor_status == 'caution' || waterQualityMarkerArr[i].monitor_status == 'take_action') {
                result.push(waterQualityMarkerArr[i]);
            // }
        }
        return result;
    };
    //水质量 监测站状态获取
    function getWaterQualityMonitorStatus(waterQualityMarkerOne) {
        var indexStatusList = {
            o2Status: getStatusDesc(waterQualityMarkerOne.o2, waterQualityO2Scan.scan, '溶解氧').status,
            kmno4Status: getStatusAsc(waterQualityMarkerOne.kmno4, waterQualityKmno4Scan.scan, '高锰酸钾').status,
            nh4nStatus: getStatusAsc(waterQualityMarkerOne.nh4n, waterQualityNh4nScan.scan, '氨氮').status,
            pStatus: getStatusAsc(waterQualityMarkerOne.p, waterQualityPScan.scan, '总磷').status,
        };
        var statusList = [];
        angular.forEach(indexStatusList, function(value, key) {
            this.push(value);
        }, statusList);
        var countResult = {
            accept: 0,
            caution: 0,
            take_action: 0,
            invalid: 0
        }
        for (var i = 0; i < statusList.length; i++) {
            if (statusList[i] == 'accept') countResult.accept += 1;
            else if (statusList[i] == 'caution') countResult.caution += 1;
            else if (statusList[i] == 'take_action') countResult.take_action += 1;
            else if (statusList[i] == 'invalid') countResult.invalid += 1;
        }
        if (countResult.take_action >= 1) return 'take_action';
        else if (countResult.caution >= 1) return 'caution';
        else if (countResult.accept == statusList.length) return 'accept';
        else return 'invalid';
    };
    function waterQualityFilter(id){
        for(var i=0;i<waterQualityPredict.length;i++){
            if(id == waterQualityPredict[i]) return true;
        }
        return false;
    };


    //废水排放 http请求后处理过程（即http.success(function(data))中的function)
    var wasteWaterCurrentSuccess = function(data) {
        if (data.data.length == 0) return null;
        var wasteWaterMarkerAllTemp = [];
        wasteWaterMarkerCurrentAllArr = wasteWaterCurrentAllGet(data);
        for (var i = 0; i < wasteWaterMarkerCurrentAllArr.length; i++) {
            wasteWaterMarkerAllTemp.push({
                monitor: wasteWaterMarkerCurrentAllArr[i].wasteSource,
                point: wasteWaterMarkerCurrentAllArr[i].point,
                abbr: wasteWaterMarkerCurrentAllArr[i].abbr,
                dictid: wasteWaterMarkerCurrentAllArr[i].dictid,
                color: getStatusColor(getWasteWaterMonitorStatus(wasteWaterMarkerCurrentAllArr[i])),
                monitor_status: getWasteWaterMonitorStatus(wasteWaterMarkerCurrentAllArr[i]),
                index_discharge: wasteWaterMarkerCurrentAllArr[i].index_discharge.slice(4),
                index_cod: wasteWaterMarkerCurrentAllArr[i].index_cod[5],
                index_nh4n: wasteWaterMarkerCurrentAllArr[i].index_nh4n[5],
                index_p: wasteWaterMarkerCurrentAllArr[i].index_p[5]
            });
        }
        wasteWaterMarkerArrAll = wasteWaterMarkerAllTemp;
        //废水排放表格列表数据
        $scope.wasteWaterMarkerList = wasteWaterMarkerArrAll;
    };
    //废水排放抽出所有污染源最近六天的数据
    function wasteWaterCurrentAllGet(data) {
        var wasteWaterTemp = [];
        for (var i = 0; i < data.data.length / 6; i++) {
            var index_dischargeList = [];
            var index_codList = [];
            var index_nh4nList = [];
            var index_pList = [];
            for (var j = 0; j < 6; j++) {
                index_dischargeList.push(parseFloat(data.data[i * 6 + j].discharge));
                index_codList.push(parseFloat(data.data[i * 6 + j].cod));
                index_nh4nList.push(parseFloat(data.data[i * 6 + j].nh4n));
                index_pList.push(parseFloat(data.data[i * 6 + j].p));
            }
            wasteWaterTemp.push({
                wasteSource: data.data[i * 6].waterPollutionSource.name,
                point: data.data[i * 6].waterPollutionSource.description,
                abbr: data.data[i * 6].waterPollutionSource.abbr,
                dictid: data.data[i * 6].waterPollutionSource.id,
                index_discharge: index_dischargeList,
                index_cod: index_codList,
                index_nh4n: index_nh4nList,
                index_p: index_pList
            });
        }

        function sortWaterPollution(a, b) {
            return b.index_discharge[5] - a.index_discharge[5];
        }
        wasteWaterTemp.sort(sortWaterPollution);
        return wasteWaterTemp;
    };
    //废水排放 监测点状态获取
    function getWasteWaterMonitorStatus(wasteWaterMarkerArrOne) {
        var indexStatusList = {
            index_discharge: WasteWaterStatusDischarge(wasteWaterMarkerArrOne.index_discharge.slice(4)).status,
            index_cod: getStatusAsc(wasteWaterMarkerArrOne.index_cod[5], waterPollutionCodScan.scan, 'COD浓度').status,
            index_nh4n: getStatusAsc(wasteWaterMarkerArrOne.index_nh4n[5], waterPollutionNh4nScan.scan, '氨氮浓度').status,
            index_p: getStatusAsc(wasteWaterMarkerArrOne.index_p[5], waterPollutionPScan.scan, '总磷浓度').status,
        };
        var statusList = [];
        angular.forEach(indexStatusList, function(value, key) {
            this.push(value);
        }, statusList);
        var countResult = {
            accept: 0,
            caution: 0,
            take_action: 0,
            invalid: 0
        }
        for (var i = 0; i < statusList.length; i++) {
            if (statusList[i] == 'accept') countResult.accept += 1;
            else if (statusList[i] == 'caution') countResult.caution += 1;
            else if (statusList[i] == 'take_action') countResult.take_action += 1;
            else if (statusList[i] == 'invalid') countResult.invalid += 1;
        }
        if (countResult.take_action >= 1) return 'take_action';
        else if (countResult.caution >= 1) return 'caution';
        else if (countResult.accept == statusList.length) return 'accept';
        else return 'invalid';
    };
    //废水排放 废水排放量 指标状态获取
    function WasteWaterStatusDischarge(data) {
        if ((data[1] - data[0]) / data[0] <= waterPollutionDischargeScan.scan[0] && data[1] != 0) {
            return {
                status: "accept",
                sentence: "废水排放量优良"
            }
        } else if ((data[1] - data[0]) / data[0] <= waterPollutionDischargeScan.scan[1] && (data[1] - data[0]) / data[0] > waterPollutionDischargeScan.scan[0] && data[1] != 0) {
            return {
                status: "caution",
                sentence: "废水排放量增长一般"
            }
        } else if (((data[1] - data[0]) / data[0]) > waterPollutionDischargeScan.scan[1] && data[1] != 0) {
            return {
                status: "take_action",
                sentence: "废水排放量增长迅速"
            }
        } else {
            return {
                status: "invalid",
                sentence: "废水排放量 无数据"
            }
        }
    };
    //抽出和水质监测点相关的废水排放点集
    function getRelatedWasteWaterList(waterQualityMarkerArrOne, wasteWaterMarkerArr) {
        var dictid = waterQualityMarkerArrOne.dictid;
        var relatedWaterWaterIdList = [];
        var result = [];
        for (var i = 0; i < relationMonitorId.length; i++) {
            if (dictid == relationMonitorId[i].waterQuality) relatedWaterWaterIdList = relationMonitorId[i].wasteWaterList;
        }
        for (var j = 0; j < wasteWaterMarkerArr.length; j++) {
            for (var k = 0; k < relatedWaterWaterIdList.length; k++) {
                if (wasteWaterMarkerArr[j].dictid == relatedWaterWaterIdList[k]) {
                    result.push(wasteWaterMarkerArr[j]);
                }
            }
        }
        return result;
    };
    //右边按钮点击控制区块的出现和消失
    $scope.btn_waterEnvironmentAnalysisAllList = function() {
        $scope.tableStatus = {
            allWaterQualityArr: false,
            allWaterQualityFailArr: true,
            allWaterQualityFailArrNav: true,
            allWaterQualityElementsArr: false,
            predictionZone: false
        };
        removeMarker();
        addMarker(waterQualityMarkerArr2, '/images/environment/marker_sprite.png', 'waterQuality');
        mapObj.setFitView();
    };
    $scope.btn_waterEnvironmentAnalysisElementsList = function(waterQualityMarkerArrOne) {
        $scope.tableStatus = {
            allWaterQualityArr: false,
            allWaterQualityFailArr: false,
            allWaterQualityFailArrNav: true,
            allWaterQualityElementsArr: true,
            predictionZone: false
        };
        removeMarker();
        $scope.waterQualityAnalysisMarker = waterQualityMarkerArrOne;
        $scope.wasteWaterAnalysisMarker = getRelatedWasteWaterList(waterQualityMarkerArrOne, wasteWaterMarkerArrAll);
        $scope.wasteModelList = getWasteModelList($scope.wasteWaterAnalysisMarker);
        addMarker($scope.wasteWaterAnalysisMarker, '/images/environment/factory.png', 'waterPollution');
        addMarkerOneAnalysis(waterQualityMarkerArrOne, '/images/environment/marker_sprite.png', 'waterQuality');
        mapObj.setFitView();
        mapObj.zoomOut();
        mapObj.zoomOut();
        mapObj.zoomOut();
    };
    $scope.btn_waterEnvironmentAllList = function() {
        $scope.tableStatus = {
            allWaterQualityArr: true,
            allWaterQualityFailArr: false,
            allWaterQualityFailArrNav: false,
            allWaterQualityElementsArr: false,
            predictionZone: false
        };
        removeMarker();
        addMarker(waterQualityMarkerArr, '/images/environment/marker_sprite.png', 'waterQuality');
        mapObj.setFitView();
    };
    $scope.btn_waterPredictionZone = function() {
        $scope.tableStatus = {
            allWaterQualityArr: false,
            allWaterQualityFailArr: false,
            allWaterQualityFailArrNav: true,
            allWaterQualityElementsArr: true,
            predictionZone: true
        };
        echartInit();
        // $.isLoading();
        // $timeout(function() {
        //     $.isLoading('hide');
            
        //     window.scrollTo(0, 950);
        // }, 1000);
    };
    //预测数据格式预处理
    function transferWaterQuality(waterQualityAnalysisMarker) {
        return {
            dictid: waterQualityAnalysisMarker.dictid,
            monitor: waterQualityAnalysisMarker.monitor,
            index_o2: waterQualityAnalysisMarker.index_o2,
            index_kmno4: waterQualityAnalysisMarker.index_kmno4,
            index_nh4n: waterQualityAnalysisMarker.index_nh4n,
            index_p: waterQualityAnalysisMarker.index_p,
        }
    };

    function transferWaterPollutions(wasteWaterAnalysisModelArr) {
        var result = [];
        for (var i = 0; i < wasteWaterAnalysisModelArr.length; i++) {
            result.push({
                dictid: wasteWaterAnalysisModelArr[i].dictid,
                monitor: wasteWaterAnalysisModelArr[i].monitor,
                index_discharge: wasteWaterAnalysisModelArr[i].dischargeValue * wasteWaterAnalysisModelArr[i].dischargeChange / 100,
                index_cod: wasteWaterAnalysisModelArr[i].codValue * wasteWaterAnalysisModelArr[i].codChange / 100,
                index_nh4n: wasteWaterAnalysisModelArr[i].nh4nValue * wasteWaterAnalysisModelArr[i].nh4nChange / 100,
                index_p: wasteWaterAnalysisModelArr[i].pValue * wasteWaterAnalysisModelArr[i].pChange / 100
            });
        }
        return result;
    };
    //关系echarts图表初始化
    function echartInit() {
        relationChart = echarts.init(relation_chart);
        var relationOption = {
            title: {},
            tooltip: {
                trigger: 'item',
                formatter: '{a} : {b}'
            },
            legend: {
                x: 'left',
                data: ['水质', '废水排放源头']
            },
            series: [{
                type: 'force',
                name: "水质影响关系",
                categories: [{
                    name: '水质',
                    itemStyle: {
                        normal: {
                            color: '#66FF66'
                        }
                    }
                }, {
                    name: '废水排放源头',
                    itemStyle: {
                        normal: {
                            color: '#fc8686'
                        }
                    }
                }],
                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            textStyle: {
                                color: '#333'
                            }
                        },
                        nodeStyle: {
                            brushType: 'both',
                            strokeColor: 'rgba(255,215,0,0.4)',
                            lineWidth: 1
                        }
                    },
                    emphasis: {
                        label: {
                            show: false
                                // textStyle: null // 默认使用全局文本样式，详见TEXTSTYLE
                        },
                        nodeStyle: {
                            // r: 30
                        },
                        linkStyle: {}
                    }
                },
                useWorker: false,
                minRadius: 15,
                maxRadius: 25,
                gravity: 1.1,
                scaling: 1.1,
                linkSymbol: 'arrow',
                nodes: getNodes(),
                links: getLinks()
            }]
        };
        relationChart.setOption(relationOption);
    };
    //echarts node构造
    function getNodes() {
        var node = {
            category: 0,
            name: $scope.waterQualityAnalysisMarker.monitor,
            value: 15,
            label: $scope.waterQualityAnalysisMarker.monitor
        };
        var result = [];
        result.push(node);
        for (var i = 0; i < $scope.wasteWaterAnalysisMarker.length; i++) {
            result.push({
                category: 1,
                name: $scope.wasteWaterAnalysisMarker[i].monitor,
                value: 12,
                label: $scope.wasteWaterAnalysisMarker[i].monitor
            });
        }
        return result;
    };
    //echarts link构造
    function getLinks() {
        var result = [];
        for (var i = 0; i < $scope.wasteWaterAnalysisMarker.length; i++) {
            result.push({
                source: $scope.wasteWaterAnalysisMarker[i].monitor,
                target: $scope.waterQualityAnalysisMarker.monitor,
                weight: 2,
                name: '影响水质'
            });
        }
        return result;
    };
    //废水预测模型列表的生成
    function getWasteModelList(wasteWaterAnalysisMarker) {
        var result = [];
        for (var i = 0; i < wasteWaterAnalysisMarker.length; i++) {
            result.push({
                dictid: wasteWaterAnalysisMarker[i].dictid,
                monitor: wasteWaterAnalysisMarker[i].monitor,
                title: wasteWaterAnalysisMarker[i].monitor,
                dischargeChange: 100,
                dischargeValue: parseFloat(wasteWaterAnalysisMarker[i].index_discharge[1].toFixed(2)),
                codChange: 100,
                codValue: parseFloat(wasteWaterAnalysisMarker[i].index_cod.toFixed(2)),
                nh4nChange: 100,
                nh4nValue: parseFloat(wasteWaterAnalysisMarker[i].index_nh4n.toFixed(2)),
                pChange: 100,
                pValue: parseFloat(wasteWaterAnalysisMarker[i].index_p.toFixed(2))
            });
        }
        return result;
    };
    $scope.button_reset = function() {
        for (var i = 0; i < $scope.wasteModelList.length; i++) {
            $scope.wasteModelList[i].dischargeChange = 100;
            $scope.wasteModelList[i].codChange = 100;
            $scope.wasteModelList[i].nh4nChange = 100;
            $scope.wasteModelList[i].pChange = 100;
        }
    };
    $scope.button_recommend = function() {
        var dataTemp = {
		  waterQuality: transferWaterQuality($scope.waterQualityAnalysisMarker),
		  waterPollutions: transferWaterPollutions($scope.wasteModelList)
		};
    
		$.isLoading();
		$timeout(function() {
		  $.isLoading('hide');
		  for (var i = 0; i < $scope.wasteModelList.length; i++) {
		      $scope.wasteModelList[i].dischargeChange = parseInt(80 + Math.random()*15);
		      $scope.wasteModelList[i].codChange = parseInt(70 + Math.random()*30);
		      $scope.wasteModelList[i].nh4nChange = parseInt(50 + Math.random()*50);
		      $scope.wasteModelList[i].pChange = parseInt(90 + Math.random()*10);
		    }
		  

		 
		}, 1000);
    };
    $scope.source_predict = function() {
        $.isLoading();
        $timeout(function() {
            $.isLoading('hide');
            var dataTemp = {
                waterQuality: transferWaterQuality($scope.waterQualityAnalysisMarker),
                waterPollutions: transferWaterPollutions($scope.wasteModelList)
            };
            $scope.predict_waterquality = {};


   //          var promiseWaterBI = qService.tokenHttpPost(biFactory.waterBiPredict, null,dataTemp);
			// promiseWaterBI.then(function(data) {
            //   $scope.predict_waterquality = data.data;
				$scope.predict_waterquality = predictProcess(dataTemp.waterQuality);
                console.log($scope.predict_waterquality);
                var chartWaterQualityo2 = new Highcharts.Chart({
                    chart: {
                        type: 'gauge',
                        plotBackgroundColor: null,
                        plotBackgroundImage: null,
                        plotBorderWidth: 0,
                        plotShadow: false,
                        renderTo: 'chart_WaterQualityo2'
                    },
                    title: {
                        text: '溶解氧',
                        margin: 0,
                        style: {
                            fontSize: "14px"
                        }
                    },
                    pane: {
                        startAngle: -150,
                        endAngle: 150,
                        background: [{
                            backgroundColor: {
                                linearGradient: {
                                    x1: 0,
                                    y1: 0,
                                    x2: 0,
                                    y2: 1
                                },
                                stops: [
                                    [0, '#FFF'],
                                    [1, '#333']
                                ]
                            },
                            borderWidth: 0,
                            outerRadius: '109%'
                        }, {
                            backgroundColor: {
                                linearGradient: {
                                    x1: 0,
                                    y1: 0,
                                    x2: 0,
                                    y2: 1
                                },
                                stops: [
                                    [0, '#333'],
                                    [1, '#FFF']
                                ]
                            },
                            borderWidth: 1,
                            outerRadius: '107%'
                        }, {
                            // default background
                        }, {
                            backgroundColor: '#DDD',
                            borderWidth: 0,
                            outerRadius: '105%',
                            innerRadius: '103%'
                        }]
                    },
                    // the value axis
                    yAxis: {
                        min: 0,
                        max: 15,
                        minorTickInterval: 'auto',
                        minorTickWidth: 1,
                        minorTickLength: 10,
                        minorTickPosition: 'inside',
                        minorTickColor: '#666',
                        tickPixelInterval: 30,
                        tickWidth: 2,
                        tickPosition: 'inside',
                        tickLength: 10,
                        tickColor: '#666',
                        labels: {
                            step: 2,
                            rotation: 'auto'
                        },
                        title: {
                            text: ''
                        },
                        plotBands: [{
                            from: waterQualityO2Scan.scan[0],
                            to: 15,
                            color: '#55BF3B' // green
                        }, {
                            from: waterQualityO2Scan.scan[1],
                            to: waterQualityO2Scan.scan[0],
                            color: '#DDDF0D' // yellow
                        }, {
                            from: 0,
                            to: waterQualityO2Scan.scan[1],
                            color: '#DF5353' // red
                        }]
                    },
                    series: [{
                        name: '溶解氧',
                        data: [parseFloat($scope.predict_waterquality.index_o2)],
                        tooltip: {
                            valueSuffix: ' '
                        }
                    }],
                    credits: {
                        enabled: false
                    }
                });
                var chartWaterQualitykmno4 = new Highcharts.Chart({
                    chart: {
                        type: 'gauge',
                        plotBackgroundColor: null,
                        plotBackgroundImage: null,
                        plotBorderWidth: 0,
                        plotShadow: false,
                        renderTo: 'chart_WaterQualitykmno4'
                    },
                    title: {
                        text: '高锰酸钾',
                        margin: 0,
                        style: {
                            fontSize: "14px"
                        }
                    },
                    pane: {
                        startAngle: -150,
                        endAngle: 150,
                        background: [{
                            backgroundColor: {
                                linearGradient: {
                                    x1: 0,
                                    y1: 0,
                                    x2: 0,
                                    y2: 1
                                },
                                stops: [
                                    [0, '#FFF'],
                                    [1, '#333']
                                ]
                            },
                            borderWidth: 0,
                            outerRadius: '109%'
                        }, {
                            backgroundColor: {
                                linearGradient: {
                                    x1: 0,
                                    y1: 0,
                                    x2: 0,
                                    y2: 1
                                },
                                stops: [
                                    [0, '#333'],
                                    [1, '#FFF']
                                ]
                            },
                            borderWidth: 1,
                            outerRadius: '107%'
                        }, {
                            // default background
                        }, {
                            backgroundColor: '#DDD',
                            borderWidth: 0,
                            outerRadius: '105%',
                            innerRadius: '103%'
                        }]
                    },
                    // the value axis
                    yAxis: {
                        min: 0,
                        max: 30,
                        minorTickInterval: 'auto',
                        minorTickWidth: 1,
                        minorTickLength: 10,
                        minorTickPosition: 'inside',
                        minorTickColor: '#666',
                        tickPixelInterval: 30,
                        tickWidth: 2,
                        tickPosition: 'inside',
                        tickLength: 10,
                        tickColor: '#666',
                        labels: {
                            step: 2,
                            rotation: 'auto'
                        },
                        title: {
                            text: ''
                        },
                        plotBands: [{
                            from: 0,
                            to: waterQualityKmno4Scan.scan[0],
                            color: '#55BF3B' // green
                        }, {
                            from: waterQualityKmno4Scan.scan[0],
                            to: waterQualityKmno4Scan.scan[1],
                            color: '#DDDF0D' // yellow
                        }, {
                            from: waterQualityKmno4Scan.scan[1],
                            to: 30,
                            color: '#DF5353' // red
                        }]
                    },
                    series: [{
                        name: '高锰酸钾',
                        data: [parseFloat($scope.predict_waterquality.index_kmno4)],
                        tooltip: {
                            valueSuffix: 'mg/L'
                        }
                    }],
                    credits: {
                        enabled: false
                    }
                });
                var chartWaterQualitynh4n = new Highcharts.Chart({
                    chart: {
                        type: 'gauge',
                        plotBackgroundColor: null,
                        plotBackgroundImage: null,
                        plotBorderWidth: 0,
                        plotShadow: false,
                        renderTo: 'chart_WaterQualitynh4n'
                    },
                    title: {
                        text: '氨氮',
                        margin: 0,
                        style: {
                            fontSize: "14px"
                        }
                    },
                    pane: {
                        startAngle: -150,
                        endAngle: 150,
                        background: [{
                            backgroundColor: {
                                linearGradient: {
                                    x1: 0,
                                    y1: 0,
                                    x2: 0,
                                    y2: 1
                                },
                                stops: [
                                    [0, '#FFF'],
                                    [1, '#333']
                                ]
                            },
                            borderWidth: 0,
                            outerRadius: '109%'
                        }, {
                            backgroundColor: {
                                linearGradient: {
                                    x1: 0,
                                    y1: 0,
                                    x2: 0,
                                    y2: 1
                                },
                                stops: [
                                    [0, '#333'],
                                    [1, '#FFF']
                                ]
                            },
                            borderWidth: 1,
                            outerRadius: '107%'
                        }, {
                            // default background
                        }, {
                            backgroundColor: '#DDD',
                            borderWidth: 0,
                            outerRadius: '105%',
                            innerRadius: '103%'
                        }]
                    },
                    // the value axis
                    yAxis: {
                        min: 0,
                        max: 5,
                        minorTickInterval: 'auto',
                        minorTickWidth: 1,
                        minorTickLength: 10,
                        minorTickPosition: 'inside',
                        minorTickColor: '#666',
                        tickPixelInterval: 30,
                        tickWidth: 2,
                        tickPosition: 'inside',
                        tickLength: 10,
                        tickColor: '#666',
                        labels: {
                            step: 2,
                            rotation: 'auto'
                        },
                        title: {
                            text: ''
                        },
                        plotBands: [{
                            from: 0,
                            to: waterQualityNh4nScan.scan[0],
                            color: '#55BF3B' // green
                        }, {
                            from: waterQualityNh4nScan.scan[0],
                            to: waterQualityNh4nScan.scan[1],
                            color: '#DDDF0D' // yellow
                        }, {
                            from: waterQualityNh4nScan.scan[1],
                            to: 5.0,
                            color: '#DF5353' // red
                        }]
                    },
                    series: [{
                        name: '氨氮',
                        data: [parseFloat($scope.predict_waterquality.index_nh4n)],
                        tooltip: {
                            valueSuffix: 'mg/L'
                        }
                    }],
                    credits: {
                        enabled: false
                    }
                });
                var chartWaterQualityp = new Highcharts.Chart({
                    chart: {
                        type: 'gauge',
                        plotBackgroundColor: null,
                        plotBackgroundImage: null,
                        plotBorderWidth: 0,
                        plotShadow: false,
                        renderTo: 'chart_WaterQualityp'
                    },
                    title: {
                        text: '总磷',
                        margin: 0,
                        style: {
                            fontSize: "14px"
                        }
                    },
                    pane: {
                        startAngle: -150,
                        endAngle: 150,
                        background: [{
                            backgroundColor: {
                                linearGradient: {
                                    x1: 0,
                                    y1: 0,
                                    x2: 0,
                                    y2: 1
                                },
                                stops: [
                                    [0, '#FFF'],
                                    [1, '#333']
                                ]
                            },
                            borderWidth: 0,
                            outerRadius: '109%'
                        }, {
                            backgroundColor: {
                                linearGradient: {
                                    x1: 0,
                                    y1: 0,
                                    x2: 0,
                                    y2: 1
                                },
                                stops: [
                                    [0, '#333'],
                                    [1, '#FFF']
                                ]
                            },
                            borderWidth: 1,
                            outerRadius: '107%'
                        }, {
                            // default background
                        }, {
                            backgroundColor: '#DDD',
                            borderWidth: 0,
                            outerRadius: '105%',
                            innerRadius: '103%'
                        }]
                    },
                    // the value axis
                    yAxis: {
                        min: 0,
                        max: 0.6,
                        minorTickInterval: 'auto',
                        minorTickWidth: 1,
                        minorTickLength: 10,
                        minorTickPosition: 'inside',
                        minorTickColor: '#666',
                        tickPixelInterval: 30,
                        tickWidth: 2,
                        tickPosition: 'inside',
                        tickLength: 10,
                        tickColor: '#666',
                        labels: {
                            step: 2,
                            rotation: 'auto'
                        },
                        title: {
                            text: ''
                        },
                        plotBands: [{
                            from: 0,
                            to: waterQualityPScan.scan[0],
                            color: '#55BF3B' // green
                        }, {
                            from: waterQualityPScan.scan[0],
                            to: waterQualityPScan.scan[1],
                            color: '#DDDF0D' // yellow
                        }, {
                            from: waterQualityPScan.scan[1],
                            to: 0.6,
                            color: '#DF5353' // red
                        }]
                    },
                    series: [{
                        name: '总磷',
                        data: [parseFloat($scope.predict_waterquality.index_p)],
                        tooltip: {
                            valueSuffix: 'mg/L'
                        }
                    }],
                    credits: {
                        enabled: false
                    }
                });
                $('#Modal_Predict').modal();
			// });


            // $http.post("/waterEnvironmentAnalysis/predict", dataTemp).success(function(data) {
               
            // });
        }, 1000);
    };

    var waterQualityO2Scan = {
        scan: [3, 2],
        type: 'desc'
    };
    $scope.waterQualityO2Scan = waterQualityO2Scan;
    var waterQualityKmno4Scan = {
        scan: [10, 15],
        type: 'asc'
    };
    $scope.waterQualityKmno4Scan = waterQualityKmno4Scan;
    var waterQualityNh4nScan = {
        scan: [1.5, 2.0],
        type: 'asc'
    };
    $scope.waterQualityNh4nScan = waterQualityNh4nScan;
    var waterQualityPScan = {
        scan: [0.3, 0.4],
        type: 'asc'
    };
    $scope.waterQualityPScan = waterQualityPScan;
    var waterQualityTnScan = {
        scan: [1.5, 2.0],
        type: 'asc'
    };

    var predictProcess = function(data){
        var data = {
            dictid: data.dictid,
            monitor: data.monitor,
            index_o2: (100/$scope.wasteModelList[0].dischargeChange*data.index_o2*2).toFixed(2),
            index_kmno4: ($scope.wasteModelList[0].dischargeChange/100*data.index_kmno4*0.6).toFixed(2),
            index_nh4n: ($scope.wasteModelList[0].dischargeChange/100*data.index_nh4n*0.4).toFixed(2),
            index_p: ($scope.wasteModelList[0].dischargeChange/100*data.index_p*0.6).toFixed(2),
        }
        return data;
    };
    //button状态改变标签
    $scope.getButtonStatus = function(status) {
        if (status == 'accept') return "btn-success";
        else if (status == 'caution') return "btn-warning";
        else if (status == 'take_action') return "btn-danger"
        else if (status == 'invalid') return "";
    };
    //获取颜色
    function getStatusColor(status) {
        if (status == 'accept') return '#66CC66';
        else if (status == 'caution') return '#66CC66';
        else if (status == 'take_action') return '#66CC66';
        else return '#AAAAAA';
    };
    //获取标签颜色
    function getLabelCss(status) {
        if (status == 'accept') {
            return 'label label-success';
        } else if (status == 'caution') {
            return 'label label-warning';
        } else if (status == 'take_action') {
            return 'label label-danger';
        } else {
            return 'label label-default';
        }
    };
    $scope.getLabelCss = function(status) {
        if (status == 'accept') {
            return 'label label-success';
        } else if (status == 'caution') {
            return 'label label-warning';
        } else if (status == 'take_action') {
            return 'label label-danger';
        } else {
            return 'label label-default';
        }
    };
    //数值越大，越严重
    function getStatusAsc(data1, scan, indexName) {
        var data = parseFloat(data1);
        if (data <= scan[0] && data > 0) {
            return {
                status: 'accept',
                sentence: indexName + '≤' + scan[0] + ',优良'
            }
        } else if (data > scan[0] && data <= scan[1]) {
            return {
                status: 'caution',
                sentence: scan[0] + '≤' + indexName + '≤' + scan[1] + ',轻度污染'
            }
        } else if (data > scan[1]) {
            return {
                status: 'take_action',
                sentence: indexName + '>' + scan[1] + ',严重污染'
            }
        } else if (data == 0) {
            return {
                status: 'invalid',
                sentence: indexName + ': 无数据'
            }
        }
    };
    $scope.getStatusAsc = function(data1, scan, indexName) {
        var data = parseFloat(data1);
        if (data <= scan[0] && data > 0) {
            return {
                status: 'accept',
                sentence: indexName + '≤' + scan[0] + ',优良'
            }
        } else if (data > scan[0] && data <= scan[1]) {
            return {
                status: 'caution',
                sentence: scan[0] + '≤' + indexName + '≤' + scan[1] + ',轻度污染'
            }
        } else if (data > scan[1]) {
            return {
                status: 'take_action',
                sentence: indexName + '>' + scan[1] + ',严重污染'
            }
        } else if (data == 0) {
            return {
                status: 'invalid',
                sentence: indexName + ': 无数据'
            }
        }
    };
    //数值越小，越严重
    function getStatusDesc(data1, scan, indexName) {
        var data = parseFloat(data1);
        if (data >= scan[0]) {
            return {
                status: 'accept',
                sentence: indexName + '≥' + scan[0] + ',优良'
            }
        } else if (data < scan[0] && data >= scan[1]) {
            return {
                status: 'caution',
                sentence: scan[1] + '≤' + indexName + '≤' + scan[0] + ',轻度污染'
            }
        } else if (data < scan[1] && data > 0) {
            return {
                status: 'take_action',
                sentence: indexName + '<' + scan[1] + ',严重污染'
            }
        } else if (data == 0) {
            return {
                status: 'invalid',
                sentence: indexName + ': 无数据'
            }
        }
    };
    $scope.getStatusDesc = function(data1, scan, indexName) {
        var data = parseFloat(data1);
        if (data >= scan[0]) {
            return {
                status: 'accept',
                sentence: indexName + '≥' + scan[0] + ',优良'
            }
        } else if (data < scan[0] && data >= scan[1]) {
            return {
                status: 'caution',
                sentence: scan[1] + '≤' + indexName + '≤' + scan[0] + ',轻度污染'
            }
        } else if (data < scan[1] && data > 0) {
            return {
                status: 'take_action',
                sentence: indexName + '<' + scan[1] + ',严重污染'
            }
        } else if (data == 0) {
            return {
                status: 'invalid',
                sentence: indexName + ': 无数据'
            }
        }
    };
    //得到中文状态名称
    function getChineseStatus(status) {
        if (status == 'accept') {
            return '优良';
        } else if (status == 'caution') {
            return '轻度污染';
        } else if (status == 'take_action') {
            return '严重污染';
        } else {
            return '无数据';
        }
    };
    $scope.getChineseStatusView = function(status) {
        if (status == 'accept') {
            return '优良';
        } else if (status == 'caution') {
            return '轻度污染';
        } else if (status == 'take_action') {
            return '严重污染';
        } else {
            return '无数据';
        }
    };
    //比较两个值相等
    $scope.equals = function(val1, val2) {
        if (val1 == val2) return true;
        else return false;
    };


    var getSubstractDate = function(date, hours) {
        return moment(date).subtract(hours, 'hours').toDate().getTime();
    };

    $scope.feed_calculate = function(){
        var result = 0;
        for(var i=0;i<$scope.wasteModelList.length;i++){
            result = result + 2.29 * ($scope.wasteModelList[i].dischargeChange*$scope.wasteModelList[i].dischargeValue/100)
        }
        $scope.feed_sum = result.toFixed(0);
        return $scope.feed_sum;
    };

        var waterQualityLastDate = {
            year: 2015,
            month: 5,
            day: 3,
            hour: 9
        };
        $scope.waterQualityCurrentDateTime = waterQualityLastDate;
        $http({method: 'GET', url: '/waterQuality.json'}).
            success(function(data, status, headers, config) {
              // console.log(data);
            waterQualityCurrentSuccess(data);
            initMap();
            }).
            error(function(data, status, headers, config) {
              console.log(data);
            });
        


        var waterQualityLastDate = {
            year: 2015,
            month: 5,
            day: 3,
            hour: 9
        };
        $scope.wasteWaterCurrentDateTime = waterQualityLastDate;
        $http({method: 'GET', url: '/wasteWater.json'}).
            success(function(data, status, headers, config) {
              // console.log(data);
              wasteWaterCurrentSuccess(data);
            }).
            error(function(data, status, headers, config) {
              console.log(data);
            });
        // wasteWaterCurrentSuccess(wasteWaterData);


    // });
    

}]);