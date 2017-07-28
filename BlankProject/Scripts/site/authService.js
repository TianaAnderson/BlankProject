(function () {
    'use strict';

    angular.module(AppName).factory("authService", AuthService);
    AuthService.$inject = ["$http", "$q", "localStorageService"];

    function AuthService($http, $q, localStorageService) {
        var authServiceFactory = {
            login: _login,
            logout: _logout,
            authentication: _authentication

        }
        var _authentication = {
            isAuth: false,
        userName: ""
        };

        function _login(loginData) {
            var encoded = window.btoa(loginData.userName + ":" + loginData.password);
            var deferred = $q.defer();

            $http({
                method: "POST",
                dataType: "json",
                url: "/api/authenticate/login",
                headers: {
                    "Authorization": "Basic " + encoded,
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Access-Control-Allow-Origin": "*"
                }
            }).then(function (response) {
                localStorageService.set("authorizationData", {
                    token: response.headers("Token"),
                    tokenExpire: response.headers("TokenExpire")
                });
                _authentication.isAuth = true;
                _authentication.userName = loginData.userName;
                deferred.resolve(response);
            }).catch(function (err) {
                //TODO: Implement  a logout function
                deferred.reject(err);
            });
            return deferred.promise;
        }

        function _logout() {
            localStorageService.remove("authorizationData");
            _authentication.isAuth = false;
            _authentication.userName = "";
        }
        return authServiceFactory;
    }
})();