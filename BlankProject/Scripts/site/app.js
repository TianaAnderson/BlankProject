var AppName = "TestApp";

(function (appName) {

    var app = angular.module(appName, ["ui.router", "LocalStorageModule"]);

    app.config(RouteConfig);

    RouteConfig.$inject = ["$stateProvider", "$urlRouterProvider"];

    function RouteConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");

        $stateProvider
        .state("home", {
            url: "/",
            templateUrl: "/scripts/templates/HomePage.html"
        })
        .state("registrationPage", {
            url: "/registrationPage",
            templateUrl: "/scripts/templates/registrationPage.html"
        })
        .state("about", {
            url: "/about",
            templateUrl: "/scripts/templates/AboutPage.html"
        })
          .state("regLogin", {
                     url: "/regLogin",
                     templateUrl: "/scripts/templates/RegLogin.html"
                 })
        .state("todolist", {
            url: "/todolist",
            templateUrl: "/scripts/templates/ToDoList.html",
            controller: "todo",
            controllerAs: "todos"
        })
        .state("todoediter",{
            url: "/todoeditor/:id",
            templateUrl: "/scripts/templates/ToDoEditor.html",
            controller: "todoEditor",
            controllerAs: "editor"
        })
        .state("listAndEdit", {
            url: "/listAndEdit/:id",
            views: {
                "": { templateUrl: "/scripts/templates/ListAndEdit.html" },
                "list@listAndEdit": {
                    controller: "todo2",
                    controllerAs: "todos",
                    templateUrl: "/scripts/templates/ToDoList.html"
                },
                "edit@listAndEdit": {
                    controller: "todo2Editor",
                    controllerAs: "editor",
                    templateUrl: "/scripts/templates/ToDoEditor.html"
                }
            }
        })

        //StateList
        .state("statesList",
        {
            url: "/statesList",
            templateUrl: "/scripts/templates/StatesList.html",
            controller: "statesList",
            controllerAs: "states"
        })

        .state("stateEditor",
        {
            url: "/stateEditor/:id",
            templateUrl: "/scripts/templates/StateEditor.html",
            controller: "stateEditor",
        controllerAs: "stateEditor"
        })

        .state("stateListAndEdit", {
                    url: "/stateListAndEdit/:id",
                    views: {
                        "": { templateUrl: "/scripts/templates/stateListAndEdit.html" },
                        "stateList@stateListAndEdit": {
                            controller: "statesList2",
                            controllerAs: "states",
                            templateUrl: "/scripts/templates/statesList.html"
                        },
                        "stateEdit@stateListAndEdit": {
                            controller: "stateEditor2",
                            controllerAs: "stateEditor",
                            templateUrl: "/scripts/templates/stateEditor.html"
                        }
                    }
                })

    }

    app.factory("authInterceptorService", AuthInterceptorService);
    AuthInterceptorService.$inject = ["$q", "$location", "localStorageService", "$window"];

    function AuthInterceptorService($q, $location, localStorageService, $window) {

        var ais = {
            request: _request,
            responseError: _responseError
        }
        function _request(config) {
            config.headers = config.headers || {};
            var authData = localStorageService.get("authorizationData");
            if (authData) {
                config.headers.Token = authData.token;
                config.headers.TokenExpire = authData.tokenExpire;
            }
            return config;
        }

        function _responseError(rejection) {
            if (rejection.status === 401) {
                $window.location.href = "/Home";
            }
            return $q.reject(rejection);
        }
        return ais;
    }


    app.config(function ($httpProvider) {
        $httpProvider.interceptors.push("authInterceptorService");
    })
})(AppName);