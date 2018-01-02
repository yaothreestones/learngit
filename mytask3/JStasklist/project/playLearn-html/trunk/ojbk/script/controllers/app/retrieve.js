angular.module('app','')
    .controller('retrieveCtrl',function ($scope,$state,$rootScope,$stateParams,$timeout) {
        $scope.retrieve= function () {
            // if(code != 0){
            //     // $scope.modal();
            // }else{
            //   $state.go("app.profile");
            // }
            $scope.modal();
            // $state.go("app.login");
        };
    });

