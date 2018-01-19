angular.module('app')
    .controller('rakeThroughCtrl',function ($scope,classes,subjects,range) {
        $scope.subjects=subjects;
        $scope.classes=classes;
        $scope.range=range;
        $scope.subjectClass=false;
        $scope.ngclick = function(index){
            $scope.selected = index;
            console.log($scope.selected)
        }
        $scope.ngclicks = function(index){
            $scope.selecteds = index;
            console.log($scope.selected)
        }
        $scope.ngclickClass = function(index){
            $scope.selectedClass = index;
        }
    });