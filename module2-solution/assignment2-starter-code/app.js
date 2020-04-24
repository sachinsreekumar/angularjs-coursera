(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuy = this;

  toBuy.items = ShoppingListCheckOffService.getToBuyItems();
  toBuy.markAsBought = function (itemIndex) {
    try{
          ShoppingListCheckOffService.markAsBought(itemIndex);
    }
    catch (error) {
      toBuy.errorMessage = error.message;
    }
  }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var alreadyBought = this;
  alreadyBought.err = "Nothing bought yet.";
      alreadyBought.items = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService () {
  var service = this;

  var toBuyList = [
    {name: "Cookies", quantity : 10},
    {name: "Apples", quantity : 15},
    {name: "Oranges", quantity : 20},
    {name: "Candies", quantity : 25},
    {name: "Ice Creams", quantity : 30},
  ];
  var toBuyListLength = toBuyList.length;
  var boughtList = [];

  service.getToBuyItems = function () {
    return toBuyList;
  };
  service.markAsBought = function (itemIndex) {
    boughtList.push(toBuyList[itemIndex]);
    toBuyList.splice(itemIndex, 1);
    if (toBuyList.length == 0) {
      throw new Error("Everything is bought!");
    }
  };

  service.getBoughtItems = function () {
    return boughtList;
  };

}

})();
