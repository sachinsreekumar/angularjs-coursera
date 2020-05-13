(function () {
    var myApp = angular.module('public');
    myApp.controller('formController', FormController);

    FormController.$inject = ['MenuService', 'InfoService'];
    function FormController(MenuService, InfoService) {
        var reg = this;
        reg.invalidFavourite = false;
        reg.showMsg=false;
        reg.submit = function () {
            MenuService.getMenuItem(reg.user.food)
                .then(function (response) {
                    InfoService.saveUserDetail(reg.user);
                    reg.showMsg=true;
                })
                .catch(function () {
                    console.log("Invalid");
                    reg.showMsg=false;
                });
        };

        reg.validateFood = function () {
            MenuService.getMenuItem(reg.user.food)
                .then(function (response) {
                    reg.invalidFavourite = false;
                })
                .catch(function () {
                    reg.invalidFavourite = true;
                });
        };
    };
})();