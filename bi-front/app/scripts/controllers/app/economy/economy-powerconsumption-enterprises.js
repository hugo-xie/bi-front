'use strict';

app.controller('EconomyPowerConsumptionOfEnterprisesCtrl', ['$scope','$stateParams', function($scope, $stateParams) {
  	$scope.title = $stateParams.title;

    //new地图对象
  	$scope.map = new AMap.Map('consumptionbyenterprise',{
          zoom: 14,
          center: [121.14,31.484511],
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
    //设置地图标记点
    var marker01 = new AMap.Marker({
        icon : 'images/marker_sprite.png',
        position: [121.14,31.484511],
        map:$scope.map,
        clickable:true,
    });

    marker01.setLabel({//label默认蓝框白底左上角显示，样式className为：amap-marker-label
        offset: new AMap.Pixel(20, -2),
        content: "太仓市规模以上企业B",
        clickable:true,
    });

    var marker02 = new AMap.Marker({
        icon : 'images/marker_sprite.png',
        position: [121.12,31.484511],
        map:$scope.map,
        clickable:true,
    });

    marker02.setLabel({//label默认蓝框白底左上角显示，样式className为：amap-marker-label
        offset: new AMap.Pixel(20, -2),
        content: "太仓市规模以上企业A",
        clickable:true,
    });

    //地图标记--企业数据详情
    var marker01OnClick = function(){
        $scope.enterprisechosen = 'enterprise01';
        $scope.$apply(function(){
          $scope.EnterpriseChart.title.text = $scope.enterprises.enterprise01.title;
          $scope.EnterpriseChart.series[0].data = $scope.enterprises.enterprise01.powerdata;
          $scope.EnterpriseChart.series[1].data = $scope.enterprises.enterprise01.gdpdata;  
          $scope.totaldata.tabledata.gdprate = $scope.enterprises.enterprise01.gdpdata;
          $scope.totaldata.tabledata.powerrate = $scope.enterprises.enterprise01.powerdata;
        });
    };
    var marker03OnClick = function(){
        $scope.enterprisechosen = 'enterprise03';
        $scope.$apply(function(){
          $scope.EnterpriseChart.title.text = $scope.enterprises.enterprise03.title;
          $scope.EnterpriseChart.series[0].data = $scope.enterprises.enterprise03.powerdata;
          $scope.EnterpriseChart.series[1].data = $scope.enterprises.enterprise03.gdpdata;
          $scope.totaldata.tabledata.gdprate = $scope.enterprises.enterprise03.gdpdata;
          $scope.totaldata.tabledata.powerrate = $scope.enterprises.enterprise03.powerdata;
        });
    };
    //将上述函数添加到监听事件
 
    AMap.event.addListener(marker01, 'click', marker01OnClick);
    AMap.event.addListener(marker02, 'click', marker03OnClick);

    //标记被选择的企业
    $scope.enterprisechosen = 'enterprise01';

    $scope.chooseJan = function(){
      switch($scope.enterprisechosen){
        case 'enterprise01':{
          $scope.EnterpriseChart.title.text = $scope.enterprises.enterprise01.jan.title;
          $scope.EnterpriseChart.series[0].data = $scope.enterprises.enterprise01.jan.powerdata;
          $scope.EnterpriseChart.series[1].data = $scope.enterprises.enterprise01.jan.gdpdata;
          $scope.totaldata.tabledata.gdprate = $scope.enterprises.enterprise01.jan.gdpdata;
          $scope.totaldata.tabledata.powerrate = $scope.enterprises.enterprise01.jan.powerdata;
        };break;
        case 'enterprise03':{
          $scope.EnterpriseChart.title.text = $scope.enterprises.enterprise03.jan.title;
          $scope.EnterpriseChart.series[0].data = $scope.enterprises.enterprise03.jan.powerdata;
          $scope.EnterpriseChart.series[1].data = $scope.enterprises.enterprise03.jan.gdpdata;
          $scope.totaldata.tabledata.gdprate = $scope.enterprises.enterprise03.jan.gdpdata;
          $scope.totaldata.tabledata.powerrate = $scope.enterprises.enterprise03.jan.powerdata;
        };break;
      }
    }
    $scope.chooseFeb = function(){
      switch($scope.enterprisechosen){
        case 'enterprise01':{
          $scope.EnterpriseChart.title.text = $scope.enterprises.enterprise01.feb.title;
          $scope.EnterpriseChart.series[0].data = $scope.enterprises.enterprise01.feb.powerdata;
          $scope.EnterpriseChart.series[1].data = $scope.enterprises.enterprise01.feb.gdpdata;
          $scope.totaldata.tabledata.gdprate = $scope.enterprises.enterprise01.feb.gdpdata;
          $scope.totaldata.tabledata.powerrate = $scope.enterprises.enterprise01.feb.powerdata;
        };break;
        case 'enterprise03':{
          $scope.EnterpriseChart.title.text = $scope.enterprises.enterprise03.feb.title;
          $scope.EnterpriseChart.series[0].data = $scope.enterprises.enterprise03.feb.powerdata;
          $scope.EnterpriseChart.series[1].data = $scope.enterprises.enterprise03.feb.gdpdata;
          $scope.totaldata.tabledata.gdprate = $scope.enterprises.enterprise03.feb.gdpdata;
          $scope.totaldata.tabledata.powerrate = $scope.enterprises.enterprise03.feb.powerdata;
        };break;
      }
    }
    $scope.chooseMar = function(){
      switch($scope.enterprisechosen){
        case 'enterprise01':{
          $scope.EnterpriseChart.title.text = $scope.enterprises.enterprise01.mar.title;
          $scope.EnterpriseChart.series[0].data = $scope.enterprises.enterprise01.mar.powerdata;
          $scope.EnterpriseChart.series[1].data = $scope.enterprises.enterprise01.mar.gdpdata;
          $scope.totaldata.tabledata.gdprate = $scope.enterprises.enterprise01.mar.gdpdata;
          $scope.totaldata.tabledata.powerrate = $scope.enterprises.enterprise01.mar.powerdata;
        };break;
        case 'enterprise03':{
          $scope.EnterpriseChart.title.text = $scope.enterprises.enterprise03.mar.title;
          $scope.EnterpriseChart.series[0].data = $scope.enterprises.enterprise03.mar.powerdata;
          $scope.EnterpriseChart.series[1].data = $scope.enterprises.enterprise03.mar.gdpdata;
          $scope.totaldata.tabledata.gdprate = $scope.enterprises.enterprise03.mar.gdpdata;
          $scope.totaldata.tabledata.powerrate = $scope.enterprises.enterprise03.mar.powerdata;
        };break;
      }
    }
    $scope.chooseApr = function(){
      switch($scope.enterprisechosen){
        case 'enterprise01':{
          $scope.EnterpriseChart.title.text = $scope.enterprises.enterprise01.apr.title;
          $scope.EnterpriseChart.series[0].data = $scope.enterprises.enterprise01.apr.powerdata;
          $scope.EnterpriseChart.series[1].data = $scope.enterprises.enterprise01.apr.gdpdata;
          $scope.totaldata.tabledata.gdprate = $scope.enterprises.enterprise01.apr.gdpdata;
          $scope.totaldata.tabledata.powerrate = $scope.enterprises.enterprise01.apr.powerdata;
        };break;
        case 'enterprise03':{
          $scope.EnterpriseChart.title.text = $scope.enterprises.enterprise03.apr.title;
          $scope.EnterpriseChart.series[0].data = $scope.enterprises.enterprise03.apr.powerdata;
          $scope.EnterpriseChart.series[1].data = $scope.enterprises.enterprise03.apr.gdpdata;
          $scope.totaldata.tabledata.gdprate = $scope.enterprises.enterprise03.apr.gdpdata;
          $scope.totaldata.tabledata.powerrate = $scope.enterprises.enterprise03.apr.powerdata;
        };break;
      }
    }
    $scope.chooseMay = function(){
      switch($scope.enterprisechosen){
        case 'enterprise01':{
          $scope.EnterpriseChart.title.text = $scope.enterprises.enterprise01.may.title;
          $scope.EnterpriseChart.series[0].data = $scope.enterprises.enterprise01.may.powerdata;
          $scope.EnterpriseChart.series[1].data = $scope.enterprises.enterprise01.may.gdpdata;
          $scope.totaldata.tabledata.gdprate = $scope.enterprises.enterprise01.may.gdpdata;
          $scope.totaldata.tabledata.powerrate = $scope.enterprises.enterprise01.may.powerdata;
        };break;
        case 'enterprise03':{
          $scope.EnterpriseChart.title.text = $scope.enterprises.enterprise03.may.title;
          $scope.EnterpriseChart.series[0].data = $scope.enterprises.enterprise03.may.powerdata;
          $scope.EnterpriseChart.series[1].data = $scope.enterprises.enterprise03.may.gdpdata;
          $scope.totaldata.tabledata.gdprate = $scope.enterprises.enterprise03.may.gdpdata;
          $scope.totaldata.tabledata.powerrate = $scope.enterprises.enterprise03.may.powerdata;
        };break;
      }
    }
    $scope.chooseJun = function(){
      switch($scope.enterprisechosen){
        case 'enterprise01':{
          $scope.EnterpriseChart.title.text = $scope.enterprises.enterprise01.jun.title;
          $scope.EnterpriseChart.series[0].data = $scope.enterprises.enterprise01.jun.powerdata;
          $scope.EnterpriseChart.series[1].data = $scope.enterprises.enterprise01.jun.gdpdata;
          $scope.totaldata.tabledata.gdprate = $scope.enterprises.enterprise01.jun.gdpdata;
          $scope.totaldata.tabledata.powerrate = $scope.enterprises.enterprise01.jun.powerdata;
        };break;
        case 'enterprise03':{
          $scope.EnterpriseChart.title.text = $scope.enterprises.enterprise03.jun.title;
          $scope.EnterpriseChart.series[0].data = $scope.enterprises.enterprise03.jun.powerdata;
          $scope.EnterpriseChart.series[1].data = $scope.enterprises.enterprise03.jun.gdpdata;
          $scope.totaldata.tabledata.gdprate = $scope.enterprises.enterprise03.jun.gdpdata;
          $scope.totaldata.tabledata.powerrate = $scope.enterprises.enterprise03.jun.powerdata;
        };break;
      }
    }
    $scope.chooseJul = function(){
      switch($scope.enterprisechosen){
        case 'enterprise01':{
          $scope.EnterpriseChart.title.text = $scope.enterprises.enterprise01.jul.title;
          $scope.EnterpriseChart.series[0].data = $scope.enterprises.enterprise01.jul.powerdata;
          $scope.EnterpriseChart.series[1].data = $scope.enterprises.enterprise01.jul.gdpdata;
          $scope.totaldata.tabledata.gdprate = $scope.enterprises.enterprise01.jul.gdpdata;
          $scope.totaldata.tabledata.powerrate = $scope.enterprises.enterprise01.jul.powerdata;
        };break;
        case 'enterprise03':{
          $scope.EnterpriseChart.title.text = $scope.enterprises.enterprise03.jul.title;
          $scope.EnterpriseChart.series[0].data = $scope.enterprises.enterprise03.jul.powerdata;
          $scope.EnterpriseChart.series[1].data = $scope.enterprises.enterprise03.jul.gdpdata;
          $scope.totaldata.tabledata.gdprate = $scope.enterprises.enterprise03.jul.gdpdata;
          $scope.totaldata.tabledata.powerrate = $scope.enterprises.enterprise03.jul.powerdata;
        };break;
      }
    }
    $scope.chooseAug = function(){
      switch($scope.enterprisechosen){
        case 'enterprise01':{
          $scope.EnterpriseChart.title.text = $scope.enterprises.enterprise01.aug.title;
          $scope.EnterpriseChart.series[0].data = $scope.enterprises.enterprise01.aug.powerdata;
          $scope.EnterpriseChart.series[1].data = $scope.enterprises.enterprise01.aug.gdpdata;
          $scope.totaldata.tabledata.gdprate = $scope.enterprises.enterprise01.aug.gdpdata;
          $scope.totaldata.tabledata.powerrate = $scope.enterprises.enterprise01.aug.powerdata;
        };break;
        case 'enterprise03':{
          $scope.EnterpriseChart.title.text = $scope.enterprises.enterprise03.aug.title;
          $scope.EnterpriseChart.series[0].data = $scope.enterprises.enterprise03.aug.powerdata;
          $scope.EnterpriseChart.series[1].data = $scope.enterprises.enterprise03.aug.gdpdata;
          $scope.totaldata.tabledata.gdprate = $scope.enterprises.enterprise03.aug.gdpdata;
          $scope.totaldata.tabledata.powerrate = $scope.enterprises.enterprise03.aug.powerdata;
        };break;
      }
    }
    $scope.chooseSep = function(){
      switch($scope.enterprisechosen){
        case 'enterprise01':{
          $scope.EnterpriseChart.title.text = $scope.enterprises.enterprise01.sep.title;
          $scope.EnterpriseChart.series[0].data = $scope.enterprises.enterprise01.sep.powerdata;
          $scope.EnterpriseChart.series[1].data = $scope.enterprises.enterprise01.sep.gdpdata;
          $scope.totaldata.tabledata.gdprate = $scope.enterprises.enterprise01.sep.gdpdata;
          $scope.totaldata.tabledata.powerrate = $scope.enterprises.enterprise01.sep.powerdata;
        };break;
        case 'enterprise03':{
          $scope.EnterpriseChart.title.text = $scope.enterprises.enterprise03.sep.title;
          $scope.EnterpriseChart.series[0].data = $scope.enterprises.enterprise03.sep.powerdata;
          $scope.EnterpriseChart.series[1].data = $scope.enterprises.enterprise03.sep.gdpdata;
          $scope.totaldata.tabledata.gdprate = $scope.enterprises.enterprise03.sep.gdpdata;
          $scope.totaldata.tabledata.powerrate = $scope.enterprises.enterprise03.sep.powerdata;
        };break;
      }
    }
    $scope.chooseOct = function(){
      switch($scope.enterprisechosen){
        case 'enterprise01':{
          $scope.EnterpriseChart.title.text = $scope.enterprises.enterprise01.oct.title;
          $scope.EnterpriseChart.series[0].data = $scope.enterprises.enterprise01.oct.powerdata;
          $scope.EnterpriseChart.series[1].data = $scope.enterprises.enterprise01.oct.gdpdata;
          $scope.totaldata.tabledata.gdprate = $scope.enterprises.enterprise01.oct.gdpdata;
          $scope.totaldata.tabledata.powerrate = $scope.enterprises.enterprise01.oct.powerdata;
        };break;
        case 'enterprise03':{
          $scope.EnterpriseChart.title.text = $scope.enterprises.enterprise03.oct.title;
          $scope.EnterpriseChart.series[0].data = $scope.enterprises.enterprise03.oct.powerdata;
          $scope.EnterpriseChart.series[1].data = $scope.enterprises.enterprise03.oct.gdpdata;
          $scope.totaldata.tabledata.gdprate = $scope.enterprises.enterprise03.oct.gdpdata;
          $scope.totaldata.tabledata.powerrate = $scope.enterprises.enterprise03.oct.powerdata;
        };break;
      }
    }
    $scope.chooseNov = function(){
      switch($scope.enterprisechosen){
        case 'enterprise01':{
          $scope.EnterpriseChart.title.text = $scope.enterprises.enterprise01.nov.title;
          $scope.EnterpriseChart.series[0].data = $scope.enterprises.enterprise01.nov.powerdata;
          $scope.EnterpriseChart.series[1].data = $scope.enterprises.enterprise01.nov.gdpdata;
          $scope.totaldata.tabledata.gdprate = $scope.enterprises.enterprise01.nov.gdpdata;
          $scope.totaldata.tabledata.powerrate = $scope.enterprises.enterprise01.nov.powerdata;
        };break;
        case 'enterprise03':{
          $scope.EnterpriseChart.title.text = $scope.enterprises.enterprise03.nov.title;
          $scope.EnterpriseChart.series[0].data = $scope.enterprises.enterprise03.nov.powerdata;
          $scope.EnterpriseChart.series[1].data = $scope.enterprises.enterprise03.nov.gdpdata;
          $scope.totaldata.tabledata.gdprate = $scope.enterprises.enterprise03.nov.gdpdata;
          $scope.totaldata.tabledata.powerrate = $scope.enterprises.enterprise03.nov.powerdata;
        };break;
      }
    }
    $scope.chooseDec = function(){
      switch($scope.enterprisechosen){
        case 'enterprise01':{
          $scope.EnterpriseChart.title.text = $scope.enterprises.enterprise01.dec.title;
          $scope.EnterpriseChart.series[0].data = $scope.enterprises.enterprise01.dec.powerdata;
          $scope.EnterpriseChart.series[1].data = $scope.enterprises.enterprise01.dec.gdpdata;
          $scope.totaldata.tabledata.gdprate = $scope.enterprises.enterprise01.dec.gdpdata;
          $scope.totaldata.tabledata.powerrate = $scope.enterprises.enterprise01.dec.powerdata;
        };break;
        case 'enterprise03':{
          $scope.EnterpriseChart.title.text = $scope.enterprises.enterprise03.dec.title;
          $scope.EnterpriseChart.series[0].data = $scope.enterprises.enterprise03.dec.powerdata;
          $scope.EnterpriseChart.series[1].data = $scope.enterprises.enterprise03.dec.gdpdata;
          $scope.totaldata.tabledata.gdprate = $scope.enterprises.enterprise03.dec.gdpdata;
          $scope.totaldata.tabledata.powerrate = $scope.enterprises.enterprise03.dec.powerdata;
        };break;
      }
    }
    $scope.chooseYear = function(){
      switch($scope.enterprisechosen){
        case 'enterprise01':{
          $scope.EnterpriseChart.title.text = $scope.enterprises.enterprise01.title;
          $scope.EnterpriseChart.series[0].data = $scope.enterprises.enterprise01.powerdata;
          $scope.EnterpriseChart.series[1].data = $scope.enterprises.enterprise01.gdpdata;
          $scope.totaldata.tabledata.gdprate = $scope.enterprises.enterprise01.gdpdata;
          $scope.totaldata.tabledata.powerrate = $scope.enterprises.enterprise01.powerdata;
        };break;
        case 'enterprise03':{
          $scope.EnterpriseChart.title.text = $scope.enterprises.enterprise03.title;
          $scope.EnterpriseChart.series[0].data = $scope.enterprises.enterprise03.powerdata;
          $scope.EnterpriseChart.series[1].data = $scope.enterprises.enterprise03.gdpdata;
          $scope.totaldata.tabledata.gdprate = $scope.enterprises.enterprise03.gdpdata;
          $scope.totaldata.tabledata.powerrate = $scope.enterprises.enterprise03.powerdata;
        };break;
      }
    }
    $scope.enterprises = {
      enterprise01:{
        title:'太仓市规模以上企业A',
        gdpdata:[5.1, 5.8, 4.7, 3.6, 3.0, 4.8, 4.8, 4.9, 4.1, 4.1, 2.6],
        powerdata:[8.1, 6.9, 6.9, 5.5, 5.2, 5.9, 6.2, 7.8, 6.3, 6.3, 3.9],
        jan:{
          title:'太仓市规模以上企业A 一月份',
          gdpdata:[6.1, 6.8, 4.7, 3.6, 3.0, 4.8, 4.8, 4.9, 4.1, 4.1, 2.6],
          powerdata:[8.1, 6.9, 6.9, 5.5, 5.2, 5.9, 6.2, 7.8, 6.3, 6.3, 3.9],
        },
        feb:{
          title:'太仓市规模以上企业A 二月份',
          gdpdata:[6.1, 5.8, 5.7, 3.6, 3.0, 4.8, 4.8, 4.9, 4.1, 4.1, 2.6],
          powerdata:[8.1, 6.9, 6.9, 5.5, 5.2, 5.9, 6.2, 7.8, 6.3, 6.3, 3.9],
        },
        mar:{
          title:'太仓市规模以上企业A 三月份',
          gdpdata:[6.1, 5.8, 4.7, 4.6, 3.0, 4.8, 4.8, 4.9, 4.1, 4.1, 2.6],
          powerdata:[8.1, 6.9, 6.9, 5.5, 5.2, 5.9, 6.2, 7.8, 6.3, 6.3, 3.9],
        },
        apr:{
          title:'太仓市规模以上企业A 四月份',
          gdpdata:[6.1, 5.8, 4.7, 3.6, 4.0, 4.8, 4.8, 4.9, 4.1, 4.1, 2.6],
          powerdata:[8.1, 6.9, 6.9, 5.5, 5.2, 5.9, 6.2, 7.8, 6.3, 6.3, 3.9],
        },
        may:{
          title:'太仓市规模以上企业A 五月份',
          gdpdata:[6.1, 5.8, 4.7, 3.6, 3.0, 3.8, 4.8, 4.9, 4.1, 4.1, 2.6],
          powerdata:[8.1, 6.9, 6.9, 5.5, 5.2, 5.9, 6.2, 7.8, 6.3, 6.3, 3.9],
        },
        jun:{
          title:'太仓市规模以上企业A 六月份',
          gdpdata:[6.1, 5.8, 4.7, 3.6, 3.0, 4.8, 5.8, 4.9, 4.1, 4.1, 2.6],
          powerdata:[8.1, 6.9, 6.9, 5.5, 5.2, 5.9, 6.2, 7.8, 6.3, 6.3, 3.9],
        },
        jul:{
          title:'太仓市规模以上企业A 七月份',
          gdpdata:[6.1, 5.8, 4.7, 3.6, 3.0, 4.8, 4.8, 5.9, 4.1, 4.1, 2.6],
          powerdata:[8.1, 6.9, 6.9, 5.5, 5.2, 5.9, 6.2, 7.8, 6.3, 6.3, 3.9],
        },
        aug:{
          title:'太仓市规模以上企业A 八月份',
          gdpdata:[6.1, 5.8, 4.7, 3.6, 3.0, 4.8, 4.8, 4.9, 3.1, 4.1, 2.6],
          powerdata:[8.1, 6.9, 6.9, 5.5, 5.2, 5.9, 6.2, 7.8, 6.3, 6.3, 3.9],
        },
        sep:{
          title:'太仓市规模以上企业A 九月份',
          gdpdata:[6.1, 5.8, 4.7, 3.6, 3.0, 4.8, 4.8, 4.9, 4.1, 3.1, 2.6],
          powerdata:[8.1, 6.9, 6.9, 5.5, 5.2, 5.9, 6.2, 7.8, 6.3, 6.3, 3.9],
        },
        oct:{
          title:'太仓市规模以上企业A 十月份',
          gdpdata:[6.1, 5.8, 4.7, 3.6, 3.0, 4.8, 4.8, 4.9, 4.1, 4.1, 3.6],
          powerdata:[8.1, 6.9, 6.9, 5.5, 5.2, 5.9, 6.2, 7.8, 6.3, 6.3, 3.9],
        },
        nov:{
          title:'太仓市规模以上企业A 十一月份',
          gdpdata:[6.1, 5.8, 4.7, 3.6, 3.0, 4.8, 4.8, 4.9, 4.1, 4.1, 2.6],
          powerdata:[8.1, 6.9, 6.9, 5.5, 5.2, 5.9, 6.2, 6.8, 6.3, 6.3, 3.9],
        },
        dec:{
          title:'太仓市规模以上企业A 十二月份',
          gdpdata:[6.1, 5.8, 4.7, 3.6, 3.0, 4.8, 4.8, 4.9, 4.1, 4.1, 2.6],
          powerdata:[8.1, 6.9, 6.9, 5.5, 5.2, 5.9, 6.2, 7.8, 6.3, 5.3, 3.9],
        }
      },
      enterprise03:{
        title:'太仓市规模以上企业B',
        gdpdata:[5.2, 4.8, 3.7, 3.6, 3.0, 4.0, 4.8, 4.7, 4.1, 3.1, 2.6],
        powerdata:[7.0, 6.5, 6.2, 5.5, 5.2, 5.5, 6.2, 7.5, 6.3, 5.3, 3.9],
        jan:{
          title:'太仓市规模以上企业B 一月份',
          gdpdata:[6.1, 6.8, 4.7, 3.6, 3.0, 4.8, 4.8, 4.9, 4.1, 4.1, 2.6],
          powerdata:[8.1, 6.9, 6.9, 5.5, 5.2, 5.9, 6.2, 7.8, 6.3, 6.3, 3.9],
        },
        feb:{
          title:'太仓市规模以上企业B 二月份',
          gdpdata:[6.1, 5.8, 5.7, 3.6, 3.0, 4.8, 4.8, 4.9, 4.1, 4.1, 2.6],
          powerdata:[8.1, 6.9, 6.9, 5.5, 5.2, 5.9, 6.2, 7.8, 6.3, 6.3, 3.9],
        },
        mar:{
          title:'太仓市规模以上企业B 三月份',
          gdpdata:[6.1, 5.8, 4.7, 4.6, 3.0, 4.8, 4.8, 4.9, 4.1, 4.1, 2.6],
          powerdata:[8.1, 6.9, 6.9, 5.5, 5.2, 5.9, 6.2, 7.8, 6.3, 6.3, 3.9],
        },
        apr:{
          title:'太仓市规模以上企业B 四月份',
          gdpdata:[6.1, 5.8, 4.7, 3.6, 4.0, 4.8, 4.8, 4.9, 4.1, 4.1, 2.6],
          powerdata:[8.1, 6.9, 6.9, 5.5, 5.2, 5.9, 6.2, 7.8, 6.3, 6.3, 3.9],
        },
        may:{
          title:'太仓市规模以上企业B 五月份',
          gdpdata:[6.1, 5.8, 4.7, 3.6, 3.0, 3.8, 4.8, 4.9, 4.1, 4.1, 2.6],
          powerdata:[8.1, 6.9, 6.9, 5.5, 5.2, 5.9, 6.2, 7.8, 6.3, 6.3, 3.9],
        },
        jun:{
          title:'太仓市规模以上企业B 六月份',
          gdpdata:[6.1, 5.8, 4.7, 3.6, 3.0, 4.8, 5.8, 4.9, 4.1, 4.1, 2.6],
          powerdata:[8.1, 6.9, 6.9, 5.5, 5.2, 5.9, 6.2, 7.8, 6.3, 6.3, 3.9],
        },
        jul:{
          title:'太仓市规模以上企业B 七月份',
          gdpdata:[6.1, 5.8, 4.7, 3.6, 3.0, 4.8, 4.8, 5.9, 4.1, 4.1, 2.6],
          powerdata:[8.1, 6.9, 6.9, 5.5, 5.2, 5.9, 6.2, 7.8, 6.3, 6.3, 3.9],
        },
        aug:{
          title:'太仓市规模以上企业B 八月份',
          gdpdata:[6.1, 5.8, 4.7, 3.6, 3.0, 4.8, 4.8, 4.9, 3.1, 4.1, 2.6],
          powerdata:[8.1, 6.9, 6.9, 5.5, 5.2, 5.9, 6.2, 7.8, 6.3, 6.3, 3.9],
        },
        sep:{
          title:'太仓市规模以上企业B 九月份',
          gdpdata:[6.1, 5.8, 4.7, 3.6, 3.0, 4.8, 4.8, 4.9, 4.1, 3.1, 2.6],
          powerdata:[8.1, 6.9, 6.9, 5.5, 5.2, 5.9, 6.2, 7.8, 6.3, 6.3, 3.9],
        },
        oct:{
          title:'太仓市规模以上企业B 十月份',
          gdpdata:[6.1, 5.8, 4.7, 3.6, 3.0, 4.8, 4.8, 4.9, 4.1, 4.1, 3.6],
          powerdata:[8.1, 6.9, 6.9, 5.5, 5.2, 5.9, 6.2, 7.8, 6.3, 6.3, 3.9],
        },
        nov:{
          title:'太仓市规模以上企业B 十一月份',
          gdpdata:[6.1, 5.8, 4.7, 3.6, 3.0, 4.8, 4.8, 4.9, 4.1, 4.1, 2.6],
          powerdata:[8.1, 6.9, 6.9, 5.5, 5.2, 5.9, 6.2, 6.8, 6.3, 6.3, 3.9],
        },
        dec:{
          title:'太仓市规模以上企业B 十二月份',
          gdpdata:[6.1, 5.8, 4.7, 3.6, 3.0, 4.8, 4.8, 4.9, 4.1, 4.1, 2.6],
          powerdata:[8.1, 6.9, 6.9, 5.5, 5.2, 5.9, 6.2, 7.8, 6.3, 5.3, 3.9],
        }
      },
    };

    $scope.$watch($scope.enterprisesearch,enterprisefilter);
    var enterprisefilter = function(newValue,oldValue,scope){
      $scope.$apply(function(){
        for(var i=0;i<$scope.enterpriselist.length;i++){
          if($scope.enterpriselist[i].name.search(newValue)==-1){
            $scope.enterpriselist[i].isShow = false;
          }
        }
      });
    };

    $scope.enterpriselist = [
      {name:'仓市规模以上企业A',
       isShow:true,
      },
      {name:'太仓市规模以上企业B',
       isShow:true,
      },
    ];
    $scope.EnterpriseChart={
         options:{
            chart: {
                type: 'spline'
            },
         },
         title: {
            text: $scope.enterprises.enterprise03.title,
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
            data: $scope.enterprises.enterprise03.powerdata
        }, {
            name: '企业产值同比增长率',
            data: $scope.enterprises.enterprise03.gdpdata
        }]
  };

  $scope.totaldata = {
  	tabledata:{
      yearvalue:[2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016],
      gdprate:$scope.enterprises.enterprise01.gdpdata,
      powerrate:$scope.enterprises.enterprise01.powerdata,
    },
  };
  $scope.enterpriselist = [
      {
          name : '规模以上企业A',
          code : 1
      },
      {
          name : '规模以上企业B',
          code : 2
      },
      {
          name : '规模以上企业C',
          code : 3
      }
  ];
  $scope.chooseEnterprise = function(){
    $scope.map.setZoomAndCenter(16, [121.14,31.484511]);
  }
  	
}]);