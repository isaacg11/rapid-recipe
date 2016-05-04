(function() {
  'use strict';
  var app = angular.module('rapidrecipe', ['ui.router','ngStamplay'])
  .config(Config);
  Config.$inject = ['$stateProvider', '$urlRouterProvider','$locationProvider'];


function Config($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider.state('Login',{
    url: '/login',
    templateUrl: './public/views/login.html'
  }).
  state('Home',{
    url: '/home',
    templateUrl: './public/views/home.html'
  });
  $urlRouterProvider.otherwise('/login');
  // $locationProvider.html5Mode(true);
  }

})();