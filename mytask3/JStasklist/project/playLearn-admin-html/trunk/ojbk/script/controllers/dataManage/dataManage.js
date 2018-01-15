angular.module('app').controller('dataManageCtrl',
    function ($scope, $stateParams, $rootScope, $state, $http,task,Course_service){
        $scope.task=task;
        $scope.title = {};
        $scope.data = $stateParams;
        $scope.show = true;
        $scope.isShow = false;
        $scope.disabled = false;
        $scope.title.edit = '确定';
        $scope.materials=function () {
            Course_service.get_MaterialsId({
                params:$scope.id
            })
                .then(function(res) {
                    if(res.data.code == 0){
                        $scope.materials=res.data.data.materials;
                        console.log($scope.materials)
                    }
                    console.log(res)
                }, function(res) {
                    alert('请求失败')
                })
        }

        if($scope.data.from === '1'){
            $scope.title.name = '新增资料';
            $scope.materials();
        }else if($scope.data.from === '2'){
            $scope.title.name = '查看资料';
            $scope.title.edit = '编辑';
            $scope.isShow = true;
            $scope.disabled = true;
            $scope.show = false;
            $scope.materials();
        }else if($scope.data.from === '3'){
            $scope.title.name = '编辑资料';
            $scope.materials();
        }
        //2为查看 //1和3为确定
            if($scope.data.from==2) {
                $scope.some=function () {
                    $state.go("backStage.dataManage.dataManage",{from:3}, {reload: true});
                }
            }else{
                $scope.some=function () {
                }
            }
        $scope.maxSize = 5;
        $scope.totalItems = 80;
        $scope.currentPage = 1;
    }

    );