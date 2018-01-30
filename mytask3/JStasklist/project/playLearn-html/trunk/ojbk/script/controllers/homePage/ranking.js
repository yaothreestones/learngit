angular.module('app','')
    .controller('rankingCtrl',function ($scope,$state,$rootScope,Course_service) {
        //学习星
        var vm=this;
                Course_service.get_StudyInformation()
                    .then(function(res) {
                        vm.code=res.data.code;
                        console.log(vm.code)
                        vm.data=res.data.data;
                        console.log(vm.data)
                        console.log(res)
                    }, function(res) {
                        alert('请求失败')
                    })
    });

