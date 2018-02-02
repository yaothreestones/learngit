angular.module('app')
    .controller('beginCtrl',function ($scope,$state,$stateParams,$location) {
        var absurl = $location.absUrl();
        console.log(absurl);
        $scope.getQueryString = function(name){
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
            var r = window.location.search.substr(1).match(reg);
            if (r != null){
                return unescape(r[2]);
            } else {
                return null;
            }
        };
        $scope.getQueryString();
        var code = $scope.getQueryString('code');
        console.log(code);
        sessionStorage.setItem('code',code);
        //取值方法
        // sessionStorage.getItem("code");
        if(code){
            $state.go('app.wechat');
        }
    });
