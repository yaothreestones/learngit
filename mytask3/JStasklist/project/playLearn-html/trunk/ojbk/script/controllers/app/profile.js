angular.module('app')
    .controller('profileCtrl',function ($scope,$state,$rootScope,$stateParams,$timeout,Course_service,pathProject) {

        //上传图片
        $scope.data = {
            name: $scope.name,
            grade: $scope.grade,
            email:$scope.email,
            file:$scope.file
        }
        $scope.ajax=pathProject.getImgUp_url();
        $scope.profile=function () {
            console.log($scope.data.file);
            console.log($scope.data)
                Course_service.get_Detail($scope.data)
                    .then(function(res) {
                        if(res.data.code == 0){
                            $scope.modal( function () {
                                $state.go("app.page");
                            });
                        }else{
                            $scope.modal();
                        }
                        $scope.code=res.data.code;
                        console.log($scope.code)
                        $scope.message=res.data.message;
                        console.log(res)
                    }, function(res) {
                        alert('请求失败')
                    })
        }

    });
