'use strict';
app.factory('ordersService', ['$http', 'authInterceptorService', function ($http, authInterceptorService) {

    var serviceBase = 'http://localhost:8080/';
    var ordersServiceFactory = {};

    var _getOrders = function () {

        return $http.get(serviceBase + 'quanly/order', authInterceptorService.request).then(function (results) {
            return results;
        });
    };

    ordersServiceFactory.getOrders = _getOrders;

    return ordersServiceFactory;

}]);
