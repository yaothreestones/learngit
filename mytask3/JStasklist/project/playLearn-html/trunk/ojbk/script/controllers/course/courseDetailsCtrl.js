angular.module('app')
    .controller('courseDetailsCtrl',['$scope','$timeout','$state','$stateParams',
        function ($scope,$timeout,$state,$stateParams) {
            var vm = this;
            //收藏功能
            vm.img = 'image/app/collection.png';
            vm.collecting = '收藏';
            vm.show = false;
            vm.collection = function() {
                    if (vm.img === 'image/app/collection.png') {
                        vm.img = 'image/app/isCollection.png';
                        vm.show = true;
                        vm.collect = '收藏成功';
                        vm.collecting = '已收藏';
                        $timeout(function(){
                            vm.show = false;
                        },2500)
                    } else {
                        vm.img = 'image/app/collection.png';
                        vm.show = true;
                        vm.collect = '取消收藏成功';
                        vm.collecting = '收藏';
                        $timeout(function(){
                            vm.show = false;
                        },2500)
                    }
            };
            //根据资料或者已购来判断跳转方向，1为资料，跳到资料购买界面；2为已购，跳到购买记录
            vm.data = function(x){
                if(x===1){
                    $state.go('app.data',{choose:1})
                }
            };
        }])
    .filter('data',function () {
        return function(param){
            if(param === 1){
                return '资料';
            }else {
                return '已购'
            }
        }
    });


