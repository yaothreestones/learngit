angular.module('app').controller('uniteCtrl',
    function ($scope, $stateParams, $rootScope, $state, $http,Course_service){
    var vm=this;
    vm.demoLists=[];
        vm.params = {
            page:vm.page="1",
            size:vm.size='10'
        }
        Course_service.get_Company({
            params:vm.params
        })
            .then(function(res) {
                if(res.data.code == 0){
                    vm.code=res.code;
                    console.log(vm.code)
                    vm.demoLists=res.data;
                    console.log(vm.demoLists)
                }
                console.log(res)
            }, function(res) {
                alert('请求失败')
            })
    });