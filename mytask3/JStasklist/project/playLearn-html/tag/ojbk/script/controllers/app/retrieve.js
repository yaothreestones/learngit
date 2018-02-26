angular.module('app','')
    .controller('retrieveCtrl',function ($scope,$state,$rootScope,$stateParams,$timeout,Course_service,$http) {
        //找回密码
        $scope.data = {
            phone: $scope.phone,
            code:$scope.code,
            password: $scope.password
        }
        console.log($scope.data);
        $scope.retrieve=function () {
            console.log($scope.data);
            if($scope.data.password!==$scope.forpwd){
                $scope.message = '两次密码输入不一致';
                $scope.modal();
            }
            if(!$scope.data.phone==''&&!$scope.data.code==''&&!$scope.data.password==''
                &&!$scope.forpwd==''&&$scope.forpwd==$scope.data.password) {
                Course_service.get_Forget($scope.data)
                        .then(function (res) {
                            $scope.code = res.data.code;
                            console.log(res)
                            if (res.data.code == 0) {
                                $scope.message = '修改成功';
                                $scope.modal(function () {
                                    $state.go("app.login");
                                });

                            }else if(res.data.code == -5028){
                                $scope.message ='验证码输入不正确，请重新获取';
                                $scope.modal();
                            } else if(res.data.code ==-5022){
                                $scope.message ="验证超过3次，请明日再试";
                                $scope.modal();
                            }
                            else {
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
            console.log($scope.params)
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
                    type:2
                };
            console.log($scope.params)
            if(!$scope.params.phone==""){
                Course_service.get_Call($scope.params)
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

