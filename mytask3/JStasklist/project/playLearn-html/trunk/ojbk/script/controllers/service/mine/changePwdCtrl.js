angular.module('app')
    .controller("changePwdCtrl", ["$scope", "$state", "$stateParams", "$http", "Course_service", function ($scope, $state, $stateParams, $http, Course_service) {
        var vm = this;
        vm.Course_service = Course_service;
        vm.send = function () {
            Course_service.get_ChangePwd({
                newPassword: vm.newPassword,
                oldPassword: vm.oldPassword,
                againPassword:vm.againPassword
            })
                .then(function (res) {
                    $scope.modal(function () {
                        if(res.data.code==-5033){
                            vm.code = res.data.code;
                            $state.go("app.login");
                        }else{
                            $scope.modal();
                        }
                    });
                    vm.message = res.data.message;

                }, function (res) {
                    alert('请求失败')
                })
        }
    }])