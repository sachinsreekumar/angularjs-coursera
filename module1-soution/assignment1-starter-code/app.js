(function (){
'use strict';

angular.module('LunchCheck',[])
.controller('LunchCheckController', LunchController);

LunchController.$inject = ['$scope'];
function LunchController ($scope) {
  $scope.name = "";
  $scope.value = "";
  $scope.num = function () {
    var returnedValue = checkTooMuch($scope.name);
    $scope.value = returnedValue;
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
