//CONTROLLER
(function() {
  'use strict';
  angular.module('rapidrecipe')
  .controller('loginController', loginController);
  loginController.$inject = [
    'Food',
    'User',
    '$state',
    "$http",
    "$scope", 
    "$stamplay",
    '$window'
  ];

  function loginController(
    Food, 
    User,
    $state, 
    $http, 
    $scope, 
    $stamplay, 
    $window
    )
  {

    $scope.login = function() {
      var userInfo = {
        email: $scope.email,
        password: $scope.password
      };

      User.login(userInfo).then(function(res){
        console.log(res);
      });
    };

  }
  })();