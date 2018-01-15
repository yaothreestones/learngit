angular.module('app')
    .controller('dataCtrl', function ($scope, $state, $http,Course_service,grade,family,subject,CourseMaterials) {
        var vm=this;
        vm.grade=grade;
        vm.family=family;
        vm.subject=subject;
        vm.CourseMaterials=CourseMaterials;
        vm.demoLists = [];
            vm.params = {
                page:vm.page=1,
                pageSzie:vm.pageSzie=10,
            }
                Course_service.get_Materials({
                    params:vm.params
                })
                    .then(function(res) {
                        if(res.data.code == 0){
                            vm.code=res.data.code;
                            console.log(vm.code)
                            vm.demoLists=res.data.ids;
                            console.log(vm.demoLists)
                            vm.message=res.data.message;
                        }
                        console.log(res)
                    }, function(res) {
                        alert('请求失败')
                    })
    });



