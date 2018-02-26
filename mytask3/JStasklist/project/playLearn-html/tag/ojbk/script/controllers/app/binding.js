angular.module('app')
    .controller('bindingCtrl', function ($scope, $state, $stateParams, $location,Course_service) {
        console.log("关联已有账号");
        $scope.data = {
            phone: $scope.phone,
            password: $scope.password
        };
        //手机登录
        $scope.bind=function () {
            if(!$scope.data.phone==''&&!$scope.data.password==''){
                Course_service.get_phone($scope.data)
                    .then(function(res) {
                        if(res.data.code == 0){
                            console.log(res)
                            console.log(res.data.code);
                            //发送openid
                            $scope.openid=sessionStorage.getItem("openid");
                            console.log($scope.openid)
                                Course_service.get_Bind({
                                    openId:$scope.openid
                                })
                                    .then(function (res) {
                                        if (res.data.code == 102) {
                                            $scope.message='绑定成功';
                                            $scope.modal(function () {
                                                $state.go("app.page");
                                            });
                                        }
                                    }, function (res) {
                                        alert('请求失败')
                                    })
                        }else{
                            $scope.modal();
                            $scope.message=res.data.message;
                        }
                    }, function(res) {
                        alert('请求失败')
                    })
            }else{
                return
            }
        };

    });
