(angular.module('app'))
app.directive('weChat', function (Course_service, $location) {
    return {
        restrict: 'A',
        link: function ($scope) {
            var oHeight = $(document).height(); //浏览器当前的高度
            $(window).resize(function () {
                if ($(document).height() < oHeight) {
                    $("#footer").css("opacity", "0");
                } else {
                    $("#footer").css("opacity", "1");
                }
            });
            // $scope.data = {
            //     url: location.href.split('#')[0]
            // };
            // Course_service.get_Wxconfig($scope.data).then(function (res) {
            //     res.data.code === 0 && function () {
            //         var data = res.data.data;
            //         wx.config({
            //             debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            //             appId: 'wx0b31bcd6cbe880a4', // 必填，公众号的唯一标识
            //             timestamp: res.data.data.timestamp, // 必填，生成签名的时间戳
            //             nonceStr: res.data.data.nonceStr, // 必填，生成签名的随机串
            //             signature: res.data.data.signature,// 必填，签名，见附录1
            //             jsApiList: ['uploadImage', 'chooseImage'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
            //         });
            //         $scope.chooseIcon = function () {
            //             //上传到服务器
            //             wx.chooseImage({
            //                 count: 3, // 默认9
            //                 sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
            //                 sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
            //                 success: function (res) {
            //                     wx.uploadImage({
            //                         localId: res.localIds.toString(), // 需要上传的图片的本地ID，由chooseImage接口获得
            //                         isShowProgressTips: 2, // 默认为1，显示进度提示
            //                         success: function (res) {
            //                             //上传到服务器
            //                             alert(res.serverId);
            //                             $scope.rr = 'qq';
            //                             Course_service.getFile({mediaId: res.serverId}).then(function (res, x) {
            //                                     $scope.rr = 'ee';
            //                                     console.log(res);
            //                                     alert(x);
            //                                     alert(res);
            //                                     alert(res.data.url);
            //                                     alert(res.data.message);
            //                                     // alert(res.data.data['url']);
            //                                     $scope.rr = res.data.url;
            //                                     $scope.img = res.data.data['url'];
            //                                     $scope.test = res;
            //                                     res.data.code === 0 && ($scope.userDetailParams['img'] = res.data.data['url']);
            //                                     sessionStorage.setItem('url',$scope.img);
            //                                 },
            //                                 function (e) {
            //                                     $scope.rr = 'tt';
            //                                     console.log(e);
            //                                     alert(e);
            //                                 })
            //                         }
            //                     });
            //                 }
            //             });
            //         }
            //     }();
            // });
        }
    };
});
