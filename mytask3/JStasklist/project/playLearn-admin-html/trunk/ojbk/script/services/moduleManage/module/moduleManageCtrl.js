angular.module('app')
    .controller('moduleManageCtrl', ['$scope', '$stateParams', '$rootScope', '$state', '$http', 'Course_service',
        function ($scope, $stateParams, $rootScope, $state, $http, Course_service) {
            var vm = this;
            vm.$stateParams = $state.params;
            vm.params = {};
            Course_service.IDmoduleUser(vm.$stateParams.id)
                .then(function (res) {
                    if (res.data.code == 0) {
                        vm.params = res.data.data.module;
                        console.log(vm.params);
                    }
                }, function (res) {
                    alert('请求失败');
                });
            vm.send = function () {
                Course_service.editModule(vm.$stateParams.id,vm.params)
                    .then(function (res) {
                        if (res.data.code == 0) {
                            $state.go('backStage.user', {page: 1, size: 10});
                        }
                        console.log(res)
                    }, function (res) {
                        alert('请求失败')
                    });
            }
        }
    ])