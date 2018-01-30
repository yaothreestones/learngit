angular.module("app")
    .factory("pathProject", function () {
        return {
            //上传头像
            getImgUp_url: function () {
                return "/a/u/file//img/up"
            },
            //贝贝
            //前台手机登录接口
            getPhone_url: function () {
                return "/a/login"
            },
            //第三方登录
            getOpen_url: function () {
                return "/playlearn/GET/a/open/login/"
            },
            //注册
            getEnroll_url: function () {
                return "/a/register"
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
            //搜页科目下拉
            getSubjectList_rel:function () {
                return "/a/u/admin/subject/all"
            },
            //首页搜索课程
            getCourse_rel: function () {
                return "/a/u/search/course"
            },
            //首页搜索课时
            getlessonPeriod_rel: function () {
                return "/a/u/search/lessonPeriod"
            },
            //首页学习星 和击败用户
            getStudyInformation_rel: function () {
                return "/a/u/study/ranking"
            },
            //首页热门推荐（8个）
            getRecommend_rel: function () {
                return "/a/course/recommend/list"
            },
            //同步预习 教材list
            getBookList_rel: function () {
                return "/a/u/data/pay"
            },
            //首页 我的课程list
            getRecordList_rel:function () {
                return "/a/u/user/course/record"
            },
            //科目列表
            getSubjectList_rel:function () {
                return "/a/u/admin/subject/all"
            },
            //同步预习接口
            //查看用户绑定教材详情
            getBookLink_url:function () {
                return "/a/u/book/link"
            },
            //获取教材列表
            getBookList_url:function () {
                return "/a/u/book/list"
            },
            // 查看教材详情
            getBook_url:function (id) {
                return "/a/u/book?bookId="+id
            },
            //-同步预习-教材-课时列表接口
            getBookLessonPeriod_url:function () {
                return "/a/u/book/lessonPeriod/list"
            },
            //同步预习-换帮教材接口put    //同步预习-添加用户绑定教材接口post        一个接口 方法不同
            getBookBind_url:function () {
                return "/a/u/book/bind"
            },
            //萌萌哒
            //前台资讯接口
            getSeek_url: function () {
                return "/playlearn/GET/a/information/all"
            },
            //资讯详情接口
            getSeekDetails_url: function () {
                return "/playlearn/GET/a/information/#{id}"
            },
            //使用帮助接口
            getUsingHelp_url: function () {
                return "/playlearn/GET/a/u/help/all"
            },
            //使用帮助详情接口
            getHelpDetails_url: function () {
                return "/playlearn/GET/a/u/help/id"
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
            //我的/消息列表接口
            getMessage_url: function () {
                return "/a/u/sign"
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
            userinfo:function () {
                return "/a/u/user/info";
            },

            //姚磊
            //获取科目接口
            getSubject_url: function () {
                return "/a/u/admin/subject/search"
            },
            //获取课程列表接口
            getCourse_url: function () {
                return "/a/u/admin/course/search/list"
            },
            //获取单个课程详情接口
            getCourseDetail_url: function (id) {
                return '/a/u/admin/course/recommend/' + id
            },
            //获取课程详情的课时列表接口
            getPeriodList_url: function () {
                return "/playlearn/get//a/u/lessonPeriod/list"
            },
            //获取任务详情接口
            getTaskList_url: function () {
                return "/playlearn/get/a/u/task/1/step/list"
            }
        }
    })
