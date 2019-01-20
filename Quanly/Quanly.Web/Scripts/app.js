var myApp = angular.module('app', ['ui.router']);

myApp.config(function ($stateProvider) {

    var helloState = {
        name: 'home',
        url: '/home',
        templateUrl: 'View/home.html'
    }

    var productState = {
        name: 'product',
        url: '/product',
        templateUrl: 'View/Product/product.html'
    }
    
    var customerState = {
        name: 'customer',
        url: '/customer',
        templateUrl: 'View/Customer/customer.html'

    }
    var orderState = {
        name: 'order',
        url: '/order',
        templateUrl: 'View/Order/order.html'
    }

    $stateProvider.state(helloState);
    $stateProvider.state(productState);
    $stateProvider.state(customerState);
    $stateProvider.state(orderState);
    //$urlRouterProvider.otherwise('/home');
    //$stateProvider.otherwise(helloState);
});