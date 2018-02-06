angular.module('app')
    .controller('lookCtrl', ['$scope', '$stateParams', '$rootScope', '$state', '$http', 'Course_service', 'optionsData',
        function ($scope, $stateParams, $rootScope, $state, $http, Course_service, optionsData) {
            var vm = this;
            vm.Course_service = Course_service;
            vm.sendpeople = optionsData()['sendpeople'];
            vm.mold = optionsData()['mold'];
            vm.$stateParams = $state.params;

            Course_service.get_MessageSee(vm.$stateParams.id)
                .then(function (res) {
                    if (res.data.code == 0) {
                        vm.title = res.data.data.title;
                        vm.type = res.data.data.type;
                        vm.gradeId = res.data.data.gradeId;
                        vm.sendTime = res.data.data.sendTime;
                        vm.text = res.data.data.text;
                        vm.thirdPart = res.data.data.thirdPart
                        console.log(vm.type);
                    }
                    console.log(res)
                }, function (res) {
                    alert('请求失败')
                });

        }
    ])