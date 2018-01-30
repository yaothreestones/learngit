angular.module('app').controller('tab3Ctrl',
    function ($scope,$stateParams,$rootScope,$state,$http,Course_service){

        var vm = this;
        vm.period = [];
        console.log($scope.$parent)
        vm.$stateParams= $state.params;
        Course_service.get_Means({
            userId: vm.$stateParams.userId,
        })
            .then(function (res) {
                if (res.data.code == 0) {
                    vm.period = res.data.data;
                    console.log(vm.period)
                    vm.message = res.data.message;
                }
                console.log(res)
            }, function (res) {
                alert('请求失败')
            })
    })
