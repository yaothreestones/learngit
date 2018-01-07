angular.module("app")
    .factory('Course_service',function ($http,pathProject) {
        return {
            //贝贝
            //前台手机登录接口
            get_phone:function (params) {
                return $http.get(pathProject.getPhone_url(),params)
            },
            //注册
            get_Enroll:function (params) {
                return $http.get(pathProject.getEnroll_url(),params)
            },
            //短信验证
            get_Send:function (params) {
                return $http.get(pathProject.getSend_url(),params)
            },

            //萌萌哒



            //姚磊
            //获取科目接口
            get_subject:function(params){
                return $http.get(pathProject.getSubject_url(),params)
            },
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
            },
            //获取任务详情接口
            get_task_list:function (params) {
                return $http.get(pathProject.getTaksList_url(params))
            }
        }
    })