//CONTROLLER
(function() {
  'use strict';
  angular.module('rapidrecipe')
  .controller('signupController', signupController);
  signupController.$inject = [
    'Food',
    'User',
    '$state',
    "$http",
    "$scope", 
    "$stamplay",
    '$window'
  ];

  function signupController(
    Food, 
    User,
    $state, 
    $http, 
    $scope, 
    $stamplay, 
    $window
    )
  {

    $scope.signup = function() {
      var userInfo = {
        email: $scope.email,
        password: $scope.password
      };

      User.signup(userInfo).then(function(res){
        $state.go('Home');
      });
    };

  }
  })();