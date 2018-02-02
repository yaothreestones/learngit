angular.module('app')
    .controller('profileCtrl',function ($scope,$state,$rootScope,$stateParams,$timeout,Course_service,pathProject) {
        //上传图片
        $scope.data = {
            name: $scope.name,
            grade: $scope.grade,
            email:$scope.email,
            file:'http://xiuzhenyuan.oss-cn-beijing.aliyuncs.com/playlearn/course/u_asds-t_1516520500691-r_253328f_1_mr__jin.jpg/playlearn'
        }
        $scope.ajax=pathProject.getImgUp_url();
        $scope.profile=function () {
            console.log($scope.data)
                Course_service.get_Detail($scope.data)
                    .then(function(res) {
                        if(res.data.code == 0){
                            $scope.message="填写成功";
                            $scope.modal( function () {
                                $state.go("app.page",{grade:$scope.data.grade},{reload:true});
                            });
                        }else{
                            $scope.modal();
                            $scope.message=res.data.message;
                        }
                        $scope.code=res.data.code;
                        console.log($scope.code)

                        console.log(res)
                    }, function(res) {
                        alert('请求失败')
                    })
        }

    });
