'use strict';

app.controller('WaterCtrl', ['$scope', '$timeout' ,function($scope, $timeout) {

 var lalaData=[5,12,2.5,4];
 var bbData=[5,12,2.5,4];
 var ccData=[5,12,2.5,4];
    //高德地图初始化
    var map = new AMap.Map('map_wMap',{
        zoom: 10,
        center: [121.106661, 31.579533]

    });
     var marker = new AMap.Marker({
        position: [121.106661,  31.579533],
        map:map

    });

     $scope.tableStatus = {
            allWater1: true,
            allWater2: false,
            allWater3: false
        };

    $scope.mapTableStatus = {
        airQuality: false,
        airCondition: true

    };
//空气质量 Button点击事件
    $scope.airQualityBtn = function() {
        $scope.mapTableStatus = {
             airQuality: true,
            airCondition: true
        };
    };

var splinecolors=new Array('#3CB371','#000000','#87CEFA' );
    $scope.buttonMap2 = [{
        name: 1,
        label:  "协鑫码头",
        radio: "Left"
      }, {
        name: 2,
        label: "第三水厂",
        radio: "Middle"
      }, {
        name: 3,
        label:  "第二水厂",
        radio: "Right"
      }];


//水厂按钮事件触发
$scope.btn_click=function(btn){
   $scope.change(btn);
};
$scope.change=function(btn){
if(btn.name===1){
   // alert("111");
   $scope.tableStatus = {
            allWater1: true,
            allWater2: false,
            allWater3: false
        };
}
if(btn.name===2){
   // alert("111");
   $scope.tableStatus = {
            allWater1: false,
            allWater2: true,
            allWater3: false
        };
}
if(btn.name===3){
   // alert("111");
   $scope.tableStatus = {
            allWater1: false,
            allWater2: false,
            allWater3: true
        };
}
};


//协鑫码头水厂调节函数
$scope.selectedRange=100;
$scope.selectedRange1=100;
$scope.selectedRange2=100;
$scope.r=function(){
    return $scope.selectedRange;
};
function h(newValue,oldValue,scope){
    //console.log(newValue);
    o2Data[0]=Math.round((o2Data[0]+(newValue-oldValue)/200)*100)/100;
    //console.log(o2Data[0]);
    kmno4Data[0]=Math.round((kmno4Data[0]+(newValue-oldValue)/200)*100)/100;
    nh4nData[0]=Math.round((nh4nData[0]+(newValue-oldValue)/200)*100)/100;
    pData[0]=Math.round((pData[0]+(newValue-oldValue)/200)*100)/100;
   // console.log(o2Data[0]);
   // gdp[9]=(newValue*0.03)*50+18.3;
   lalaData[0]=Math.round((lalaData[0]+(newValue-oldValue)/200)*100)/100;
   lalaData[1]=Math.round((lalaData[1]+(newValue-oldValue)/200)*100)/100;
   lalaData[2]=Math.round((lalaData[2]+(newValue-oldValue)/200)*100)/100;
   lalaData[3]=Math.round((lalaData[3]+(newValue-oldValue)/200)*100)/100;
}
$scope.$watch($scope.r,h);

$scope.rr=function(){
    return $scope.selectedRange1;
};
$scope.rrr=function(){
    return $scope.selectedRange2;
};
function hh(newValue,oldValue,scope){
  //  console.log(newValue);
  //  console.log(oldValue);
    o2Data[0]=Math.round((o2Data[0]+(newValue-oldValue)/200)*100)/100;
    kmno4Data[0]=Math.round((kmno4Data[0]+(newValue-oldValue)/200)*100)/100;
    nh4nData[0]=Math.round((nh4nData[0]+(newValue-oldValue)/200)*100)/100;
    pData[0]=Math.round((pData[0]+(newValue-oldValue)/200)*100)/100;
   // popData[9]=(newValue*0.03)*50+194.1;
  //  gdp[9]=(newValue*0.03)*50+18.3;
    lalaData[0]=Math.round((lalaData[0]+(newValue-oldValue)/200)*100)/100;
    lalaData[1]=Math.round((lalaData[1]+(newValue-oldValue)/200)*100)/100;
    lalaData[2]=Math.round((lalaData[2]+(newValue-oldValue)/200)*100)/100;
    lalaData[3]=Math.round((lalaData[3]+(newValue-oldValue)/200)*100)/100;
}
function hhh(newValue,oldValue,scope){
   // console.log(newValue);
    o2Data[0]=Math.round((o2Data[0]+(newValue-oldValue)/200)*100)/100;
    kmno4Data[0]=Math.round((kmno4Data[0]+(newValue-oldValue)/200)*100)/100;
    nh4nData[0]=Math.round((nh4nData[0]+(newValue-oldValue)/200)*100)/100;
    pData[0]=Math.round((pData[0]+(newValue-oldValue)/200)*100)/100;
    lalaData[0]=Math.round((lalaData[0]+(newValue-oldValue)/200)*100)/100;
    lalaData[1]=Math.round((lalaData[1]+(newValue-oldValue)/200)*100)/100;
    lalaData[2]=Math.round((lalaData[2]+(newValue-oldValue)/200)*100)/100;
    lalaData[3]=Math.round((lalaData[3]+(newValue-oldValue)/200)*100)/100;

}
$scope.$watch($scope.rr,hh);
$scope.$watch($scope.rrr,hhh);

$scope.lala={
 options:{
 chart: {
            type: 'column'
        },
        title: {
            text: 'Column chart with negative values'
        },
        xAxis: {
            categories: ['溶解氧', '高锰酸钾', '氨氮', '总磷(/10)']
        },
        credits: {
            enabled: false
        }
    },
        series: [{
            name: '原值',
            data:[5,12,2.5,4]
        },{
            name: '预计未来值',
            data: lalaData
        }]

};
//第三水厂
$scope.bb={
 options:{
 chart: {
            type: 'column'
        },
        title: {
            text: 'Column chart with negative values'
        },
        xAxis: {
            categories: ['溶解氧', '高锰酸钾', '氨氮', '总磷(/10)']
        },
        credits: {
            enabled: false
        }
    },
        series: [{
            name: '原值',
            data:[5,12,2.5,4]
        },{
            name: '预计未来值',
            data: bbData
        }]

};
//第二水厂
$scope.cc={
 options:{
 chart: {
            type: 'column'
        },
        title: {
            text: 'Column chart with negative values'
        },
        xAxis: {
            categories: ['溶解氧', '高锰酸钾', '氨氮', '总磷(/10)']
        },
        credits: {
            enabled: false
        }
    },
        series: [{
            name: '原值',
            data:[5,12,2.5,4]
        },{
            name: '预计未来值',
            data: ccData
        }]

};
//console.log(lalaData[0]);


//第三水厂调节函数
$scope.selectedRange4=100;
$scope.selectedRange3=100;
$scope.r2=function(){
    return $scope.selectedRange4;
};
function h2(newValue,oldValue,scope){
    //console.log(newValue);
    o2Data2[0]=Math.round((o2Data2[0]+(newValue-oldValue)/200)*100)/100;
    kmno4Data2[0]=Math.round((kmno4Data2[0]+(newValue-oldValue)/200)*100)/100;
    nh4nData2[0]=Math.round((nh4nData2[0]+(newValue-oldValue)/200)*100)/100;
    pData2[0]=Math.round((pData2[0]+(newValue-oldValue)/200)*100)/100;
    bbData[0]=Math.round((bbData[0]+(newValue-oldValue)/200)*100)/100;
    bbData[1]=Math.round((bbData[1]+(newValue-oldValue)/200)*100)/100;
    bbData[2]=Math.round((bbData[2]+(newValue-oldValue)/200)*100)/100;
    bbData[3]=Math.round((bbData[3]+(newValue-oldValue)/200)*100)/100;

   // console.log(o2Data[0]);
   // gdp[9]=(newValue*0.03)*50+18.3;
}
$scope.$watch($scope.r2,h2);

$scope.rr2=function(){
    return $scope.selectedRange3;
};
function hh2(newValue,oldValue,scope){
   // console.log(newValue);
    o2Data2[0]=Math.round((o2Data2[0]+(newValue-oldValue)/200)*100)/100;
    kmno4Data2[0]=Math.round((kmno4Data2[0]+(newValue-oldValue)/200)*100)/100;
    nh4nData2[0]=Math.round((nh4nData2[0]+(newValue-oldValue)/200)*100)/100;
    pData2[0]=Math.round((pData2[0]+(newValue-oldValue)/200)*100)/100;
    bbData[0]=Math.round((bbData[0]+(newValue-oldValue)/200)*100)/100;
    bbData[1]=Math.round((bbData[1]+(newValue-oldValue)/200)*100)/100;
    bbData[2]=Math.round((bbData[2]+(newValue-oldValue)/200)*100)/100;
    bbData[3]=Math.round((bbData[3]+(newValue-oldValue)/200)*100)/100;
   // popData[9]=(newValue*0.03)*50+194.1;
  //  gdp[9]=(newValue*0.03)*50+18.3;
}
$scope.$watch($scope.rr2,hh2);



//第二水厂调节函数
$scope.selectedRange5=100;
$scope.r1=function(){
    return $scope.selectedRange5;
};
function h1(newValue,oldValue,scope){
   // console.log(newValue);
    o2Data1[0]=Math.round((o2Data1[0]+(newValue-oldValue)/200)*100)/100;
    kmno4Data1[0]=Math.round((kmno4Data1[0]+(newValue-oldValue)/200)*100)/100;
    nh4nData1[0]=Math.round((nh4nData1[0]+(newValue-oldValue)/200)*100)/100;
    pData1[0]=Math.round((pData1[0]+(newValue-oldValue)/200)*100)/100;
    ccData[0]=Math.round((ccData[0]+(newValue-oldValue)/200)*100)/100;
    ccData[1]=Math.round((ccData[1]+(newValue-oldValue)/200)*100)/100;
    ccData[2]=Math.round((ccData[2]+(newValue-oldValue)/200)*100)/100;
    ccData[3]=Math.round((ccData[3]+(newValue-oldValue)/200)*100)/100;
    //console.log(o2Data[0]);
   // gdp[9]=(newValue*0.03)*50+18.3;
}
$scope.$watch($scope.r1,h1);





  var o2Data=[5];
  var kmno4Data=[12];
  var nh4nData=[2.5];
  var pData=[4];

  //第三个
   var o2Data2=[5];
  var kmno4Data2=[12];
  var nh4nData2=[2.5];
  var pData2=[4];

  //第二个
  var o2Data1=[5];
  var kmno4Data1=[12];
  var nh4nData1=[2.5];
  var pData1=[4];

  //协鑫码头的仪表盘
  //溶解氧
//console.log($scope.chart11.series[0].data);
         $scope.chart11={
         options:{           
         chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },
        
        title: {
            text: '溶解氧'
        },
        
        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
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
                text: 'mg/L'
            },
            plotBands: [{
                from: 0,
                to: 2,
                color: '#55BF3B' // green
            }, {
                from: 2,
                to: 3,
                color: '#DDDF0D' // yellow
            }, {
                from: 3,
                to: 10,
                color: '#DF5353' // red
            }]        
        }
    },
        series: [{
            name: '溶解氧',
            data:  o2Data,
            tooltip: {
                valueSuffix: ' mg/L'
            }
        }]
    

};  

      //高锰酸钾仪表盘
         $scope.chart12={
         options:{           
         chart: {
                    type: 'gauge',
                    plotBackgroundColor: null,
                    plotBackgroundImage: null,
                    plotBorderWidth: 0,
                    plotShadow: false
                },
                
                title: {
                    text: '高锰酸钾'
                },
                
                pane: {
                    startAngle: -150,
                    endAngle: 150,
                    background: [{
                        backgroundColor: {
                            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                            stops: [
                                [0, '#FFF'],
                                [1, '#333']
                            ]
                        },
                        borderWidth: 0,
                        outerRadius: '109%'
                    }, {
                        backgroundColor: {
                            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
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
                        text: 'mg/L'
                    },
                    plotBands: [{
                        from: 0,
                        to: 10,
                        color: '#55BF3B' // green
                    }, {
                        from: 10,
                        to: 14,
                        color: '#DDDF0D' // yellow
                    }, {
                        from: 18,
                        to: 30,
                        color: '#DF5353' // red
                    }]        
                }
            },
                series: [{
                    name: '高锰酸钾',
                    data: kmno4Data,
                    tooltip: {
                        valueSuffix: ' mg/L'
                    }
                }]
            

        }; 
        //氨氮仪表盘
         $scope.chart13={
         options:{           
         chart: {
                    type: 'gauge',
                    plotBackgroundColor: null,
                    plotBackgroundImage: null,
                    plotBorderWidth: 0,
                    plotShadow: false
                },
                
                title: {
                    text: '氨氮'
                },
                
                pane: {
                    startAngle: -150,
                    endAngle: 150,
                    background: [{
                        backgroundColor: {
                            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                            stops: [
                                [0, '#FFF'],
                                [1, '#333']
                            ]
                        },
                        borderWidth: 0,
                        outerRadius: '109%'
                    }, {
                        backgroundColor: {
                            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
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
                        text: 'mg/L'
                    },
                    plotBands: [{
                        from: 0,
                        to: 1.5,
                        color: '#55BF3B' // green
                    }, {
                        from: 1.5,
                        to: 2,
                        color: '#DDDF0D' // yellow
                    }, {
                        from: 2,
                        to: 5,
                        color: '#DF5353' // red
                    }]        
                }
            },
                series: [{
                    name: '氨氮',
                    data: nh4nData,
                    tooltip: {
                        valueSuffix: ' mg/L'
                    }
                }]
            

        };  
    //总磷仪表盘
         $scope.chart14={
         options:{           
         chart: {
                    type: 'gauge',
                    plotBackgroundColor: null,
                    plotBackgroundImage: null,
                    plotBorderWidth: 0,
                    plotShadow: false
                },
                
                title: {
                    text: '总磷'
                },
                
                pane: {
                    startAngle: -150,
                    endAngle: 150,
                    background: [{
                        backgroundColor: {
                            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                            stops: [
                                [0, '#FFF'],
                                [1, '#333']
                            ]
                        },
                        borderWidth: 0,
                        outerRadius: '109%'
                    }, {
                        backgroundColor: {
                            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
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
                        text: 'km/h'
                    },
                    plotBands: [{
                        from: 0,
                        to: 0.3,
                        color: '#55BF3B' // green
                    }, {
                        from: 0.3,
                        to: 0.4,
                        color: '#DDDF0D' // yellow
                    }, {
                        from: 0.4,
                        to: 0.6,
                        color: '#DF5353' // red
                    }]        
                }
            },
                series: [{
                    name: '总磷',
                    data: pData,
                    tooltip: {
                        valueSuffix: ' mg/L'
                    }
                }]
            

        };  


        //第三水厂仪表盘数据
        //溶解氧仪表盘
         $scope.chart21={
         options:{           
         chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },
        
        title: {
            text: '溶解氧'
        },
        
        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
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
                text: 'mg/L'
            },
            plotBands: [{
                from: 0,
                to: 2,
                color: '#55BF3B' // green
            }, {
                from: 2,
                to: 3,
                color: '#DDDF0D' // yellow
            }, {
                from: 3,
                to: 10,
                color: '#DF5353' // red
            }]        
        }
    },
        series: [{
            name: '溶解氧',
            data:  o2Data2,
            tooltip: {
                valueSuffix: ' mg/L'
            }
        }]
    

};  

       //高锰酸钾仪表盘    
        $scope.chart22={
                  options:{           
         chart: {
                    type: 'gauge',
                    plotBackgroundColor: null,
                    plotBackgroundImage: null,
                    plotBorderWidth: 0,
                    plotShadow: false
                },
                
                title: {
                    text: '高锰酸钾'
                },
                
                pane: {
                    startAngle: -150,
                    endAngle: 150,
                    background: [{
                        backgroundColor: {
                            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                            stops: [
                                [0, '#FFF'],
                                [1, '#333']
                            ]
                        },
                        borderWidth: 0,
                        outerRadius: '109%'
                    }, {
                        backgroundColor: {
                            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
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
                        text: 'mg/L'
                    },
                    plotBands: [{
                        from: 0,
                        to: 10,
                        color: '#55BF3B' // green
                    }, {
                        from: 10,
                        to: 14,
                        color: '#DDDF0D' // yellow
                    }, {
                        from: 18,
                        to: 30,
                        color: '#DF5353' // red
                    }]        
                }
            },
                series: [{
                    name: '高锰酸钾',
                    data: kmno4Data2,
                    tooltip: {
                        valueSuffix: ' mg/L'
                    }
                }]
            

        };   
        //氨氮含量仪表盘
         $scope.chart23={
                 options:{           
         chart: {
                    type: 'gauge',
                    plotBackgroundColor: null,
                    plotBackgroundImage: null,
                    plotBorderWidth: 0,
                    plotShadow: false
                },
                
                title: {
                    text: '氨氮'
                },
                
                pane: {
                    startAngle: -150,
                    endAngle: 150,
                    background: [{
                        backgroundColor: {
                            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                            stops: [
                                [0, '#FFF'],
                                [1, '#333']
                            ]
                        },
                        borderWidth: 0,
                        outerRadius: '109%'
                    }, {
                        backgroundColor: {
                            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
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
                        text: 'mg/L'
                    },
                    plotBands: [{
                        from: 0,
                        to: 1.5,
                        color: '#55BF3B' // green
                    }, {
                        from: 1.5,
                        to: 2,
                        color: '#DDDF0D' // yellow
                    }, {
                        from: 2,
                        to: 5,
                        color: '#DF5353' // red
                    }]        
                }
            },
                series: [{
                    name: '氨氮',
                    data: nh4nData2,
                    tooltip: {
                        valueSuffix: ' mg/L'
                    }
                }]
            

        }; 
        //总磷含量仪表盘
         $scope.chart24={
         options:{           
         chart: {
                    type: 'gauge',
                    plotBackgroundColor: null,
                    plotBackgroundImage: null,
                    plotBorderWidth: 0,
                    plotShadow: false
                },
                
                title: {
                    text: '总磷'
                },
                
                pane: {
                    startAngle: -150,
                    endAngle: 150,
                    background: [{
                        backgroundColor: {
                            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                            stops: [
                                [0, '#FFF'],
                                [1, '#333']
                            ]
                        },
                        borderWidth: 0,
                        outerRadius: '109%'
                    }, {
                        backgroundColor: {
                            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
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
                        text: 'km/h'
                    },
                    plotBands: [{
                        from: 0,
                        to: 0.3,
                        color: '#55BF3B' // green
                    }, {
                        from: 0.3,
                        to: 0.4,
                        color: '#DDDF0D' // yellow
                    }, {
                        from: 0.4,
                        to: 0.6,
                        color: '#DF5353' // red
                    }]        
                }
            },
                series: [{
                    name: '总磷',
                    data: pData2,
                    tooltip: {
                        valueSuffix: ' mg/L'
                    }
                }]
            

        };



        //第二水厂仪表盘数据
        $scope.chart31={
         options:{           
         chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },
        
        title: {
            text: '溶解氧'
        },
        
        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
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
                text: 'mg/L'
            },
            plotBands: [{
                from: 0,
                to: 2,
                color: '#55BF3B' // green
            }, {
                from: 2,
                to: 3,
                color: '#DDDF0D' // yellow
            }, {
                from: 3,
                to: 10,
                color: '#DF5353' // red
            }]        
        }
    },
        series: [{
            name: '溶解氧',
            data:  o2Data1,
            tooltip: {
                valueSuffix: ' mg/L'
            }
        }]
    

};  

      //高锰酸钾仪表盘
         $scope.chart32={
         options:{           
         chart: {
                    type: 'gauge',
                    plotBackgroundColor: null,
                    plotBackgroundImage: null,
                    plotBorderWidth: 0,
                    plotShadow: false
                },
                
                title: {
                    text: '高锰酸钾'
                },
                
                pane: {
                    startAngle: -150,
                    endAngle: 150,
                    background: [{
                        backgroundColor: {
                            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                            stops: [
                                [0, '#FFF'],
                                [1, '#333']
                            ]
                        },
                        borderWidth: 0,
                        outerRadius: '109%'
                    }, {
                        backgroundColor: {
                            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
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
                        text: 'mg/L'
                    },
                    plotBands: [{
                        from: 0,
                        to: 10,
                        color: '#55BF3B' // green
                    }, {
                        from: 10,
                        to: 14,
                        color: '#DDDF0D' // yellow
                    }, {
                        from: 18,
                        to: 30,
                        color: '#DF5353' // red
                    }]        
                }
            },
                series: [{
                    name: '高锰酸钾',
                    data: kmno4Data1,
                    tooltip: {
                        valueSuffix: ' mg/L'
                    }
                }]
            

        }; 
        //氨氮仪表盘
         $scope.chart33={
         options:{           
         chart: {
                    type: 'gauge',
                    plotBackgroundColor: null,
                    plotBackgroundImage: null,
                    plotBorderWidth: 0,
                    plotShadow: false
                },
                
                title: {
                    text: '氨氮'
                },
                
                pane: {
                    startAngle: -150,
                    endAngle: 150,
                    background: [{
                        backgroundColor: {
                            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                            stops: [
                                [0, '#FFF'],
                                [1, '#333']
                            ]
                        },
                        borderWidth: 0,
                        outerRadius: '109%'
                    }, {
                        backgroundColor: {
                            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
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
                        text: 'mg/L'
                    },
                    plotBands: [{
                        from: 0,
                        to: 1.5,
                        color: '#55BF3B' // green
                    }, {
                        from: 1.5,
                        to: 2,
                        color: '#DDDF0D' // yellow
                    }, {
                        from: 2,
                        to: 5,
                        color: '#DF5353' // red
                    }]        
                }
            },
                series: [{
                    name: '氨氮',
                    data: nh4nData1,
                    tooltip: {
                        valueSuffix: ' mg/L'
                    }
                }]
            

        };  
    //总磷仪表盘
         $scope.chart34={
         options:{           
         chart: {
                    type: 'gauge',
                    plotBackgroundColor: null,
                    plotBackgroundImage: null,
                    plotBorderWidth: 0,
                    plotShadow: false
                },
                
                title: {
                    text: '总磷'
                },
                
                pane: {
                    startAngle: -150,
                    endAngle: 150,
                    background: [{
                        backgroundColor: {
                            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                            stops: [
                                [0, '#FFF'],
                                [1, '#333']
                            ]
                        },
                        borderWidth: 0,
                        outerRadius: '109%'
                    }, {
                        backgroundColor: {
                            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
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
                        text: 'km/h'
                    },
                    plotBands: [{
                        from: 0,
                        to: 0.3,
                        color: '#55BF3B' // green
                    }, {
                        from: 0.3,
                        to: 0.4,
                        color: '#DDDF0D' // yellow
                    }, {
                        from: 0.4,
                        to: 0.6,
                        color: '#DF5353' // red
                    }]        
                }
            },
                series: [{
                    name: '总磷',
                    data: pData1,
                    tooltip: {
                        valueSuffix: ' mg/L'
                    }
                }]
            

        };

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
                text: '太仓地区污水处理厂污水排放量',
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
                    data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
                    markPoint : {
                        data : [
                            {name : '过去12小时最高值', value : 182.2, xAxis: 7, yAxis: 183, symbolSize:18},
                            {name : '过去12小时最低值', value : 2.3, xAxis: 11, yAxis: 3}
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





          
        }]);
