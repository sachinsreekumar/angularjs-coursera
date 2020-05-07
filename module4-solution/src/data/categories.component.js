(function () {
  'use strict';

  angular.module('Data')
  .component('categoryList', {
    templateUrl: 'src/data/templates/category-list.template.html',
    bindings: {
      category: '<'
    }
  });
})();
