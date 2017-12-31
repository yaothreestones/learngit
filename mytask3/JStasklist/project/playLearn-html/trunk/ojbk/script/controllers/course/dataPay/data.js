angular.module('app')
    .controller('dataCtrl',['$scope','$state',function ($scope,$state) {
        var vm = this;
        vm.img = 'image/app/surebuy.png';
        vm.selected = '0';
        vm.email = 'aaa@aaa.com';
        vm.courseShow = true;
        sessionStorage.setItem('email',vm.email)
        if($state.params.choose === '1'){
                vm.courseShow = false;
                vm.selected = '1'
        }
        vm.data_next_step = function () {
                //there为后退按钮判断参数；
                //payment为资料付款类型，0为课时下资料，1位课程下资料；
                //choose为防止后退时造成课程课时页面混乱，0为从课时下进入，1为从课程下进入。
            $state.go("app.dataPay",{there:1,payment:vm.selected,choose:$state.params.choose})
        }
    }])