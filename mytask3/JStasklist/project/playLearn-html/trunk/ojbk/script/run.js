/**
 * Created by gmisl on 17-12-14.
 */
//app 头尾导航
angular.module("app")
    .run(['$rootScope', '$state',  function ($rootScope, $state) {
$rootScope.config = {
    //顶部
    headNav: {
        isShow: true,
        //标题
        title: '回家学习',//字体大小总是一样
        //返回
        backBtn: {
            //返回按钮 使用原生操作
            isShow: false,
        },
        //跳转
        Skip:{
            isShow: false,
        },
        //搜索
        search:{
            isShow: false,
        }
    },
    //底部
    footNav: {
        isShow: true,
    },
}
}])