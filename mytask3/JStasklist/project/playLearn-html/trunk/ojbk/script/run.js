/**
 * Created by gmisl on 17-12-14.
 */
//app 头尾导航
angular.module("app")
    .run(['$rootScope', '$state',  function ($rootScope, $state) {
$rootScope.config = {
    headNav: {
        isShow: true,
        title: '回家学习',//字体大小总是一样
        backBtn: {
            //返回按钮 使用原生操作
            isShow: false,
        },
    },
    footNav: {
        isShow: true,
    },
}
}])