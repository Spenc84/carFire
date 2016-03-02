angular.module('carFire')
.service('carService', function(){
  var url = 'https://carscarscars.firebaseio.com/cars';

  this.getCars = function(){
    return new Firebase(url);
  };
  this.getCar = function(id){
    return new Firebase(url + id);
  };
  this.getComments = function(id){
    return new Firebase(url + id + '/comments');
  };

});
