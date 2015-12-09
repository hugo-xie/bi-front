'use strict';

app.controller('EconomyTaxCtrl', ['$scope','$stateParams', function($scope, $stateParams) {

  $scope.title = $stateParams.title;

}]);