angular.module('app')
.controller('confrimCtrl', ['params', '$scope', function (params, $scope) {
    $scope.content = params.content;
    $scope.resolved = function () {
        $scope.$close();
    }
    $scope.rejected = function () {
        $scope.$dismiss();
    }
}])