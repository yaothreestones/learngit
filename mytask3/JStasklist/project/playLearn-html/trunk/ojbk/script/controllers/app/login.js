angular.module('app')
    .controller('loginCtrl', function ($scope, $state, $rootScope, $stateParams, $timeout) {
        //登录
        $scope.entry = function () {
            // if(code != 0){
            //     // $scope.modal();
            // }else{
            //   $state.go("app.profile");
            // }
            $scope.modal();
            $state.go("app.profile")
        };
        //微信
        $scope.login = function () {
            $scope.WxURL = 'https://open.weixin.qq.com/connect/oauth2/authorize?' +
                'appid=wx0b31bcd6cbe880a4' +
                '&redirect_uri=http://home.funlearn.pangu.ptteng.com' +
                '?type=wx' +
                '&response_type=code' +
                '&scope=snsapi_userinfo' +
                '&state=STATE' +
                '#wechat_redirect';
            window.location.href = $scope.WxURL;
        }
    });
