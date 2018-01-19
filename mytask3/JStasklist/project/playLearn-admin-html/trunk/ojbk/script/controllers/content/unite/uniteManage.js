angular.module('app').controller('uniteManageCtrl',
    function($scope, $stateParams, $rootScope, $state, $http,Course_service,pathProject){
    //新增from=1 查看from=2 编辑from=3
        $scope.title = {};
        $scope.data = $stateParams;
        $scope.ajax=pathProject.getFile_url();
        $scope.disabled = false;
        $scope.title.edit = '确定';
        $scope.check=false;
        $scope.file=true;
        //返回
        $scope.remove=function () {
            $state.go("backStage.contentManage.unite",{page:1,size:5}, {reload: true});
        }
        //新增==1
        if($scope.data.from === '1'){
            $scope.title.name = '新增机构';
            $scope.some=function () {
                $scope.params = {
                    logo:$scope.logo,
                    name:$scope.name
                }
                console.log($scope.params)
                Course_service.get_CompanyAdd($scope.params)
                    .then(function(res) {
                        if(res.data.code == 0){
                        }
                        console.log(res)
                    }, function(res) {
                        alert('请求失败')
                    })
            }
        }
        //查看==2
        if($scope.data.from === '2'){
            //显示图片
            $scope.id=$stateParams.id;
            $scope.check=true;
            //隐藏上传
            $scope.file=false;
            //跳转编辑
            $scope.some=function () {
                $state.go("backStage.contentManage.uniteManage",{from:3}, {reload: true});
            }
            //改变title
            $scope.title.name = '查看机构';
            //改变按钮
            $scope.title.edit = '编辑';
            //禁止按钮
            $scope.disabled = true;
            //查看
            $scope.look=function () {
                Course_service.get_CompanyId($scope.id)
                    .then(function(res) {
                        if(res.data.code == 0){
                            $scope.logo=res.data.data.logo;
                            $scope.name=res.data.data.name;
                            console.log($scope.logo)

                        }
                        console.log(res)
                    }, function(res) {
                        alert('请求失败')
                    })
            };
            $scope.look();
        }
        //编辑机构==3
        if($scope.data.from === '3'){
            $scope.title.name = '编辑机构';

            //编辑
            //后台/热门推荐管理/编辑/课程名称下拉框
        }
    });