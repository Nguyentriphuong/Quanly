//var home = angular.module('Home', ['ui.router']);
//var authen = angular.module('Authentication', []);
var myApp = angular.module('app', ['ui.router']);
myApp.config(function ($stateProvider, $urlRouterProvider) {
    //$urlMatcherFactoryProvider.caseInsensitive(true);
    var helloState = {
        name: 'home',
        url: '/home',
        templateUrl: 'View/Home/home.html'
    }

    var productState = {
        name: 'product',
        url: '/product',
        templateUrl: 'View/Home/Product/product.html',
        controller: 'productController'
    }

    var customerState = {
        name: 'customer',
        url: '/customer',
        templateUrl: 'View/Home/Customer/customer.html',
        controller: 'customerController'

    }
    var orderState = {
        name: 'order',
        url: '/order',
        templateUrl: 'View/Home/Order/order.html',
        controller: 'orderController'
    }
    var loginState = {
        name: 'login',
        url: '/login',
        templateUrl: 'View/Authentication/Login/login.html',
        controller: 'loginController'
    }
    $urlRouterProvider.otherwise("/login");
    $stateProvider.state(helloState);
    $stateProvider.state(productState);
    $stateProvider.state(customerState);
    $stateProvider.state(orderState);
    $stateProvider.state(loginState);
    //$urlRouterProvider.otherwise('/home');
    //$stateProvider.otherwise(helloState);
});
//var myApp = angular.module('app', [
//    'Authentication',
//    'Home'
//]);
//var serviceBase = 'http://localhost:8080/';
//app.constant('ngAuthSettings', { // constant
//    apiServiceBaseUri: serviceBase,
//    clientId: 'ngAuthApp'
//});

//app.config(function ($httpProvider) {
//    $httpProvider.interceptors.push('authInterceptorService');
//});

//app.run(['authService', function (authService) {
//    authService.fillAuthData();
//}]);