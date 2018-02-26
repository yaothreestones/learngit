angular.module('app')
    .controller('loginCtrl', ['$scope', '$state', '$http', 'Course_service', function ($scope, $state, $http, Course_service) {
        var vm = this;
        var params={
            name: vm.name='admin',
            pwd: vm.pwd='123456'
        };
        vm.login = function () {
            var params={
                name: vm.name,
                pwd: vm.pwd
            };
            Course_service.login(params)
                .then(function (res) {
                    if (res.data.code == 0) {
                        vm.user = res.data.data;
                        $scope.errorInfo = '登录成功';
                        $state.go('backStage')
                        console.log('登陆成功',res.data.message);
                    }else {
                        $scope.errorInfo = res.data.message;
                    }
                });
        }
    }])


