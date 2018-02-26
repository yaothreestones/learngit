angular.module('app')
    .controller('roleIncreasedCtrl', ['$scope', '$stateParams', '$rootScope', '$state', '$http', 'Course_service',
        function ($scope, $stateParams, $rootScope, $state, $http, Course_service) {
            var vm = this;
            vm.$stateParams = $state.params;
            vm.params = {
                id: vm.$stateParams.id,
                name: vm.$stateParams.name,
                createBy: vm.$stateParams.createBy,
                updateAt: vm.$stateParams.updateAt,
                createAt: vm.$stateParams.createAt,
                updateBy: vm.$stateParams.updateBy,
            };
            Course_service.roleAdmin(vm.$stateParams.id)
                .then(function (res) {
                    if (res.data.code == 0) {
                        vm.params = res.data.data.role;
                    }
                });
            vm.send = function () {
                Course_service.editRole(vm.$stateParams.id,vm.params)
                    .then(function (res) {
                        if (res.data.code == 0) {
                            $state.go('backStage.role', {page: 1, size: 10});
                        }
                        console.log(res)
                    }, function (res) {
                        alert('请求失败')
                    });
            }
        }
    ])