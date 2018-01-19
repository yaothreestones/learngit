angular.module('app','')
    .controller('rankingCtrl',function ($scope,$state,$rootScope,Course_service) {
        //找回密码
        var vm=this;
        vm.data=[];
                Course_service.get_StudyInformation({
                })
                    .then(function(res) {
                        vm.code=res.data.code;
                        console.log(vm.code)
                        vm.data=res.data.data;
                        console.log(vm.data)
                        vm.message=res.data.message;
                        console.log(res.data)
                    }, function(res) {
                        alert('请求失败')
                    })
    });

