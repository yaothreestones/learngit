angular.module('app')
    .controller('changeEmailCtrl',['$state','$stateParams',function ($state,$stateParams) {
        var vm = this;
        vm.getEmail = sessionStorage.getItem('email');
        vm.emailAddress = vm.getEmail;
        vm.dataPay_changeEmail_finish = function() {
            $state.go('app.dataPay');
            sessionStorage.setItem('email',vm.emailAddress)
        }
    }])