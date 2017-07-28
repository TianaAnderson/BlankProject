(function () {

    angular.module(AppName).factory("stateProvinceService", StateProvinceService);

    StateProvinceService.$inject = ["$http","$q"];

    function StateProvinceService($http, $q) {
        var stateItems = [];

        var srv = {
            getStates: _getStates,
            getById: _getById,
            saveState: _saveState
        }
        return srv;

        function _getStates() {
            return $http.get("/api/states")
                  .then(getSuccess)
                  .catch(getFailed);

            function getSuccess(response) {
                console.log(response);
                return response.data;

            }
            function getFailed(response) {
                console.log("Get failed");
                return $q.reject(response);

            }
        }

        function _getById(id) {
            return $http.get("/api/states/" + id)
            .then(ByIdSuccess)
            .catch(ByIdFail);

            function ByIdSuccess(response) {
                console.log("ByIdSuccess", response);
                return response.data;

            }
            function ByIdFail(response) {
                return response;

            }
            }

            function _saveState(itm) {
                var ndx = stateItems.indexOf(itm);

                if (ndx !== -1) {
                    stateItems[ndx] = itm;
                }
                else {
                    maxid = 0;
                    stateItems.map(function (obj) {
                        if (obj.id > maxid)
                            maxid = obj.id;
                    });
                    itm.id = maxid + 1;
                    stateItems.push(itm);
                }

            }
        }
    })();
