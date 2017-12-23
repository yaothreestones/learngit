angular.module('app').controller('coursesManageCtrl', ['$scope', '$stateParams', '$rootScope', '$state', '$http',
    function ($scope, $stateParams, $rootScope, $state, $http){
        $scope.data = $stateParams;
        $scope.title={};
        $scope.show = false;
        if($scope.data.from === '1'){
            $scope.title.name = '新增课程';
        }else if($scope.data.from === '2'){
            $scope.title.name = '查看课程';
            $scope.show = true;
        }else if($scope.data.from === '3'){
            $scope.title.name = '编辑课程';
        }
    }]);