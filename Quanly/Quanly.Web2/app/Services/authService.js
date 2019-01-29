﻿'use strict';
app.factory('authService', ['$http', '$q', 'localStorageService', function ($http, $q, localStorageService) {

    var serviceBase = 'http://localhost:8080/';
    var authServiceFactory = {};

    var _authentication = {
        isAuth: false,
        userName: "",
        token: ""
    };


    var _login = function (loginData) {

        var data = "grant_type=password&username=" + loginData.userName + "&password=" + loginData.password;

        var deferred = $q.defer();
        
        $http.post(serviceBase + 'token', data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).then(function (response) {
            
            localStorageService.set('authorizationData', { token: response.data.access_token, userName: loginData.userName });

            _authentication.isAuth = true;
            _authentication.userName = loginData.userName;
            _authentication.token = response.data.access_token;
            deferred.resolve(response);

        }, function (response) {

            _logOut();
            deferred.reject(response);
        });

        return deferred.promise;

    };

    var _logOut = function () {

        //localStorageService.remove('authorizationData');
        _authentication.token = "";
        _authentication.isAuth = false;
        _authentication.userName = "";

    };

    var _fillAuthData = function () {

        var authData = localStorageService.get('authorizationData');
        if (authData) {
            _authentication.isAuth = true;
            _authentication.userName = authData.userName;
            _authentication.token = authData.token;
        }

    }

    authServiceFactory.login = _login;
    authServiceFactory.logOut = _logOut;
    authServiceFactory.fillAuthData = _fillAuthData;
    authServiceFactory.authentication = _authentication;

    return authServiceFactory;
}]);