angular.module("app")
    .controller("seekDetailsCtrl", ['$scope', '$state', '$rootScope', '$uibModal', 'Course_service',
        function ($scope, $state, $rootScope, $uibModal, Course_service) {
            var vm = this;
            vm.$stateParams = $state.params;
            vm.ajax = [];
            Course_service.seekDetails(vm.$stateParams.id)
                .then(function (res) {
                    if (res.data.code == 0) {
                        vm.ajax = res.data.data;
                    } else {
                        alert('请求失败')
                    }
                }, function (res) {
                    alert('请求失败')
                })
        }])