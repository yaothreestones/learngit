angular.module("app")
    .factory("mineConstant", function () {
        return function () {
            return [
                {
                    title: "我的收藏",
                    url: "image/mine/collection.png",
                    state: "app.collect"
                },
                {
                    title: "课程记录",
                    url: "image/mine/ecord.png",
                    state: "app.record"
                },
                {
                    title: "我的试卷",
                    url: "image/mine/means.png",
                    state: "app.means"
                },
                {
                    title: "消息",
                    url: "image/mine/message.png",
                    state: "app.message"
                }
                ,
                {
                    title: "设置",
                    url: "image/mine/set-up.png",
                    state: "app.install"
                }
            ]

        }

    })