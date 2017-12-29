angular.module('app').controller('groomManageCtrl', ['$scope', '$stateParams', '$rootScope', '$state', '$http',
    function ($scope, $stateParams, $rootScope, $state, $http){
        $scope.title = {};
        $scope.data = $stateParams;
        $scope.show = true;
        $scope.disabled = false;
        $scope.isShow = false;
        if($scope.data.from === '1'){
            $scope.title.name = '查看课程';
            $scope.disabled = true;
            $scope.show = false;
            $scope.isShow = true;
        }else if($scope.data.from === '2'){
            $scope.title.name = '编辑课程';
        }
    }]);