
(function () {
'use strict';

angular.module('myFirstApp', [])
.controller('MyFirstController', function ($scope) {
  $scope.name = "Sachin";

  $scope.sayHello = function () {
    return "Hello World";
  }

});


})();
