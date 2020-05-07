(function () {
  'use strict';

  angular.module('Data')
  .component('menuList', {
    templateUrl: 'src/data/templates/itemlist.template.html',
    bindings: {
      items: '<',
      name:'<'
    }
  });

})();
