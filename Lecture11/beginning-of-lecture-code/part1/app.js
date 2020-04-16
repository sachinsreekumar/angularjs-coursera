(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope) {
  $scope.name = "Sachin";
  $scope.stateOfBeing = "hungry";

  $scope.feed = function () {
    $scope.stateOfBeing = "fed";
  }
  $scope.hungry = function () {
    $scope.stateOfBeing = "hungry";
  }
}




})();
