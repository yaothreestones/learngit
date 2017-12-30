angular.module('app')
.controller('courseCtrl',['$scope',function ($scope) {
    $scope.subject_isShow = false;
    $scope.class_isShow = false;
    $scope.subject_search = function () {
        $scope.subject_isShow = !$scope.subject_isShow;
        $scope.class_isShow = false;
    };
    $scope.class_search = function () {
        $scope.class_isShow = !$scope.class_isShow;
        $scope.subject_isShow = false;
    }
}]);