(function () {
    'use strict';

    angular.module('Data')
    .controller('CategoriesController', CategoriesController);

    CategoriesController.$inject = ['categories'];
    function CategoriesController(categories) {
      var categoryCtrl = this;
      categoryCtrl.categoryname = categories;
    }
})();
