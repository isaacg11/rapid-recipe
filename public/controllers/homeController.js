//CONTROLLER
(function() {
  'use strict';
  angular.module('rapidrecipe')
  .controller('homeController', homeController);
  homeController.$inject = [
    'Food',
    'User',
    '$state',
    "$http",
    "$scope", 
    "$stamplay",
    '$window'
  ];

  function homeController(
    Food, 
    User,
    $state, 
    $http, 
    $scope, 
    $stamplay, 
    $window
    )
  {

    $scope.hello = 'helloWorld';

  }
  })();