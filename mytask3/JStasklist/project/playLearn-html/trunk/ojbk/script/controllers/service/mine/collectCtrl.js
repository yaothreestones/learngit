angular.module('app')
    .controller('collectCtrl',['$scope',function ($scope) {
        $scope.lessonIsShow = false;
        $scope.hourIsShow = false;
        $scope.lessonSearch = function () {
            $scope.lessonIsShow = !$scope.lessonIsShow;
            $scope.hourIsShow = false;
        };
        $scope.hourSearch = function () {
            $scope.hourIsShow = !$scope.hourIsShow;
            $scope.lessonIsShow = false;
        }
    }]);