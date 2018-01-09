angular.module('app')
    .controller('dataCtrl', function ($scope, $state, $http,Course_service) {
        var vm=this;
        vm.demoLists = [];
            vm.params = {
                id:vm.data,
                page:vm.page,
                pageSzie:vm.pageSzie
            }
                Course_service.get_Admin({
                    params:vm.params
                })
                    .then(function(res) {
                        if(res.data.code == 0){
                            vm.code=res.data.code;
                            console.log(vm.code)
                            vm.demoLists=vm.code=res.data.data;
                            console.log(vm.demoLists)
                            vm.message=res.data.message;

                        }
                        console.log(res)
                    }, function(res) {
                        alert('请求失败')
                    })
    });



