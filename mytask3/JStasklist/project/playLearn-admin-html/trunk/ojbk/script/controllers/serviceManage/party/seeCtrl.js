angular.module('app')
    .controller('seeCtrl', ['$scope', '$stateParams', '$rootScope', '$state', '$http', 'Course_service', 'optionsData',
        function ($scope, $stateParams, $rootScope, $state, $http, Course_service, optionsData) {
            var vm = this;
            vm.id = 1;
            vm.Course_service = Course_service;
            vm.year = optionsData()['year'];
            vm.$stateParams = $state.params;
            $state.go('backStage.party.see.tab1', {
                userId: vm.$stateParams.userId,
                page: vm.$stateParams.page, size: vm.$stateParams.size
            });
            Course_service.get_UserDetail(vm.id)
                .then(function (res) {
                    if (res.data.code == 0) {
                        vm.name = res.data.data.name
                        vm.email = res.data.data.email;
                        vm.grade = res.data.data.grade;
                        vm.profilePicture = res.data.data.profilePicture
                        console.log(vm.grade);
                    }
                    console.log(res)
                }, function (res) {
                    alert('请求失败')
                })

        }
    ])