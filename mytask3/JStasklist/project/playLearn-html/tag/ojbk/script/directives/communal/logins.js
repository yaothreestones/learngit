(angular.module('app'))
app.directive('weChat', function (Course_service, $location,$state) {
    return {
        restrict: 'AE',
        link: function ($scope) {
            var oHeight = $(document).height(); //浏览器当前的高度
            $(window).resize(function () {
                if ($(document).height() < oHeight) {
                    $("#footer").css("opacity", "0");
                } else {
                    $("#footer").css("opacity", "1");
                }
            });
            $scope.params = {
                url: location.href.split('#')[0]
            };
            Course_service.get_Wxconfig($scope.params).then(function (res) {
                res.data.code === 0 && function () {
                    wx.config({
                        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                        appId: 'wx0b31bcd6cbe880a4', // 必填，公众号的唯一标识
                        timestamp: res.data.data.timestamp, // 必填，生成签名的时间戳
                        nonceStr: res.data.data.nonceStr, // 必填，生成签名的随机串
                        signature: res.data.data.signature,// 必填，签名，见附录1
                        jsApiList: ['uploadImage', 'chooseImage'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
                    });
                    // //微信分享
                    // $scope.share = function () {
                    //    alert('请点击右上方的分享按钮进行分享。')
                    //     wx.onMenuShareTimeline({
                    //         title: '回家学习', // 分享标题
                    //         link: 'http://playlearn.home.ojbk.ptteng.com', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                    //         imgUrl: 'image/app/logo.png', // 分享图标
                    //     });
                    //
                    //
                    // }
                }();
            });
        }
    };
});
