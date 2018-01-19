angular.module('app')
    .controller('dataManageCtrl', function ($scope, $state, $http,Course_service,CourseMaterials,$stateParams,optionsData) {
        // $scope.task=task;
        $scope.title = {};
        $scope.data = $stateParams;
        $scope.id=$scope.data.id;
        console.log($scope.data)
        $scope.from=$stateParams.from;
        $scope.show = true;
        $scope.isShow = false;
        $scope.disabled = false;
        $scope.title.edit = '确定';
        $scope.check=true;
        //返回
        $scope.remove=function () {
            $state.go("backStage.dataManage.data",{from:$scope.from,page:1,size:10} ,{reload: true});
        }
            if($scope.data.from === '1'){
                $scope.title.name = '新增资料';
            }
            if($scope.data.from === '2'){
                console.log($scope.id)
                $scope.title.name = '查看资料';
                $scope.title.edit = '编辑';
                $scope.isShow = true;
                $scope.disabled = true;
                $scope.show = false;
                $scope.materials=function () {
                    Course_service.get_MaterialsId($scope.id)
                        .then(function(res) {
                            if(res.data.code == 0){
                            }
                            console.log(res)
                        }, function(res) {
                            alert('请求失败')
                        })
                }
                $scope.materials();
            }
            if($scope.data.from === '3'){
                $scope.title.name = '编辑资料';
                $scope.check=false;
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

    })



