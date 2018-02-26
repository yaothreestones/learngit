angular.module('app')
    .controller('payResultCtrl',['$state','$stateParams',
        function($state,$stateParams){
            var vm = this;
            vm.result = $stateParams.result;
            vm.isSelect = false;
            vm.select = false;
            vm.successPay = '支付成功';
            vm.userEmail = sessionStorage.getItem('email');
            if($stateParams.result === '1'){
                vm.successPay = '支付成功';
                vm.imgShow = "image/app/paySuccess.png";
                vm.info = '返回首页'
            }else if($stateParams.result === '2'){
                vm.info = '重新支付';
                vm.successPay = '支付失败';
                vm.imgShow = "image/app/payFailed.png";
            }
            vm.goPage = function () {
                vm.isSelect = false;
                vm.select = true;
                if($stateParams.result === '1'){
                    $state.go('app.page')
                }else {
                    history.go(-1)
                }
            };
            vm.nextPeriod = function () {
                vm.isSelect = true;
                vm.select = false;
                history.go(-2)
            };
        }]);