(function () {
  'use strict';
  angular.module('NarrowItDownApp',[])
  .controller('NarrowItDownController',NarrowItDownController)
  .service('MenuSearchService',MenuSearchService)
  .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController (MenuSearchService) {
    var narrowDown = this;
    narrowDown.searchTerm = "";
    narrowDown.narrow = function () {
      var promise = MenuSearchService.getMatchedMenuItems(narrowDown.searchTerm);
      promise.then(function (response) {
        narrowDown.items = response.data;
        console.log(narrowDown.items);

      })
      .catch(function (error) {
        console.log("Something went terribly wrong.");
      });


    };
  }


  MenuSearchService.$inject = ['$http', 'ApiBasePath','$q', '$timeout'];
  function MenuSearchService ($http, ApiBasePath,$q, $timeout) {
    var service = this;
    service.getMatchedMenuItems = function (searchTerm) {
      return $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json")
      }).then(function(result) {
          //console.log(result.data.menu_items.length);
          var foundItems=[];
          for(var count=0;count<result.data.menu_items.length;count++) {
            //check name
            if (result.data.menu_items[count].description.toLowerCase().indexOf(searchTerm.toLowerCase()) != -1){
              foundItems.push(result.data.menu_items[count]);
            }

          }
          return foundItems;
        })
        .catch(function(errorResponse) {
          console.log(errorResponse.message);
        });


      return response;
    }
  }

})();
