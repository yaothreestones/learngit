angular.module('app')
    .controller('rakeThroughCtrl',function ($scope,classes,subjects,range) {
        $scope.subjects=subjects;
        $scope.classes=classes;
        $scope.range=range;
    });