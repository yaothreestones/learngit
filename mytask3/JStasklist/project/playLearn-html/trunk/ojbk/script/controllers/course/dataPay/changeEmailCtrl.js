angular.module('app')
    .controller('changeEmailCtrl',['$state','$stateParams',function ($state,$stateParams) {
        var vm = this;
        vm.getEmail = sessionStorage.getItem('email');
        vm.emailAddress = vm.getEmail;
        vm.there = $stateParams.there;
        vm.dataPay_changeEmail_finish = function() {
            $state.go('app.dataPay',{there:1});
            //这边如果用户没有改邮箱点击完成，则需要一个判断是否更改过邮箱，如果没有
            // ，则只路由跳转而不调接口防止恶意点击完成。
            sessionStorage.setItem('email',vm.emailAddress)
        }
    }])