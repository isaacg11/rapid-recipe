

//FACTORY

(function() {
  'use strict';
  angular.module('rapidrecipe')
  .factory('User', User);

  function User($http, $q, $window){
	return {
    	newSubscription : function(email){
        var q = $q.defer();
    		Stamplay.Object('subscription').save(email).then(function(res){
        		q.resolve(res);
    		});	
        return q.promise;
    	},
      sendMessage : function(user){
        var q = $q.defer();
        Stamplay.Object('email').save(user).then(function(res){
            q.resolve(res);
        }); 
        return q.promise;
      },
	};
}
})();