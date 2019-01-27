var myApp = angular.module('app', ['ui.router']);

myApp.config(function ($stateProvider,$urlRouterProvider) {
    //$urlMatcherFactoryProvider.caseInsensitive(true);
    var helloState = {
        name: 'home',
        url: '/home',
        templateUrl: 'View/home.html'
    }

    var productState = {
        name: 'product',
        url: '/product',
        templateUrl: 'View/Product/product.html',
        controller: 'productController'
    }
    
    var customerState = {
        name: 'customer',
        url: '/customer',
        templateUrl: 'View/Customer/customer.html',
        controller: 'customerController'

    }
    var orderState = {
        name: 'order',
        url: '/order',
        templateUrl: 'View/Order/order.html',
        controller: 'orderController'
    }
    $urlRouterProvider.otherwise("/home");
    $stateProvider.state(helloState);
    $stateProvider.state(productState);
    $stateProvider.state(customerState);
    $stateProvider.state(orderState);
    //$urlRouterProvider.otherwise('/home');
    //$stateProvider.otherwise(helloState);
});
var serviceBase = 'http://ngauthenticationapi.azurewebsites.net/';
app.constant('ngAuthSettings', { // constant
    apiServiceBaseUri: serviceBase,
    clientId: 'ngAuthApp'
}); 

app.config(function ($httpProvider) {
    $httpProvider.interceptors.push('authInterceptorService');
});

app.run(['authService', function (authService) {
    authService.fillAuthData();
}]);