(function () {
    'use strict';

    angular.module(AppName).controller("registration", RegistrationController);
    RegistrationController.$inject = ["$scope", "$state", "regService"];

    function RegistrationController($scope, $state, regService) {
        var vm = this;
        vm.user = {};
        vm.$scope = $scope;
        vm.regService = regService;
        vm.save = _save;


        function _save(user) {
            regService.post(vm.user).then(function (data) {
                console.log(data);
//$state.go("home");
            }).catch(function(err){
                console.log(err);
            })
        }
            
        }
    
})();