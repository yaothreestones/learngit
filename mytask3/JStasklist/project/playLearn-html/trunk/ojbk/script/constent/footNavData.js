(function (app) {
    app.constant('footNavData', [{
        activeIcon: 'image/app/isHomePage.png',
        icon: 'image/app/home-page.png',
        url: 'app.page',
        active: {
            icon: 'image/app/home-page.png',
            title: '首页',
        }
    }, {
        activeIcon: 'image/app/isCourse.png',
        icon: 'image/app/course.png',
        url: 'app.course',
        active: {
            icon: 'image/app/course.png',
            title: '课程',
        }
    }, {
        activeIcon: 'image/app/isInformation.png',
        icon: 'image/app/information.png',
        url: 'app.seek',
        active: {
            icon: 'image/app/information.png',
            title: '资讯',
        }
    }, {
        activeIcon: 'image/app/isMine.png',
        icon: 'image/app/mine.png',
        url: 'app.mine',
        active: {
            icon: 'image/app/mine.png',
            title: '我的',
        }
    }])
})(angular.module("app"));