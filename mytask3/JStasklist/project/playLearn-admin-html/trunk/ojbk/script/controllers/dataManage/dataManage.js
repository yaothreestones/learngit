angular.module('app').controller('dataManageCtrl', ['$scope', '$stateParams', '$rootScope', '$state', '$http',
    function ($scope, $stateParams, $rootScope, $state, $http){
        $scope.title = {};
        $scope.data = $stateParams;
        $scope.show = false;
        $scope.title.edit = '确定';
        if($scope.data.from === '1'){
            $scope.title.name = '新增资料';
            $scope.show = true;
        }else if($scope.data.from === '2'){
            $scope.title.name = '查看资料';
            $scope.title.edit = '编辑';
            $scope.show = false;
        }else if($scope.data.from === '3'){
            $scope.title.name = '编辑资料';
        }
    }]);