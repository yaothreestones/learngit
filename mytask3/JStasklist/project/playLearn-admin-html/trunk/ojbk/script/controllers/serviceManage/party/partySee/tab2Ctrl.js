angular.module('app').controller('tab2Ctrl',
    function ($scope, $stateParams, $rootScope, $state, $http, Course_service) {
        var vm = this;
        vm.subject = [];
        vm.$stateParams = $state.params;
        Course_service.get_Subject({
            userId: vm.$stateParams.userId

        })
            .then(function (res) {
                if (res.data.code == 0) {
                    vm.subject = res.data.data;
                    vm.message = res.data.message;
                }
            }, function (res) {
                alert('请求失败')
            })
    })
