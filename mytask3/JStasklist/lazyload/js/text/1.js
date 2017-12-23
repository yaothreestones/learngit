angular.module('myApp',[])
    .controller('a',['$scope','$q',function ($scope,$q) {
        $scope.defered = $q.defer();
        console.log($scope.defered)
    }])
