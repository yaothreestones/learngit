angular.module("app")
    .controller("messageCtrl", ['$scope', '$state', '$rootScope', '$uibModal', 'Course_service',
        function ( $scope, $state, $rootScope, $uibModal, Course_service) {
            var vm = this;
            vm.$stateParams = $state.params;
            vm.message=[];

            Course_service.userMessage()
                .then(function (res) {
                    if (res.data.code == 0) {
                        vm.message = res.data.data;
                    } else if(res.data.code === 0){
                        vm.message = res.data.data;
                    }
                }, function (res) {
                    alert('请求失败')
                })


        }])