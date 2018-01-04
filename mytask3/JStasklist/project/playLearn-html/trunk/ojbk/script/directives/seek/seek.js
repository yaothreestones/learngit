var slider = mui("#slider");
var swiperTest = null;
var banerArray = new Array();
mui.init({
    swipeBack: false //启用右滑关闭功能
});
var slider = mui("#slider");
slider.slider({
    interval: 3000
});
/**/
mui.plusReady(function () {
    swiperTest = document.getElementById('swiperTest');
    getaData();
})

// 获取数据
function getaData() {
    var timestamp = getDataStr();
    mui.plusReady(function () {
        mui.ajax(baseUrl, {
            data: {
                key: '',
                typeId: '',
                showapi_appid: appid,
                showapi_sign: sign,
                showapi_timestamp: timestamp,
                page: 1
            },
            dataType: 'json',
            type: 'post',
            timeout: 10000,
            beforeSend: function (data) {
                plus.nativeUI.showWaiting();
            },
            success: function (data) {
                plus.nativeUI.closeWaiting();
                if (data.showapi_res_code == 0) {
                    console.log("成功");
                    var dice1 = data.showapi_res_body;
                    var dice2 = dice1.pagebean;
                    var swpier = '';
                    for (var i = 0; i < 5; i++) {
                        var item = dice2.contentlist[i];
                        var temp = '<div class="swiper-slide"><img src=" ' + item.contentImg + '" id="test' + i + '"/></div>';
                        swpier = swpier + temp;
                        banerArray.push(item);
                    }
                    swiperTest.innerHTML = swpier;
                    var mySwiper = new Swiper('.swiper-container', {
                        autoplay: 1000, /*自动播放时间间隔 单位ms*/
                        pagination: '.swiper-pagination', /*添加分页*/
                        loop: true, /*开启循环*/
                    })
                    /*轮播图页面跳转*/
                    mui.each(banerArray, function (index, item) {
                        var imgID = 'test' + index;
                        document.getElementById(imgID).addEventListener('tap', function () {
                            mui.openWindow({
                                url: 'detail.html',
                                id: 'detail',
                                show: {
                                    aniShow: 'slide-in-right' /*页面切换效果*/
                                },
                                extras: {
                                    detailUrl: item.url,
                                    detailTitle: item.title
                                },
                            });
                        })
                    })
                }
            },
            error: function (xhr, type, errerThrown) {
                mui.toast('网络异常,请稍候再试');
                plus.nativeUI.closeWaiting();
            }
        });
    });
}