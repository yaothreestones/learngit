angular.module("app")
    .factory('Course_service', function ($http, pathProject) {
        return {
            //上传图片
            get_ImgUp: function (params) {
                return $http.post(pathProject.getImgUp_url(), params)
            },
            //贝贝
            //前台手机登录接口
            get_phone: function (data) {
                return $http({
                    method: 'post',
                    url: pathProject.getPhone_url(),
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded'
                    },
                    transformRequest: function (data) {
                        return $.param(data);
                    },
                    data: data
                })

            },
            //第三方登录
            get_Open: function (params) {
                return $http.get(pathProject.getOpen_url(), params)
            },
            //注册接口
            get_Enroll: function (data) {
                return $http({
                    method: 'post',
                    url: pathProject.getEnroll_url(),
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded'
                    },
                    transformRequest: function (data) {
                        return $.param(data);
                    },
                    data: data
                })
            },
            //短信验证
            get_Send: function (params) {
                return $http({
                    method: 'post',
                    url: pathProject.getSend_url(),
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded'
                    },
                    transformRequest: function (data) {
                        return $.param(data);
                    },
                    data: params
                })
            },
            //语音验证
            get_Call: function (params) {
                return $http({
                    method: 'post',
                    url: pathProject.getCall_url(),
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded'
                    },
                    transformRequest: function (data) {
                        return $.param(data);
                    },
                    data: params
                })
            },
            //找回密码
            get_Forget: function (data) {
                return $http({
                    method: 'post',
                    url: pathProject.getForget_url(),
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded'
                    },
                    transformRequest: function (data) {
                        return $.param(data);
                    },
                    data: data
                })
            },
            //填写个人资料
            get_Detail: function (data) {
                return $http({
                    method: 'post',
                    url: pathProject.getDetail_url(),
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded'
                    },
                    transformRequest: function (data) {
                        return $.param(data);
                    },
                    data: data
                })
            },
            //是否注册验证
            get_Status: function (phones) {
                return $http({
                    method: 'post',
                    url: pathProject.getStatus_url(),
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded'
                    },
                    transformRequest: function (data) {
                        return $.param(data);
                    },
                    data: phones
                })
            },
            //搜索 课程
            get_Course: function (params) {
                return $http.get(pathProject.getCourse_rel(), params)
            },
            //搜索 课时
            get_lessonPeriod: function (params) {
                return $http.get(pathProject.getlessonPeriod_rel(), params)
            },
            //首页 学习星  用户击败
            get_StudyInformation: function (params) {
                return $http.get(pathProject.getStudyInformation_rel(), params)
            },
            //首页热门推荐（8个展示）
            get_Recommend: function (params) {
                return $http.get(pathProject.getRecommend_rel(), params)
            },
            //首页 我的课程
            get_RecordList: function (params) {
                return $http.get(pathProject.getRecordList_rel(), params)
            },
            //科目list
            get_SubjectList:function (params) {
                return $http.get(pathProject.getSubjectList_rel(),params)
            },
            //同步预习接口
            //查看用户绑定教材详情
            get_BookLink:function (params) {
                return $http.get(pathProject.getBookLink_url(),params)
            },
            //获取教材列表
            get_BookList:function (params) {
                return $http.get(pathProject.getBookList_url(),params)
            },
            // 查看教材详情

            get_Books:function (id) {
                return  $http.get(pathProject.getBook_url(id))
            },
            //-同步预习-教材-课时列表接口
            get_BookLessonPeriod:function (params) {
                return $http({
                    method:"GET",
                    url:pathProject.getBookLessonPeriod_url(),
                    headers:{'Content-Type': 'application/json'},
                    params:params
                })

            },
            //同步预习-换帮教材接口put    //同步预习-添加用户绑定教材接口post        一个接口 方法不同
            get_BookBindPut :function () {
                return $http.put(pathProject.getBookBind_url(),params)
            },
            get_BookBindPost :function () {
                return $http.post(pathProject.getBookBind_url(),params)
            },


























            //萌萌哒
            //我的/修改密码
            get_ChangePwd: function (data) {
                return $http({
                    method: 'post',
                    url: pathProject.getChangePwd_url(),
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded'
                    },
                    transformRequest: function (data) {
                        return $.param(data);
                    },
                    data: data
                });
            },
            //我的/课程记录列表
            get_Record: function (params) {
                return $http.get(pathProject.getRecord_url(), params)
            },
            //我的/课程记录/删除多个
            get_DeleteAll: function (params) {
                return $http({
                    method: 'delete',
                    url: pathProject.getDeleteAll_url(),
                    headers: {
                        'content-type': 'application/json'
                    },
                    data: params
                });
            },
            // //我的/消息
            // get_DeleteAll: function (params) {
            //     return $http({
            //         method: 'delete',
            //         url: pathProject.getDeleteAll_url(),
            //         headers: {
            //             'content-type': 'application/json'
            //         },
            //         data: params
            //     });
            // },
            getUserFavLessonList: function () {
                return $http.get(pathProject.getUserFavLessonList());
            },
            getUserFavPeriodList: function () {
                return $http.get(pathProject.getUserFavPeriodList());
            },
            putSuggetByUser: function (params) {
                return $http({
                    method: 'post',
                    url: pathProject.putSuggetByUser(),
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded'
                    },
                    params: params
                });
            },
            resetUserDetail: function (data) {
                return $http({
                    method: 'post',
                    url: pathProject.resetUserDetail(),
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded'
                    },
                    transformRequest: function (data) {
                        return $.param(data);
                    },
                    data: data
                });
            },
            //我的 签到
            getSign:function (data) {
                console.log(pathProject.getSign(data.userId));
                return $http({
                    method: 'post',
                    url: pathProject.getSign(),
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded'
                    },
                    transformRequest:function (data) {
                        return $.param(data)
                    },
                    data: data
                });
            },
            //我的  用户信息
            userinfo:function (params) {
                return $http.get(pathProject.userinfo(), params);
            },


            //姚磊
            //获取科目接口
            get_subject: function (params) {
                return $http.get(pathProject.getSubject_url(), params)
            },
            //获取课程列表接口
            get_course_list: function (params) {
                return $http.get(pathProject.getCourse_url(), params)
            },
            //获取单个课程详情接口
            get_course_detail: function (id) {
                return $http.get(pathProject.getCourseDetail_url(id))
            },
            //获取课时列表接口
            get_period_list: function (data) {
                return $http({
                    method: 'post',
                    url: pathProject.getPeriodList_url(),
                    headers: {'content-type': 'application/x-www-form-urlencoded'},
                    transformRequest: function (data) {return $.param(data);},
                    data: data
                });
            },
            //获取任务详情接口
            get_task_list: function (params) {
                return $http.get(pathProject.getTaskList_url(params))
            }
        }
    })