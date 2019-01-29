var app = angular.module('AngularAuthApp', ['ui.router', 'LocalStorageModule', 'angular-loading-bar']);

app.config(function ($stateProvider, $urlRouterProvider) {



    var helloState = {
        name: 'home',
        url: '/home',
        templateUrl: "/app/views/home.html",
        controller: "homeController"
    }

    var orderState = {
        name: 'orders',
        url: '/orders',
        controller: "ordersController",
        templateUrl: "/app/views/orders.html"
    }
    var loginState = {
        name: 'login',
        url: '/login',
        templateUrl: "/app/views/login.html",
        controller: "loginController"
    }
    $urlRouterProvider.otherwise("/home");
    $stateProvider.state(helloState);
    //$stateProvider.state(productState);
    //$stateProvider.state(customerState);
    $stateProvider.state(orderState);
    $stateProvider.state(loginState);

    //$stateProvider.state("/login", {
    //    controller: "loginController",
    //    templateUrl: "/app/views/login.html"
    //});

    ////$stateProvider.state("/signup", {
    ////    controller: "signupController",
    ////    templateUrl: "/app/views/signup.html"
    ////});

    //$stateProvider.state("/orders", {
    //    controller: "ordersController",
    //    templateUrl: "/app/views/orders.html"
    //});

    $urlRouterProvider.otherwise("/home");
});
//app.config(function ($httpProvider) {
//    $httpProvider.interceptors.push('authInterceptorService');
//});

app.run(['authService', function (authService) {
    authService.fillAuthData();
}]);
