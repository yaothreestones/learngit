angular.module("app")
.factory("pathProject",function () {
    return {
        //获取课程列表接口
        getCourse_url:function () {
            return "/playlearn/get//a/course/front/list1"
        },
        //获取单个课程详情接口
        getCourseDetail_url:function (params) {
            return "/playlearn/get//a/u/user/course/"+params
        },
        //获取课时列表接口
        getPeriodList_url:function () {
            return '/playlearn/get//a/u/lessionPeriod/list'
        }
    }
})