angular.module('app')
    .controller('rakeThroughCtrl',function ($scope,classes,subjects) {
        $scope.subjects=subjects;
        $scope.classes=classes;
    });