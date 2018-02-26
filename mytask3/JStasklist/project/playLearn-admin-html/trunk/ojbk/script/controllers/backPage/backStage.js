angular.module('app')
    .controller("backStageCtrl", ["$scope", "$state", "$http", "$rootScope", "sideNavigationList", "Course_service",
        function ($scope, $state, $http, $rootScope, sideNavigationList, Course_service) {
            'use strict';
            $scope.sideNavigationList = sideNavigationList;
            var vm = this;
            vm.cancel = function () {
                var isConfrim = $rootScope.modalConfrim('是否退出登录？');
                isConfrim.then(function () {
                    Course_service.loginOut()
                        .then(function (res) {
                            if (res.data.code === 0) {
                                $rootScope.modalAlert('退出成功');
                                $state.go('login');
                            } else {
                                $rootScope.modalAlert('退出失败');
                            }
                        }, function (res) {
                            $rootScope.modalAlert(res.data);
                        })
                }, function () {
                    //取消
                    $rootScope.modalAlert('已取消');
                })
            }
        }]);