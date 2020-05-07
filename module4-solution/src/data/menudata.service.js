(function () {
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

MenuDataService.$inject = ['$http', 'ApiBasePath'];
function MenuDataService ($http,ApiBasePath) {
  var service = this;
  service.getAllCategories = function () {
    return $http({
       method: "GET",
       url: (ApiBasePath + "/categories.json")
     }).then(function(result) {
          var foundCategories =  [];
          for(var count=0;count<result.data.length;count++) {
            foundCategories.push(result.data[count]);
          }
          return foundCategories;
        })
        .catch(function(errorResponse) {
          console.log(errorResponse.message);
        });
  };
  service.getItemsForCategory = function (categoryShortName) {
    return $http({
       method: "GET",
       url: (ApiBasePath + "/menu_items.json"),
       params: {
         category: categoryShortName
       }
     }).then(function (result){
            return result.data;
        })
        .catch(function(errorResponse) {
          console.log(errorResponse.message);
        });
  }

}


})();
