angular.module('app','')
    .controller('retrieveCtrl',function ($scope,$state,$rootScope,$stateParams,$timeout,Course_service,$http) {
        //找回密码
        $scope.data = {
            phone: $scope.phone,
            code:$scope.code,
            password: $scope.password
        }
        $scope.retrieve=function () {
            console.log($scope.data)
            if(!$scope.data.phone==''&&!$scope.data.code==''&&!$scope.data.password==''
                &&!$scope.forpwd==''&&$scope.forpwd==$scope.data.password) {
                Course_service.get_Forget($scope.data)
                        .then(function (res) {
                            $scope.code = res.data.code;
                            $scope.message = res.data.message;
                            console.log(res)
                            if (res.data.code == 0) {
                                $scope.modal(function () {
                                    $state.go("app.login");
                                });

                            } else {
                                $scope.modal();
                            }

                        }, function (res) {
                            alert('请求失败')
                })
            }
        }
        //短信验证
        $scope.send=function () {
            $scope.params = {
                phone: $scope.data.phone,
                type:2,
            };
            if(!$scope.params.phone==""){
                Course_service.get_Send($scope.params)
                    .then(function(res) {
                        if(res.data.code==0){
                            $scope.getTestCode();
                        }
                        $scope.code=res.data.code;
                        console.log($scope.code)
                        console.log(res)
                    }, function(res) {
                        alert('请求失败')
                    })
            }else{
                $scope.modal();
                $scope.message="请输入手机号";
            }

        };
        //语音验证
        $scope.call=function () {
            $scope.params = {
                phone: $scope.data.phone,
                type:2,
            };
            if(!$scope.params.phone==""){
                Course_service.get_Call({
                })
                    .then(function(res) {
                        if(res.data.code==0){
                            $scope.getTestStart();
                        }
                        $scope.code=res.data.code;
                        console.log($scope.code)
                        $scope.message=res.data.message;
                        console.log(res)
                    }, function(res) {
                        alert('请求失败')
                    })
            }else{
                $scope.modal();
                $scope.message="请输入手机号";
            }

        };

    });

