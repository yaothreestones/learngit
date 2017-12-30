angular.module('app')
    .controller('dataCtrl',['$scope',function ($scope) {
        var vm = this;
        vm.img = 'image/app/surebuy.png';
        vm.checked = true;
        vm.email = 'aaa@aaa.com';
        sessionStorage.setItem('email',vm.email)
    }])