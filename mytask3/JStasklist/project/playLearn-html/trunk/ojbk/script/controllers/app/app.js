angular.module('app')
    .controller('appCtrl',function ($scope,$state,$stateParams,$location) {
        $scope.cancel = function() {
            history.back();
            angular.element('body').removeClass('overflow');
        };
        $scope.revert=function () {
            $state.go('app.page')
        };
        $scope.page=function () {
            $state.go('app.login');
        }
    });
