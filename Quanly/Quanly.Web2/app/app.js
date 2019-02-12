var app = angular.module('AngularAuthApp', ['ui.router', 'LocalStorageModule', 'angular-loading-bar']);

app.config(function ($stateProvider, $urlRouterProvider) {

    var helloState = {
        name: 'home',
        url: '/home',
        templateUrl: "/app/views/home.html",
        controller: "homeController"
    }

    var ordersState = {
        name: 'orders',
        url: '/orders',
        templateUrl: "/app/views/orders.html",
        controller: "ordersController"
    }
    var loginState = {
        name: 'login',
        url: '/login',
        templateUrl: "/app/views/login.html",
        controller: "loginController"
    }
    $urlRouterProvider.otherwise("/home");
    $stateProvider.state(helloState);
    $stateProvider.state(ordersState);
    $stateProvider.state(loginState);
    $urlRouterProvider.otherwise("/home");
});
app.config(function ($httpProvider) {
    $httpProvider.interceptors.push('authInterceptorService');
});

app.run(['authService', function (authService) {
    authService.fillAuthData();
}]);
