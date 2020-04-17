(function (){
'use strict';

angular.module('LunchCheck',[])
.controller('LunchCheckController', LunchController);

LunchController.$inject = ['$scope'];
function LunchController ($scope) {
  $scope.name = "";
  $scope.value = "";
  $scope.setStyle = {};
  $scope.setBorder = {};
  $scope.num = function () {
    var returnedValue = checkTooMuch($scope.name);
    $scope.value = returnedValue;
    if ( $scope.value == "Enjoy!" )
      $scope.setStyle = {'color' : 'green'};
    else if ( $scope.value == "Too much!" )
      $scope.setStyle = {'color' : 'red'};
    else
      $scope.setStyle = {'color' : 'black'};
    if ( $scope.value == "Enjoy!" || $scope.value == "Too much!" )
      $scope.setBorder = {'border-color' : 'green'};
    else
      $scope.setBorder = {'border-color' : 'red'};
  }
}

//Accepts the input comma separated datails and Returns the result string
function checkTooMuch (string) {
  if ( string == "" || string == " ") {
    return "Please Enter Data First";
  }
  var array = string.split(',');
  //alert(array.length);
  var arrayLength = 0;
  for (var item = 0; item < array.length; item++) {
    if (array[item] != "" && array[item] != " ") {
      arrayLength+=1;
    }
  }
  if ( arrayLength == 0 ) {
    return "Please Enter Data First";
  }
  if ( arrayLength <=3 ) {
    return "Enjoy!";
  }
  else {
    return "Too much!";
  }
}
})();
