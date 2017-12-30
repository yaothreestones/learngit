angular.module('app')
    .controller('profileCtrl',function ($scope,$state,$rootScope,$stateParams,$timeout) {
        $scope.profile= function () {

            // if(code != 0){
            //     // $scope.modal();
            // }else{
            //   $state.go("app.profile");
            // }
            $scope.modal();
            $state.go("app.page");
        };
    });
