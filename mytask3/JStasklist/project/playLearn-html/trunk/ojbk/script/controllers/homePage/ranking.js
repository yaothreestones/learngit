angular.module('app','')
    .controller('rankingCtrl',function ($scope,$state,$rootScope,Course_service) {
        //学习星
        var vm=this;
        //学习星
        Course_service.get_StudyInformation()
            .then(function(res) {
                vm.code=res.data.code;
                vm.data=res.data.data;
                console.log('学习星',vm.data)
            }, function(res) {
                alert('请求失败')
            });
        //击败用户
        Course_service.get_Studyinfo()
                    .then(function(res) {
                        vm.code=res.data.code;
                        console.log(vm.code)
                        vm.learn=res.data.data;
                        console.log('击败用户',vm.learn)
                        console.log(res)
                    }, function(res) {
                        alert('请求失败')
                    })


    });

