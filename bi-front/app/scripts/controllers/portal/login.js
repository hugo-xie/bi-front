'use strict';

app.controller('LoginController', function($scope,$localStorage,$http,$location,
    sessionService, tokenFactory, qService, Semester, ToasterTool) {

  $scope.accountCharacter = 'TEACHER';
  $scope.login_name = "";
  $scope.login_password = "";
  $scope.sref = "";
  $scope.login = function() {
    $scope.message = "";
    var _n = $scope.login_name;
    var _p = $scope.login_password;
    if (_n == undefined || _n == "" || _p == undefined || _p == "") {
      $scope.errorMsg = '用户名/密码不能为空!';
      return;
    }else if(_n == "system" && _p == "1234"){
      $location.path("/app/index/economy/gdp/GDP");
    }else if (_n=='system') 
    {
      $scope.errorMsg='密码错误'
    }else{
      $scope.errorMsg = '用户名错误!';
    }
  }
  //登录方法
  /*
  $scope.login = function() {
    $scope.message = "";
    var _n = $scope.login_name;
    var _p = $scope.login_password;
    if (_n == undefined || _n == "" || _p == undefined || _p == "") {
      $scope.errorMsg = '用户名/密码不能为空!';
      return;
    }
    tokenFactory.login({
      'X-Username': _n,
      'X-Password': _p
    }).post({},
      function success(data, headers) {
        sessionService.saveToken(data.data, headers()['x-auth-token']);
        $http.get(base_Url+'/api/semester/current',
          {headers:{'x-auth-token':headers()['x-auth-token']}})
        .success(function(rc){
          sessionService.saveCurrSemeter(rc.data);
        }).error(function(error){
          ToasterTool.error('未知错误发生!','');
        });
      },
      function error(data) {
        ToasterTool.error('登录失败','用户名或密码错误');
      });
  };

  $scope.forgotPassword = function(){
    ToasterTool.info('请联系管理员','联系电话: --');
  };
  */
});
