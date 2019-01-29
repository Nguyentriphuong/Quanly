'use strict';
app.factory('ordersService', ['$http', function ($http) {

    var serviceBase = 'http://localhost:8080/';
    var ordersServiceFactory = {};

    var _getOrders = function () {

        return $http.get(serviceBase + 'quanly/orders').then(function (results) {
            return results;
        });
    };

    ordersServiceFactory.getOrders = _getOrders;

    return ordersServiceFactory;

}]);