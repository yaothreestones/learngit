angular.module('app').controller('groomManageCtrl',
    function ($scope, $stateParams, $rootScope, $state, $http,Course_service,pathProject){
        $scope.title = {};
        $scope.data = $stateParams;
        $scope.id=$scope.data.id;
        $scope.grade=Number($stateParams.id);
        console.log($scope.grade)
        $scope.show = true;
        $scope.disabled = false;
        $scope.isShow = false;
        $scope.file=false;
        $scope.ajax=pathProject.getFile_url();
        //返回
        $scope.remove=function () {
            $state.go("backStage.contentManage.groom",{id:$scope.id} ,{reload: true});
        }
        //查看
        if($scope.data.from === '1'){
            $scope.title.name = '查看课程';
            $scope.disabled = true;
            $scope.show = false;
            $scope.isShow = true;
            $scope.checks=function () {
                Course_service.get_RecommendLook($scope.id)
                    .then(function(res) {
                        if(res.data.code == 0){
                            $scope.code=res.data.code;
                            $scope.name=res.data.data.name;
                            $scope.logo=res.data.data.logo;
                        }
                        console.log(res)
                    }, function(res) {
                        alert('请求失败')
                    })
            };
            $scope.checks();
        }
        //编辑
        if($scope.data.from === '2'){
            $scope.title.name = '编辑课程';
            $scope.file=true;
            $scope.data={
                id:1,
            }
            $http({
                method: 'GET',
                url: '/a/u/admin/course/option',
                headers:{'Content-Type': 'application/x-www-form-urlencoded'},
                params :$scope.data
            }).then(function (res) {
                if (res.data.code == 0) {
                    console.log(res);
                }
            }, function (res) {
                alert('请求失败')
            })
        }


    });