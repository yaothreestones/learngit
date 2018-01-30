angular.module('app')
    .controller('courseDetailsCtrl',['$scope','$timeout','$state','$stateParams','Course_service',
        function ($scope,$timeout,$state,$stateParams,Course_service) {
            var vm = this;
            //收藏功能
            vm.img = 'image/app/collection.png';
            vm.collecting = '收藏';
            vm.show = false;
            console.log($stateParams);
            vm.Course_service = Course_service;
            vm.courseDetail_params = $stateParams.courseId;
            vm.Course_service.get_course_detail(vm.courseDetail_params)
                .then(function (res) {
                vm.courseDetail = res.data.data;
                console.log(vm.courseDetail);
            });
            vm.Course_service.get_period_list({
                courseId: $stateParams.courseId
            }).then(function (res) {
                console.log(res.data.data);
                vm.periodLists = res.data.data
            });
            vm.course_detail = function (data) {
                console.log(data);
                if(data.lock !== 2){
                    $state.go("app.period",{})
                }
            };
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


