angular.module("app")
    .controller("usingHelpCtrl", ['$scope', '$state', '$rootScope', '$uibModal', 'Course_service',
        function ($scope, $state, $rootScope, $uibModal, Course_service) {
            var vm = this;
            vm.$stateParams = $state.params;
            vm.list=[];

            Course_service.usingHelp()
                .then(function (res) {
                    if (res.data.code == 0) {
                        vm.list = res.data.data;
                    } else {
                        alert('请求失败')
                    }
                }, function (res) {
                    alert('请求失败')
                })
        }])

