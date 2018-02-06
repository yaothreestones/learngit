angular.module('app')
    .directive('share', function () {
        return {
            restrict: 'AE',
            templateUrl: "script/directives/share/share.html",
            controller: function ($scope, $interval) {
                $scope.share=function () {
                    wx.onMenuShareTimeline({
                        title: '回家学习', // 分享标题
                        link: 'http://playlearn.home.ojbk.ptteng.com', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                        imgUrl: 'image/app/logo.png', // 分享图标
                        success: function () {
                            alert(1)
                        },
                        cancel: function () {
                            // 用户取消分享后执行的回调函数
                        }
                    });
                }
            }
        }
    });
