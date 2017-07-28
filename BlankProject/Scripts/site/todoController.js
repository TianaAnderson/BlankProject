(function () {
    'use strict';

    angular.module(AppName).controller("todo", ToDoController);
    ToDoController.$inject = ["$scope", "$state", "todoService"];

    function ToDoController($scope, $state, todoService) {

        var vm = this;

        vm.items = [];
        _init();
        vm.selectedItem = {};
        vm.edit = _edit;

        function _init() {
            todoService.getToDoItems().then(function (data) {
                vm.items = data;

            }).catch(function (err) {
                console.log(err);
            })
        }

        function _edit(item) {
            $state.go("todoediter", { id: item.id });

        }
    }
})();

(function () {
    'use strict'
    angular.module(AppName).controller("todoEditor", ToDoEditorController);
    ToDoEditorController.$inject = ["$scope", "todoService", "$state"];

    function ToDoEditorController($scope, todoService, $state) {
        var vm = this;
        
        vm.selectedItem = {};
        vm.save = _save;
        _loadForm();

        function _loadForm() {
            var id = $state.params.id;
            if (id) {
                vm.selectedItem = todoService.GetById(id);
            }
        }

        function _save() {
            todoService.SaveItem(vm.selectedItem);
            vm.selectedItem = {};
            $state.go("todolist");
        }
    }
})();

(function () {
    'use strict';

    angular.module(AppName).controller("todo2", ToDo2Controller);
    ToDo2Controller.$inject = ["$scope", "$state", "todoService"];

    function ToDo2Controller($scope, $state, todoService) {

        var vm = this;

        vm.items = [];
        _init();
        vm.selectedItem = {};
        vm.edit = _edit;
        function _init() {
            todoService.getToDoItems().then(function (data) {
                vm.items = data;

            }).catch(function (err) {
                console.log(err);
            })
        }

        function _edit(item) {
            $state.go("listAndEdit", { id: item.id });

        }
    }
})();

(function () {
    'use strict'
    angular.module(AppName).controller("todo2Editor", ToDo2EditorController);
    ToDo2EditorController.$inject = ["$scope", "todoService", "$state"];

    function ToDo2EditorController($scope, todoService, $state) {
        var vm = this;

        vm.selectedItem = {};
        vm.save = _save;
        _loadForm();

        function _loadForm() {
            var id = $state.params.id;
            if (id) {
                vm.selectedItem = todoService.GetById(id);
            }
        }

        function _save() {
            todoService.SaveItem(vm.selectedItem);
            vm.selectedItem = {};
            $state.go("listAndEdit");
        }
    }


})();