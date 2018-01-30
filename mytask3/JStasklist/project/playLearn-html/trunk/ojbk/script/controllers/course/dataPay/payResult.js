angular.module('app')
    .controller('payResultCtrl',['$state','$stateParams',
        function($state,$stateParams){
            var vm = this;
            vm.isSelect = false;
            vm.select = false;
            vm.successPay = '支付成功';
            vm.userEmail = "123@123.com";
            vm.imgShow = "image/app/paySuccess.png";
            //vm.imgShow = "image/app/payFailed.png";
            vm.goPage = function () {
                vm.isSelect = false;
                vm.select = true;
                $state.go("app.page")
            };
            vm.nextPeriod = function () {
                vm.isSelect = true;
                vm.select = false
            };
        }]);