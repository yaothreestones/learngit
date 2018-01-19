angular.module('app')
    .controller('pageCtrl',
        function ($scope,$timeout,$state,$stateParams,Course_service) {
        var vm=this;
            vm.img = 'image/app/collections.png';
            vm.collecting = '收藏';
            vm.show = false;
            //学习星
                Course_service.get_StudyInformation({
                })
                    .then(function(res) {
                        vm.code=res.data.code;
                        vm.study_star=res.data.study_star;
                        vm.rank=res.data.rank;
                        console.log(vm.code)
                        vm.message=res.data.message;
                        console.log(res)
                    }, function(res) {
                        alert('请求失败')
                    });

                //热门管理（8个）
            Course_service.get_Recommend({
            })
                .then(function(res) {
                    vm.code=res.data.code;
                    vm.data=res.data.data;
                    console.log(vm.data)
                    console.log(vm.code)
                }, function(res) {
                    alert('请求失败')
                });


})
    .filter('data',function () {
        return function(param){
            if(param === 1){
                return '资料';
            }else {
                return '已购'
            }
        }
    })
// vm.collection = function() {
//     if (vm.img === 'image/app/collections.png') {
//         vm.img = 'image/app/isCollection.png';
//         vm.show = true;
//         vm.collect = '收藏成功';
//         vm.collecting = '已收藏';
//         $timeout(function(){
//             vm.show = false;
//         },2500)
//     } else {
//         vm.img = 'image/app/collections.png';
//         vm.show = true;
//         vm.collect = '取消收藏成功';
//         vm.collecting = '收藏';
//         $timeout(function(){
//             vm.show = false;
//         },2500)
//     }
// };

