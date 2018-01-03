angular.module('app','')
    .controller('enrollCtrl',function ($scope,$state,$rootScope,$stateParams,$timeout) {
        $scope.enroll= function () {
            // if(code != 0){
            //     // $scope.modal();
            // }else{
            //   $state.go("app.profile");
            // }
            $scope.modal();
            // $state.go("app.profile");
        };
    });

