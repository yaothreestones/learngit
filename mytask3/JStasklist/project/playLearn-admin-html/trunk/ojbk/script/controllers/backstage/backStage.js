angular.module('app').controller("backStageCtrl",["$scope","$state","$http","sideNavigationList", function ($scope,$state,$http,sideNavigationList) {
    'use strict';
    $scope.sideNavigationList = sideNavigationList;
}]);