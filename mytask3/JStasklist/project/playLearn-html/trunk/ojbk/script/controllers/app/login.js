angular.module('app')
    .controller('loginCtrl',function ($scope,$state,$http,$rootScope,$stateParams,$timeout,Course_service,$location) {

        //登录
        $scope.data = {
            phone: $scope.phone,
            password: $scope.password
        }
        $scope.entry=function () {
            if(!$scope.data.phone==''&&!$scope.data.password==''){
                Course_service.get_phone($scope.data)
                    .then(function(res) {
                        if(res.data.code == 0){
                            console.log(res)
                            console.log(res.data.code)
                            $scope.message='登录成功';
                            //判断跳转
                            Course_service.userinfo()
                                .then(function(res) {
                                    if(res.data.code==0){
                                        console.log(res)
                                        $scope.info=res.data.data;
                                        console.log($scope.info)
                                    }
                                    if($scope.info.name==''){
                                        $scope.modal(function () {
                                            $state.go("app.profile");
                                        });
                                    }else{
                                        $scope.modal(function () {
                                            $state.go("app.page",{grade:$scope.info.grade});
                                        });
                                    }
                                }, function(res) {
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
        //微信
        $scope.login=function () {
            (function () {
                var wei = 'https://open.weixin.qq.com/connect/oauth2/authorize?' +
                    'appid=wx0b31bcd6cbe880a4' +
                    '&redirect_uri=http://playlearn.home.ojbk.ptteng.com' +
                    '&response_type=code' +
                    '&scope=snsapi_userinfo' +
                    '&state=STATE' +
                    '#wechat_redirect';
                window.location.href = wei;
            })();

        };



    });
