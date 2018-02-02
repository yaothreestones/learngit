angular.module('app')
    .controller('wechatCtrl',function ($scope,$state,$stateParams) {
        //读取code
        $scope.code=sessionStorage.getItem("code");
        console.log($scope.code);
    });
