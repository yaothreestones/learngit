angular.module("app")
    .controller("userDataCtrl", ['$state', '$rootScope', '$uibModal', 'Course_service', function ($state, $rootScope, $uibModal, Course_service) {
        var vm = this;
        vm.$stateParams = $state.params;
        $rootScope.config.headNav.finish.do = function () {
            vm.data = {
                name:vm.$stateParams.name
            }
            Course_service.userinfo


        }


    }])