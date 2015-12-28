'use strict';
/**
 * @ngdoc function
 * @name iocUiApp.controller:AboutCtrl
 * @description # AboutCtrl Controller of the iocUiApp
 */
app.controller('WaterEnvironmentBICtrl', ['$scope', '$timeout','$http' ,function($scope, $timeout,$http) {
    
    //方成代码
    $timeout(function () {
    // 路径配置
        require.config({
            paths: {
                echarts: 'http://echarts.baidu.com/build/dist'
            }
        });
        
        // 使用
        require(
            [
                'echarts',
                'echarts/chart/bar',// 使用柱状图就加载bar模块，按需加载
                'echarts/chart/line' 
            ],
            function (ec) {
                // 基于准备好的dom，初始化echarts图表
                var myChart = ec.init(document.getElementById('discharge')); 
                
                var option = {
                    title : {
                        text: '太仓市污水分时段排放量',
                        subtext: ''
                    },
                    tooltip : {
                        trigger: 'axis'
                    },
                    legend: {
                        data:['排放量']
                    },
                    toolbox: {
                        show : true,
                        feature : {
                            mark : {show: true},
                            dataView : {show: true, readOnly: false},
                            magicType : {show: true, type: ['line', 'bar']},
                            restore : {show: true},
                            saveAsImage : {show: true}
                        }
                    },
                    calculable : true,
                    xAxis : [
                        {
                            type : 'category',
                            data : ['1时','2时','3时','4时','5时','6时','7时','8时','9时','10时','11时','12时']
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value'
                        }
                    ],
                    series : [
                  
                        {
                            name:'废水排放量',
                            type:'bar',
                            data:[41316.379, 41739.668, 40126.664, 39762.43, 41144.68, 39966.195, 39523.172, 40884.328, 41141.418, 37959.043, 37114.941, 38395.945],
                            markPoint : {
                                data : [
                                    {name : '过去12小时最高值', value : 41739.668, xAxis: 1, yAxis: 41739.668, symbolSize:30},
                                    {name : '过去12小时最低值', value : 37114.941, xAxis: 10, yAxis: 37114.941,symbolSize:30}
                                ]
                            },
                            markLine : {
                                data : [
                                    {type : 'average', name : '平均值'}
                                ]
                            }
                        }
                    ]
                }; 
                    // 为echarts对象加载数据 
                    myChart.setOption(option); 
                }
            );  
    },0);

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
            info.push("<div><b>" + markerInfoOne.monitor + "</b>");
            if (type == 'waterQuality') {
                info.push("<div style=\"margin-top:10px; font-size:14px\"><table class=\"table table-bordered\">")
                info.push("<tr><td>溶解氧</td><td><span class=\"label " + getLabelCss(getStatusDesc(markerInfoOne.index_o2, waterQualityO2Scan.scan, '溶解氧').status) + "\">" + markerInfoOne.index_o2 + "mg/L</span></td></tr>");
                info.push("<tr><td>高锰酸钾浓度</td><td><span class=\"label " + getLabelCss(getStatusAsc(markerInfoOne.index_kmno4, waterQualityKmno4Scan.scan, '高锰酸钾').status) + "\">" + markerInfoOne.index_kmno4 + "mg/L</span></td></tr>");
                info.push("<tr><td>氨氮浓度</td><td><span class=\"label " + getLabelCss(getStatusAsc(markerInfoOne.index_nh4n, waterQualityNh4nScan.scan, '氨氮').status) + "\">" + markerInfoOne.index_nh4n + "mg/L</span></td></tr>");
                info.push("<tr><td>总磷浓度</td><td><span class=\"label " + getLabelCss(getStatusAsc(markerInfoOne.index_p, waterQualityPScan.scan, '总磷').status) + "\">" + markerInfoOne.index_p + "mg/L</span></td></tr>");
                info.push("<tr><td>监测站状态</td><td><span class=\"label " + getLabelCss(markerInfoOne.monitor_status) + "\">" + getChineseStatus(markerInfoOne.monitor_status) + "</span></td></tr>");
                info.push("</table></div></div>");
            } else if (type == 'waterCondition') {
                info.push("<div style=\"margin-top:10px; font-size:14px\"><table class=\"table table-bordered\">")
                info.push("<tr><td>闸上水位</td><td><span class=\"label " + getLabelCss(WaterConditionStatusUpLevel(markerInfoOne.index_levelUp).status) + "\">" + markerInfoOne.index_levelUp + "m</span></td></tr>");
                info.push("<tr><td>闸下水位</td><td><span class=\"label " + getLabelCss(WaterConditionStatusDownLevel(markerInfoOne.index_levelDown).status) + "\">" + markerInfoOne.index_levelDown + "m</span></td></tr>");
                info.push("<tr><td>监测站状态</td><td><span class=\"label " + getLabelCss(markerInfoOne.monitor_status) + "\">" + getChineseStatus(markerInfoOne.monitor_status) + "</span></td></tr>");
                info.push("</table></div></div>");
            } else if (type == 'waterPollution') {
                info.push("<div style=\"margin-top:10px; font-size:14px\"><table class=\"table table-bordered\">")
                info.push("<tr><td>排放量</td><td><span class=\"label " + getLabelCss(WasteWaterStatusDischarge(markerInfoOne.index_discharge).status) + "\">" + (markerInfoOne.index_discharge[1]).toFixed(2) + "吨</span></td></tr>");
                info.push("<tr><td>COD浓度</td><td><span class=\"label " + getLabelCss(getStatusAsc(markerInfoOne.index_cod, waterPollutionCodScan.scan, 'COD浓度').status) + "\">" + (markerInfoOne.index_cod).toFixed(2) + "mg/L</span></td></tr>");
                info.push("<tr><td>氨氮浓度</td><td><span class=\"label " + getLabelCss(getStatusAsc(markerInfoOne.index_nh4n, waterPollutionNh4nScan.scan, '氨氮浓度').status) + "\">" + (markerInfoOne.index_nh4n).toFixed(2) + "mg/L</span></td></tr>");
                info.push("<tr><td>总磷浓度</td><td><span class=\"label " + getLabelCss(getStatusAsc(markerInfoOne.index_p, waterPollutionPScan.scan, '总磷浓度').status) + "\">" + (markerInfoOne.index_p).toFixed(2) + "mg/L</span></td></tr>");
                info.push("<tr><td>监测站状态</td><td><span class=\"label " + getLabelCss(markerInfoOne.monitor_status) + "\">" + getChineseStatus(markerInfoOne.monitor_status) + "</span></td></tr>");
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
            info.push("<div><b>" + markerInfoOne.monitor + "</b>");
            if (type == 'waterQuality') {
                info.push("<div style=\"margin-top:10px; font-size:14px\"><table class=\"table table-bordered\">")
                info.push("<tr><td>溶解氧</td><td><span class=\"label " + getLabelCss(getStatusDesc(markerInfoOne.index_o2, waterQualityO2Scan.scan, '溶解氧').status) + "\">" + markerInfoOne.index_o2 + "mg/L</span></td></tr>");
                info.push("<tr><td>高锰酸钾浓度</td><td><span class=\"label " + getLabelCss(getStatusAsc(markerInfoOne.index_kmno4, waterQualityKmno4Scan.scan, '高锰酸钾').status) + "\">" + markerInfoOne.index_kmno4 + "mg/L</span></td></tr>");
                info.push("<tr><td>氨氮浓度</td><td><span class=\"label " + getLabelCss(getStatusAsc(markerInfoOne.index_nh4n, waterQualityNh4nScan.scan, '氨氮').status) + "\">" + markerInfoOne.index_nh4n + "mg/L</span></td></tr>");
                info.push("<tr><td>总磷浓度</td><td><span class=\"label " + getLabelCss(getStatusAsc(markerInfoOne.index_p, waterQualityPScan.scan, '总磷').status) + "\">" + markerInfoOne.index_p + "mg/L</span></td></tr>");
                info.push("<tr><td>监测站状态</td><td><span class=\"label " + getLabelCss(markerInfoOne.monitor_status) + "\">" + getChineseStatus(markerInfoOne.monitor_status) + "</span></td></tr>");
                info.push("</table></div></div>");
            } else if (type == 'waterCondition') {
                info.push("<div style=\"margin-top:10px; font-size:14px\"><table class=\"table table-bordered\">")
                info.push("<tr><td>闸上水位</td><td><span class=\"label " + getLabelCss(WaterConditionStatusUpLevel(markerInfoOne.index_levelUp).status) + "\">" + markerInfoOne.index_levelUp + "m</span></td></tr>");
                info.push("<tr><td>闸下水位</td><td><span class=\"label " + getLabelCss(WaterConditionStatusDownLevel(markerInfoOne.index_levelDown).status) + "\">" + markerInfoOne.index_levelDown + "m</span></td></tr>");
                info.push("<tr><td>监测站状态</td><td><span class=\"label " + getLabelCss(markerInfoOne.monitor_status) + "\">" + getChineseStatus(markerInfoOne.monitor_status) + "</span></td></tr>");
                info.push("</table></div></div>");
            } else if (type == 'waterPollution') {
                info.push("<div style=\"margin-top:10px; font-size:14px\"><table class=\"table table-bordered\">")
                info.push("<tr><td>排放量</td><td><span class=\"label " + getLabelCss(WasteWaterStatusDischarge(markerInfoOne.index_discharge).status) + "\">" + (markerInfoOne.index_discharge[1]).toFixed(2) + "吨</span></td></tr>");
                info.push("<tr><td>COD浓度</td><td><span class=\"label " + getLabelCss(getStatusAsc(markerInfoOne.index_cod, waterPollutionCodScan.scan, 'COD浓度').status) + "\">" + (markerInfoOne.index_cod).toFixed(2) + "mg/L</span></td></tr>");
                info.push("<tr><td>氨氮浓度</td><td><span class=\"label " + getLabelCss(getStatusAsc(markerInfoOne.index_nh4n, waterPollutionNh4nScan.scan, '氨氮浓度').status) + "\">" + (markerInfoOne.index_nh4n).toFixed(2) + "mg/L</span></td></tr>");
                info.push("<tr><td>总磷浓度</td><td><span class=\"label " + getLabelCss(getStatusAsc(markerInfoOne.index_p, waterPollutionPScan.scan, '总磷浓度').status) + "\">" + (markerInfoOne.index_p).toFixed(2) + "mg/L</span></td></tr>");
                info.push("<tr><td>监测站状态</td><td><span class=\"label " + getLabelCss(markerInfoOne.monitor_status) + "\">" + getChineseStatus(markerInfoOne.monitor_status) + "</span></td></tr>");
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
        var hourOne = data.data[0].hour;
        //取每四小时的最大值
        for (var i = 0; i < data.data.length / 24; i++) {
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
                sentence: "废水排放量正常"
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
		      $scope.wasteModelList[i].dischargeChange = parseInt(90 + Math.random()*10);
		      $scope.wasteModelList[i].codChange = parseInt(70 + Math.random()*30);
		      $scope.wasteModelList[i].nh4nChange = parseInt(50 + Math.random()*50);
		      $scope.wasteModelList[i].pChange = parseInt(90 + Math.random()*10);
		    }
		  // $http.post("/waterEnvironmentAnalysis/reverse_predict",dataTemp).success(function(data){
		  //   for (var i = 0; i < $scope.wasteModelList.length; i++) {
		  //     $scope.wasteModelList[i].dischargeChange = parseInt(data[i].index_discharge/$scope.wasteModelList[i].dischargeValue*100>100?100:data[i].index_discharge/$scope.wasteModelList[i].dischargeValue*100);
		  //     $scope.wasteModelList[i].codChange = parseInt(data[i].index_cod/$scope.wasteModelList[i].codValue*100>100?100:data[i].index_cod/$scope.wasteModelList[i].codValue*100);
		  //     $scope.wasteModelList[i].nh4nChange = parseInt(data[i].index_nh4n/$scope.wasteModelList[i].nh4nValue*100>100?100:data[i].index_nh4n/$scope.wasteModelList[i].nh4nValue*100);
		  //     $scope.wasteModelList[i].pChange = parseInt(data[i].index_p/$scope.wasteModelList[i].pValue*100>100?100:data[i].index_p/$scope.wasteModelList[i].pValue*100);
		  //   }
		  // }
		  // )
		 
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
                        max: 10,
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
                            to: 10,
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
            index_o2: (data.index_o2).toFixed(2),
            index_kmno4: (data.index_kmno4*0.95).toFixed(2),
            index_nh4n: (data.index_nh4n*0.85).toFixed(2),
            index_p: (data.index_p*0.95).toFixed(2),
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
                sentence: indexName + '≤' + scan[0] + ',正常'
            }
        } else if (data > scan[0] && data <= scan[1]) {
            return {
                status: 'caution',
                sentence: scan[0] + '≤' + indexName + '≤' + scan[1] + ',轻微问题'
            }
        } else if (data > scan[1]) {
            return {
                status: 'take_action',
                sentence: indexName + '>' + scan[1] + ',问题'
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
                sentence: indexName + '≤' + scan[0] + ',正常'
            }
        } else if (data > scan[0] && data <= scan[1]) {
            return {
                status: 'caution',
                sentence: scan[0] + '≤' + indexName + '≤' + scan[1] + ',轻微问题'
            }
        } else if (data > scan[1]) {
            return {
                status: 'take_action',
                sentence: indexName + '>' + scan[1] + ',问题'
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
                sentence: indexName + '≥' + scan[0] + ',正常'
            }
        } else if (data < scan[0] && data >= scan[1]) {
            return {
                status: 'caution',
                sentence: scan[1] + '≤' + indexName + '≤' + scan[0] + ',轻微问题'
            }
        } else if (data < scan[1] && data > 0) {
            return {
                status: 'take_action',
                sentence: indexName + '<' + scan[1] + ',问题'
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
                sentence: indexName + '≥' + scan[0] + ',正常'
            }
        } else if (data < scan[0] && data >= scan[1]) {
            return {
                status: 'caution',
                sentence: scan[1] + '≤' + indexName + '≤' + scan[0] + ',轻微问题'
            }
        } else if (data < scan[1] && data > 0) {
            return {
                status: 'take_action',
                sentence: indexName + '<' + scan[1] + ',问题'
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
            return '正常';
        } else if (status == 'caution') {
            return '轻微问题';
        } else if (status == 'take_action') {
            return '问题';
        } else {
            return '无数据';
        }
    };
    $scope.getChineseStatusView = function(status) {
        if (status == 'accept') {
            return '正常';
        } else if (status == 'caution') {
            return '轻微问题';
        } else if (status == 'take_action') {
            return '问题';
        } else {
            return '无数据';
        }
    };
    //比较两个值相等
    $scope.equals = function(val1, val2) {
        if (val1 == val2) return true;
        else return false;
    };
    // var getCurrentDate = function(databaseDate) {
    //     var year = moment(dateService.get_system_time()).get('year');
    //     var month = moment(dateService.get_system_time()).get('month') + 1;
    //     var day = moment(dateService.get_system_time()).get('date');
    //     var hour = moment(dateService.get_system_time()).get('hour');
    //     var systemDate = moment(year + '-' + month + '-' + day + ' ' + hour + ':00:00');
    //     if (moment(databaseDate).toDate() < moment(systemDate).toDate()) return moment(databaseDate).toDate().getTime();
    //     else return moment(systemDate).toDate().getTime();
    // };
    // var getCurrentDateForDayData = function(databaseDate) {
    //     var year = moment(dateService.get_system_time()).get('year');
    //     var month = moment(dateService.get_system_time()).get('month') + 1;
    //     var day = moment(dateService.get_system_time()).subtract(1, 'days').get('date');
    //     var systemDate = moment(year + '-' + month + '-' + day + ' ' + '00:00:00');
    //     if (moment(databaseDate).toDate() < moment(systemDate).toDate()) return moment(databaseDate).toDate().getTime();
    //     else return moment(systemDate).toDate().getTime();
    // };
    var getSubstractDate = function(date, hours) {
        return moment(date).subtract(hours, 'hours').toDate().getTime();
    };

    $scope.feed_calculate = function(){
        var result = 0;
        for(var i=0;i<$scope.wasteModelList.length;i++){
            result = result + 2.29 * ($scope.wasteModelList[i].dischargeChange*$scope.wasteModelList[i].dischargeValue/100)
        }
        $scope.feed_sum = result.toFixed(0);
    };
    /**
     * 页面初始化区
     * 有些图表的数据是在网页刷新时就请求到的
     */
    //水质量 当天数据模块 初始化
    // kpiDetailService.getLastestObject('WaterQuality', ['date'], function(data) {
    //     var date = data.data.date;
    //     var datebaseLastestDate = moment('2015-05-03 09:00:00.000');
    //     var startTime = getSubstractDate(getCurrentDate(datebaseLastestDate), 23);
    //     var endTime = getCurrentDate(datebaseLastestDate);
    //     kpiDetailService.advancedQuery('WaterQuality', {
    //         date: {
    //             value1: startTime,
    //             value2: endTime,
    //             queryType: 'bt',
    //             valueType: 'datte'
    //         },
    //         sort1: {
    //             key: 'waterMonitor.id',
    //             sortType: 'asc'
    //         },
    //         sort2: {
    //             key: 'date',
    //             sortType: 'asc'
    //         }
    //     }, function(data) {
    //         waterQualityCurrentSuccess(data);
    //         initMap();
    //     });
    //     // var waterQualityLastDate = {
    //     //     year: dateService.formatDateTime(endTime).slice(0, 4),
    //     //     month: dateService.formatDateTime(endTime).slice(5, 7),
    //     //     day: dateService.formatDateTime(endTime).slice(8, 10),
    //     //     hour: dateService.formatDateTime(endTime).slice(11, 13)
    //     // };
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
        // waterQualityCurrentSuccess(waterQualityData);
    // });
    //废水排放 当天数据模块 初始化
    // kpiDetailService.getLastestObject('WaterPollution', ['date'], function(data) {
    //     var date = data.data.date;
    //     var datebaseLastestDate = moment('2015-05-03 00:00:00.000');
    //     var startTime = getSubstractDate(getCurrentDateForDayData(datebaseLastestDate), 24 * 5);
    //     var endTime = getCurrentDateForDayData(datebaseLastestDate);
    //     kpiDetailService.advancedQuery('WaterPollution', {
    //         date: {
    //             value1: startTime,
    //             value2: endTime,
    //             queryType: 'bt',
    //             valueType: 'datte'
    //         },
    //         sort1: {
    //             key: 'waterPollutionSource.id',
    //             sortType: 'asc'
    //         },
    //         sort2: {
    //             key: 'date',
    //             sortType: 'asc'
    //         }
    //     }, wasteWaterCurrentSuccess);
    //     // var wasteWaterLastDate = {
    //     //     year: dateService.formatDateTime(endTime).slice(0, 4),
    //     //     month: dateService.formatDateTime(endTime).slice(5, 7),
    //     //     day: dateService.formatDateTime(endTime).slice(8, 10),
    //     //     hour: dateService.formatDateTime(endTime).slice(11, 13)
    //     // };
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