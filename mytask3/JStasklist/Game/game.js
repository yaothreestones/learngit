var app = angular.module('myApp',[]);
app.controller('myCtrl',function ($scope) {
    $scope.top = 50;
    $scope.left = 45;
    $scope.bottom = '';
    $scope.right = '';
    $scope.yes = function () {
        alert('恭喜你答对了！')
    };

    $scope.catchMe = function () {
        $scope.a = 10 + Number(Math.floor(Math.random()*80));
        $scope.b = 10 + Number(Math.floor(Math.random()*80));
        $scope.c = Number(Math.floor(Math.random()*2));
        $scope.d = Number(Math.floor(Math.random()*2));
        if($scope.c === 0 && $scope.d === 0){
            $scope.top = $scope.a;
            $scope.left = $scope.b;
            $scope.bottom = '';
            $scope.right = '';
        }else if($scope.c === 0 && $scope.d === 1) {
            $scope.bottom = $scope.a;
            $scope.right = $scope.b;
            $scope.top = '';
            $scope.left = '';
        }else if($scope.c === 1 && $scope.d === 0){
            $scope.top = $scope.a;
            $scope.right = $scope.b;
            $scope.bottom = '';
            $scope.left = '';
        }else {
            $scope.bottom = $scope.a;
            $scope.left = $scope.b;
            $scope.top = '';
            $scope.right = '';
        }
        $scope.no = {
            'position':'absolute',
            'top':$scope.top+'vh',
            'bottom':$scope.bottom+'vh',
            'left':$scope.left+'vw',
            'right':$scope.right+'vw'
        };
    }
});