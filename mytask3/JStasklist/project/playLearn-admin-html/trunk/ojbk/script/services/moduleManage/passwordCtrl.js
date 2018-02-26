angular.module('app')
    .controller('passwordCtrl', ['$scope', '$state', '$http', 'Course_service','$rootScope', function ($scope, $state, $http, Course_service,$rootScope) {
        var vm = this;
        vm.$stateParams = $state.params;
        vm.send = function () {
            Course_service.changePwd({
                oldPwd: vm.oldPwd,
                newPwd: vm.newPwd,
                againPwd:vm.againPwd
            })
                .then(function (res) {
                    if (res.data.code == 0) {
                        $rootScope.modalAlert('修改成功，请重新登陆');
                        $state.go('login')
                    }else {
                        $scope.errorInfo = res.data.message;
                    }
                });
        }
    }])


