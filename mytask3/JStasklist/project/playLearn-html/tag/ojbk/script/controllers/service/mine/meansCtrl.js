angular.module("app")
    .controller("meansCtrl", ['$scope', '$state', '$rootScope', '$uibModal', 'Course_service',
        function ($scope, $state, $rootScope, $uibModal, Course_service) {
            var vm = this;
            vm.$stateParams = $state.params;
            vm.data=[];
            Course_service.myProfile()
                .then(function (res) {
                    if (res.data.code == 0) {
                        vm.data = res.data.data;
                        vm.dataId=res.data.data[0].dataId;
                    }
                })
        }])