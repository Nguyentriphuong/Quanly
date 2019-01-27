myApp.controller('productController', function ($scope, $http) {

    var getData = function () {
        $http({
            method: "GET",
            url: "http://localhost:8080/quanly/product/GetProduct"
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
        $scope.quantity = item.Quantity;
        $scope.price = item.Price;
        $scope.name = item.Name;
        $scope.myId = true;
        $scope.listproduct = false;
        $scope.createproduct = false;
        $scope.editproduct = true;
    }
    $scope.Create = function(){
        $scope.listproduct = false;
        $scope.createproduct = true;
        $scope.editproduct = false;
    }
    $scope.deleteData = function (id) {
        var url = "http://localhost:8080/quanly/product/Remove/" + id;
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
    $scope.editData = function (id, name, price, quantity) {
        var parameter = JSON.stringify({ id: id, name: name, price: price, quantity: quantity });
        //$scope.ND = parameter;
        $http.put("http://localhost:8080/quanly/product/Update", parameter).then(function (response) {
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
    $scope.postData = function (id, name, price, quantity) {
        var parameter = JSON.stringify({ id: id, name: name, price: price, quantity: quantity });

        //debugger
        $http.post("http://localhost:8080/quanly/product/Add", parameter).then(function (response) {
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
