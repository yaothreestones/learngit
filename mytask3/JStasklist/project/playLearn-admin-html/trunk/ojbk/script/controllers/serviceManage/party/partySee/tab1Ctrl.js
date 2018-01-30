angular.module('app').controller('tab1Ctrl',
    function ($scope,$stateParams,$rootScope,$state,$http,Course_service){
        var vm = this;
        vm.ajax = [];
        vm.size = $stateParams.size;
        vm.pageGo = function (x) {
            $state.go($state.current, {page: x}, {reload: true});
        };
        vm.$stateParams = $state.params;
        Course_service.get_See($stateParams)
            .then(function (res) {
                if (res.data.code == 0) {
                    vm.ajax = res.data.data;
                    vm.currentPage = parseInt($stateParams.page);
                    vm.total = res.data.total;
                }
                console.log(res)
            }, function (res) {
                alert('请求失败')
            })

    })
