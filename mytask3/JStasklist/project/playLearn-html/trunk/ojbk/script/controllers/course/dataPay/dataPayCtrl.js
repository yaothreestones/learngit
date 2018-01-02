angular.module('app')
    .controller('dataPayCtrl',['$state','$stateParams',
        function ($state,$stateParams) {
        var vm = this;
        vm.goPay = true;
        vm.email = sessionStorage.getItem('email');
        console.log($stateParams)
        vm.dataPay_changeEmail = function () {
            $state.go("app.changeEmail",{payment:$state.params.payment,choose:$state.params.choose});
        }
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
