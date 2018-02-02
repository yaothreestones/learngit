angular.module("app")
    .controller("seekCtrl", ['$scope', '$state', '$rootScope', '$uibModal', 'Course_service',
        function ($scope, $state, $rootScope, $uibModal, Course_service) {
            var vm = this;
            vm.$stateParams = $state.params;
            // vm.ajax = [];
            // vm.user = {
            //     type: vm.type,
            // };
            // Course_service.seeklist(vm.user)
            //     .then(function (res) {
            //         if (res.data.code == 0) {
            //             vm.ajax = res.data.data;
            //         } else {
            //             alert('请求失败')
            //         }
            //     }, function (res) {
            //         alert('请求失败')
            //     })
        }])