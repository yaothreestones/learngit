angular.module('app')
    .controller('teachingCtrl',['$scope','$timeout','$state','$stateParams',
        function ($scope,$timeout,$state,$stateParams) {
            $scope.data = function(x){
                if(x===1){
                    $state.go('app.data',{choose:1,preview:1})
                }
            };
        }])
    .filter('data',function () {
        return function(param){
            if(param === 1){
                return '资料';
            }else {
                return '已购'
            }
        }
    })


