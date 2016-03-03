//controller: 'EconomyGdpCtrl'
'use strict';

app.controller('EconomyGdpCtrl', ['$scope','$stateParams','qService','forecastFactory',function($scope,$stateParams,qService,forecastFactory) {
    

    var promise = qService.tokenHttpGet(forecastFactory.query,{tableName:'gdpForecastData'});
    promise.then(function(rc) {

        console.log(rc.data);
        //alert(rc.data);
        
        $scope.gdprealvalue=rc.data[0];
        $scope.forecastvalue=rc.data[1][10];
        $scope.gdpforecastvalue=rc.data[1];
        $scope.errorvalue=rc.data[2];
        $scope.gdpquarterrealvalue=rc.data[3];
        $scope.gdpquarterforcastvalue=rc.data[4];
        $scope.gdpgrowratevalue=rc.data[5];
        $scope.gdpquartergrowratevalue=rc.data[6];
        $scope.firstindustryvalue=rc.data[7];
        $scope.secondindustryvalue=rc.data[8];
        $scope.thirdindustryvalue=rc.data[9];
        $scope.thisyearfirstindustryvalue=rc.data[10];
        $scope.thisyearfirstindustryfcvalue=rc.data[11];
        $scope.thisyearfirstindustrygrowvalue=rc.data[12];
        $scope.thisyearsecondindustryvalue=rc.data[13];
        $scope.thisyearsecondindustryfcvalue=rc.data[14];
        $scope.thisyearsecondindustrygrowvalue=rc.data[15];
        $scope.thisyearthirdindustryvalue=rc.data[16];
        $scope.thisyearthirdindustryfcvalue=rc.data[17];
        $scope.thisyearthirdindustrygrowvalue=rc.data[18];
        $scope.xAxis= [
                    '2006',
                    '2007',
                    '2008',
                    '2009',
                    '2010',
                    '2011',
                    '2012',
                    '2013',
                    '2014',
                    '2015',
                    '2016',
                    '2017'
                    
                ];
       
       $scope.deviation=false;
       $scope.forecast=false;
       $scope.industrydetail=false;
       $scope.title = $stateParams.title;
      $scope.checkdeviation=function(){
        $scope.deviation=!$scope.deviation;
      };
      $scope.checkforecast=function(){
        $scope.forecast=!$scope.forecast;
      };
      $scope.exchange=function(param){
        $scope.yearGDPChart.series[0].type=param;
        $scope.yearGDPChart.series[1].type=param;
      };
      $scope.monthexchange=function(param){
        $scope.monthGDPChart.series[0].type=param;
        $scope.monthGDPChart.series[1].type=param;
      };
      $scope.monthcheckdeviation=function(){
        $scope.monthdeviation=!$scope.monthdeviation;
      };
      $scope.monthcheckforecast=function(){
        $scope.monthforecast=!$scope.monthforecast;
      };
      $scope.industrycheckdetail=function(){
        $scope.industrydetail=!$scope.industrydetail;
      };
      $scope.industryexchange=function(param){
        $scope.industryyearGDPChart.options.chart.type=param;
      };  

   
        $scope.yearGDPChart={
            options: {
              chart: {
                type:'column'
              },
            },
            title: {
                text: '太仓市GDP数据',
                style:{
                    fontWeight:'bold'
                }
            },
            subtitle: {
                text: '年度GDP分析'
            },
            xAxis: {
                categories:$scope.xAxis,
                plotBands:[{
                from: 8.5,
                to:12.5,
                color:'rgba(68, 170, 213, .2)',
                label: {
                        text: '预测区',
                        verticalAlign: 'top',
                        style: {
                            fontSize: '12px',
                            fontWeight: 600
                        }
                       
                    }
                }]
            },
            yAxis: [{
                min: 0,
                title: {
                    text: '年度GDP总值（亿元）'
                },
                plotLines:[{
                color:'red',
                dashStyle:'DashDot',
                value:1150,
                width:2,
                label:{
                    text:'本年度GDP目标',
                    align:'left',
                    x:10,
                     style: {
                            fontSize: '8px',
                            fontWeight: 200
                        }
                }
                }]
            },{
                title: {
                    text: '同比增长率'
                },
                labels: {
                    format: '{value} %',
                    style: {
                        color: Highcharts.getOptions().colors[0]
                    }
            },
            opposite:true
            }],
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
            },
            series: [{
                type: 'column',
                name: '真实数据',
                data: $scope.gdprealvalue

            }, {
                type: 'column',
                name: '预测数据',
                data: $scope.gdpforecastvalue

            },
            {   
                yAxis: 1,
                type:'spline',
                name: '同比增长率',
                data: $scope.gdpgrowratevalue
            }]
        };
  
      $scope.monthGDPChart={
        options: {
          chart: {
            type:'column'
          },
        },
            title: {
                text: '太仓市GDP数据',
                 style:{
                    fontWeight:'bold'
                }
            },
            subtitle: {
                text: '季度GDP分析'
            },
            xAxis: {
               categories: [
                    '第一季度',
                    '',
                    '第三季度',
                    ''
                    
                ],
                 plotBands:[{
                from: 2.5,
                to:3.5,
                color:'rgba(68, 170, 213, .2)',
                label: {
                        text: '预测区',
                        verticalAlign: 'top',
                        style: {
                            fontSize: '12px',
                            fontWeight: 600
                        }
                       
                    }
                }]
            },
            yAxis: [{
                min: 0,
                title: {
                    text: '季度GDP总值（亿元）'
                },
                 plotLines:[{
                color:'red',
                dashStyle:'DashDot',
                value:1150,
                width:2,
                label:{
                    text:'本年度GDP目标',
                    align:'left',
                    x:10,
                     style: {
                            fontSize: '8px',
                            fontWeight: 200
                        }
                }
                }]
            },
            {
                title: {
                    text: '同比增长率'
                },
                labels: {
                    format: '{value} %',
                    style: {
                        color: Highcharts.getOptions().colors[0]
                    }
            },
            opposite:true
            }],
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
            },
            series: [{
                type: 'column',
                name: '真实数据',
                data: $scope.gdpquarterrealvalue

            }, {
                type: 'column',
                name: '预测数据',
                data: $scope.gdpquarterforcastvalue

            },
            {   
                yAxis: 1,
                type:'spline',
                name: '同比增长率',
                data: $scope.gdpquartergrowratevalue
            }]
      };

      $scope.industryyearGDPChart={
        options: {
          chart: {
            type:'column'
          },
        },
            title: {
                text: '太仓市GDP数据',
                 style:{
                    fontWeight:'bold'
                }
            },
            subtitle: {
                text: '按年度分产业GDP分析'
            },
            xAxis: {
                categories: [
                    '2006',
                    '2007',
                    '2008',
                    '2009',
                    '2010',
                    '2011',
                    '2012',
                    '2013',
                    '2014',
                    '2015',
                    '2016',
                    '2017'
                    
                ],
                 plotBands:[{
                from: 8.5,
                to:12.5,
                color:'rgba(68, 170, 213, .2)',
                label: {
                        text: '预测区',
                        verticalAlign: 'top',
                        style: {
                            fontSize: '12px',
                            fontWeight: 600
                        }
                       
                    }
                }]
            },
            yAxis: {
                min: 0,
                title: {
                    text: '年度GDP总值（亿元）'
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
            },
            series: [{
                color:'#929bce',
                name: '第一产业',
                data: $scope.firstindustryvalue

            }, {
                
                name: '第二产业',
                data: $scope.secondindustryvalue

            },
            {   color:'#465299',
                name: '第三产业',
                data: $scope.thirdindustryvalue
            }]
      };
      $scope.primaryGDPChart={
        chart: {
                
            },
            title: {
                text: '太仓市GDP数据'
            },
            subtitle: {
                text: '第一产业本年度GDP分析'
            },
            xAxis: {
                categories: [
                    '第一季度',
                    '',
                    '第三季度',
                    ''
                    
                ]
            },
            yAxis: [{
                min: 0,
                title: {
                    text: '第一产业季度GDP总值（亿元）'
                }
            },{
                title: {
                    text: '同比增长率'
                },
                labels: {
                    format: '{value} %',
                    style: {
                        color: Highcharts.getOptions().colors[0]
                    }
            },
            opposite:true
            }],
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
            },
            series: [{

                type: 'column',
                name: '真实数据',
                data: $scope.thisyearfirstindustryvalue

            }, {
                type: 'column',
                name: '预测数据',
                data: $scope.thisyearfirstindustryfcvalue

            },
            {   
                yAxis: 1,
                type:'spline',
                name: '同比增长率',
                data: $scope.thisyearfirstindustrygrowvalue
            }]
      
      };
      $scope.secondGDPChart={
        chart: {
                
            },
            title: {
                text: '太仓市GDP数据'
            },
            subtitle: {
                text: '第二产业本年度GDP分析'
            },
            xAxis: {
                categories: [
                    '第一季度',
                    '',
                    '第三季度',
                    ''
                    
                ]
            },
            yAxis: [{
                min: 0,
                title: {
                    text: '第二产业季度GDP总值（亿元）'
                }
            },{
                title: {
                    text: '同比增长率'
                },
                labels: {
                    format: '{value} %',
                    style: {
                        color: Highcharts.getOptions().colors[0]
                    }
            },
            opposite:true
            }],
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
            },
            series: [{
             
                type: 'column',
                name: '真实数据',
                data: $scope.thisyearsecondindustryvalue

            }, { 
               
                type: 'column',
                name: '预测数据',
                data: $scope.thisyearsecondindustryfcvalue

            },
            {   
               
                yAxis: 1,
                type:'spline',
                name: '同比增长率',
                data: $scope.thisyearsecondindustrygrowvalue
            }]
      
      };
      $scope.thirdGDPChart={
        chart: {
                
            },
            title: {
                text: '太仓市GDP数据'
            },
            subtitle: {
                text: '第三产业本年度GDP分析'
            },
            xAxis: {
                categories: [
                    '第一季度',
                    '',
                    '第三季度',
                    ''
                    
                ]
            },
            yAxis: [{
                min: 0,
                title: {
                    text: '第三产业季度GDP总值（亿元）'
                }
            },{
                title: {
                    text: '同比增长率'
                },
                labels: {
                    format: '{value} %',
                    style: {
                        color: Highcharts.getOptions().colors[0]
                    }
            },
            opposite:true
            }],
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
            },
            series: [{
               
                type: 'column',
                name: '真实数据',
                data: $scope.thisyearthirdindustryvalue

            }, {
               
                type: 'column',
                name: '预测数据',
                data: $scope.thisyearthirdindustryfcvalue

            },
            {   
                
                yAxis: 1,
                type:'spline',
                name: '同比增长率',
                data: $scope.thisyearthirdindustrygrowvalue
            }]
      
        };
   });
   
}]);
