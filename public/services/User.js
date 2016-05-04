

//FACTORY

(function() {
  'use strict';
  angular.module('rapidrecipe')
  .factory('User', User);

  function User($http, $q, $window){
	return {
    	login : function(userInfo){
        var q = $q.defer();
    		Stamplay.User.login(userInfo).then(function(res){
        		q.resolve(res);
    		});	
        return q.promise;
    	},
      signup : function(userInfo){
        var q = $q.defer();
        Stamplay.User.signup(userInfo).then(function(res){
            q.resolve(res);
        }); 
        return q.promise;
      }

	};
}
})();