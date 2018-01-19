angular.module("app")
    .factory("pathProject",function () {
        return {
            //上传头像
            getImgUp_url:function () {
                return "/a/u/file//img/up"
            },
            //贝贝
            //前台手机登录接口
            getPhone_url:function () {
                return "/a/login"
            },
            //第三方登录
            getOpen_url:function () {
                return "/playlearn/GET/a/open/login/"
            },
            //注册
            getEnroll_url:function () {
                return "/a/register"
            },
            //短信验证接口
            getSend_url:function () {
                return "/a/sms"
            },
            //语音验证接口
            getCall_url:function () {
                return "/a/voice"
            },
            //找回密码
            getForget_url:function () {
                return "/a/forget"
            },
            //填写个人资料
            getDetail_url:function () {
                return "/a/u/user/info"
            },
            //手机号是否注册接口
            getStatus_url:function () {
                return "/a/phone/status"
            },
            //首页学习星 和击败用户
            getStudyInformation_rel:function () {
                return "playlearn/GET/a/u/user/data"
            },
            //首页热门推荐（8个）
            getRecommend_rel:function () {
                return "playlearn/GET/a/course/recommend/list"
            },



















            //萌萌哒
            //前台资讯接口
            // getPhone_url:function () {
            //     return "/playlearn/GET/a/information/all"
            // },
























































































































































































            //姚磊
            //获取科目接口,接口list1为list
            getSubject_url:function () {
                return "/playlearn/get/a/u/subject/list1"
            },
            //获取课程列表接口,这个接口目前参数存疑，而且接口list1为list
            getCourse_url:function () {
                return "/playlearn/get//a/course/front/list1"
            },
            //获取单个课程详情接口
            getCourseDetail_url:function (params) {
                return "/playlearn/get//a/u/user/course/"+ params
            },
            //获取课程详情的课时列表接口
            getPeriodList_url:function () {
                return "/playlearn/get//a/u/user/course/lessonPeriod1"
            },
            //获取任务详情接口
            getTaksList_url:function (params) {
                return "/a/u/task/" + params + "/step/list"
            }
        }
    })
