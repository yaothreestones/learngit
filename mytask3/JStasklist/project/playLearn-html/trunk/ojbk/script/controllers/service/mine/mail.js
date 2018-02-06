angular.module('app')
    .controller("mail", ["$state", "$http","Course_service", function ($state, $http,Course_service) {
        var vm = this;
        vm.$stateParams = $state.params;
        vm.user=[201];
        vm.send = function () {
            Course_service.changeMail(vm.$stateParams.email,"["+vm.user.join(",")+"]")
                .then(function (res) {
                    if (res.data.code == 0) {
                        vm.data = res.data.data;
                    } else {
                        alert('请求失败')
                    }
                }, function (res) {
                    alert('请求失败')
                })
        }

    }])