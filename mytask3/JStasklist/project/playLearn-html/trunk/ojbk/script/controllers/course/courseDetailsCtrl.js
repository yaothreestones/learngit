angular.module('app')
    .controller('courseDetailsCtrl',['$scope','$timeout','$state','$stateParams',
        function ($scope,$timeout,$state,$stateParams) {
            $scope.vm={};
            $scope.vm.img = 'image/app/collection.png';
            $scope.vm.show = false;
            $scope.collection = function() {
                    if ($scope.vm.img === 'image/app/collection.png') {
                        $scope.vm.img = 'image/app/isCollection.png';
                        $scope.vm.show = true;
                        $scope.vm.collection = '收藏成功';
                        $timeout(function(){
                            $scope.vm.show = false;
                        },2500)
                    } else {
                        $scope.vm.img = 'image/app/collection.png';
                        $scope.vm.show = true;
                        $scope.vm.collection = '取消收藏成功';
                        $timeout(function(){
                            $scope.vm.show = false;
                        },2500)
                    }
            };
            $scope.data = function(x){
                if(x===1){
                    $state.go('app.data')
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


