angular.module('app')
    .controller('periodCtrl',['$scope','$timeout','$state','$stateParams','$http',
        function ($scope,$timeout,$state,$stateParams,$http) {
            var vm = this;
            vm.img = 'image/app/collection.png';
            vm.collecting = '收藏';
            vm.show = false;
            vm.collection = function () {
                if (vm.img === 'image/app/collection.png') {
                    vm.img = 'image/app/isCollection.png';
                    vm.show = true;
                    vm.collect = '收藏成功';
                    vm.collecting = '已收藏';
                    $timeout(function () {
                        vm.show = false;
                    }, 2500)
                } else {
                    vm.img = 'image/app/collection.png';
                    vm.show = true;
                    vm.collect = '取消收藏成功';
                    vm.collecting = '收藏';
                    $timeout(function () {
                        vm.show = false;
                    }, 2500)
                }
            };
            vm.data = function(x){
                if(x===1){
                    $state.go('app.data',{choose:0})
                }
            };
            vm.begin_study = function () {
                $state.go('app.mission')
            }
        }])
    .filter('data',function () {
        return function(param){
            if(param === 1){
                return '资料';
            }else {
                return '已购'
            }
        }
    })