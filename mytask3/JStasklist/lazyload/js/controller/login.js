angular.module('myApp')
    .controller('login',['$scope','login1','$state',function ($scope,login1,$state) {
        $scope.submit = function () {
            var params = {
                name:$scope.user,
                pwd:$scope.pwd
            };
            login1.login_in(params)
        }
    }])
