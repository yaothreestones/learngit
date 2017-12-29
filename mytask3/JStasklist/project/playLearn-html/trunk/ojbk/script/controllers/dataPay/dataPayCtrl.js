angular.module('app')
    .controller('dataPayCtrl',['$scope',function ($scope) {
        var vm = this;
        vm.goPay = true;
        vm.email = 'aaa@bbb.com';
        vm.click = function () {
            vm.goPay = !vm.goPay
        };
        vm.cancel = function () {
            vm.goPay = true;
        };
        vm.sure = function () {
            
        }
    }])