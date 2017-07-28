(function () {
    'use strict';

    angular.module(AppName).controller("statesList", StatesListController);
    StatesListController.$inject = ["$scope", "$state", "stateProvinceService"];

    function StatesListController($scope, $state, stateProvinceService) {

        var vm = this;

        vm.items = [];
        vm.stateItem = {};
        _init();
        vm.selectedItem = {};
        vm.edit = _edit;

        function _init() {
            stateProvinceService.getStates().then(function (data) {
                vm.items = data;
                console.log("vm.items", vm.items);
                return vm.items;

            }).catch(function (err) {
                console.log(err);
            })
        }
        function _edit(item) {
            $state.go("stateEditor", { id: item.Id });

        }

      
    }
})();
(function () {
    'use strict';

    angular.module(AppName).controller("stateEditor", StateEditorController);
    StateEditorController.$inject = ["$scope", "$state", "stateProvinceService"];

    function StateEditorController($scope, $state, stateProvinceService) {

        var vm = this;

        _init();
        vm.selectedItem = {};
        vm.save = _save;

        function _init() {
            var id = $state.params.id;
            stateProvinceService.getById(id).then(function (data) {
                console.log("data", data);
                debugger;
                vm.selectedItem = data;
            })
            console.log("vm.selectedItem", vm.selectedItem);
        }
        function _save() {
            stateProvinceService.saveState(vm.selectedItem);
            vm.selectedItem = {};
            $state.go("statesList");

        }


    }
})();
(function () {
    'use strict';

    angular.module(AppName).controller("statesList2", StatesListController2);
    StatesListController2.$inject = ["$scope", "$state", "stateProvinceService"];

    function StatesListController2($scope, $state, stateProvinceService) {

        var vm = this;

        vm.items = [];
        _init();
        vm.selectedItem = {};
        vm.edit = _edit;

        function _init() {
            stateProvinceService.getStates().then(function (data) {
                vm.items = data;

            }).catch(function (err) {
                console.log(err);
            })
        }
        function _edit(item) {
            $state.go("stateListAndEdit", { id: item.Id });

        }


    }
})();
(function () {
    'use strict';

    angular.module(AppName).controller("stateEditor2", StateEditorController2);
    StateEditorController2.$inject = ["$scope", "$state", "stateProvinceService"];

    function StateEditorController2($scope, $state, stateProvinceService) {

        var vm = this;

        _init();
        vm.selectedItem = {};
        vm.save = _save;

        function _init() {
            var id =$state.params.id;
            stateProvinceService.getById(id).then(function (data) {
                console.log("data", data);
                vm.selectedItem = data;

            })
            console.log("vm.selectedItem", vm.selectedItem);
        }
        function _save() {
            stateProvinceService.saveState(vm.selectedItem);
            vm.selectedItem = {};
            $state.go("stateListAndEdit");

        }


    }
})();