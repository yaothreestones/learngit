angular.module('app')
    .controller('beginCtrl',function ($scope,$state,$stateParams,$location,Course_service) {
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
        $scope.codes = $scope.getQueryString('code');
        console.log($scope.codes)
        $scope.data = {
            code:$scope.codes
        };
        if($scope.codes){
            Course_service.get_Open($scope.data)
                .then(function (res) {
                    console.log(res);
                    console.log(res)
                    if(res.data.code==0){
                        $scope.name='您的微信已关联回家学习';
                        $scope.userId=res.data.data.userId;
                        console.log($scope.userId);
                        $state.go("app.page");
                    }else if(res.data.code==-5042){
                        $scope.name='您的微信暂时未关联回家学习';
                        $scope.data=res.data.data;
                        $scope.nickname=res.data.data.nickname;
                        $scope.headimgurl=$scope.headimgurl=res.data.data.headimgurl;
                        $scope.openid=res.data.data.openid;
                        sessionStorage.setItem("openid", $scope.openid);
                        $state.go('app.wechat',({nickname:$scope.nickname,info:$scope.name,headimgurl:$scope.headimgurl}));
                    }
                }, function (res) {
                    // alert('请求失败')
                });
        }
    });
