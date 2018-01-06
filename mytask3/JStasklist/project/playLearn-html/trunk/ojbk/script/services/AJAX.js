angular.module("app")
.factory("pathProject",function () {
    return {


        //贝贝
        //前台手机登录接口
        getPhone_url:function () {
            return"/playlearn/GET/a/login"
        },




        //萌萌哒





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