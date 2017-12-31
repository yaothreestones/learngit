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
    }])