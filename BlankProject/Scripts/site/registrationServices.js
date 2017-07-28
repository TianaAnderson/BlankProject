(function () {
    'use strict'

    angular.module(AppName).factory("regService", RegService);
    RegService.$inject = ["$http", "$q"];

    function RegService($http, $q) {
        var srv = {
            post: _post
        }
        return srv;

        function _post(data) {
            var encrypt = window.btoa(data.password);
            data.password = encrypt;
            data.confirmPassword = encrypt;

            $http.post("api/user", data)
            .then(postSuccess)
            .catch(postFail);

            function postSuccess(response) {
                console.log("insertSuccess..response", response);
               
                return response.data;
            }
            function postFail(response) {
                console.log(response);
                return $q.reject(response);
            }
        }
    }
})();