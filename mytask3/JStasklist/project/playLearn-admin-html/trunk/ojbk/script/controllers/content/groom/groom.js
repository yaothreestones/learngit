angular.module('app').controller('groomCtrl',
    function($scope, $stateParams, $rootScope, $state, $http,Course_service){
    var vm=this;
        vm.demoLists = [];
        vm.params = {
            grade:vm.grade=1,
        }
        Course_service.get_Recommend({
            params:vm.params
        })
            .then(function(res) {
                if(res.data.code == 0){
                    vm.code=res.data.code;
                    console.log(vm.code)
                    vm.demoLists=res.data.data;
                    vm.grade=vm.demoLists.grade;
                    console.log(vm.demoLists)
                }
                console.log(res)
            }, function(res) {
                alert('请求失败')
            })
    });