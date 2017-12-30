angular.module('app')
    .controller('dataPayCtrl',['$scope','$stateParams',function ($state,$stateParams,$scope) {
        var vm = this;
        vm.goPay = true;
        vm.email = sessionStorage.getItem('email');
        vm.click = function () {
            vm.goPay = !vm.goPay;
        };
        vm.cancel = function () {
            vm.goPay = true;
        };
        vm.sure = function () {
            //此处调用后端接口获得数据后调用微信支付接口
        }
    }])
