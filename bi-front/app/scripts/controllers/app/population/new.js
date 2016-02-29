'use strict';

app.controller('NewCtrl', ['$scope', function($scope) {

$scope.buttonMap3 = [{
        name: 2025,
        label: 2025 + "年"
      },
      {
        name: 2035,
        label: 2035 + "年"
      },
      {
        name: 2045,
        label: 2045 + "年"
      }];
 $scope.btn_click3=function(bttn){
     $scope.change3(bttn);
  };    
 $scope.change3=function(bttn){
   if(bttn.name===2025){
    $scope.jobf.options.xAxis.categories=['2016', '2017', '2018', '2019', '2020', '2021',
                '2022', '2023', '2024', '2025'];
    $scope.jobf.series=[{
            name: '劳动力人口数',
            data: [50.2, 51.8, 52.3, 52.8, 53.1, 54.1, 54.7,55.2,55.8,56.3],
            marker:{
               symbol:"square" 
           }
        }, {
            name: '就业人数',
            data: [40.0, 40.8, 42.3, 42.8, 43.7, 44.9, 45.3,46.7,47.2,47.9],
            marker:{
               symbol:"circle" 
           }
        }];
   }
   if(bttn.name===2035){
    $scope.jobf.options.xAxis.categories=['2026', '2027', '2028', '2029', '2030', '2031',
                '2032', '2033', '2034', '2035'];
     $scope.jobf.series=[{
            name: '劳动力人口数',
            data: [60.2, 61.8, 62.3, 62.8, 63.1, 64.1, 64.7,65.2,65.8,66.3],
            marker:{
               symbol:"square" 
           }
        }, {
            name: '就业人数',
            data: [50.0, 50.8, 52.3, 52.8, 53.7, 54.1, 55.3,56.7,57.2,57.9],
            marker:{
               symbol:"circle" 
           }
        }];
   }
   if(bttn.name===2045){
    $scope.jobf.options.xAxis.categories=['2036', '2037', '2038', '2039', '2040', '2041',
                '2042', '2043', '2044', '2045'];
     $scope.jobf.series=[{
            name: '劳动力人口数',
            data: [70.2, 71.8, 72.3, 72.8, 73.1, 74.1, 74.7,75.2,75.8,76.3],
            marker:{
               symbol:"square" 
           }
        }, {
            name: '就业人数',
            data: [60.2, 60.8, 62.3, 62.8, 63.7, 64.9, 65.3,66.7,67.2,67.9],
            marker:{
               symbol:"circle" 
           }
        }];
   }
 };

   $scope.showTotalTable = function(){
    $scope.totalshow= !$scope.totalshow;
  };

$scope.tchrGrntList=[{
    name:'小学'
},{
    name:'中学'
},{
    name:'高中'
}];

$scope.tchrGrntKindChange=function(tchrGrntOne){
if(tchrGrntOne.name==="小学"){
    $scope.school.options.title.text="各城镇小学学校数量";
    $scope.school.series=[{
            name: '2020年',
            data: [1, 1, 1, 1, 1, 1,1, 1,1]

        }, {
            name: '2030年',
            data: [2,2, 2, 2, 2, 2, 2, 2, 2]

        }, {
            name: '2040年',
            data: [3, 3, 3,3, 3, 3, 3,3, 3]

        }];
}
if(tchrGrntOne.name==="中学"){
    $scope.school.options.title.text="各城镇中学学校数量";
    $scope.school.series=[{
            name: '2020年',
            data: [1, 2, 1, 2, 1,2, 1, 2,1]

        }, {
            name: '2030年',
            data: [2, 2, 1,2, 2,1, 2, 1,2]

        }, {
            name: '2040年',
            data: [3, 2, 2, 3, 3, 2,3,2, 3]

        }];
}
if(tchrGrntOne.name==="高中"){
    $scope.school.options.title.text="各城镇高中学校数量";
    $scope.school.series=[{
            name: '2020年',
            data: [1, 2, 2, 1,0, 1, 0, 1, 1]

        }, {
            name: '2030年',
            data: [1, 2,2, 2, 1, 2, 1, 1, 1]

        }, {
            name: '2040年',
            data: [2, 2,2, 2, 2, 2, 2, 2, 2]

        }];
}
};


       $scope.buttonMap5 = [{
        name: 2025,
        label: 2025 + "年",
        radio: "Middle"
      },
      {
        name: 2035,
        label: 2035 + "年",
        radio: "Middle"
      },
      {
        name: 2045,
        label: 2045 + "年",
        radio: "Right"
      }];
       
  $scope.btn_click5=function(bttn){
     $scope.change5(bttn);
  };    
 $scope.change5=function(bttn){
    if(bttn.name===2025){
        $scope.money.options.xAxis[0].categories=['2016', '2017', '2018', '2019', '2020', '2021',
                '2022', '2023', '2024', '2025'];
    }
    if(bttn.name===2035){
        $scope.money.options.xAxis[0].categories=['2026', '2027', '2028', '2029', '2030', '2031',
                '2032', '2033', '2034', '2035'];
    }
    if(bttn.name===2045){
        $scope.money.options.xAxis[0].categories=['2036', '2037', '2038', '2039', '2040', '2041',
                '2042', '2043', '2044', '2045'];
    }
 };


       
$scope.buttonMap1 = [{
        name: 2025,
        label: 2025 + "年",
        radio: "Middle"
      },
      {
        name: 2035,
        label: 2035 + "年",
        radio: "Middle"
      },
      {
        name: 2045,
        label: 2045 + "年",
        radio: "Right"
      }];
 $scope.btn_click1=function(bttn){
     $scope.change1(bttn);
  };    
 $scope.change1=function(bttn){
     if(bttn.name===2025){
        $scope.jobt.options.xAxis.categories=['2016', '2017', '2018', '2019', '2020', '2021',
                '2022', '2023', '2024', '2025'];
        $scope.jobt.series=[{
            name: '就业人数',
            type: 'column',
            yAxis: 1,
            data: [40.0, 40.8, 42.3, 42.8, 43.7, 44.9, 45.3,46.7,47.2,47.9],
            tooltip: {
                valueSuffix: ' 万人'
            }

        },{
            name: '第一产业',
            type: 'spline',
            marker:{
               symbol:"square" 
            },
            data: [17.0, 16.9, 16.5, 14.5, 12.2, 11.5, 11.2, 10.5, 10.3, 9.3]
        }, {
            name: '第二产业',
            type: 'spline',
            marker:{
               symbol:"circle" 
            },
            data: [45.2, 44.8, 44.7, 41.3, 37.0, 37.3, 37.8, 37.1, 36.8, 35.1]
        }, {
            name: '第三产业',
            type: 'spline',
            marker:{
               symbol:"triangle" 
            },
            data: [37.8, 38.3, 38.8, 44.2, 50.8, 51.2, 51, 52.4, 52.9,55.6]
        }];
     }
     if(bttn.name===2035){
        $scope.jobt.options.xAxis.categories=['2026', '2027', '2028', '2029', '2030', '2031',
                '2032', '2033', '2034', '2035'];
        $scope.jobt.series=[{
            name: '就业人数',
            type: 'column',
            yAxis: 1,
            data: [50.0, 50.8, 52.3, 52.8, 53.7, 54.1, 55.3,56.7,57.2,57.9],
            tooltip: {
                valueSuffix: ' 万人'
            }

        },{
            name: '第一产业',
            type: 'spline',
            marker:{
               symbol:"square" 
            },
            data: [9.1, 8.9, 8.5, 8.1, 7.8,7.5, 7.2, 6.5, 6.3, 5.9]
        }, {
            name: '第二产业',
            type: 'spline',
            marker:{
               symbol:"circle" 
            },
            data: [35.2, 34.8, 34.7, 34.3, 34.0, 33.8, 33.2, 33.1, 32.8, 32.1]
        }, {
            name: '第三产业',
            type: 'spline',
            marker:{
               symbol:"triangle" 
            },
            data: [55.7, 56.3, 56.8, 57.6, 58.2, 58.7, 59.6, 60.4, 60.9, 62.0]
        }];
     }
     if(bttn.name===2045){
        $scope.jobt.options.xAxis.categories=['2036', '2037', '2038', '2039', '2040', '2041',
                '2042', '2043', '2044', '2045'];
        $scope.jobt.series=[{
            name: '就业人数',
            type: 'column',
            yAxis: 1,
            data: [60.2, 60.8, 62.3, 62.8, 63.7, 64.9, 65.3,66.7,67.2,67.9],
            tooltip: {
                valueSuffix: ' 万人'
            }

        },{
            name: '第一产业',
            type: 'spline',
            marker:{
               symbol:"square" 
            },
            data: [5.2, 5.8, 5.3, 4.8,4.7, 4.5, 4.2, 3.5, 3.3,3.2]
        }, {
            name: '第二产业',
            type: 'spline',
            marker:{
               symbol:"circle" 
            },
            data: [32.0, 31.9, 31.5, 31.3, 31.2, 31.5, 31.2, 30.5,30.3, 29.8]
        }, {
            name: '第三产业',
            type: 'spline',
            marker:{
               symbol:"triangle" 
            },
            data: [62.8, 62.3, 63.2, 63.9, 64.1, 64.0, 64.6, 66.0, 66.4, 67.0]
        }];
     }
 };



var jobfcolor=new Array('#7cb5ec','#000000');
 $scope.jobf ={
      options:{
        colors:jobfcolor,
        chart: {
            type: 'areaspline'
        },
        title: {
            text: '太仓市2016至2025年就业人数分析预测'
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            verticalAlign: 'top',
            x: 150,
            y: 100,
            floating: true,
            borderWidth: 1,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
        },
        xAxis: {
            categories: ['2016', '2017', '2018', '2019', '2020', '2021',
                '2022', '2023', '2024', '2025']
        },
        yAxis: {
            title: {
                text: '人数'
            }
        },
        tooltip: {
            shared: true,
            valueSuffix: ' 万人'
        },
        credits: {
            enabled: false
        },
        plotOptions: {
            areaspline: {
                fillOpacity: 0.5
            }
        }
    },
        series: [{
            name: '劳动力人口数',
            data: [50.2, 51.8, 52.3, 52.8, 53.1, 54.1, 54.7,55.2,55.8,56.3],
            marker:{
               symbol:"square" 
           }
        }, {
            name: '就业人数',
            data: [40.0, 40.8, 42.3, 42.8, 43.7, 44.9, 45.3,46.7,47.2,47.9],
            marker:{
               symbol:"circle" 
           }
        }]
};  
var jobtcolor=new Array('#7cb5ec','#000000','#90ED7D','#F7A35C');
$scope.jobt ={
       options:{
        colors:jobtcolor,
        chart: {
            zoomType: 'xy'
        },
        title: {
            text: '太仓市2016至2025年就业结构变化分析预测',
            x: -20 //center
        },
        credits:{
            enabled:false
        },
        xAxis: {
            categories: ['2016', '2017', '2018', '2019', '2020', '2021',
                '2022', '2023', '2024', '2025']
        },
        yAxis: [{ // Primary yAxis
            labels: {
                format: '{value}%',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            },
            title: {
                text: '比例',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            }
        }, { // Secondary yAxis
            title: {
                text: '就业人数',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            },
            labels: {
                format: '{value} 万人',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            },
            opposite: true
        }],
        tooltip: {
            valueSuffix: '%'
        },
        legend: {
           // layout: 'vertical',
            align: 'center',
            verticalAlign: 'bottom',
            borderWidth: 0
        }
    },
        series: [{
            name: '就业人数',
            type: 'column',
            yAxis: 1,
            data: [40.0, 40.8, 42.3, 42.8, 43.7, 44.9, 45.3,46.7,47.2,47.9],
            tooltip: {
                valueSuffix: ' 万人'
            }

        },{
            name: '第一产业',
            type: 'spline',
            marker:{
               symbol:"square" 
            },
            data: [17.0, 16.9, 16.5, 14.5, 12.2, 11.5, 11.2, 10.5, 10.3, 9.3]
        }, {
            name: '第二产业',
            type: 'spline',
            marker:{
               symbol:"circle" 
            },
            data: [45.2, 44.8, 44.7, 41.3, 37.0, 37.3, 37.8, 37.1, 36.8, 35.1]
        }, {
            name: '第三产业',
            type: 'spline',
            marker:{
               symbol:"triangle" 
            },
            data: [37.8, 38.3, 38.8, 44.2, 50.8, 51.2, 51, 52.4, 52.9,55.6]
        }]

    };    
    $scope.money ={
    options:{
        chart: {
            zoomType: 'xy'
        },
        title: {
            text: '太仓市2016至2025年养老保险分析预测'
        },
        credits:{
            enabled:false
        },
        xAxis: [{
            categories: ['2016', '2017', '2018', '2019', '2020', '2021',
                '2022', '2023', '2024', '2025'],
            crosshair: true
        }],
        yAxis: [ { // Secondary yAxis
            gridLineWidth: 1,
            title: {
                text: '保险收支',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            },
            labels: {
                format: '{value} 亿元',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            }

        }, { // Tertiary yAxis
            gridLineWidth: 1,
            title: {
                text: '比例',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            },
            labels: {
                format: '{value} %',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            },
            opposite: true
        }],
        tooltip: {
            shared: true
        },
        legend: {
            //layout: 'vertical',
            align: 'center',
            verticalAlign: 'bottom',
        }
    },
        series: [{
            name: '养老保险收支',
            type: 'column',
            yAxis: 0,
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1],
            tooltip: {
                valueSuffix: ' 亿元'
            }

        }, {
            name: '老龄人口比例',
            type: 'spline',
            yAxis: 1,
            data: [30.6,30.89, 31.1, 31.43, 31.25, 29.8, 29.08, 28.67, 28.55, 28.49],
            marker: {
                enabled: true
            },
            //dashStyle: 'shortdot',
            tooltip: {
                valueSuffix: ' %'
            }

        }, {
            name: '劳动力人口比例',
            type: 'spline',
            yAxis: 1,
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3],
            tooltip: {
                valueSuffix: ' %'
            }
        }]
};
var schoolcolor=new Array('#7cb5ec','#000000','#90ed7d');
$scope.school={
    options:{ 
        colors:schoolcolor, 
        chart: {
            type: 'column'
        },
        title: {
            text: '太仓市各城镇小学学校数量分析预测'
        },
        credits:{
            enabled:false
        },
        xAxis: {
            categories: [
                '城厢镇',
                '双凤镇',
                '沙溪镇',
                '浏河镇',
                '浮桥镇',
                '璜泾镇',
                '新区',
                '港区',
                '科教新城'
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: '数量 (所)'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} 所</b></td></tr>',
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
            name: '2020年',
           // color:"#7cb5ec",
            data: [1, 1, 1, 1, 1, 1,1, 1,1]

        }, {
            name: '2030年',
           // color:"#000000",
            data: [2,2, 2, 2, 2, 2, 2, 2, 2]

        }, {
            name: '2040年',
           // color:"#90ed7d",
            data: [3, 3, 3,3, 3, 3, 3,3, 3]

        }]
};
}]);