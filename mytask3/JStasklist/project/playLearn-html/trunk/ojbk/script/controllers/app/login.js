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
                            console.log(res)
                            console.log(res.data.code)
                            $scope.message='登录成功';
                            //判断跳转
                            Course_service.userinfo()
                                .then(function(res) {
                                    console.log(res)
                                }, function(res) {
                                    alert('请求失败')
                                })
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
            $state.go('app.wechat');
            (function () {
                var wei = 'https://open.weixin.qq.com/connect/oauth2/authorize?' +
                    'appid=wx0b31bcd6cbe880a4' +
                    '&redirect_uri=http://academy.home.bigfish.ptteng.com/home' +
                    '&response_type=code' +
                    '&scope=snsapi_userinfo' +
                    '&state=STATE' +
                    '#wechat_redirect';
                window.location.href = wei;
            })();

            $scope.getQueryString = function(name){
                var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
                var r = window.location.search.substr(1).match(reg);
                if (r != null){
                    return unescape(r[2]);
                } else {
                    return null;
                }
            };
            var code = $scope.getQueryString('code');
            console.log(code);
            $scope.save = function () {
                $http({
                    method: "GET",
                    url: '/a/wx/code',
                    params: {
                        code:code
                    }
                }).then(function (response) {
                    if (response.data.code === 0) {
                        alert("welcome !")
                    } else {
                        alert(response.data.message);
                    }
                });
            };
            $scope.save();
        }


    });
