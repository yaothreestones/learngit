angular.module('app')
    .controller('periodFinishCtrl',['$state','$stateParams',
        function ($state,$stateParams) {
            var vm = this;
            vm.go_buy = function () {
                    $state.go('app.data')
            };
            vm.go_index = function () {
                $state.go('app.page')
            }
        }]);