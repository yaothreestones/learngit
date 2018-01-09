angular.module('app')
    .controller("backStageCtrl",["$scope","$state","$http","$rootScope","sideNavigationList", function ($scope,$state,$http,$rootScope,sideNavigationList) {
        'use strict';
        $scope.sideNavigationList = sideNavigationList;
        $scope.cancel=function () {
            var promise = $http({
                method: 'post',
                url: '/playlearn/post/a/logout',
                headers: {'content-type': 'application/x-www-form-urlencoded'},
            })
            promise.then(function (res) {
                if (res.data.code == 0) {
                    var a = $rootScope.modalConfrim('是否退出登录？');
                    a.then(function () {
                        $state.go('login');
                    })
                } else {
                    return;
                }
                $scope.code = res.data.code;
                console.log(res);
            })
        }
    }]);