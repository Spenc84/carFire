angular.module('carFire', ['ui.router', 'firebase'])
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise("/cars");
  $stateProvider
    .state('cars', {
      url: "/cars",
      templateUrl: "/templates/cars.html",
      controller: 'carsCtrl',
      resolve: {
        carsRef: function(carService){
          return carService.getCars();
        }
      }
    })
    .state('car', {
      url: "/cars/:id",
      templateUrl: "/templates/car.html",
      controller: 'carCtrl',
      resolve: {
        carRef: function($stateParams, carService){
          return carService.getCar($stateParams.id)
        },
        commentsRef: function($stateParams, carService){
          return carService.getComments($stateParams.id)
        }
      }
    });
});
