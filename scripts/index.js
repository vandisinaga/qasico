angular
	.module('app',['ui.router','ngAnimate','ui.bootstrap'])
	.config(['$urlRouterProvider','$stateProvider','$locationProvider', function($urlRouterProvider,$stateProvider,$locationProvider)
		{
			$locationProvider.hashPrefix('');
			$urlRouterProvider.otherwise('/');

			$stateProvider
				.state('home',{
					url:'/',
					templateUrl:'templates/page/home.html',
					controller: 'homeCtrl',
					data : { pageTitle: 'Home' },
				})
				.state('signup',{
					url:'/signup',
					templateUrl:'templates/page/signup.html',
					controller: 'signUpCtrl',
					data : { pageTitle: 'Sign Up' }
				})
				.state('testimonial',{
					url:'/testimonial',
					templateUrl:'templates/page/testimonial.html',
					controller: 'testimonialCtrl',
					data : { pageTitle: 'Testimonial' }
				})
		}
	])
	.run([ '$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {
	  $rootScope.$state = $state;
	  $rootScope.$stateParams = $stateParams;
	}])

