angular.module('app').controller('dataManageCtrl', ['$scope', '$stateParams', '$rootScope', '$state', '$http',
    function ($scope, $stateParams, $rootScope, $state, $http){
        $scope.title = {};
        $scope.data = $stateParams;
        $scope.show = true;
        $scope.isShow = false;
        $scope.disabled = false;
        $scope.title.edit = '确定';
        if($scope.data.from === '1'){
            $scope.title.name = '新增资料';
        }else if($scope.data.from === '2'){
            $scope.title.name = '查看资料';
            $scope.title.edit = '编辑';
            $scope.isShow = true;
            $scope.disabled = true;
            $scope.show = false;
        }else if($scope.data.from === '3'){
            $scope.title.name = '编辑资料';
        }
        //2为编辑 //1和3为确定
            if($scope.data.from==2) {
                $scope.some=function () {
                    $state.go("backStage.dataManage.dataManage",{from:3}, {reload: true});
                }
            }else{
                $scope.some=function () {
                }
            }
    }

    ]);