angular.module("app")
    .factory('Course_service',function ($http,pathProject) {
        return {
            //上传图片
            get_ImgUp:function (params) {
                return $http.post(pathProject.getImgUp_url(),params)
            },
            //贝贝
            //前台手机登录接口
            get_phone:function (data) {
                return $http({
                    method: 'post',
                    url: pathProject.getPhone_url(),
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded'
                    },
                    transformRequest: function(data) {
                        return $.param(data);
                    },
                    data:data
                })

            },
            //第三方登录
            get_Open:function (params) {
                return $http.get(pathProject.getOpen_url(),params)
            },
            //注册接口
            get_Enroll:function (data) {
                return  $http({
                    method: 'post',
                    url: pathProject.getEnroll_url(),
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded'
                    },
                    transformRequest: function(data) {
                        return $.param(data);
                    },
                    data:data
                })
            },
            //短信验证
            get_Send:function (params) {
                return $http({
                    method: 'post',
                    url: pathProject.getSend_url(),
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded'
                    },
                    transformRequest: function(data) {
                        return $.param(data);
                    },
                    data:params
                })
            },
            //语音验证
            get_Call:function (params) {
                return $http({
                    method: 'post',
                    url: pathProject.getCall_url(),
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded'
                    },
                    transformRequest: function(data) {
                        return $.param(data);
                    },
                    data:params
                })
            },
            //找回密码
            get_Forget:function (data) {
                return $http({
                    method: 'post',
                    url: pathProject.getForget_url(),
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded'
                    },
                    transformRequest: function(data) {
                        return $.param(data);
                    },
                    data:data
                })
            },
            //填写个人资料
            get_Detail:function (data) {
                return $http({
                    method: 'post',
                    url: pathProject.getDetail_url(),
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded'
                    },
                    transformRequest: function(data) {
                        return $.param(data);
                    },
                    data:data
                })
            },
            //是否注册验证
            get_Status:function (phones) {
                return $http({
                    method: 'post',
                    url: pathProject.getStatus_url(),
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded'
                    },
                    transformRequest: function(data) {
                        return $.param(data);
                    },
                    data:phones
                })
            },
            //首页 学习星  用户击败
            get_StudyInformation:function (params) {
                return $http.get(pathProject.getStudyInformation_rel(),params)
            },
            //首页热门推荐（8个展示）
            get_Recommend:function (params) {
                return $http.get(pathProject.getRecommend_rel(),params)
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