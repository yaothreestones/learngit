angular.module("app")
    .factory("pathProject", function () {
        return {
            //上传头像
            getFile: function () {
                return "/a/u/file//img/up"
            },
            //贝贝
            //前台手机登录接口
            getPhone_url: function () {
                return "/a/login"
            },
            //第三方微信登录
            getOpen_url: function () {
                return "/a/weChat/login"
            },
            //-绑定已有帐号接口
            getBind_url: function () {
                return " /a/u/bind/oldUser"
            },
            //注册  //绑定新账号接口
            getEnroll_url: function () {
                return "/a/register"
            },
            //个人资料 微信基础接口授权
            getWxconfig_url: function () {
                return "/a/weixin/config"
            },
            //短信验证接口
            getSend_url: function () {
                return "/a/sms"
            },
            //语音验证接口
            getCall_url: function () {
                return "/a/voice"
            },
            //找回密码
            getForget_url: function () {
                return "/a/forget"
            },
            //填写个人资料
            getDetail_url: function () {
                return "/a/u/user/info"
            },
            //手机号是否注册接口
            getStatus_url: function () {
                return "/a/phone/status"
            },
            //首页搜索课程
            getCourse_rel: function () {
                return "/a/u/course/search"
            },
            //首页搜索课时
            getlessonPeriod_rel: function () {
                return "/a/u/lessonPeriod/search"
            },
            //首页学习星
            getStudyInformation_rel: function () {
                return "/a/u/study/ranking"
            },
            //击败用户
            getStudyinfo_rel: function () {
                return "/a/u/user/study/info"
            },
            //首页热门推荐（8个）
            getRecommend_rel: function () {
                return "/a/u/course/recommend/list"
            },
            //同步预习 教材list
            getBookList_rel: function () {
                return "/a/u/data/pay"
            },
            //首页 我的课程list
            getRecordList_rel: function () {
                return "/a/u/user/course/record"
            },
            //科目列表
            getSubjectList_rel: function () {
                return "/a/u/subject/all"
            },
            //同步预习接口
            //查看用户绑定教材详情
            getBookLink_url: function () {
                return "/a/u/book/link"
            },
            //获取教材列表
            getBookList_url: function () {
                return "/a/u/book/list"
            },
            // 查看教材详情
            getBook_url: function (id) {
                return "/a/u/book?bookId=" + id
            },
            //-同步预习-教材-课时列表接口
            getBookLessonPeriod_url: function () {
                return "/a/u/book/lessonPeriod/list"
            },
            //同步预习-换帮教材接口
            getBookBind_url: function (id) {
                return "/a/u/book/bind?bookId=" + id
            },
            //同步预习-课时列表的资料统计接口
            getLessonPeriod_url: function (id) {
                return "/a/u/book/lessonPeriod/data?bookId=" + id
            },
            //萌萌哒
            //前台资讯接口
            seeklist: function () {
                return "/a/u/information/list"
            },
            //资讯详情接口
            seekDetails: function (id) {
                return "/a/u/information/" + id
            },
            //使用帮助接口
            usingHelp: function () {
                return "/a/u/help/list"
            },
            //使用帮助详情接口
            HelpDetails: function (id) {
                return "/a/u/help/" + id
            },
            //我的/设置/修改密码接口//
            getChangePwd_url: function () {
                return "/a/u/password/modify"
            },
            //我的/设置/课程记录列表
            getRecord_url: function () {
                return "/a/u/user/course/record"
            },
            //我的/设置/课程记录删除多个
            getDeleteAll_url: function () {
                return "/a/u/user/course/record/list"
            },
            idDelet: function (id) {
                return "/a/u/user/course/record/" + id
            },
            getUserFavLessonList: function () {
                return "/a/u/user/course/keep";
            },
            getUserFavPeriodList: function () {
                return "/a/u/user/keep/lessionPeriod/list";
            },
            putSuggetByUser: function () {
                return "/a/u/user/feedback";
            },
            resetUserDetail: function () {
                return "/a/u/user/info";
            },
            //我的  签到
            getSign: function () {
                return "/a/u/sign";
            },
            //我的   用户信息
            userinfo: function () {
                return "/a/u/user/info";
            },
            //我的   消息
            userMessage: function () {
                return "/a/u/news";
            },
            //消息详情
            userMessageSee: function (id) {
                return "/a/u/news/" + id;
            },
            //我的资料列表
            myProfile: function () {
                return "/a/u/data/list"
            },
            //确认邮箱
            changeMail: function (mail) {
                return "/a/u/email/send?email=" + mail;
            },
            //修改个人资料接口
            editUserInfo: function () {
                return "/a/u/user/detail"
            },
            //收藏课程接口
            courseCollect: function () {
                return "/a/u/user/course/keep"
            },
            //收藏课时接口
            lessonCollect: function () {
                return "/a/u/user/lessionPeriod/keep"
            },

            //姚磊
            //获取科目接口
            getSubject_url: function () {
                return "/a/u/admin/subject/search"
            },
            //获取课程列表接口
            getCourse_url: function () {
                return "/a/u/course/search"
            },
            //获取单个课程详情接口
            getCourseDetail_url: function (id) {
                return '/a/u/course/detail/' + id
            },
            //获取课程详情的课时列表接口
            getPeriodList_url: function () {
                return "/a/u/course/detail/lessonPeriod/list"
            },
            //课程解锁
            getCourseUnlock_url: function (id) {
                return "/a/u/course/lock/" + id
            },
            //课程价格展示
            getCoursePrice_url: function (id) {
                return "/a/u/course/money/" + id
            },
            //获取单个课时详情
            getPeriodDetail_url: function (id) {
                return "/a/u/lessonPeriod/detail/" + id
            },
            //课时解锁
            getPeriodUnlock_url: function (id) {
                return "/a/u/lessonPeriod/lock/" + id
            },
            //课时下任务列表
            getMissionList_url: function (id) {
                return "/a/u/lessonPeriod/detail/task/list/" + id
            },
            //任务步骤详情
            getMissionDetail_url: function (id) {
                return "/a/u/task/step/list/" + id
            },
            //学习星解锁课程
            getPayCourseByStar_url: function () {
                return "/a/u/course/star"
            },
            //学习星解锁课时
            getPayPeriodByStar_url: function () {
                return "/a/u/lessonPeriod/star"
            },
            //教材价格展示
            getBookUnlock_url: function (id) {
                return "/a/u/book/money/" + id
            },
            //学习星解锁教材
            getPayBookByStar_url: function () {
                return '/a/u/book/star'
            },
            //微信预下单接口
            getWXPrepay_url: function () {
                return "/a/u/wx/preOrder"
            },
            //课程开始接口
            getCourseStartStudy_url: function (id) {
                return "/a/u/course/start/" + id
            },
            //课程学习完成接口
            getCourseEndStudy_url: function (id) {
                return "/a/u/course/end/" + id
            },
            //课时开始接口
            getPeriodStartStudy_url: function (id) {
                return "/a/u/lessonPeriod/start/" + id
            },
            //课时完成接口
            getPeriodEndStudy_url: function (id) {
                return "/a/u/lessonPeriod/end/" + id
            },
            //课程完成相关课程接口
            getCourseAbout_url: function (id) {
                return "/a/u/course/about/" + id
            },
            //下一课时接口
            getNextPeriod_url: function (id) {
                return "/a/u/course/lessonPeriod/next/" + id
            },
            //任务开始接口
            getTaskStartStudy_url: function (id) {
                return "/a/u/task/start/" + id
            },
            //任务完成接口
            getTaskEndStudy_url: function (id) {
                return "/a/u/task/end/" + id
            },
            //购买资料接口
            getDataBuy_url: function () {
                return "/a/u/data/money"
            },
            //收藏课程接口(非列表)
            getCourseCollect_url: function () {
                return "/a/u/keep"
            },
        }
    })
