myApp.controller('customerController', function ($scope, $http) {

    
    var getData = function () {
        $http({
            method: "GET",
            url: "http://localhost:8080/quanly/customer/GetCustomer"
        }).then(function (response) {
            $scope.myData = response.data;
            $scope.listcustomer = true;
            $scope.createcustomer = false;
            $scope.editcustomer = false;
        }, function (error) {

        });
    }
    getData();

    $scope.Edit = function (item) {
        $scope.id = item.Id;
        $scope.quantity = item.Quantity;
        $scope.price = item.Price;
        $scope.name = item.name;
        $scope.myId = true;
        $scope.listcustomer = false;
        $scope.createcustomer = false;
        $scope.editcustomer = true;
    }
    $scope.Create = function(){
        $scope.listcustomer = false;
        $scope.createcustomer = true;
        $scope.editcustomer = false;
    }
    $scope.deleteData = function (id) {
        var url = "http://localhost:8080/quanly/customer/Remove/" + id;
        $http.delete(url).then(function (response) {
            if (response.data) $scope.msg = "Delete Data Submitted Successfully!";
            alert('Delete Data Submitted Successfully!');
            getData();

        }, function (response) {

            $scope.msg = "Service not Exists";

            $scope.statusval = response.status;

            $scope.statustext = response.statusText;

            $scope.headers = response.headers();

        });
    }
    $scope.editData = function (id, name) {
        var parameter = JSON.stringify({ id: id, name: name });
        //$scope.ND = parameter;
        $http.put("http://localhost:8080/quanly/customer/Update", parameter).then(function (response) {
            if (response.data) $scope.msg = "Edit Data Submitted Successfully!";
            alert('Edit Data Submitted Successfully!');
            getData();
            $scope.listcustomer = true;
            $scope.editcustomer = false;

        }, function (response) {

            $scope.msg = "Service not Exists";

            $scope.statusval = response.status;

            $scope.statustext = response.statusText;

            $scope.headers = response.headers();

        });

    }
    $scope.postData = function (id, name) {
        var parameter = JSON.stringify({ id: id, name: name});

        //debugger
        $http.post("http://localhost:8080/quanly/customer/Add", parameter).then(function (response) {
            if (response.data) {
                $scope.msg = "Post Data Submitted Successfully!";
            }
            alert('Post Data Submitted Successfully!');
            getData();

        }, function (response) {

            $scope.msg = "Service not Exists";

            $scope.statusval = response.status;

            $scope.statustext = response.statusText;

            $scope.headers = response.headers();

        });
    }

});
