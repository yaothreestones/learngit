angular.module("app")
    .factory("install", function () {
        return function () {
            return [
                {
                    title: "修改密码",
                    url: "image/mine/changePassword.png",
                    state:"app.changePassword",
                    site:"image/mine/right.png"
                },
                {
                    title: "关于我们",
                    url: "image/mine/about.png",
                    state:"app.aboutStage",
                    site:"image/mine/right.png"
                },
                {
                    title: "使用帮助",
                    url: "image/mine/anenst.png",
                    state:"app.usinghelp",
                    site:"image/mine/right.png"
                },
                {
                    title: "意见反馈",
                    url: "image/mine/feedback.png",
                    state:"app.feedbackStage",
                    site:"image/mine/right.png"
                },
                {
                    title: "版本更新",
                    url: "image/mine/version.png",
                    state:"app.install",
                    site:"image/mine/right.png"
                },
                {
                    title: "账号绑定",
                    url: "image/app/weixinpay.png",
                    state:"app.weixin",
                    site:"image/mine/right.png"
                }
            ]


        }

    })