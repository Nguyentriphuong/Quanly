myApp.controller('orderController', function ($scope, $http) {

    var getData = function () {
        $http({
            method: "GET",
            url: "http://localhost:8080/quanly/order/GetOrder"
        }).then(function (response) {
            $scope.myData = response.data;
            $scope.listproduct = true;
            $scope.createproduct = false;
            $scope.editproduct = false;
        }, function (error) {

        });
    }
    getData();
    $scope.Edit = function (item) {
        $scope.id = item.Id;
        $scope.customerid = item.CustomerID;
        $scope.productid = item.ProductID;
        $scope.quantity = item.QuantityOrder;
        $scope.myId = true;
        $scope.listorder = false;
        $scope.createorder = false;
        $scope.editorder = true;
    }
    $scope.Create = function(){
        $scope.listorder = false;
        $scope.createorder = true;
        $scope.editorder = false;
    }
    $scope.deleteData = function (id) {
        var url = "http://localhost:8080/quanly/order/Remove/" + id;
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
    $scope.editData = function (id, customerid, productid, quantity) {
        var parameter = JSON.stringify({ id: id, customerid: customerid, productid: productid, quantityorder: quantity });

        $http.put("http://localhost:8080/quanly/order/Update", parameter).then(function (response) {
            if (response.data) $scope.msg = "Edit Data Submitted Successfully!";
            alert('Edit Data Submitted Successfully!');
            getData();


        }, function (response) {

            $scope.msg = "Service not Exists";

            $scope.statusval = response.status;

            $scope.statustext = response.statusText;

            $scope.headers = response.headers();

        });

    }
    $scope.postData = function (id, customerid, productid, quantity) {
        var parameter = JSON.stringify({ id: id, customerid: customerid, productid: productid, quantityorder: quantity });

        //debugger
        $http.post("http://localhost:8080/quanly/order/Add", parameter).then(function (response) {
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
