angular.module('app').controller('groomCtrl',
    function($scope, $stateParams, $rootScope, $state, $http,Course_service){
    var vm=this;
        vm.id=$stateParams.id;
        console.log(vm.id)
        vm.demoLists = [];
        Course_service.get_Recommend(vm.id)
            .then(function(res) {
                if(res.data.code == 0){
                    console.log(vm.id)
                    vm.code=res.data.code;
                    vm.demoLists=res.data.data;
                    console.log(vm.demoLists)
                }
                console.log(res)
            }, function(res) {
                alert('请求失败')
            })
    });