angular.module('app')
    .directive('listenDone', function () {
        return {
            restrict: 'A',
            controller: function ($scope, $timeout) {
                if ($scope.$last) {
                    $scope.$emit('repeat-done');
                }
            }
        }
    });
