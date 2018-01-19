angular.module('app')
    .controller('loginCtrl',function ($scope,$state,$http,$rootScope,$stateParams,$timeout,Course_service) {
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
                            $scope.message='登录成功';
                            $scope.modal(function () {
                                $state.go("app.profile");
                            });
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
            $state.go("app.wechat");
            //
            // $scope.WxURL='https://open.weixin.qq.com/connect/oauth2/authorize?' +
            //     'appid=wx0b31bcd6cbe880a4' +
            //     '&redirect_uri=http://student.replay.wx.ptteng.com' +
            //     '?type=wx' +
            //     '&response_type=code' +
            //     '&scope=snsapi_userinfo' +
            //     '&state=STATE' +
            //     '#wechat_redirect';
            // window.location.href = $scope.WxURL;
            // var data = {
            //     openId: $scope.openId,
            // }
            // Course_service.get_Open({
            //     data:data
            // })
            //     .then(function(res) {
            //         if(res.data.code == 0){
            //             $scope.modal();
            //
            //         }else{
            //             $scope.modal();
            //
            //         }
            //
            //         $scope.code=res.data.code;
            //         console.log($scope.code)
            //         $scope.message=res.data.message;
            //         console.log(res)
            //     }, function(res) {
            //         alert('请求失败')
            //     })
        }



    });
