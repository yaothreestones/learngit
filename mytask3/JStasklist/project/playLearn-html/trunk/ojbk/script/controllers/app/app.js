angular.module('app')
    .controller('appCtrl',function ($scope,$state) {
        $scope.cancel = function() {
            history.back();

        }
    });
