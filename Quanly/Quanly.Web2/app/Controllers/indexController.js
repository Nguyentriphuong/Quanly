'use strict';
app.controller('indexController', ['$scope', '$location', 'authService', function ($scope, $location, authService) {
    $scope.Logout = function () {
        authService.logOut();
        $location.path('/home');
    };
    $scope.authentication = authService.authentication;
    

}]);