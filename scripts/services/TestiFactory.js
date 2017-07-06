angular
	.module('app')
	.factory('TestiFactory', ['$http', function($http)
		{
			return {
			   get: function() {
			    return $http.get('api/testimonial.json').then(function(response) {
		      		return response.data;
			    });
			   }
			};
		}
	]);