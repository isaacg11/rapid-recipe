

//FACTORY

(function() {
  'use strict';
  angular.module('rapidrecipe')
  .factory('Food', Food);

	function Food($http, $q, $window){
		return {
    		getRecipes : function(data){
    			var q = $q.defer();
    			Stamplay.Codeblock("recipes").run(data)
      			.then(function(err) {
      				q.resolve(err);
    			}, function(err) {
      				console.log(err);
    			});
        	return q.promise;
    		},
		};
	}
})();