angular.module('app')
    .controller('compilerCtrl', ['$scope', '$rootScope', '$state', '$http', 'Course_service',
        function ($scope, $rootScope, $state, $http, Course_service) {
            var vm = this;
            vm.$stateParams = $state.params;
            vm.params = {
                id: vm.$stateParams.id,
                name: vm.$stateParams.name,
                pwd: vm.$stateParams.pwd,
            };
            Course_service.resUser(vm.$stateParams.id)
                .then(function (res) {
                    if (res.data.code == 0) {
                        vm.params=res.data.data.manager;
                    }
                }, function (res) {
                    alert('请求失败');
                });
            vm.send=function () {
                Course_service.editUser(vm.$stateParams.id,vm.params)
                    .then(function (res) {
                        if (res.data.code == 0) {
                            $state.go('backStage.account', {page: 1, size: 10});
                        }
                        console.log(res)
                    }, function (res) {
                        alert('请求失败')
                    });
            }



        }
    ])