'use strict';

angular.module('sivaTrial.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope',function($scope) {
  $scope.frequency = [
    {freq: 'Monthly', val: 12},
    {freq: 'Quarterly', val: 4},
    {freq: 'Semi-Annually', val: 2},
    {freq: 'Annually', val: 1}
  ];

  $scope.principal = 0;
  $scope.rateofinterest = 0;
  $scope.tennure = 0;
  $scope.selectedfrequency = 0;
  var interestOnly = 0;
  $scope.iamt = function(){
    /*var innerFrac = ($scope.rateofinterest / (100 * $scope.selectedfrequency));
    var power = ($scope.selectedfrequency * $scope.tennure);
    var interestOnly = $scope.principal * ((1 + innerFrac) ^ power);*/
    var r = $scope.rateofinterest / 100;
    var x = 1+ (r/$scope.selectedfrequency);
    var z = $scope.selectedfrequency * $scope.tennure;
    var interestOnly =  $scope.principal * Math.pow(x, z);
    return interestOnly;
  }
}]);