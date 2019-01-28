myApp.controller('loginController', function ($scope, $http) {
    $scope.load = $scope.userName;
    $scope.login = function () {
        $scope.load = $scope.userName;
    }

});
