angular.module('app').controller('sliderCtrl', function ($scope) {
  $scope.myInterval = 5000;
  $scope.noWrapSlides = false;
  $scope.active = 0;
  var slides = $scope.slides =  [
    {
      image: 'images/asset/slide_1.jpg'
    },
    {
      image: 'images/asset/slide_2.jpg'
    }
  ];
  var currIndex = 0;
});
angular.module('app').controller('headerCtrl', function ($scope) {
   $scope.isNavCollapsed = true;
	$scope.isCollapsed = false;
});
angular
	.module('app')
	.controller('homeCtrl',['$scope', function($scope){
		$scope.title='Meet Best App The new world apps';
		$scope.caption='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, amet, fugit odio voluptatem a quis quam quo unde itaque ad ipsam suscipit perspiciatis placeat minima eligendi optio. Voluptatum at, vero.';
	}]);



	
angular
	.module('app')
	.controller('signUpCtrl',['$scope', function($scope){
		$scope.title='Meet Best App The new world apps';
		$scope.caption='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, amet, fugit odio voluptatem a quis quam quo unde itaque ad ipsam suscipit perspiciatis placeat minima eligendi optio. Voluptatum at, vero.';
	}]);



	
angular
	.module('app')
	.controller('testimonialCtrl',['$scope', 'TestiFactory',function($scope,TestiFactory){
		$scope.title='Our Testimonials';
		$scope.caption='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, amet, fugit odio voluptatem a quis quam quo unde itaque ad ipsam suscipit perspiciatis placeat minima eligendi optio. Voluptatum at, vero.'
		TestiFactory.get().then(function(data) {
            	$scope.testiItems = data;
    	});
	}]);



	
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