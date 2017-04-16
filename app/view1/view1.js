'use strict';

angular.module('sivaTrial.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope',function($scope) {
    $scope.principal = 0;
    $scope.rateofinterest = 0;
    $scope.tennure = 0;
    var grandTotal = 0;
    $scope.totall = function(){
      grandTotal = $scope.principal * (1 + ($scope.rateofinterest / 100) * $scope.tennure);
      return grandTotal;
    }
    $scope.iamt = function(){
      var interestOnly = grandTotal - $scope.principal;
      return interestOnly;
    };
}]);