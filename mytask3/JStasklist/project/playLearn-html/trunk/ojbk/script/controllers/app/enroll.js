angular.module('app','')
    .controller('enrollCtrl',function ($scope,$state,$rootScope,$stateParams,$timeout,Course_service,$http) {
        //注册
        $scope.data = {
            phone: $scope.phone,
            code:$scope.code,
            password: $scope.password
        };
        $scope.enroll=function () {
            if(!$scope.data.phone==''&&!$scope.data.code==''&&!$scope.data.password==''){
                Course_service.get_Enroll($scope.data)
                    .then(function(res) {
                        $scope.code=res.data.code;
                        console.log($scope.code)
                        $scope.message=res.data.message;
                        console.log(res);
                        if(res.data.code == 100) {
                            $scope.modal(function () {
                                $state.go("app.login");
                            });

                        }else{
                            $scope.modal();
                        }
                    }, function(res) {
                        alert('请求失败')
                    })
            }
        }
        ////手机是否注册过
        $scope.register=function () {
            Course_service.get_Status($scope.phones)
                .then(function(res) {
                    if(res.data.code==-5019){
                        $scope.modal();
                        $scope.message=res.data.message;
                    }else if(res.data.code==0){
                        $scope.success();
                    }else{
                        $scope.modal();
                        $scope.message="请输入手机号"
                    }
                }, function(res) {
                    alert('请求失败')
                })
        }
        //短信验证
        $scope.send=function () {
            $scope.phones={
                phone: $scope.data.phone,
            },
                $scope.register();

            console.log($scope.phones);
            //短信
            $scope.success=function () {
                $scope.params = {
                    phone: $scope.data.phone,
                    type:1,
                };
                console.log($scope.params)
                Course_service.get_Send($scope.params)
                    .then(function(res) {
                        if(res.data.code==0){
                            $scope.getTestCode();
                        }else{
                            $scope.modal();
                            $scope.message="手机号错误"
                        }
                        $scope.code=res.data.code;
                        console.log($scope.code)
                        console.log(res)
                    }, function(res) {
                        alert('请求失败')
                    })
            }

        };
        //语音验证
        $scope.call=function () {
            $scope.phones={
                phone: $scope.data.phone,
            },
            $scope.register();
            $scope.success=function () {
                $scope.params = {
                    phone: $scope.data.phone,
                    type:2,
                };
                console.log($scope.data.phone)
                Course_service.get_Call($scope.params)
                    .then(function(res) {
                        if(res.data.code==0){
                            $scope.getTestStart();
                        }else{
                            $scope.modal();
                            $scope.message="手机号错误"
                        }
                        $scope.code=res.data.code;
                        console.log($scope.code)
                        $scope.message=res.data.message;
                        console.log(res)
                    }, function(res) {
                        alert('请求失败')
                    })
            }

        };





    });

