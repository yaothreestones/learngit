angular.module('myApp',[])
    // .config(function($httpProvider){
    //     $httpProvider.defaults.transformRequest = function(obj){
    //         var str = [];
    //         for(var p in obj){
    //             str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    //         }
    //         return str.join("&");
    //     };
    //     $httpProvider.defaults.headers.post = {
    //         'Content-Type': 'application/x-www-form-urlencoded'
    //     }
    // })
    .controller('myCtrl',function ($scope,$http) {
        $scope.prepay = function () {
            $http({

                method:'post',
                url:'https://api.mch.weixin.qq.com/pay/unifiedorder',
                dataType: 'jsonp'

        }).then(function (res) {
                console.log(res)
            })
    }})

function onBridgeReady(){
    WeixinJSBridge.invoke(
        'getBrandWCPayRequest', {
            "appId":"wx0b31bcd6cbe880a4",     //公众号名称，由商户传入
            "timeStamp":"1395712654",         //时间戳，自1970年以来的秒数
            "nonceStr":"e61463f8efa94090b1f366cccfbbb444", //随机串
            "package":"prepay_id=u802345jgfjsdfgsdg888",
            "signType":"MD5",         //微信签名方式：
            "paySign":"70EA570631E4BB79628FBCA90534C63FF7FADD89" ,//微信签名
            'total_fee':1
        },
        function (res) {
            console.log(res.err_code + "  " + res.err_desc + "  " + res.err_msg);
            if (res.err_msg == "get_brand_wcpay_request:ok") {
                alertFn("充值成功");
            } else if (res.err_msg == "get_brand_wcpay_request:cancel") {
                alertFn("用户取消支付");

            } else if (res.err_msg == "get_brand_wcpay_request:fail") {
                alertFn("支付失败");
            }
        }
    );

}
if (typeof WeixinJSBridge == "undefined"){
    if( document.addEventListener ){
        document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
    }else if (document.attachEvent){
        document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
        document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
    }
}else{
    onBridgeReady();
}