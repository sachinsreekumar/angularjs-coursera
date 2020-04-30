(function () {
  'use strict';
  angular.module('NarrowItDownApp',[])
  .controller('NarrowItDownController',NarrowItDownController)
  .service('MenuSearchService',MenuSearchService)
  .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController (MenuSearchService) {
    var found = this;
    found.searchTerm = "";
    found.items = [];
    found.errorMsg = "";
    found.narrow = function () {
      try{
        var promise = MenuSearchService.getMatchedMenuItems(found.searchTerm);
        promise.then(function (response) {
          found.items = response;
          if(found.items.length == 0) {
            found.errorMsg = "Nothing Found!";
          }
          else{
            found.errorMsg = "";
          }
        });
      }
      catch (error) {
        found.items = [];
        found.errorMsg = error.message;
      }
    };

    found.remove = function (itemIndex) {
      found.items.splice(itemIndex, 1);
    }

  }


  MenuSearchService.$inject = ['$http', 'ApiBasePath'];
  function MenuSearchService ($http, ApiBasePath) {
    var service = this;
    service.getMatchedMenuItems = function (searchTerm) {
      if(searchTerm == "")
        throw new Error("Nothing Found!");
      return $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json")
      }).then(function(result) {
          var foundItems=[];
          for(var count=0;count<result.data.menu_items.length;count++) {
            if (result.data.menu_items[count].description.toLowerCase().indexOf(searchTerm.toLowerCase()) != -1){
              foundItems.push(result.data.menu_items[count]);
            }
          }
          return foundItems;
        })
        .catch(function(errorResponse) {
          console.log(errorResponse.message);
        });
      //return response;
    }

  }

})();
