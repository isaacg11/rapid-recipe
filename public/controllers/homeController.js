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
//VARS
    $scope.popular = [
      {title: "Chick Parmesan",
       image_url: "public/images/Chicken-parm.jpg",
       f2f_url: "http://food2fork.com/view/Chicken_Parmesan/35949"
      },
      {title: "Orange Chicken",
       image_url: "public/images/Orange-chicken.jpg",
       f2f_url: "http://food2fork.com/view/Orange_Chicken/35449"
      },
      {title: "Loaded Nachos",
       image_url: "public/images/Nachos.jpg",
       f2f_url: "http://food2fork.com/view/Loaded_Nachos/fbc599"
      },
      {title: "Actually Delicious Turkey Burgers",
       image_url: "public/images/Burger.jpg",
       f2f_url: "http://food2fork.com/view/Actually_Delicious_Turkey_Burgers/679"
      },
      {title: "Avocado BLT with Fried Egg and Chipotle Mayo",
       image_url: "public/images/BLT.jpg",
       f2f_url: "http://food2fork.com/view/Avocado_BLT_with_Fried_Egg_and_Chipotle_Mayo/35096"
      }
    ];
    $scope.recipes = $scope.recipes ? $scope.recipes: [];
    $scope.showLoader = false;
    $scope.showMessage = false;
    $scope.showFooter = false;
    $scope.previous = false;
    $scope.next = false;
    var page = 1;
    var data;
//SEARCH FOR RECIPE
    $scope.search = function(query) {
      $scope.hideDefault = true;
      $scope.showLoader = true;
      $scope.showFooter = true;

      
      data = {
        query : query.text,
        page: 1
      };

      Food.getRecipes(data).then(function(res){
        $scope.query.text = "";
        $scope.showLoader = false;
        $scope.showMessage = true;
        $scope.showFooter = false;
        $scope.q = data.query;
        $scope.recipes = res.body.recipes;
        $scope.next = true;
      });
    };
//GO TO RECIPE SOURCE
    $scope.goToRecipe = function(recipe) {
      window.location = recipe.f2f_url;
    };
//PAGINATE - NEXT
    $scope.pagNext = function() {
      page = page + 1;
      data = {
        query : data.query,
        page: page
      };
      Food.getRecipes(data).then(function(res){
        $scope.query.text = "";
        $scope.showLoader = false;
        $scope.showMessage = true;
        $scope.q = data.query;
        $scope.recipes = res.body.recipes;
        $scope.next = true;
        if(page > 1) {
          $scope.previous = true;
        }
        document.body.scrollTop = document.documentElement.scrollTop = 0;
      });
    };
//PAGINATE - PREVIOUS
    $scope.pagPrevious = function() {
      page = page - 1;
      data = {
        query : data.query,
        page: page
      };
      Food.getRecipes(data).then(function(res){
        $scope.query.text = "";
        $scope.showLoader = false;
        $scope.showMessage = true;
        $scope.q = data.query;
        $scope.recipes = res.body.recipes;
        $scope.next = true;
        if(page > 1) {
          $scope.previous = true;
        }
        else{
          $scope.previous = false;
        }
        document.body.scrollTop = document.documentElement.scrollTop = 0;
      });
    };
//SUBSCRIBE
    $scope.subscribe = function(email) {
      document.getElementById('subscribe-btn').className = "button is-large is-loading";
      var userEmail = {
        email: email.text
      };

      User.newSubscription(userEmail).then(function(res){
        $scope.email.text = "";
        toastr.success('Signup Successful!');
        document.getElementById('subscribe-btn').className = "button is-large";
      });
    };
//OPEN MODAL
    $scope.contact = function() {
      document.getElementById('contactModal').className = 'modal is-active';
    };
//CLOSE MODAL
    $scope.close = function() {
      document.getElementById('contactModal').className = 'modal';
    };
//SUBMIT MODAL
    $scope.submit = function(user) {
      User.sendMessage(user).then(function(res){
        document.getElementById('contactModal').className = 'modal';
        $scope.user.name = "";
        $scope.user.email = "";
        $scope.user.text = "";
        toastr.success('Message Sent!');
      });
    };
  }
  })();