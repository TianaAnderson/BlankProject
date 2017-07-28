/// <reference path="todoService.js" />
(function () {
    angular.module(AppName).factory("todoService", ToDoService);

    ToDoService.$inject = ["$q"];

    function ToDoService($q) {

        var todoItems = [{
            id: 1,
            title: "Get Milk",
            desc: "On the way home, get milk"
        },
        {
            id: 2,
            title: "Get food",
            desc: "On the way home, get food"

        },
        {
            id: 3,
            title: "Get back",
            desc: "Go home!"

        },
        {
            id: 4,
            title: "Pay rent",
            desc: "send the check"

        }]

        var srv = {
            getToDoItems: _getToDoItems,
            GetById: _getById,
            SaveItem: _saveItem

        }
        return srv;

        function _getToDoItems() {
            var defer = $q.defer();

            if (todoItems) {
                defer.resolve(todoItems);
            }
            else {
                defer.reject("No Items Found");
            }
            return defer.promise;

        }

        function _getById(id) {
            return todoItems.filter(function (obj) {
                return (obj.id == id);
            })[0];
        }

        function _saveItem(itm) {
            var ndx = todoItems.indexOf(itm);

            if (ndx !== -1) {
                todoItems[ndx] = itm;
            }
            else {
                maxid = 0;
                todoItems.map(function (obj) {
                    if (obj.id > maxid)
                        maxid = obj.id;
                });
                itm.id = maxid + 1;
                todoItems.push(itm);
            }
        }
    }
})();