angular.module("app")
    .controller("messageCtrl", ['$scope', '$state', '$rootScope', '$uibModal', 'Course_service',
        function ( $scope, $state, $rootScope, $uibModal, Course_service) {
            var vm = this;
            vm.$stateParams = $state.params;
            vm.requestLessonList=[];

            Course_service.userMessage()
                .then(function (res) {
                    if (res.data.code == -3654) {
                        vm.requestLessonList = res.data.data;
                    } else {
                        alert('请求失败')
                    }
                }, function (res) {
                    alert('请求失败')
                })


        }])