angular.module("app")
    .controller("seekCtrl", ['$scope', '$state', '$rootScope', '$uibModal', 'Course_service',
        function ($scope, $state, $rootScope, $uibModal, Course_service) {
            var vm = this;
            vm.$stateParams = $state.params;
            vm.user = {
                size: 999,
                type: 2
            };
            //
            var cardList = [];
            Course_service.seeklist(vm.user)
                .then(function (res) {
                    if (res.data.code == 0) {
                        vm.cardList = res.data.data;
                    } else {
                        alert('请求失败')
                    }
                }, function (res) {
                    alert('请求失败')
                });
            //
            vm.user = {
                size: 999,
                type: 1
            };
            vm.ajax = [];
            Course_service.seeklist(vm.user)
                .then(function (res) {
                    if (res.data.code == 0) {
                        vm.ajax = res.data.data;
                        vm.ajax.push(vm.ajax[0]);
                        vm.ajax.unshift(vm.ajax[vm.ajax.length-2]);
                    } else {
                        alert('请求失败')
                    }
                }, function (res) {
                    alert('请求失败')
                })
        }])
