'use strict';

app.controller('PrelationCtrl', ['$scope', function($scope) {

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

  $scope.btn_click2=function(bttn){
     $scope.change(bttn);
  };    
 $scope.change=function(bttn){
    if(bttn.name===2020){
        $scope.jobf.options.subtitle.text="(2016~2020)";
    }
    if(bttn.name===2025){
        $scope.jobf.options.subtitle.text="(2021~2025)";
    }
    if(bttn.name===2030){
        $scope.jobf.options.subtitle.text="(2026~2030)";
    }
    if(bttn.name===2035){
        $scope.jobf.options.subtitle.text="(2031~2035)";
    }
    if(bttn.name===2040){
        $scope.jobf.options.subtitle.text="(2036~2040)";
    }
    if(bttn.name===2045){
        $scope.jobf.options.subtitle.text="(2041~2045)";
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
     }
     if(bttn.name===2035){
        $scope.jobt.options.xAxis.categories=['2026', '2027', '2028', '2029', '2030', '2031',
                '2032', '2033', '2034', '2035'];
     }
     if(bttn.name===2045){
        $scope.jobt.options.xAxis.categories=['2036', '2037', '2038', '2039', '2040', '2041',
                '2042', '2043', '2044', '2045'];
     }
 };




 $scope.jobf ={
     options:{
      chart: {
            type: 'column'
        },
        title: {
            text: '分三次产业的就业增长'
        },
        subtitle:{
           text:'(2016~2020)'
        },
        xAxis: {
            categories: ['总值', '第一产业', '第二产业', '第三产业']
        },
        credits: {
            enabled: false
        }
    },
        series: [{
            name: '比率',
            data: [2, -2, -3, 2]
        }]

};  
$scope.jobt ={
       options:{
        title: {
            text: '就业结构的变化',
            x: -20 //center
        },
        credits:{
            enabled:false
        },
        xAxis: {
            categories: ['2016', '2017', '2018', '2019', '2020', '2021',
                '2022', '2023', '2024', '2025']
        },
        yAxis: {
            title: {
                text: '比例 (%)'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: '°C'
        },
        legend: {
           // layout: 'vertical',
            align: 'center',
            verticalAlign: 'bottom',
            borderWidth: 0
        }
    },
        series: [{
            name: '第一产业',
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3]
        }, {
            name: '第二产业',
            data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1]
        }, {
            name: '第三产业',
            data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0]
        }]

    };    
    $scope.money ={
    options:{
        chart: {
            zoomType: 'xy'
        },
        title: {
            text: '养老保险'
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
$scope.school={
    options:{    
        chart: {
            type: 'column'
        },
        title: {
            text: '各城镇小学学校数量'
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
            color:"#7cb5ec",
            data: [1, 1, 1, 1, 1, 1,1, 1,1]

        }, {
            name: '2030年',
            color:"#000000",
            data: [2,2, 2, 2, 2, 2, 2, 2, 2]

        }, {
            name: '2040年',
            color:"#90ed7d",
            data: [3, 3, 3,3, 3, 3, 3,3, 3]

        }]
};
}]);