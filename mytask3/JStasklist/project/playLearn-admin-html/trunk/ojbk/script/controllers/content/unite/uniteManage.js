angular.module('app').controller('uniteManageCtrl',
    function($scope, $stateParams, $rootScope, $state, $http,Course_service,pathProject){
    //新增from=1 查看from=2 编辑from=3
        $scope.title = {};
        $scope.data = $stateParams;
        $scope.ajax=pathProject.getFile_url();
        console.log($scope.data)
        $scope.show = true;
        $scope.disabled = false;
        $scope.isShow = false;
        $scope.title.edit = '确定';
        //新增

        if($scope.data.from === '1'){
            $scope.title.name = '新增机构';
            $scope.uniteManage=function () {
                $scope.demoLists=[];
                $scope.params = {
                    logo:$scope.logo,
                    name:$scope.name
                }
                Course_service.get_CompanyAdd({
                    params:$scope.params
                })
            }
            //查看
        }else if($scope.data.from === '2'){

            $scope.title.name = '查看机构';
            $scope.title.edit = '编辑';
            $scope.isShow = true;
            $scope.disabled = true;
            $scope.show = false;
             Course_service.get_CompanyId({
                    params:$scope.id
                })
                    .then(function(res) {
                        if(res.data.code == 0){
                            $scope.code=res.data.code;
                            console.log($scope.code)
                            $scope.logo=res.data.data.logo;
                            $scope.name=res.data.data.name;
                            console.log($scope.logo)
                            console.log($scope.name)
                        }
                        console.log(res)
                    }, function(res) {
                        alert('请求失败')
                    })
        }else if($scope.data.from === '3'){
            $scope.title.name = '编辑机构';
        }
        if(  $scope.data.from==2) {
            $scope.some=function () {
                $state.go("backStage.contentManage.uniteManage",{from:3}, {reload: true});
            }
        }else{
            $scope.some=function () {
            }
        }
    });