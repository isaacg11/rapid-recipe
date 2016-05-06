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

  var getRecipes = function(){
    Stamplay.Codeblock("recipes").run()
    .then(function(err, res) {
      console.log(res);// success
    }, function(err) {
      console.log(err);// error
    }); 
  };


  }
  })();