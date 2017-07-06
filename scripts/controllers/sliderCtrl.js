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