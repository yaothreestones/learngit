angular.module("app")
    .controller("meansMailCtrl", ['$scope', '$state', '$rootScope', '$uibModal', 'Course_service',
        function ($scope, $state, $rootScope, $uibModal, Course_service) {
            var vm = this;
            vm.$stateParams = $state.params;
            vm.user = {
                payTime: vm.$stateParams.payTime,
                email: vm.$stateParams.email,
                payType: vm.$stateParams.payType,
                money: vm.$stateParams.money
            };
            Course_service.myProfile()
                .then(function (res) {
                    if (res.data.code == 0) {
                        vm.user = res.data.data[0];
                    } else {
                        alert('请求失败')
                    }
                }, function (res) {
                    alert('请求失败')
                })
        }])