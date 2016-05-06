(function() {
  'use strict';
  var app = angular.module('rapidrecipe', ['ui.router','ngStamplay'])
  .config(Config);
  Config.$inject = ['$stateProvider', '$urlRouterProvider','$locationProvider'];


function Config($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider.state('Home',{
    url: '/',
    templateUrl: './public/views/home.html'
  });
  
  $urlRouterProvider.otherwise('/');
  // $locationProvider.html5Mode(true);
  }

})();