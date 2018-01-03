angular.module('app').controller('uniteManageCtrl', ['$scope', '$stateParams', '$rootScope', '$state', '$http',
    function ($scope, $stateParams, $rootScope, $state, $http){
        $scope.title = {};
        $scope.data = $stateParams;
        console.log($scope.data)
        $scope.show = true;
        $scope.disabled = false;
        $scope.isShow = false;
        $scope.title.edit = '确定';
        if($scope.data.from === '1'){
            $scope.title.name = '新增机构';
        }else if($scope.data.from === '2'){
            $scope.title.name = '查看机构';
            $scope.title.edit = '编辑';
            $scope.isShow = true;
            $scope.disabled = true;
            $scope.show = false;
        }else if($scope.data.from === '3'){
            $scope.title.name = '编辑机构';
        }
        if($scope.data.from==2) {
            $scope.some=function () {
                $state.go("backStage.contentManage.uniteManage",{from:3}, {reload: true});
            }
        }else{
            $scope.some=function () {
            }
        }
    }]);