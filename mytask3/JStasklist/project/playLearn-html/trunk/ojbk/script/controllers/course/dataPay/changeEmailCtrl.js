angular.module('app')
    .controller('changeEmailCtrl',['$state','$stateParams','Course_service',function ($state,$stateParams,Course_service) {
        var vm = this;
        vm.getEmail = sessionStorage.getItem('email');
        vm.emailAddress = vm.getEmail;
        vm.there = $stateParams.there;
        vm.dataPay_changeEmail_finish = function() {
            sessionStorage.setItem("email",vm.emailAddress);
                $state.go('app.dataPay',{there:1,payment:vm.selected,choose:$state.params.choose,preview:$state.params.preview});
            //这边如果用户没有改邮箱点击完成，则需要一个判断是否更改过邮箱，如果没有
            // ，则只路由跳转而不调接口防止恶意点击完成。
        }
    }])