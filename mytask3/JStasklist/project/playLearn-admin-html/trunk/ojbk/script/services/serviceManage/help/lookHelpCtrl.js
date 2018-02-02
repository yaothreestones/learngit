angular.module('app')
    .controller('lookHelpCtrl', ['$scope', '$rootScope', '$state', '$http', 'Course_service',
        function ($scope, $rootScope, $state, $http, Course_service) {
            var vm = this;
            vm.$stateParams = $state.params;
            Course_service.get_HelpSee(vm.$stateParams.id)
                .then(function (res) {
                    if (res.data.code == 0) {
                        vm.title = res.data.data.title;
                        vm.text = res.data.data.text;
                    }
                    console.log(res)
                }, function (res) {
                    alert('请求失败')
                });
        }
    ])