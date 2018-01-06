angular.module("app")
    .factory('Course_service',function ($http,pathProject) {
        return {
            //获取课程列表接口
            get_course_list:function (params) {
                return $http.get(pathProject.getCourse_url(),params)
            },
            //获取单个课程详情接口
            get_course_detail:function (params) {
                return $http.get(pathProject.getCourseDetail_url(params))
            },
            //获取课时列表接口
            get_period_list:function (params) {
                return $http.get(pathProject.getPeriodList_url(),params)
            }
        }
})