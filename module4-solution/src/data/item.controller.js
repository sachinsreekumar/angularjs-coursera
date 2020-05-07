(function () {
    'use strict';

    angular.module('Data')
    .controller('ItemsController', ItemsController);

    ItemsController.$inject = ['menuItems'];
    function ItemsController(menuItems) {
      var itemCtrl = this;
      itemCtrl.list = menuItems.menu_items;
    }
})();
