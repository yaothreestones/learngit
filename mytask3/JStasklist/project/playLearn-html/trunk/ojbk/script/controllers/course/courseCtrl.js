angular.module('app')
.controller('courseCtrl',['$scope','classes','subjects',function ($scope,classes,subjects) {
    $scope.subject_isShow = false;
    $scope.class_isShow = false;
    $scope.subject_selected = '课程';
    $scope.class_selected = '年级'
    $scope.subject_search = function () {
        $scope.subject_isShow = !$scope.subject_isShow;
        $scope.class_isShow = false;
    };
    $scope.class_search = function () {
        $scope.class_isShow = !$scope.class_isShow;
        $scope.subject_isShow = false;
    }
    $scope.classes = classes;
    $scope.subjects = subjects;
    $scope.subject_select = function (x) {
        console.log(x);
        console.log(angular.copy(x));
        $scope.subject_selected = x.name;
        $scope.subject_isShow = false;

    };
    $scope.class_select = function (x) {
        console.log(x);
        $scope.class_selected = x.name;
        $scope.class_isShow = false;
    };
}]);