(function () {
    'use strict';

    angular.module(AppName).controller("auth", AuthController);
    AuthController.$inject = ["$scope", "$window","authService"];

    function AuthController($scope, $window, authService) {
        var vm = this;
        vm.loginData = {};
        vm.login = _login;
        vm.logout = _logout;

        function _login() {
            authService.login(vm.loginData).then(function (response) {
                console.log(response);
                $window.location.href= "/#!/statesList";
            }).catch(function(err){
                console.log(err);
            })
        }

        function _logout() {
          
            authService.logout();
            console.log("you should be logged out now");
        }
    }
})();