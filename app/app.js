'use strict';

// Declare app level module which depends on views, and components
angular.module('sivaTrial', [
  'ngRoute',
  'sivaTrial.view1',
  'sivaTrial.view2'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
