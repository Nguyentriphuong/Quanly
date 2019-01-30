'use strict';
app.factory('ordersController'['$http', 'localStorageService', function ($http, localStorageService) {

    var serviceBase = 'http://localhost:8080/';
    var ordersServiceFactory = {};
    var authData = localStorageService.get('authorizationData');
    var config = "";
    if (authData) {
        var Authorization = 'Bearer ' + authData.token;
        var config = { headers: { 'Authorization': Authorization } };
    }
    

    var _getOrders = function () {

        return $http.get(serviceBase + 'quanly/order', config).then(function (results) {
            debugger
            return results;
        });
    };

    ordersServiceFactory.getOrders = _getOrders;

    return ordersServiceFactory;

}]);