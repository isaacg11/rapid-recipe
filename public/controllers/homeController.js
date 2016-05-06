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

  $scope.search = function(query) {
    var data = {
      query : query.text
    };

    Stamplay.Codeblock("recipes").run(data)
    .then(function(err) {
      console.log(err);
      // success
    }, function(err) {
      // error
    });
  };


  }
  })();