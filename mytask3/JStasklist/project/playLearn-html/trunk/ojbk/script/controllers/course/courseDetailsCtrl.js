angular.module('app')
    .controller('courseDetailsCtrl',['$scope','$timeout',function ($scope,$timeout) {
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
        }
    }]);

