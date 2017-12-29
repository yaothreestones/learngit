angular.module('app')
    .controller('changeEmailCtrl',['$state','$stateParams',function ($state,$stateParams) {
        var vm = this;
        vm.dataPay_changeEmail_finish = function() {
            $state.go('app.dataPay');
        }
    }])