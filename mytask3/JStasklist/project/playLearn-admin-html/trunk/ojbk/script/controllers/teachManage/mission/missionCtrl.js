angular.module('app').controller('missionCtrl', ['$scope', '$stateParams', '$rootScope', '$state', '$http',
    function ($scope,$stateParams,$rootScope,$http,$state){
        $scope.data = $stateParams;
        console.log($scope.data)
        if($scope.data.add === '1'){
            $scope.isShow = true;
        }
    }])