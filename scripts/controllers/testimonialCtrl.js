angular
	.module('app')
	.controller('testimonialCtrl',['$scope', 'TestiFactory',function($scope,TestiFactory){
		$scope.title='Our Testimonials';
		$scope.caption='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, amet, fugit odio voluptatem a quis quam quo unde itaque ad ipsam suscipit perspiciatis placeat minima eligendi optio. Voluptatum at, vero.'
		TestiFactory.get().then(function(data) {
            	$scope.testiItems = data;
    	});
	}]);



	