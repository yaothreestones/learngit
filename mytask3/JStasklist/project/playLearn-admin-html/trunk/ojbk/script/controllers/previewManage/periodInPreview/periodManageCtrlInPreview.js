angular.module('app').controller('periodManageCtrlInPreview', ['$scope', '$stateParams', '$rootScope', '$state', '$http',
    function ($scope, $stateParams, $rootScope, $state, $http){
        $scope.data = $stateParams;
        $scope.title={};
        $scope.show = false;
        $scope.lock =true;
        if($scope.data.from === '1'){
            $scope.title.name = '新增课时';
        }else if($scope.data.from === '2'){
            $scope.title.name = '查看课时';
            $scope.show = true;
        }else if($scope.data.from === '3'){
            $scope.title.name = '编辑课时';
        }
    }])