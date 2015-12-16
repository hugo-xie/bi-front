'use strict';

app.controller('WaterCtrl', ['$scope', function($scope) {


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
    console.log(newValue);
    o2Data[0]=(newValue*0.03);
    kmno4Data[0]=(newValue*0.03)*0.5+8;
    nh4nData[0]=(newValue*0.03)*0.5+1.8;
    pData[0]=(newValue*0.03)*0.5+0.3;
    console.log(o2Data[0]);
   // gdp[9]=(newValue*0.03)*50+18.3;
}
$scope.$watch($scope.r,h);

$scope.rr=function(){
    return $scope.selectedRange1;
};
$scope.rrr=function(){
    return $scope.selectedRange2;
};
function hh(newValue,oldValue,scope){
    console.log(newValue);
    o2Data[0]=(newValue*0.03)*0.3;
    kmno4Data[0]=(newValue*0.03)*0.5+8;
    nh4nData[0]=(newValue*0.03)*0.5+3.1;
    pData[0]=(newValue*0.03)*0.5+0.3;
   // popData[9]=(newValue*0.03)*50+194.1;
  //  gdp[9]=(newValue*0.03)*50+18.3;
}
function hhh(newValue,oldValue,scope){
    console.log(newValue);
    o2Data[0]=(newValue*0.02)*0.25+1;
    kmno4Data[0]=(newValue*0.03)*0.5+8;
    nh4nData[0]=(newValue*0.03)*0.5+3.1;
    pData[0]=(newValue*0.03)*0.5+0.3;
   // popData[9]=(newValue*0.03)*50+194.1;
  //  gdp[9]=(newValue*0.03)*50+18.3;
}
$scope.$watch($scope.rr,hh);
$scope.$watch($scope.rrr,hhh);



//第三水厂调节函数
$scope.selectedRange4=100;
$scope.selectedRange3=100;
$scope.r2=function(){
    return $scope.selectedRange4;
};
function h2(newValue,oldValue,scope){
    console.log(newValue);
    o2Data2[0]=(newValue*0.03)*50+4;
    kmno4Data2[0]=(newValue*0.03)*50+11;
    nh4nData2[0]=(newValue*0.03)*50+1.3;
    pData2[0]=(newValue*0.03)*50+0.3;
    console.log(o2Data[0]);
   // gdp[9]=(newValue*0.03)*50+18.3;
}
$scope.$watch($scope.r2,h2);

$scope.rr2=function(){
    return $scope.selectedRange3;
};
function hh2(newValue,oldValue,scope){
    console.log(newValue);
    o2Data2[0]=(newValue*0.03)*50+4;
    kmno4Data2[0]=(newValue*0.03)*50+11;
    nh4nData2[0]=(newValue*0.03)*50+1.3;
    pData2[0]=(newValue*0.03)*50+0.3;
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
    console.log(newValue);
    o2Data1[0]=(newValue*0.03)*0.5+3;
    kmno4Data1[0]=(newValue*0.03)*0.5+8;
    nh4nData1[0]=(newValue*0.03)*0.5+0.8;
    pData1[0]=(newValue*0.03)*0.5+0.3;
    //console.log(o2Data[0]);
   // gdp[9]=(newValue*0.03)*50+18.3;
}
$scope.$watch($scope.r1,h1);





  var o2Data=[11];
  var kmno4Data=[21];
  var nh4nData=[31];
  var pData=[41];

  //第三个
   var o2Data2=[12];
  var kmno4Data2=[22];
  var nh4nData2=[32];
  var pData2=[42];

  //第二个
  var o2Data1=[12];
  var kmno4Data1=[22];
  var nh4nData1=[32];
  var pData1=[42];

  //协鑫码头的仪表盘
  //溶解氧

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







  
}]);
